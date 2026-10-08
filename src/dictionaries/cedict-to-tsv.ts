import * as fs from 'fs';
import * as path from 'path';

const inputFilename = path.resolve('src/dictionaries/cedict_ts.u8');
const outputFilename = path.resolve('src/dictionaries/cedict.tsv');

const source = fs.readFileSync(inputFilename, 'utf-8');
const outputRows = ['traditional\tsimplified\tpinyin\tenglish'];
let entryCount = 0;

for (const [index, line] of source.split(/\r?\n/).entries()) {
    const lineNumber = index + 1;
    const trimmedLine = line.trim();

    if (trimmedLine === '' || trimmedLine.startsWith('#')) {
        continue;
    }

    const match = trimmedLine.match(/^(\S+)\s+(\S+)\s+\[([^\]]*)\]\s+\/(.*)\/$/);
    if (!match) {
        throw new Error(`Could not parse CC-CEDICT entry on line ${lineNumber}: ${line}`);
    }

    const [, traditional, simplified, pinyin, english] = match;
    if (traditional === undefined || simplified === undefined || pinyin === undefined || english === undefined) {
        throw new Error(`CC-CEDICT entry has missing fields on line ${lineNumber}: ${line}`);
    }

    outputRows.push([traditional, simplified, pinyin, english]
        .map(value => value.replace(/\t/g, ' '))
        .join('\t'));
    entryCount++;
}

fs.writeFileSync(outputFilename, `${outputRows.join('\n')}\n`, 'utf-8');
console.log(`Wrote ${entryCount} entries to ${outputFilename}`);