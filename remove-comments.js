const fs = require('fs');
const path = require('path');

const componentsDir = path.join(process.cwd(), 'registry/new-york/animations');

function removeComments(content) {
    // Remove JSDoc comments (/** ... */)
    content = content.replace(/\/\*\*[\s\S]*?\*\//g, '');

    // Remove multi-line comments (/* ... */)
    content = content.replace(/\/\*[\s\S]*?\*\//g, '');

    // Remove single-line comments (// ...)
    content = content.replace(/\/\/.*$/gm, '');

    // Remove empty lines that were left after comment removal
    content = content.replace(/^\s*[\r\n]/gm, '');

    // Clean up multiple consecutive empty lines
    content = content.replace(/\n\n\n+/g, '\n\n');

    return content;
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalLength = content.length;

    content = removeComments(content);

    if (content.length !== originalLength) {
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
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            if (processFile(filePath)) {
                updatedCount++;
                console.log(`Removed comments from: ${filePath}`);
            }
        }
    });

    return updatedCount;
}

const count = walkDir(componentsDir);
console.log(`\nSuccessfully removed comments from ${count} component files.`);
