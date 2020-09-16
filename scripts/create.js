const fs = require('fs');
const path = require('path');
const ora = require('ora');
const downloadGitRepo = require('download-git-repo');

/**
 * 删除文件夹
 * 
 * @param {string} dir 
 */
const removeDir = (dir) => {
  if (!fs.existsSync(dir)) return;

  let files = fs.readdirSync(dir);
  for (let i = 0; i < files.length; i++) {
    let newPath = path.join(dir, files[i]);
    let stat = fs.statSync(newPath);
    if (stat.isDirectory()) {
      removeDir(newPath);
    } else {
      fs.unlinkSync(newPath); // 删除文件
    }
  }
  fs.rmdirSync(dir) // 删除空文件夹
};

/**
 * 下载模板项目
 */
const download = (tempDir) => {
  // 清空缓存区
  removeDir(tempDir);

  // 下载模板
  const spinner = ora('下载模板中...').start();
  downloadGitRepo('github:firewood1122/plutojs-template', tempDir, function (err) {
    spinner.stop();
    console.log(err ? `下载模板失败${err}` : '下载模板成功');
  });
};

const create = () => {
  const tempDir = path.join(__dirname, '../.temp');
  download(tempDir);
};
create();
