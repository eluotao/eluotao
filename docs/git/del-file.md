---
title: git 删除远程已经推送过的文件或者文件夹
date: 2020-08-23 16:35:58
sidebar: 'auto'
categories:
 - 后端
tags:
 - git
publish: true
---

### 1、删除远程仓库的文件，保留本地。
```shell script
git rm -r --cached /path/to/filename  # 删除文件filename

git commit -m  "delete files"  # commit

git push
```

### 2、删除远程仓库的文件，同时删除本地文件。
```shell script
git rm /path/to/filename

git commit -m "delete "

git push
```