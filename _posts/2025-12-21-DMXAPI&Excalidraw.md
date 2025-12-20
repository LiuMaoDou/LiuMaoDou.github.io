---
title: "DMXAPI&Excalidraw"
date: 2025-12-21
categories: AI
math: true
---



[Excalidraw](https://excalidraw.com/)，是一款开源的虚拟白板工具，以其独特的手绘草图风格为核心特色，支持多人实时协作与端到端加密。

![github_product_showcase](https://raw.githubusercontent.com/LiuMaoDou/Files/main/Pics/github_product_showcase.png)



接下来介绍如何通过自然语言生成Excalidraw图片



## 获取DMXAPI

其次，注册DMXAPI并且获取混元翻译大模型（这个模型翻译能力非常强并且免费）

- 注册DMXAPI，[链接](https://www.dmxapi.cn/register?aff=7DJ6)
- 获取API，点击“个人设置”，点击“API令牌”，生成API

![image-20251208231251415](https://raw.githubusercontent.com/LiuMaoDou/Files/main/Pics/image-20251208231251415.png)



## smart-draw安装

- 项目地址，[链接](https://github.com/liujuntao123/smart-draw)
- 选择自己的文件夹，然后输入下面命令：

```bash
# 克隆项目
git clone https://github.com/liujuntao123/smart-excalidraw-next.git
cd smart-excalidraw-next

# 安装依赖（本项目使用 pnpm）
npm install -g pnpm
pnpm install

# 启动开发服务器
pnpm dev
```



服务开始运行后，在浏览器输入：http://localhost:3000

- 进入后，点击`管理配置`
- 然后点击`新建配置`
- 然后参考下面设置，模型选择自己喜欢的

![image-20251221014307538](https://raw.githubusercontent.com/LiuMaoDou/Files/main/Pics/image-20251221014307538.png)

- 完成设置后，看到如下图的结果

![image-20251221014354099](https://raw.githubusercontent.com/LiuMaoDou/Files/main/Pics/image-20251221014354099.png)

- 接下来就可以用文字来画图了，完成后即可保存



第一版用DeepSeek V3.2生成的，效果很差

![image-20251221014649941](https://raw.githubusercontent.com/LiuMaoDou/Files/main/Pics/image-20251221014649941.png)



修改Claude-Sonet-4.5模型后，一次成功，果然Claude是神级存在

![image-20251221014918787](https://raw.githubusercontent.com/LiuMaoDou/Files/main/Pics/image-20251221014918787.png)
