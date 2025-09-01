---
layout: section
class: text-sm
---

# 常用命令工具

提升命令行效率的必备工具

---
layout: two-cols
class: text-sm
---

# 包管理工具

## Homebrew vs Nix

<div class="space-y-4">

### Homebrew
- **特点**: macOS 最流行的包管理器
- **优势**: 简单易用，生态丰富
- **适用**: 日常软件安装

### Nix
- **特点**: 函数式包管理
- **优势**: 可重现的构建环境
- **适用**: 开发环境管理

</div>

::right::

```bash
# 安装 Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 基本使用
brew install git
brew install --cask visual-studio-code
brew update && brew upgrade

# 安装 Nix
sh <(curl -L https://nixos.org/nix/install)

# 基本使用
nix-env -iA nixpkgs.git
nix-shell -p git nodejs
```

<div class="mt-6 p-4 bg-blue-50 rounded-lg">
  <div class="text-sm font-semibold text-blue-800">推荐</div>
  <div class="text-sm text-blue-700">日常使用 Homebrew，开发环境用 Nix</div>
</div>

---
layout: two-cols
class: text-sm
---

# Git 增强工具

## 版本控制必备

<div class="space-y-4">

### Git 基础
- **安装**: `brew install git`
- **配置**: 用户信息和 SSH 密钥
- **别名**: 简化常用命令

### 增强功能
- **自动补全**: Git 命令补全
- **状态显示**: 分支和状态信息
- **快捷操作**: 常用操作简化

</div>

::right::

```bash
# Git 配置
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 生成 SSH 密钥
ssh-keygen -t ed25519 -C "your.email@example.com"

# 常用别名
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
```

<div class="mt-6 p-4 bg-green-50 rounded-lg">
  <div class="text-sm font-semibold text-green-800">Demo</div>
  <div class="text-sm text-green-700">配置完成后，git 命令会有自动补全和彩色输出</div>
</div>

---
layout: two-cols
class: text-sm
---

# 目录导航工具

## zoxide - 智能 cd

<div class="space-y-4">

### 功能特点
- **智能跳转**: 基于使用频率
- **模糊匹配**: 部分路径匹配
- **学习能力**: 记住常用目录
- **跨平台**: 支持多种 shell

### 使用场景
- 快速跳转到项目目录
- 在深层目录结构中导航
- 减少路径记忆负担

</div>

::right::

```bash
# 安装 zoxide
brew install zoxide

# 在 ~/.zshrc 中添加
eval "$(zoxide init zsh)"

# 基本使用
z project-name    # 跳转到包含 project-name 的目录
z -               # 返回上一个目录
zi                # 交互式选择目录
```

<div class="mt-6 p-4 bg-purple-50 rounded-lg">
  <div class="text-sm font-semibold text-purple-800">技巧</div>
  <div class="text-sm text-purple-700">使用几次后，zoxide 会学习你的使用习惯</div>
</div>

---
layout: two-cols
class: text-sm
---

# 文件搜索工具

## fzf - 模糊查找

<div class="space-y-4">

### 核心功能
- **模糊搜索**: 快速找到文件
- **实时预览**: 查看文件内容
- **多选操作**: 批量处理文件
- **集成性强**: 与各种工具集成

### 使用场景
- 快速打开文件
- 搜索命令历史
- 进程管理
- Git 操作增强

</div>

::right::

```bash
# 安装 fzf
brew install fzf

# 安装键绑定和自动补全
$(brew --prefix)/opt/fzf/install

# 基本使用
fzf                    # 搜索当前目录文件
Ctrl+T                 # 在当前命令中插入文件
Ctrl+R                 # 搜索命令历史
Alt+C                  # 快速 cd 到目录
```

<div class="mt-6 p-4 bg-orange-50 rounded-lg">
  <div class="text-sm font-semibold text-orange-800">Demo</div>
  <div class="text-sm text-orange-700">fzf 让文件搜索变得极其快速和直观</div>
</div>

---
layout: two-cols
class: text-sm
---

# 文件查看工具

## bat - 更好的 cat

<div class="space-y-4">

### 功能特点
- **语法高亮**: 支持多种语言
- **行号显示**: 可配置的行号
- **Git 集成**: 显示修改状态
- **分页支持**: 自动分页显示

### 使用场景
- 查看代码文件
- 查看日志文件
- 配置文件查看
- 文档阅读

</div>

::right::

```bash
# 安装 bat
brew install bat

# 基本使用
bat file.txt           # 查看文件
bat --style=numbers,changes file.txt  # 显示行号和 Git 状态
bat --theme=TwoDark file.txt          # 使用特定主题

# 创建别名
alias cat='bat --paging=never'
```

