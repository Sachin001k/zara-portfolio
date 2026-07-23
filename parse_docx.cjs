const fs = require('fs');
const { execSync } = require('child_process');

execSync('unzip -o "Zara\'s website.docx" -d temp_docx');

const docXml = fs.readFileSync('temp_docx/word/document.xml', 'utf-8');
const relsXml = fs.readFileSync('temp_docx/word/_rels/document.xml.rels', 'utf-8');

const rels = {};
const relRegex = /Id="([^"]+)"[^>]+Target="([^"]+)"/g;
let match;
while ((match = relRegex.exec(relsXml)) !== null) {
  rels[match[1]] = match[2]; // e.g., rId5 -> media/image1.jpg
}

const paragraphs = docXml.split('<w:p ');
let currentText = "";
const mapping = [];

for (const p of paragraphs) {
  const textMatches = p.match(/<w:t[^>]*>(.*?)<\/w:t>/g);
  if (textMatches) {
    const text = textMatches.map(t => t.replace(/<[^>]+>/g, '')).join('');
    currentText += text + " ";
  }
  
  const imgMatches = p.match(/<a:blip[^>]+r:embed="([^"]+)"/g);
  if (imgMatches) {
    for (const m of imgMatches) {
      const rId = m.match(/r:embed="([^"]+)"/)[1];
      const target = rels[rId];
      if (target) {
        mapping.push({ image: target, textContext: currentText.trim().substring(Math.max(0, currentText.trim().length - 150)) });
      }
    }
    currentText = ""; // reset context after image
  }
}

console.log(JSON.stringify(mapping, null, 2));

execSync('rm -rf temp_docx');
