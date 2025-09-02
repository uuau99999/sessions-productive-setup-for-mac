---
layout: section
class: text-sm
---

# 其他工具

提升 Mac 使用效率的实用工具

---
layout: two-cols
class: text-sm
level: 2
---

# Hammerspoon

## macOS 自动化工具

<div class="space-y-4">

### 核心功能
- **窗口管理**: 自动调整窗口位置和大小
- **快捷键设置**: 自定义全局快捷键
- **输入法监听**: 监听输入法切换
- **应用控制**: 控制应用程序行为

### 使用场景
- 窗口布局自动化
- 输入法状态监控
- 应用快速切换
- 系统事件响应

</div>
<div class="mt-6 p-4 bg-blue-50 rounded-lg">
  <div class="text-sm font-semibold text-blue-800">自动化</div>
  <div class="text-sm text-blue-700">Hammerspoon 让 Mac 操作更加自动化</div>
</div>

::right::

```lua
-- Hammerspoon 配置示例
-- 窗口管理
hs.hotkey.bind({"cmd", "alt"}, "left", function()
  local win = hs.window.focusedWindow()
  local f = win:frame()
  local screen = win:screen()
  local max = screen:frame()
  
  f.x = max.x
  f.y = max.y
  f.w = max.w / 2
  f.h = max.h
  win:setFrame(f)
end)

-- 输入法监听
hs.keycodes.inputSourceChanged(function()
  local current = hs.keycodes.currentSourceID()
  if current == "com.apple.keylayout.ABC" then
    hs.alert.show("English")
  else
    hs.alert.show("中文")
  end
end)
```


---
layout: two-cols
class: text-sm
level: 2
---

# Hammerspoon 配置

## 实用配置示例

<div class="space-y-4">

### 窗口管理
- **四分之一窗口**: 将窗口调整到屏幕四分之一
- **半屏窗口**: 左右或上下半屏
- **全屏切换**: 快速全屏切换
- **多显示器**: 跨显示器窗口移动

### 输入法管理
- **状态显示**: 显示当前输入法
- **自动切换**: 根据应用自动切换
- **快捷键**: 快速切换输入法
- **状态监控**: 监控输入法变化

</div>

::right::

```lua
-- 四分之一窗口配置
hs.hotkey.bind({"cmd", "alt"}, "1", function()
  local win = hs.window.focusedWindow()
  local f = win:frame()
  local screen = win:screen()
  local max = screen:frame()
  
  f.x = max.x
  f.y = max.y
  f.w = max.w / 2
  f.h = max.h / 2
  win:setFrame(f)
end)
-- 输入法自动切换
local function setInputMethod(inputMethod)
  hs.keycodes.setMethod(inputMethod)
end
hs.application.watcher.new(function(name, event, app)
  if event == hs.application.watcher.activated then
    if name == "Code" then
      setInputMethod("com.apple.keylayout.ABC")
    elseif name == "微信" then
      setInputMethod("com.apple.inputmethod.SCIM.ITABC")
    end
  end
end):start()
```

<div class="mt-6 p-4 bg-green-50 rounded-lg">
  <div class="text-sm font-semibold text-green-800">效率</div>
  <div class="text-sm text-green-700">合理的配置让日常操作更高效</div>
</div>

---
layout: two-cols
class: text-sm
level: 2
---

# Raycast

## 强大的启动器和工具

<div class="space-y-4">

### 核心功能
- **应用启动**: 快速启动应用程序
- **文件搜索**: 快速搜索文件
- **计算器**: 内置计算器功能
- **剪贴板**: 剪贴板历史管理

### 扩展功能
- **窗口管理**: 窗口布局和切换
- **系统控制**: 系统设置快速访问
- **插件系统**: 丰富的插件生态
- **工作流**: 自定义工作流程

</div>

::right::

```bash
# 安装 Raycast
brew install --cask raycast

# 基本使用
Cmd + Space              # 打开 Raycast
输入应用名称              # 快速启动应用
输入文件名称              # 搜索文件
输入计算表达式            # 计算器功能

# 窗口管理
Cmd + Space              # 打开 Raycast
输入 "window"            # 窗口管理选项
选择布局方式              # 快速调整窗口
```

<div class="mt-6 p-4 bg-purple-50 rounded-lg">
  <div class="text-sm font-semibold text-purple-800">启动器</div>
  <div class="text-sm text-purple-700">Raycast 是 Spotlight 的强大替代品</div>
</div>

---
layout: two-cols
class: text-sm
level: 2
---

# Raycast 高级功能

## 插件和工作流

<div class="space-y-4">

### 内置插件
- **窗口管理**: 快速调整窗口布局
- **系统控制**: 控制 Wi-Fi、蓝牙等
- **时间跟踪**: 时间管理工具
- **密码管理**: 集成密码管理器

### 自定义工作流
- **脚本执行**: 运行自定义脚本
- **API 集成**: 集成第三方服务
- **数据查询**: 快速查询数据
- **自动化任务**: 自动化常用任务

</div>

::right::

```javascript
// Raycast 工作流示例
// 快速创建 Git 仓库
import { exec } from "child_process";

export default async function main() {
  const { stdout } = await exec("pwd");
  const currentDir = stdout.trim();
  
  await exec(`git init "${currentDir}"`);
  await exec(`git add .`);
  await exec(`git commit -m "Initial commit"`);
  
  return {
    title: "Git repository created",
    detail: `Repository initialized in ${currentDir}`,
  };
}
```

