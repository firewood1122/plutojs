const fs = require("fs");
const path = require("path");
const ora = require("ora");
const downloadGitRepo = require("download-git-repo");
const inquirer = require("inquirer");
const { tmpdir } = require("os");

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
  fs.rmdirSync(dir); // 删除空文件夹
};

/**
 * 按模板输出代码
 */
const genCode = (tempDir, answers) => {
  // 复制component
  console.log(tempDir, answers);
};

/**
 * 获取组件信息
 */
const question = (tempDir) => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "type",
        message: "请选择模板类型",
        choices: ["component", "story"],
      },
      {
        type: "input",
        name: "name",
        message: "请输入组件名称（示例：button）",
        when: function (answers) {
          return answers.type === "component";
        },
      },
      {
        type: "input",
        name: "description",
        message: "请输入组件描述",
        when: function (answers) {
          return answers.type === "component";
        },
      },
      {
        type: "input",
        name: "keywords",
        message: "请输入组件关键词，以英文逗号为分割",
        when: function (answers) {
          return answers.type === "component";
        },
      },
    ])
    .then((answers) => {
      genCode(tmpdir, answers);
    })
    .catch((err) => {
      console.error(err);
    });
};

/**
 * 下载模板项目
 */
const download = (tempDir) => {
  // 清空缓存区
  removeDir(tempDir);

  // 下载模板
  const spinner = ora("下载模板中...").start();
  downloadGitRepo(
    "github:firewood1122/plutojs-template",
    tempDir,
    function (err) {
      spinner.stop();
      console.log(err ? `下载模板失败${err}` : "下载模板成功");
      question();
    }
  );
};

/**
 * 从模板创建
 */
const create = () => {
  const tempDir = path.join(__dirname, "../.temp");
  download(tempDir);
};
create();
