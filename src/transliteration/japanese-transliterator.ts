import KuroshiroImport from 'kuroshiro';
import KuromojiAnalyzerImport from 'kuroshiro-analyzer-kuromoji';

// CJS/ESM interop: these packages export the class as `.default` when loaded via `import`.
const Kuroshiro = ((KuroshiroImport as unknown as { default?: typeof KuroshiroImport }).default ?? KuroshiroImport);
const KuromojiAnalyzer = ((KuromojiAnalyzerImport as unknown as { default?: typeof KuromojiAnalyzerImport }).default ?? KuromojiAnalyzerImport);

let kuroshiroInstance: KuroshiroImport | undefined;
let initPromise: Promise<KuroshiroImport> | undefined;

// Kuroshiro's kuromoji analyzer does morphological analysis, so it resolves
// kanji/hiragana/katakana readings based on surrounding context (e.g. 今日 -> kyou vs kon'nichi).
function getKuroshiro(): Promise<KuroshiroImport> {
    if (!initPromise) {
        kuroshiroInstance = new Kuroshiro();
        initPromise = kuroshiroInstance.init(new KuromojiAnalyzer()).then(() => kuroshiroInstance!);
    }
    return initPromise;
}

export async function transliterateJapanese(japaneseText: string): Promise<string> {
    const kuroshiro = await getKuroshiro();
    return kuroshiro.convert(japaneseText, { to: 'romaji', mode: 'spaced', romajiSystem: 'hepburn' });
}
