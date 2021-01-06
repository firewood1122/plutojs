#!/usr/bin/env node
const os = require('os');
const fs = require('fs');
const path = require('path');
const figlet = require('figlet');
const ora = require('ora');
const inquirer = require('inquirer');
const chalk = require('chalk');
const shell = require('shelljs');
const download = require('download-git-repo');

/**
 * 下载模板代码
 */
const downloadTemplate = (downloadDir) => {
  return new Promise((resolve, reject) => {
    download('firewood1122/plutojs-template', downloadDir, {}, (err) => {
      if (err) {
        console.error(err);
        reject();
      }
      resolve();
    });
  });
};

/**
 * 收集项目信息
 */
const askQuestions = (data) => {
  const questions = [
    {
      type: 'input',
      name: 'PROJECT_NAME',
      message: chalk.green('请输入项目名称'),
      validate: (val) => {
        return val.trim() !== '';
      }
    },
    {
      type: 'list',
      name: 'NAME',
      message: chalk.green('请选择需要下载的模板：'),
      choices: Object.keys(data),
    }
  ];
  return inquirer.prompt(questions);
};

const init = async () => {
  // 显示标题
  console.log(
    chalk.green(
      figlet.textSync('plutojs', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default',
      })
    )
  );

  // 下载模板代码
  const spinner = ora('正在下载模板代码，请稍候').start();
  const downloadDir = fs.mkdtempSync(path.join(os.tmpdir(), 'plutojs-'));
  await downloadTemplate(downloadDir);
  spinner.stop();

  // 收集项目信息
  const dataFile = path.join(downloadDir, 'data.json');
  if (!fs.existsSync(dataFile)) {
    console.log(chalk.red('模板代码不存在，请重试'));
    return;
  }
  const data = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
  const { PROJECT_NAME, NAME } = await askQuestions(data);
  const info = data[NAME];

  // 创建项目目录
  const dir = path.resolve(process.cwd(), PROJECT_NAME);
  if (fs.existsSync(dir)) {
    console.log(chalk.red(`已存在该项目目录：${dir}`));
    return;
  }
  shell.mkdir(dir);

  // 复制模板代码
  shell.cp('-r', `${downloadDir}/${info.dir}/*`, dir);

  // 删除下载目录
  shell.rm('-rf', downloadDir);
  console.log(chalk.green('创建项目已完成'));
};

const run = () => {
  init();
};
run();