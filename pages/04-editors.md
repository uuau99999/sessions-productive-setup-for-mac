---
layout: section
class: text-sm
---

# 编辑器选择

选择适合的代码编辑器

---
layout: two-cols
class: text-sm
---

# Vim 编辑器

## 经典而强大的编辑器

<div class="space-y-4">

### 核心特点
- **模态编辑**: 不同模式不同功能
- **高效操作**: 键盘快捷键驱动
- **可扩展性**: 丰富的插件生态
- **跨平台**: 几乎所有系统都支持

### 学习曲线
- **陡峭**: 需要时间掌握
- **回报高**: 掌握后效率极高
- **习惯性**: 一旦习惯难以改变

</div>

::right::

```bash
# Vim 安装（通常已预装）
vim --version

# 基本使用
vim file.txt           # 打开文件
i                      # 进入插入模式
Esc                    # 返回普通模式
:w                     # 保存文件
:q                     # 退出
:wq                    # 保存并退出

# 基本移动
h j k l                # 左 下 上 右
w b                    # 单词移动
0 $                    # 行首 行尾
```

<div class="mt-6 p-4 bg-green-50 rounded-lg">
  <div class="text-sm font-semibold text-green-800">哲学</div>
  <div class="text-sm text-green-700">Vim 让编辑变得高效而优雅</div>
</div>

---
layout: two-cols
class: text-sm
---

# Vim 核心概念

## 模态编辑系统

<div class="space-y-4">

### 主要模式
- **普通模式**: 导航和命令
- **插入模式**: 文本输入
- **可视模式**: 文本选择
- **命令行模式**: 执行命令

### 操作组合
- **动词 + 名词**: 如 `dw` (删除单词)
- **数字 + 操作**: 如 `3w` (移动3个单词)
- **范围 + 操作**: 如 `d$` (删除到行尾)

</div>

::right::

```vim
" 基本操作
dd                      " 删除整行
yy                      " 复制整行
p                       " 粘贴
u                       " 撤销
Ctrl+r                  " 重做

" 搜索和替换
/pattern                " 搜索
n                       " 下一个匹配
:%s/old/new/g           " 全局替换

" 文件操作
:e filename             " 打开文件
:sp filename            " 水平分割
:vsp filename           " 垂直分割
```

<div class="mt-6 p-4 bg-blue-50 rounded-lg">
  <div class="text-sm font-semibold text-blue-800">效率</div>
  <div class="text-sm text-blue-700">Vim 的组合操作让编辑效率倍增</div>
</div>

---
layout: two-cols
class: text-sm
---

# Neovim 编辑器

## Vim 的现代化继承者

<div class="space-y-4">

### 主要改进
- **Lua 配置**: 更现代的配置语言
- **LSP 支持**: 内置语言服务器协议
- **异步操作**: 非阻塞操作
- **插件生态**: 丰富的现代插件

### 优势
- **性能更好**: 更快的启动和运行
- **功能更强**: 内置现代 IDE 功能
- **配置更简单**: Lua 配置更直观
- **社区活跃**: 持续更新和改进

</div>

::right::

```bash
# 安装 Neovim
brew install neovim

# 基本使用
nvim file.txt           # 打开文件
:checkhealth            # 检查健康状态
:LspInfo                # 查看 LSP 状态

# 配置文件位置
~/.config/nvim/init.lua
```

<div class="mt-6 p-4 bg-purple-50 rounded-lg">
  <div class="text-sm font-semibold text-purple-800">现代化</div>
  <div class="text-sm text-purple-700">Neovim 是 Vim 的现代化升级</div>
</div>

---
layout: two-cols
class: text-sm
---

# Neovim 配置

## 现代化配置管理

<div class="space-y-4">

### 配置结构
```
~/.config/nvim/
├── init.lua            # 主配置文件
├── lua/
│   ├── plugins.lua     # 插件配置
│   ├── keymaps.lua     # 快捷键配置
│   └── options.lua     # 选项配置
└── after/              # 插件后配置
```

### 核心插件
- **Lazy.nvim**: 插件管理器
- **LSP**: 语言服务器
- **Telescope**: 模糊查找
- **Treesitter**: 语法高亮

</div>

::right::

