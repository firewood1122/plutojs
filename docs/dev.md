## 组件开发指南

### 代码架构

```
- config            webpack构建配置
-- webpack.base.js  基础配置
-- webpack.dev.js   开发环境配置
-- webpack.prod.js  生产环境配置
- docs              文档目录
- packages          组件目录
- scripts           构建脚本
-- base.js          构建脚本通用方法
-- dev.js           开发环境构建脚本
-- build.js         生产环境构建脚本
- story             组件story目录
- .storybook        storybook配置目录
```

### 开发流程

- 安装项目依赖

  > yarn

- 安装 packages 依赖

  > yarn run bootstrap

- 开发实时编译更新

  > yarn run dev
  > 选择某个 package 进行开发

- 生产构建

  > yarn run build
  > 选择 all 或某个 package 进行构建

- 发布 package

  > yarn run release

- 本地查看 story

  > yarn run story

- storybook 生产构建
  > yarn run build:story
