import { pipeline } from "@huggingface/transformers";

const translator = await pipeline(
  "translation",
  "Xenova/opus-mt-zh-en"
);

export async function translateMandarinToEnglish(mandarin: string): Promise<string> {
    let results = await translator(mandarin);
    if (!results || results.length === 0) {
        return "-";
    }
    return results.map(result => JSON.stringify(result)).join("<br>\n");
}

const inputs = [
    "这个",
    "是",
    "肠粉",
    "烧卖",
    "虾饺",
    "什么",
    "喝",
    "铁观音",
    "什么",
    "谢谢"
];

for (const input of inputs) {
    const translation = await translateMandarinToEnglish(input);
    console.log(`${input} -> ${translation}`);
}
