---
layout: section
class: text-sm
---

# 终端选择

选择高效的终端应用

---
layout: two-cols
class: text-sm
---

# 终端应用对比

## Kitty vs Ghostty

<div class="space-y-4">

### Kitty
- **特点**: 基于 GPU 加速
- **优势**: 极快的渲染速度
- **劣势**: 配置相对复杂
- **适用**: 追求极致性能

### Ghostty
- **特点**: 原生 macOS 应用
- **优势**: 配置灵活，性能优秀
- **劣势**: 相对较新
- **适用**: 平衡性能和易用性

</div>

::right::

```bash
# 安装 Kitty
brew install --cask kitty

# 安装 Ghostty
brew install --cask ghostty

# 配置文件位置
# Kitty: ~/.config/kitty/kitty.conf
# Ghostty: ~/.config/ghostty/config
```

<div class="mt-6 p-4 bg-blue-50 rounded-lg">
  <div class="text-sm font-semibold text-blue-800">选择建议</div>
  <div class="text-sm text-blue-700">性能优先选 Kitty，易用性优先选 Ghostty</div>
</div>

---
layout: two-cols
class: text-sm
---

# Kitty 配置

## 高性能终端配置

<div class="space-y-4">

### 核心特性
- **GPU 加速**: 利用显卡加速渲染
- **多窗口**: 支持多窗口管理
- **主题系统**: 丰富的主题选择
- **脚本支持**: Python 脚本扩展

### 配置要点
- 字体设置
- 颜色主题
- 窗口行为
- 快捷键绑定

</div>

::right::

```ini
# kitty.conf 示例
font_family      JetBrains Mono
font_size        12.0

# 颜色主题
include themes/gruvbox_dark.conf

# 窗口设置
window_padding_width 10
window_margin_width 0

# 快捷键
map cmd+enter new_window
map cmd+w close_window
map cmd+shift+left neighboring_window left
map cmd+shift+right neighboring_window right
```

<div class="mt-6 p-4 bg-green-50 rounded-lg">
  <div class="text-sm font-semibold text-green-800">性能</div>
  <div class="text-sm text-green-700">Kitty 的 GPU 加速让终端响应更快</div>
</div>

---
layout: two-cols
class: text-sm
---

# Kitty 高级功能

## 多窗口和会话管理

<div class="space-y-4">

### 窗口管理
- **新窗口**: 创建新终端窗口
- **窗口分割**: 水平/垂直分割
- **窗口切换**: 快速切换窗口
- **窗口布局**: 自定义布局

### 会话管理
- **保存会话**: 保存当前窗口布局
- **恢复会话**: 快速恢复工作环境
- **会话切换**: 多个会话间切换

</div>

::right::

```bash
# Kitty 命令
kitty +kitten themes    # 选择主题
kitty +kitten diff      # 文件对比
kitty +kitten ssh       # SSH 连接

# 会话管理
kitty --session session.conf  # 加载会话
kitty --detach                 # 后台运行

# 窗口操作
Ctrl+Shift+Enter        # 新窗口
Ctrl+Shift+W            # 关闭窗口
Ctrl+Shift+Left/Right   # 切换窗口
```

<div class="mt-6 p-4 bg-purple-50 rounded-lg">
  <div class="text-sm font-semibold text-purple-800">效率</div>
  <div class="text-sm text-purple-700">Kitty 的多窗口让多任务处理更高效</div>
</div>

---
layout: two-cols
class: text-sm
---

# Ghostty 配置

## 原生 macOS 终端

<div class="space-y-4">

### 核心特性
- **原生体验**: 完全原生 macOS 应用
- **配置灵活**: 丰富的配置选项
- **性能优秀**: 优化的渲染性能
- **现代设计**: 现代化的界面设计

### 配置方式
- 配置文件管理
- 主题系统
- 字体和颜色
- 行为设置

</div>

::right::

```ini
# ghostty.conf 示例
font-family = "JetBrains Mono"
font-size = 12

# 颜色主题
color-scheme = gruvbox-dark

# 窗口设置
window-padding = 10
window-margin = 0

# 行为设置
copy-on-select = true
scrollback-lines = 10000
```

<div class="mt-6 p-4 bg-indigo-50 rounded-lg">
  <div class="text-sm font-semibold text-indigo-800">原生</div>
  <div class="text-sm text-indigo-700">Ghostty 提供真正的原生 macOS 体验</div>
</div>

