# BiliDynamicPic

## 简介

结合iOS的“快捷指令”，一键从哔哩哔哩客户端下载动态中的图片

[AirCode 仓库地址](https://aircode.cool/1gp5wkg6we)

## 使用教程

#### 1. 部署云函数

(1) 一键复制代码

[![Deploy with AirCode](https://vercel.com/button)](https://aircode.io/dashboard?share_shareId=1gp5wkg6we&share_name=BiliDynamicPic&share_runtime=node/v16)

(2) 填写应用名称

在弹出的对话框中，使用默认应用名称或输入新的应用名称，并点击「Create」完成创建。

应用创建成功后会进入 /dashboard 页面。

(3) 部署 AirCode 应用

点击页面最上方的「Deploy」按钮，在弹出对话框中点击「Deploy」，开始部署。

部署成功后，在左侧文件列表中选中「getBiliDynamicPicUrl.js」，可以看到中间编辑器部分，文件名下方有一个 URL，点击复制这个 URL。

#### 2. 添加 iPhone 快捷指令

(1) 在 iPhone 的浏览器中，打开以下链接。 

https://www.icloud.com/shortcuts/96f8af345de446b6b0c9865d56d8fad9


(2) 在打开的页面中点击「获取捷径」按钮，然后在弹出的窗口中点击「添加快捷指令」。

(3) 点击刚刚添加成功的快捷指令右上角的三个点，打开快捷指令的编辑页面。将上面获取到的 AirCode 云函数的 URL 填入「文本」区域，点击右上角「完成」。

> 注意：云函数 URL 是类似 `https://xxx.hk.aircode.run/getBiliDynamicPicUrl` 这样的格式。

#### 3. 使用

在哔哩哔哩客户端，点击动态详情，右上角的三个点分享页面，第一排图标选择最右边的更多，在弹窗内选择「一键保存B站动态图片」即可。

![](https://s2.loli.net/2023/05/18/IEhjvJrC2e1iM5F.jpg)

## 声明:

- 本仓库发布的`bili_dynamic_pic_download`项目中涉及的任何脚本，仅用于测试和学习研究，禁止用于商业用途
- `nfe-w` 对任何脚本问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害
- 以任何方式查看此项目的人或直接或间接使用`bili_dynamic_pic_download`项目的任何脚本的使用者都应仔细阅读此声明
- `bili_dynamic_pic_download` 保留随时更改或补充此免责声明的权利。一旦使用并复制了任何相关脚本或`bili_dynamic_pic_download`项目，则视为已接受此免责声明
- 本项目遵循`MIT LICENSE`协议，如果本声明与`MIT LICENSE`协议有冲突之处，以本声明为准