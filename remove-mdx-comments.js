const fs = require('fs');
const path = require('path');

const docsDirs = [
    path.join(process.cwd(), 'content/docs/animations'),
    path.join(process.cwd(), 'content/docs/hooks'),
    path.join(process.cwd(), 'content/docs/transitions')
];

function removeCommentsFromCodeBlock(codeBlock) {
    // Remove JSDoc comments (/** ... */)
    codeBlock = codeBlock.replace(/\/\*\*[\s\S]*?\*\//g, '');

    // Remove multi-line comments (/* ... */)
    codeBlock = codeBlock.replace(/\/\*[\s\S]*?\*\//g, '');

    // Remove single-line comments (// ...)
    codeBlock = codeBlock.replace(/\/\/.*$/gm, '');

    // Remove empty lines that were left after comment removal
    codeBlock = codeBlock.replace(/^\s*[\r\n]/gm, '');

    // Clean up multiple consecutive empty lines
    codeBlock = codeBlock.replace(/\n\n\n+/g, '\n\n');

    return codeBlock;
}

function processMdxFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Match code blocks with tsx or ts language
    const codeBlockRegex = /```(?:tsx|ts)(?:\s+title="[^"]*")?\s*\n([\s\S]*?)```/g;

    content = content.replace(codeBlockRegex, (match, code) => {
        const cleanedCode = removeCommentsFromCodeBlock(code);
        return match.replace(code, cleanedCode);
    });

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        return true;
    }
    return false;
}

function walkDir(dir) {
    let updatedCount = 0;
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            updatedCount += walkDir(filePath);
        } else if (file.endsWith('.mdx')) {
            if (processMdxFile(filePath)) {
                updatedCount++;
                console.log(`Removed comments from: ${filePath}`);
            }
        }
    });

    return updatedCount;
}

let totalCount = 0;
docsDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
        console.log(`\nProcessing ${dir}...`);
        totalCount += walkDir(dir);
    }
});
console.log(`\nSuccessfully removed comments from ${totalCount} MDX files total.`);
