import glob from 'glob';
import path from 'path';
import fs from 'fs-extra';

glob('./**/*.less', { cwd: path.resolve(__dirname, './src') }, (err, files) => {
  if (err) return console.error(err);
  files.forEach((filePath) => {
    fs.copy(path.resolve(__dirname, 'src', filePath), path.resolve(__dirname, 'esm', filePath));
  });
});
