---
title: git 简易的命令行入门教程
date: 2020-08-23 16:35:58
sidebar: 'auto'
categories:
 - 后端
tags:
 - git
publish: true
---

## 简易的命令行入门教程

**Git 全局设置**:
```shell script
git config --global user.name "用户名"
git config --global user.email "邮箱"
```

**创建 git 仓库**
```shell script
mkdir vuepress # 文件夹
cd vuepress # 进入文件夹
git init # 初始化
touch README.md # 创建README.md文件
git add README.md
git commit -m "first commit"
git remote add origin https://仓库地址.git
git push -u origin master
```

**已有仓库?**
```shell script
cd existing_git_repo
git remote add origin https://仓库地址.git
git push -u origin master
```