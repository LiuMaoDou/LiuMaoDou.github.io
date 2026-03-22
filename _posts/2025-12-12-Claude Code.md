---
title: "Claude Code"
date: 2025-12-12
categories: AI
math: true
---



## 20260322

cc的hook提示 --> [链接](https://code.claude.com/docs/en/hooks-guide#macos)



Claude Code 是终端界面，用标准终端快捷键：

**光标移动**

| 快捷键             | 效果           |
| ------------------ | -------------- |
| `Ctrl+A`           | 跳到行首       |
| `Ctrl+E`           | 跳到行尾       |
| `Ctrl+←` / `Alt+B` | 向左跳一个单词 |
| `Ctrl+→` / `Alt+F` | 向右跳一个单词 |

**删除**

| 快捷键   | 效果                 |
| -------- | -------------------- |
| `Ctrl+U` | 删除光标前所有内容   |
| `Ctrl+K` | 删除光标后所有内容   |
| `Ctrl+W` | 删除前一个单词       |
| `Ctrl+H` | 退格（同 Backspace） |

**其他**

| 快捷键    | 效果         |
| --------- | ------------ |
| `Ctrl+C`  | 取消当前输入 |
| `↑` / `↓` | 翻历史记录   |

> Claude Code 没有传统意义上的"全选"，因为是命令行输入框。如果要编辑较长内容，建议用 `Ctrl+U` 清空重新输入，或者直接在编辑器里写好再粘贴进去。

---

官网，[Claude](https://platform.claude.com/docs/zh-CN/home)，[Codex](https://developers.openai.com/codex)

## 安装

```bash
# 安装Node.js
访问Node.js官方网站：https://nodejs.org/

# 验证安装
node --version
npm --version

# 安装Claude Code/codex
npm install -g @anthropic-ai/claude-code
npm i -g @openai/codex

# 检查Claude Code版本
claude --version

# 使用npm更新
claude install
npm i -g @openai/codex@latest
```



模型切换，软件推荐，[cc-switch](https://github.com/farion1231/cc-switch)



## 关键能力

### 初始化

`/init` 命令是 Claude Code 的核心命令，用于初始化项目知识图谱。它会扫描当前文件夹下的所有文件，将解析结果保存到 `CLAUDE.md` 文件中，为后续对话提供完整的项目上下文

- 当你首次在项目中使用 Claude Code 时，建议先运行 `/init` 命令，让 AI 全面了解项目结构和代码。
- 当项目文件结构或关键代码发生较大变化时，可以再次运行 `/init` 命令，更新 `CLAUDE.md` 文件，确保 AI 拥有最新的项目上下文。

```bash
# 初始化项目知识，然后开始新的对话
/init
/clear — 硬重置
/context — 上下文窗口用量
/memory — 编辑 CLAUDE.md
/resume — 继续过去的会话
/btw — 不打断上下文的提问
/simplify - 执行代码审查

# 执行流程：
# 1. 生成 CLAUDE.md 文件，包含完整项目上下文
# 2. 清空历史对话，开始全新的对话
# 3. 新对话会自动使用 CLAUDE.md 作为上下文
```

可以在对话中，输入#来向CLAUDE.md中动态添加内容

![img](https://raw.githubusercontent.com/LiuMaoDou/Files/main/Pics/v2-661d4a0a310e216323d76b4288b6c3ef_1440w.jpg)



### 图片

可以直接上传图片

![img](https://raw.githubusercontent.com/LiuMaoDou/Files/main/Pics/v2-90a582d7a9e9b608a3e269135c59927d_1440w.jpg)

> 注意，上传的时候要等一会才能看到

**On macOS**: Make sure you're using `Ctrl + V`, not `Cmd + V`

**On Windows**:

- Update to Claude Code version 1.0.93 or later
- Try `Alt + V` instead of `Ctrl + V`



### Skills

官网，[链接](https://code.claude.com/docs/zh-CN/skills)
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
