---
layout: section
---

# 命令行的基本设置

为 Mac 配置强大的命令行环境

---
layout: two-cols
---

# Shell 选择

## bash vs zsh vs fish

<div class="space-y-4">

### bash
- **默认**: macOS 默认 shell
- **兼容性**: 最佳兼容性
- **功能**: 基础功能

### zsh
- **推荐**: macOS 11+ 默认
- **功能**: 强大的自动补全
- **生态**: 丰富的插件系统

### fish
- **特点**: 用户友好
- **语法**: 更直观的语法
- **性能**: 较慢的启动速度

</div>

::right::

```bash
# 查看当前 shell
echo $SHELL

# 查看可用 shell
cat /etc/shells

# 切换到 zsh
chsh -s /bin/zsh
```

<div class="mt-8 p-4 bg-blue-50 rounded-lg">
  <div class="text-sm font-semibold text-blue-800">推荐</div>
  <div class="text-sm text-blue-700">使用 zsh 作为主要 shell，配合 oh-my-zsh 获得最佳体验</div>
</div>

---
layout: two-cols
---

# oh-my-zsh 安装

## 强大的 zsh 框架

<div class="space-y-4">

### 安装步骤
1. **下载安装脚本**
2. **运行安装命令**
3. **重启终端**

### 主要特性
- 🎨 **主题系统**: 丰富的主题选择
- 🔌 **插件生态**: 大量实用插件
- ⚡ **性能优化**: 智能缓存机制

</div>

::right::

```bash
# 安装 oh-my-zsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# 配置文件位置
~/.zshrc

# 重新加载配置
source ~/.zshrc
```

<div class="mt-6 p-4 bg-green-50 rounded-lg">
  <div class="text-sm font-semibold text-green-800">Demo</div>
  <div class="text-sm text-green-700">安装完成后，终端会显示彩色提示符和自动补全功能</div>
</div>

---
layout: two-cols
---

# 命令提示符美化

## Powerlevel10k vs Starship

<div class="space-y-4">

### Powerlevel10k
- **特点**: 功能最全面
- **性能**: 极快的加载速度
- **定制**: 高度可定制
- **适用**: 重度用户

### Starship
- **特点**: 跨平台统一
- **配置**: 简单易配置
- **外观**: 现代化设计
- **适用**: 多平台用户

</div>

::right::

```bash
# 安装 Powerlevel10k
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

# 在 ~/.zshrc 中设置
ZSH_THEME="powerlevel10k/powerlevel10k"

# 安装 Starship
curl -sS https://starship.rs/install.sh | sh

# 在 ~/.zshrc 中添加
eval "$(starship init zsh)"
```

<div class="mt-6 p-4 bg-yellow-50 rounded-lg">
  <div class="text-sm font-semibold text-yellow-800">选择建议</div>
  <div class="text-sm text-yellow-700">Powerlevel10k 适合深度定制，Starship 适合简单美观</div>
</div>

---
layout: center
class: text-center
---

# Shell 配置完成！

## 下一步：安装常用命令工具

<div class="mt-8">
  <span class="text-lg opacity-70">一个强大的 shell 是高效开发的基础</span>
</div>