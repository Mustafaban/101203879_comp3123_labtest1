
const fs = require('fs');
const path = require('path');

function removeLogFiles(log_dir) {
  if (fs.existsSync(log_dir)) {
    fs.readdir(log_dir, (err, files) => {
      if (err) throw err;

      files.forEach((file) => {
        const file_path = path.join(log_dir, file);
        fs.unlink(file_path, (err) => {
          if (err) throw err;
          console.log('Removed file:', file_path);
        });
      });

      fs.rmdir(log_dir, (err) => {
        if (err) throw err;
        console.log('Removed directory:', log_dir);
      });
    });
  } else {
    console.log('Logs directory does not exist.');
  }
}



function createLogFiles(log_dir) {
  if (!fs.existsSync(log_dir)) {
    fs.mkdirSync(log_dir);
  }

  process.chdir(log_dir);

  for (let i = 1; i <= 10; i++) {
    const file_name = `log${i}.txt`;
    fs.writeFileSync(file_name, `This is log file ${i}`);
    console.log('Created file:', file_name);
  }
}

const log_dir = path.join(__dirname, 'Logs');

removeLogFiles(log_dir);
//createLogFiles(log_dir);