---
layout: section
class: text-sm
---

# 跨设备同步配置

让配置在多台设备间保持一致

---
layout: two-cols
class: text-sm
level: 2
---

# 配置同步方案

## Stow vs Nix

<div class="space-y-4">

### Stow
- **特点**: 轻量级配置管理
- **优势**: 简单易用，学习成本低
- **适用**: 个人配置同步
- **原理**: 符号链接管理

### Nix
- **特点**: 声明式配置管理
- **优势**: 可重现，跨操作系统
- **适用**: 复杂环境管理
- **原理**: 函数式包管理

</div>

::right::

```bash
# Stow 安装
brew install stow

# 基本使用
stow zsh                # 部署 zsh 配置
stow git                # 部署 git 配置
stow -D zsh             # 删除 zsh 配置
stow -R zsh             # 重新部署

# Nix 安装
sh <(curl -L https://nixos.org/nix/install)
```

<div class="mt-6 p-4 bg-blue-50 rounded-lg">
  <div class="text-sm font-semibold text-blue-800">选择建议</div>
  <div class="text-sm text-blue-700">简单配置用 Stow，复杂环境用 Nix</div>
</div>

---
layout: two-cols
class: text-sm
level: 2
---

# Stow 配置管理

## 轻量级配置同步

<div class="space-y-4">

### 目录结构
```
dotfiles/
├── zsh/
│   ├── .zshrc
│   └── .zsh_aliases
├── git/
│   └── .gitconfig
└── vim/
    └── .vimrc
```

### 工作原理
- 创建符号链接
- 保持配置集中管理
- 支持版本控制
- 快速部署和回滚

</div>

::right::

```bash
# 创建 dotfiles 目录
mkdir -p ~/dotfiles

# 移动配置文件
mv ~/.zshrc ~/dotfiles/zsh/
mv ~/.gitconfig ~/dotfiles/git/

# 部署配置
cd ~/dotfiles
stow zsh git vim

# 验证符号链接
ls -la ~/.zshrc
```

<div class="mt-6 p-4 bg-green-50 rounded-lg">
  <div class="text-sm font-semibold text-green-800">优势</div>
  <div class="text-sm text-green-700">Stow 让配置管理变得简单而可靠</div>
</div>

---
layout: two-cols
class: text-sm
level: 2
---

# Stow 高级用法

## 批量管理和条件部署

<div class="space-y-4">

### 批量操作
- 部署所有配置
- 删除所有配置
- 重新部署所有配置
- 条件性部署

### 最佳实践
- 使用 Git 管理配置
- 添加 README 说明
- 使用脚本自动化
- 定期备份配置

</div>

::right::

```bash
# 部署所有配置
stow */

# 删除所有配置
stow -D */

# 重新部署所有配置
stow -R */

# 条件性部署（忽略某些目录）
stow --ignore='^\.git$' */

# 创建部署脚本
#!/bin/bash
cd ~/dotfiles
stow */
echo "配置部署完成！"
```

<div class="mt-6 p-4 bg-yellow-50 rounded-lg">
  <div class="text-sm font-semibold text-yellow-800">自动化</div>
  <div class="text-sm text-yellow-700">使用脚本让配置部署更加便捷</div>
</div>

---
layout: two-cols
class: text-sm
level: 2
---

# Nix 配置管理

## 声明式环境管理

<div class="space-y-4">

### 核心概念
- **声明式**: 描述期望状态
- **可重现**: 相同输入产生相同输出
- **跨平台**: 支持多种操作系统
- **函数式**: 基于函数组合

### 适用场景
- 开发环境管理
- 服务器配置
- CI/CD 环境
- 团队协作

</div>

::right::

```nix
# flake.nix 示例
{
  description = "My development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-darwin";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        packages = with pkgs; [
          git
          nodejs
          python3
        ];
      };
    };
}
```

<div class="mt-6 p-4 bg-purple-50 rounded-lg">
  <div class="text-sm font-semibold text-purple-800">强大</div>
  <div class="text-sm text-purple-700">Nix 让环境管理变得可预测和可重现</div>
</div>

---
layout: two-cols
class: text-sm
level: 2
---

# Nix 实际应用

## 开发环境配置

<div class="space-y-4">

### 环境定义
- 指定所需工具
- 定义环境变量
- 配置 shell 环境
- 管理依赖关系

### 使用流程
1. 定义 flake.nix
2. 进入开发环境
3. 自动安装依赖
4. 开始开发工作

</div>

::right::

```bash
# 进入开发环境
nix develop

# 或者使用 direnv
echo "use flake" > .envrc
direnv allow

# 构建环境
nix build

# 运行应用
nix run
```

<div class="mt-6 p-4 bg-indigo-50 rounded-lg">
  <div class="text-sm font-semibold text-indigo-800">一致性</div>
  <div class="text-sm text-indigo-700">团队成员使用相同的开发环境</div>
</div>

---
layout: two-cols
class: text-sm
level: 2
---

# 配置同步策略

## 选择合适方案

<div class="space-y-4">

### Stow 适用场景
- 个人配置文件管理
- 简单的符号链接需求
- 快速部署和回滚
- 学习成本要求低

### Nix 适用场景
- 复杂开发环境管理
- 团队协作环境统一
- 可重现的构建环境
- 跨平台部署需求

</div>

::right::

```bash
# 混合使用策略
# 1. 使用 Stow 管理个人配置
stow zsh git vim

# 2. 使用 Nix 管理开发环境
nix develop

# 3. 使用 Git 同步配置仓库
git clone https://github.com/username/dotfiles.git
cd dotfiles && stow */
```

<div class="mt-6 p-4 bg-teal-50 rounded-lg">
  <div class="text-sm font-semibold text-teal-800">最佳实践</div>
  <div class="text-sm text-teal-700">根据需求选择合适的配置管理方案</div>
</div>

---
layout: two-cols
class: text-sm
level: 2
---

# 配置备份与恢复

## 数据安全保障

<div class="space-y-4">

### 备份策略
- **版本控制**: 使用 Git 管理配置
- **云存储**: 同步到 GitHub/GitLab
- **本地备份**: 定期备份到外部存储
- **自动化**: 使用脚本自动备份

### 恢复流程
1. 克隆配置仓库
2. 安装必要工具
3. 部署配置文件
4. 验证配置正确性

</div>

::right::

```bash
# 创建配置仓库
git init ~/dotfiles
cd ~/dotfiles

# 添加配置文件
git add .
git commit -m "Initial dotfiles"

# 推送到远程仓库
git remote add origin https://github.com/username/dotfiles.git
git push -u origin main

# 在新设备上恢复
git clone https://github.com/username/dotfiles.git
cd dotfiles && stow */
```

<div class="mt-6 p-4 bg-orange-50 rounded-lg">
  <div class="text-sm font-semibold text-orange-800">安全</div>
  <div class="text-sm text-orange-700">配置备份确保环境快速恢复</div>
</div>

---
layout: center
class: text-center
level: 2
---

# 配置同步完成！

## 下一步：选择编辑器

<div class="mt-8">
  <span class="text-lg opacity-70">统一的配置让多设备协作更加高效</span>
</div>
