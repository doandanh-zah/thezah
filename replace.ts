import * as fs from 'fs';
import * as path from 'path';

function traverse(dir: string, callback: (filePath: string) => void) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      traverse(fullPath, callback);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      callback(fullPath);
    }
  }
}

traverse('src', (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  content = content.replace(/solana-green/g, 'accent');
  content = content.replace(/solana-purple/g, 'accent');
  content = content.replace(/text-gradient-solana/g, 'text-gradient-accent');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', filePath);
  }
});