---
layout: two-cols
class: text-sm
---

# Ghostty 特色功能

## 现代化终端体验

<div class="space-y-4">

### 独特功能
- **智能选择**: 自动识别可选择的文本
- **链接检测**: 自动检测和打开链接
- **图片显示**: 内联显示图片
- **通知集成**: 系统通知集成

### 用户体验
- **流畅滚动**: 平滑的滚动体验
- **快速启动**: 极快的启动速度
- **内存优化**: 低内存占用
- **稳定性**: 高稳定性表现

</div>

::right::

```bash
# Ghostty 特殊功能
# 1. 自动选择文本
# 2. 点击链接打开
# 3. 显示图片预览
# 4. 系统通知集成

# 配置示例
copy-on-select = true
detect-urls = true
image-protocol = kitty
notifications = true
```

<div class="mt-6 p-4 bg-yellow-50 rounded-lg">
  <div class="text-sm font-semibold text-yellow-800">现代</div>
  <div class="text-sm text-yellow-700">Ghostty 带来现代化的终端体验</div>
</div>

---
layout: two-cols
class: text-sm
---

# 终端主题配置

## 美化终端外观

<div class="space-y-4">

### 主题选择
- **Gruvbox**: 护眼的暗色主题
- **Dracula**: 流行的紫色主题
- **Nord**: 冷色调主题
- **Solarized**: 经典的双色主题

### 字体推荐
- **JetBrains Mono**: 专为开发者设计
- **Fira Code**: 支持连字符
- **Cascadia Code**: 微软开源字体
- **SF Mono**: 苹果系统字体

</div>

::right::

```bash
# 安装字体
brew install --cask font-jetbrains-mono
brew install --cask font-fira-code

# 下载主题
# Kitty
git clone https://github.com/dexpota/kitty-themes.git ~/.config/kitty/themes

# Ghostty
# 主题内置，通过配置选择
color-scheme = gruvbox-dark
```

<div class="mt-6 p-4 bg-teal-50 rounded-lg">
  <div class="text-sm font-semibold text-teal-800">美观</div>
  <div class="text-sm text-teal-700">好的主题让终端使用更舒适</div>
</div>

---
layout: two-cols
class: text-sm
---

# 终端性能优化

## 提升终端性能

<div class="space-y-4">

### 性能优化
- **字体缓存**: 启用字体缓存
- **渲染优化**: 调整渲染参数
- **内存管理**: 优化内存使用
- **启动速度**: 减少启动时间

### 配置调优
- 调整缓冲区大小
- 优化滚动性能
- 减少重绘频率
- 启用硬件加速

</div>

::right::

```ini
# Kitty 性能优化
font_family      JetBrains Mono
font_size        12.0
disable_ligatures never

# 性能设置
repaint_delay    10
input_delay      3
sync_to_monitor  yes

# 内存优化
scrollback_lines 10000
scrollback_pager less --chop-long-lines --RAW-CONTROL-CHARS +INPUT_LINE_NUMBER
```

<div class="mt-6 p-4 bg-orange-50 rounded-lg">
  <div class="text-sm font-semibold text-orange-800">优化</div>
  <div class="text-sm text-orange-700">合理的配置让终端运行更流畅</div>
</div>

---
layout: two-cols
class: text-sm
---

# 终端选择建议

## 根据需求选择

<div class="space-y-4">

### 选择 Kitty 的情况
- 追求极致性能
- 需要 GPU 加速
- 喜欢高度定制
- 使用复杂配置

### 选择 Ghostty 的情况
- 喜欢原生体验
- 需要简单配置
- 重视稳定性
- 追求现代设计

</div>

::right::

```bash
# 快速开始
# 1. 安装终端
brew install --cask kitty    # 或 ghostty

# 2. 配置基础设置
# 字体、主题、窗口大小等

# 3. 集成 shell 配置
# 确保与 zsh 和 oh-my-zsh 兼容

# 4. 测试性能
# 打开大文件、运行复杂命令测试
```

<div class="mt-6 p-4 bg-pink-50 rounded-lg">
  <div class="text-sm font-semibold text-pink-800">建议</div>
  <div class="text-sm text-pink-700">两个终端都很优秀，根据个人喜好选择</div>
</div>

---
layout: center
class: text-center
---

# 终端配置完成！

## 下一步：其他工具

<div class="mt-8">
  <span class="text-lg opacity-70">好的终端是高效开发的重要工具</span>
</div>