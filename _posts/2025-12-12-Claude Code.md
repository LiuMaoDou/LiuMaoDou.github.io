---
title: "Claude Code"
date: 2025-12-12
categories: AI
math: true
---



## 安装

```bash
# 安装Node.js
访问Node.js官方网站：https://nodejs.org/

# 验证安装
node --version
npm --version

# 安装Claude Code
npm install -g @anthropic-ai/claude-code

# 检查Claude Code版本
claude --version

# 设置临时环境变量，个人电脑
ANTHROPIC_BASE_URL="xx"
ANTHROPIC_AUTH_TOKEN="xx"

# 设置临时环境变量，Sealos：
export ANTHROPIC_BASE_URL=http://xx
export ANTHROPIC_AUTH_TOKEN=xx
export ANTHROPIC_MODEL=claude-sonnet-4-5
export ANTHROPIC_SMALL_FAST_MODEL=claude-sonnet-4-5

# 使用npm更新
npm update -g @anthropic-ai/claude-code
```



模型切换，软件推荐，[cc-switch](https://github.com/farion1231/cc-switch)

国内支持的大模型：GLM（GLM-4.6），通义千问 (Qwen3-Coder-Plus)，DeepSeek（V3），豆包 (Doubao)，Kimi



## 关键能力

### 初始化

`/init` 命令是 Claude Code 的核心命令，用于初始化项目知识图谱。它会扫描当前文件夹下的所有文件，将解析结果保存到 `CLAUDE.md` 文件中，为后续对话提供完整的项目上下文

- 当你首次在项目中使用 Claude Code 时，建议先运行 `/init` 命令，让 AI 全面了解项目结构和代码。
- 当项目文件结构或关键代码发生较大变化时，可以再次运行 `/init` 命令，更新 `CLAUDE.md` 文件，确保 AI 拥有最新的项目上下文。

```bash
# 初始化项目知识，然后开始新的对话
/init
/clear

# 执行流程：
# 1. 生成 CLAUDE.md 文件，包含完整项目上下文
# 2. 清空历史对话，开始全新的对话
# 3. 新对话会自动使用 CLAUDE.md 作为上下文
```

可以在对话中，输入#来向CLAUDE.md中动态添加内容

![img](https://raw.githubusercontent.com/LiuMaoDou/Files/main/Pics/v2-661d4a0a310e216323d76b4288b6c3ef_1440w.jpg)



## 图片

可以直接上传图片

![img](https://raw.githubusercontent.com/LiuMaoDou/Files/main/Pics/v2-90a582d7a9e9b608a3e269135c59927d_1440w.jpg)



### Skill

1. 解决“外部世界隔离”问题（让 AI 长出“手”）
2. 解决“私有业务逻辑”问题（教 AI 懂“行话”）
3. 解决“上下文窗口限制”问题（按需获取信息）



## Plan模式

- 用来在编码开始之前，做整体的项目规划

```bash
# Enter Plan Mode
shift + tab + tab

# Ask for planning
"Let's plan specs V3 → V4. Instead of writing single HTML files, 
split into CSS, JS, HTML, and store these three files in unique directory"

# Review the plan, then exit Plan Mode and execute
shift + tab + tab  # Exit Plan Mode
# Begin implementation
```



## Safe YOLO 模式

在启动Claude的时候，执行下面的指令即可：

```
claude --dangerously-skip-permissions
```

执行这个之后，Claude 会**自动跳过所有权限确认**，不需要你手动点允许。这对于一些重复性任务十分方便。