<div class="mt-6 p-4 bg-indigo-50 rounded-lg">
  <div class="text-sm font-semibold text-indigo-800">扩展</div>
  <div class="text-sm text-indigo-700">插件系统让 Raycast 功能更强大</div>
</div>

---
layout: two-cols
class: text-sm
level: 2
---

# 窗口管理工具

## 高效的多窗口管理

<div class="space-y-4">

### 窗口管理需求
- **快速布局**: 一键调整窗口布局
- **多显示器**: 跨显示器窗口管理
- **应用切换**: 快速切换应用程序
- **工作区**: 不同工作场景的窗口布局

### 解决方案
- **Hammerspoon**: 自定义窗口管理
- **Raycast**: 内置窗口管理
- **Rectangle**: 专业的窗口管理工具
- **Magnet**: 简单的窗口吸附工具

</div>

::right::

```bash
# 安装 Rectangle
brew install --cask rectangle

# 基本快捷键
Cmd + Option + Left     # 左半屏
Cmd + Option + Right    # 右半屏
Cmd + Option + Up       # 上半屏
Cmd + Option + Down     # 下半屏
Cmd + Option + F        # 全屏

# 四分之一窗口
Cmd + Option + U        # 左上
Cmd + Option + I        # 右上
Cmd + Option + J        # 左下
Cmd + Option + K        # 右下
```

<div class="mt-6 p-4 bg-yellow-50 rounded-lg">
  <div class="text-sm font-semibold text-yellow-800">布局</div>
  <div class="text-sm text-yellow-700">好的窗口管理让多任务处理更高效</div>
</div>

---
layout: two-cols
class: text-sm
level: 2
---

# 系统监控工具

## 实时系统状态监控

<div class="space-y-4">

### 监控需求
- **CPU 使用率**: 实时 CPU 使用情况
- **内存使用**: 内存占用监控
- **网络状态**: 网络连接状态
- **电池状态**: 电池使用情况

### 推荐工具
- **iStat Menus**: 专业的系统监控
- **MenuMeters**: 轻量级系统监控
- **Activity Monitor**: 系统自带监控
- **htop**: 命令行系统监控

</div>

::right::

```bash
# 安装 htop
brew install htop

# 基本使用
htop                    # 启动系统监控
F1                      # 帮助信息
F2                      # 设置选项
F3                      # 搜索进程
F4                      # 过滤进程
F5                      # 树形显示
F6                      # 排序选项
F9                      # 杀死进程
F10                     # 退出
```

<div class="mt-6 p-4 bg-teal-50 rounded-lg">
  <div class="text-sm font-semibold text-teal-800">监控</div>
  <div class="text-sm text-teal-700">系统监控帮助了解系统运行状态</div>
</div>

---
layout: two-cols
class: text-sm
level: 2
---

# 开发辅助工具

## 提升开发效率

<div class="space-y-4">

### 代码工具
- **GitHub CLI**: 命令行 GitHub 操作
- **Docker Desktop**: 容器化开发
- **Postman**: API 测试工具
- **Insomnia**: API 客户端

### 设计工具
- **Figma**: 在线设计工具
- **Sketch**: macOS 设计工具
- **Sip**: 颜色选择器
- **ImageOptim**: 图片压缩工具

</div>

::right::

```bash
# 安装开发工具
brew install gh                    # GitHub CLI
brew install --cask docker         # Docker Desktop
brew install --cask postman        # Postman
brew install --cask figma          # Figma

# GitHub CLI 使用
gh auth login                      # 登录 GitHub
gh repo create my-project          # 创建仓库
gh issue create                    # 创建 Issue
gh pr create                       # 创建 Pull Request
```

<div class="mt-6 p-4 bg-orange-50 rounded-lg">
  <div class="text-sm font-semibold text-orange-800">开发</div>
  <div class="text-sm text-orange-700">好的开发工具让开发更高效</div>
</div>

---
layout: two-cols
class: text-sm
level: 2
---

# 工具配置建议

## 个性化配置

<div class="space-y-4">

### 配置原则
- **按需配置**: 只配置需要的功能
- **逐步优化**: 逐步完善配置
- **备份配置**: 定期备份配置文件
- **文档记录**: 记录配置说明

### 配置管理
- 使用 Git 管理配置
- 创建配置文档
- 定期更新工具
- 测试配置效果

</div>

::right::

```bash
# 配置管理脚本
#!/bin/bash
# 备份配置文件
cp ~/.hammerspoon/init.lua ~/backup/hammerspoon/
cp ~/.config/raycast/ ~/backup/raycast/ -r

# 更新工具
brew update && brew upgrade
brew upgrade --cask

# 检查配置
hammerspoon --check-config
raycast --version
```

<div class="mt-6 p-4 bg-pink-50 rounded-lg">
  <div class="text-sm font-semibold text-pink-800">管理</div>
  <div class="text-sm text-pink-700">好的配置管理让工具使用更稳定</div>
</div>

---
layout: center
class: text-center
level: 2
---

# 工具配置完成！

## 下一步：总结

<div class="mt-8">
  <span class="text-lg opacity-70">合适的工具让 Mac 使用更加高效</span>
</div>