<div class="mt-6 p-4 bg-indigo-50 rounded-lg">
  <div class="text-sm font-semibold text-indigo-800">优势</div>
  <div class="text-sm text-indigo-700">bat 让文件查看更加美观和高效</div>
</div>

---
layout: two-cols
class: text-sm
---

# 目录列表工具

## eza - 现代化的 ls

<div class="space-y-4">

### 功能特点
- **彩色输出**: 丰富的颜色显示
- **图标支持**: 文件类型图标
- **Git 状态**: 显示 Git 状态
- **树形显示**: 目录树结构

### 使用场景
- 日常目录浏览
- 项目结构查看
- 文件状态检查
- 美化终端输出

</div>

::right::

```bash
# 安装 eza
brew install eza

# 基本使用
eza                    # 基本列表
eza -la                # 详细信息
eza --tree             # 树形显示
eza --git              # 显示 Git 状态
eza --icons            # 显示图标

# 创建别名
alias ls='eza'
alias ll='eza -la'
alias tree='eza --tree'
```

<div class="mt-6 p-4 bg-teal-50 rounded-lg">
  <div class="text-sm font-semibold text-teal-800">美化</div>
  <div class="text-sm text-teal-700">eza 让目录列表更加美观和实用</div>
</div>

---
layout: two-cols
class: text-sm
---

# Node.js 版本管理

## fnm - 快速 Node 管理器

<div class="space-y-4">

### 功能特点
- **快速切换**: 毫秒级版本切换
- **自动切换**: 基于 .nvmrc 文件
- **跨平台**: 支持多种操作系统
- **兼容性**: 兼容 nvm 命令

### 使用场景
- 多项目 Node.js 版本管理
- 开发环境隔离
- CI/CD 环境配置
- 团队协作统一环境

</div>

::right::

```bash
# 安装 fnm
brew install fnm

# 在 ~/.zshrc 中添加
eval "$(fnm env --use-on-cd)"

# 基本使用
fnm install 18.17.0    # 安装 Node.js 版本
fnm use 18.17.0        # 切换到指定版本
fnm list               # 列出已安装版本
fnm current            # 查看当前版本

# 项目中使用
echo "18.17.0" > .nvmrc  # 创建版本文件
```

<div class="mt-6 p-4 bg-cyan-50 rounded-lg">
  <div class="text-sm font-semibold text-cyan-800">自动化</div>
  <div class="text-sm text-cyan-700">进入项目目录时自动切换 Node.js 版本</div>
</div>

---
layout: two-cols
class: text-sm
---

# 文件管理器

## yazi - 终端文件管理器

<div class="space-y-4">

### 功能特点
- **异步操作**: 非阻塞文件操作
- **预览功能**: 文件内容预览
- **搜索功能**: 快速文件搜索
- **插件系统**: 可扩展功能

### 使用场景
- 文件管理操作
- 批量文件处理
- 文件预览查看
- 替代传统文件管理器

</div>

::right::

```bash
# 安装 yazi
brew install yazi

# 基本使用
yazi                    # 启动文件管理器
yazi /path/to/directory # 打开指定目录

# 快捷键
j/k                     # 上下移动
h/l                     # 进入/返回目录
Space                   # 选择文件
Enter                   # 进入目录/打开文件
```

<div class="mt-6 p-4 bg-pink-50 rounded-lg">
  <div class="text-sm font-semibold text-pink-800">效率</div>
  <div class="text-sm text-pink-700">yazi 让终端文件管理更加高效</div>
</div>

---
layout: two-cols
class: text-sm
---

# 终端复用器

## tmux - 会话管理

<div class="space-y-4">

### 功能特点
- **会话管理**: 持久化终端会话
- **窗口分割**: 多窗口同时工作
- **远程连接**: 保持远程会话
- **脚本化**: 自动化配置

### 使用场景
- 长时间运行的任务
- 多任务并行处理
- 远程服务器管理
- 开发环境组织

</div>

::right::

```bash
# 安装 tmux
brew install tmux

# 基本使用
tmux                    # 创建新会话
tmux new -s mysession   # 创建命名会话
tmux attach -t mysession # 连接到会话

# 快捷键 (Ctrl+b 前缀)
Ctrl+b d                # 分离会话
Ctrl+b c                # 创建新窗口
Ctrl+b %                # 垂直分割
Ctrl+b "                # 水平分割
```

<div class="mt-6 p-4 bg-red-50 rounded-lg">
  <div class="text-sm font-semibold text-red-800">持久化</div>
  <div class="text-sm text-red-700">tmux 让终端会话永不丢失</div>
</div>

---
layout: center
class: text-center
---

# 命令行工具配置完成！

## 下一步：设置跨设备同步

<div class="mt-8">
  <span class="text-lg opacity-70">强大的命令行工具是高效开发的核心</span>
</div>