```lua
-- init.lua 示例
require('lazy').setup({
  'nvim-telescope/telescope.nvim',
  'nvim-treesitter/nvim-treesitter',
  'neovim/nvim-lspconfig',
})

-- 基本配置
vim.opt.number = true
vim.opt.relativenumber = true
vim.opt.tabstop = 2
vim.opt.shiftwidth = 2
vim.opt.expandtab = true
```

<div class="mt-6 p-4 bg-indigo-50 rounded-lg">
  <div class="text-sm font-semibold text-indigo-800">配置</div>
  <div class="text-sm text-indigo-700">Lua 配置让 Neovim 更易定制</div>
</div>

---
layout: two-cols
class: text-sm
---

# LSP 集成

## 现代 IDE 功能

<div class="space-y-4">

### LSP 功能
- **自动补全**: 智能代码补全
- **错误检查**: 实时错误提示
- **代码格式化**: 自动代码格式化
- **重构支持**: 代码重构工具

### 支持语言
- **JavaScript/TypeScript**
- **Python**
- **Go**
- **Rust**
- **更多语言支持**

</div>

::right::

```lua
-- LSP 配置示例
local lspconfig = require('lspconfig')

-- TypeScript 配置
lspconfig.tsserver.setup({
  on_attach = function(client, bufnr)
    -- 快捷键绑定
    vim.keymap.set('n', 'gd', vim.lsp.buf.definition, { buffer = bufnr })
    vim.keymap.set('n', 'K', vim.lsp.buf.hover, { buffer = bufnr })
    vim.keymap.set('n', '<leader>rn', vim.lsp.buf.rename, { buffer = bufnr })
  end
})
```

<div class="mt-6 p-4 bg-yellow-50 rounded-lg">
  <div class="text-sm font-semibold text-yellow-800">智能</div>
  <div class="text-sm text-yellow-700">LSP 让 Neovim 具备现代 IDE 功能</div>
</div>

---
layout: two-cols
class: text-sm
---

# 插件推荐

## 提升开发效率

<div class="space-y-4">

### 核心插件
- **Telescope**: 文件搜索和模糊查找
- **Treesitter**: 更好的语法高亮
- **Lualine**: 状态栏
- **Bufferline**: 标签栏
- **Which-key**: 快捷键提示

### 开发插件
- **nvim-cmp**: 自动补全
- **nvim-tree**: 文件树
- **gitsigns**: Git 状态显示
- **Comment**: 代码注释
- **Surround**: 括号操作

</div>

::right::

```lua
-- 插件配置示例
{
  'nvim-telescope/telescope.nvim',
  dependencies = { 'nvim-lua/plenary.nvim' },
  config = function()
    require('telescope').setup({
      defaults = {
        file_ignore_patterns = { 'node_modules', '.git' }
      }
    })
  end
}
```

<div class="mt-6 p-4 bg-teal-50 rounded-lg">
  <div class="text-sm font-semibold text-teal-800">生态</div>
  <div class="text-sm text-teal-700">丰富的插件让 Neovim 功能强大</div>
</div>

---
layout: two-cols
class: text-sm
---

# 编辑器选择建议

## 根据需求选择

<div class="space-y-4">

### 选择 Vim 的情况
- 喜欢经典编辑器
- 需要极简配置
- 系统资源有限
- 学习 Vim 操作

### 选择 Neovim 的情况
- 需要现代 IDE 功能
- 喜欢 Lua 配置
- 需要 LSP 支持
- 追求更好的性能

</div>

::right::

```bash
# 快速开始 Neovim
# 1. 安装
brew install neovim

# 2. 使用配置管理器
git clone https://github.com/LazyVim/starter ~/.config/nvim

# 3. 启动 Neovim
nvim

# 4. 安装插件
:Lazy sync
```

<div class="mt-6 p-4 bg-pink-50 rounded-lg">
  <div class="text-sm font-semibold text-pink-800">建议</div>
  <div class="text-sm text-pink-700">新手推荐从 Neovim 开始，功能更完整</div>
</div>

---
layout: center
class: text-center
---

# 编辑器配置完成！

## 下一步：选择终端

<div class="mt-8">
  <span class="text-lg opacity-70">好的编辑器是高效开发的基础</span>
</div>