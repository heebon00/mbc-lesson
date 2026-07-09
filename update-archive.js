const fs = require('fs');
const path = require('path');

// 1. Extract June file list from 03/list.html to exclude them from the July list
const juneListPath = path.join(__dirname, '03', 'list.html');
let juneFileNames = new Set();

if (fs.existsSync(juneListPath)) {
  const juneContent = fs.readFileSync(juneListPath, 'utf8');
  const nameRegex = /name:\s*["']([^"']+)["']/g;
  let match;
  while ((match = nameRegex.exec(juneContent)) !== null) {
    juneFileNames.add(match[1]);
  }
}

// 2. Scan directories 03/ and 04/
const dir03 = path.join(__dirname, '03');
const dir04 = path.join(__dirname, '04');

const filesIn03 = fs.existsSync(dir03) 
  ? fs.readdirSync(dir03).filter(file => {
      const stat = fs.statSync(path.join(dir03, file));
      return stat.isFile() && file !== 'list.html' && file !== 'index.html';
    })
  : [];

const filesIn04 = fs.existsSync(dir04)
  ? fs.readdirSync(dir04).filter(file => {
      const stat = fs.statSync(path.join(dir04, file));
      return stat.isFile() && file !== 'list.html' && file !== 'index.html';
    })
  : [];

// 3. Construct July file list
const julyFiles = [];

// Files in 04 folder (relative path is just the filename)
filesIn04.forEach(name => {
  julyFiles.push({ name, path: name, folder: '04' });
});

// Files in 03 folder that are NOT in June list (relative path is ../03/filename)
filesIn03.forEach(name => {
  if (!juneFileNames.has(name)) {
    julyFiles.push({ name, path: `../03/${name}`, folder: '03' });
  }
});

// Natural sort by file name (so ex3-9.html comes before ex3-10.html)
julyFiles.sort((a, b) => {
  return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });
});

// 4. Update 04/list.html
const julyListPath = path.join(__dirname, '04', 'list.html');
if (fs.existsSync(julyListPath)) {
  let julyContent = fs.readFileSync(julyListPath, 'utf8');

  // Match the array declaration: const files = [ ... ];
  const filesRegex = /(const files\s*=\s*\[)([\s\S]*?)(\];)/;
  
  const formattedArrayContent = julyFiles.map(f => 
    `        { name: "${f.name}", path: "${f.path}", folder: "${f.folder}" }`
  ).join(',\n');

  julyContent = julyContent.replace(filesRegex, `$1\n${formattedArrayContent}\n      $3`);
  fs.writeFileSync(julyListPath, julyContent, 'utf8');
  console.log(`Updated 04/list.html with ${julyFiles.length} files.`);
} else {
  console.error(`Error: ${julyListPath} does not exist.`);
}

// 5. Update index.html
const indexPath = path.join(__dirname, 'index.html');
if (fs.existsSync(indexPath)) {
  let indexContent = fs.readFileSync(indexPath, 'utf8');

  // Replace July archive file count: <span class="month-number">07</span> ... <span class="file-count">파일 XX개</span>
  const countRegex = /(<span class="month-number">07<\/span>[\s\S]*?<span class="file-count">파일\s*)\d+(개<\/span>)/;
  
  if (countRegex.test(indexContent)) {
    indexContent = indexContent.replace(countRegex, `$1${julyFiles.length}$2`);
    fs.writeFileSync(indexPath, indexContent, 'utf8');
    console.log(`Updated index.html July file count to ${julyFiles.length}.`);
  } else {
    console.warn(`Warning: Could not find the file count element for July in index.html`);
  }
} else {
  console.error(`Error: ${indexPath} does not exist.`);
}
