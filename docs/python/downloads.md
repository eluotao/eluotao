---
title: Python 爬虫下载文件
date: 2020-08-27
sidebar: 'auto'
categories:
 - 后端
tags:
 - python
 - requests
 - file
publish: true
---

## Python 文件下载

::: tip
内容下载
:::

**`代码`**
```python
# coding: UTF-8
import requests
url="文件下载地址"
r=requests.get(url)
print "ok"
print len(r.content)
```

::: tip
保存文件
:::

**`代码`**
```python
# coding: UTF-8
import requests
url="文件下载地址"
path="文件名"
r=requests.get(url)
print "ok"
with open(path,"wb") as f:
    f.write(r.content)
f.close()
```