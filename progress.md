# 启航平台项目 — 任务交接文档

> 最后更新：2026-07-03 14:19:39
> 维护约定：阶段性产出完成后更新；新对话开始时先读取本文档

---

## 1. 任务概览

**当前目标**：根据 6/25 会议结论，修订操作手册 PRD（新增应用目录章节、三类展示端口、结构化留口）；更新日志方案已定，准备原型扩展。

**项目背景**：
- 中华财险创新研发中心业务中台部，负责三平台产品工作
- **启航平台**（应用地图）：员工作业统一门户，53 个用户视角应用，10 大业务分类
- **知行平台**（学习赋能）：课程、考试、培训管理
- **聆听平台**（建议反馈）：三类建议（功能缺陷/产品建议/我有想法）、处理看板
- 三平台关系：启航「分发」→ 知行「赋能」→ 聆听「反馈」→ 启航「迭代」

**当前优先级**：
1. 🔴 操作手册 PRD 修订：新增应用目录章节、三类展示端口、结构化 + PMS 关联留口
2. 🟡 更新日志方案已定（运营支撑域创建 + PMS 关联），原型待扩展
3. 🟡 产品蓝图：用户自行修改中

---

## 2. 进度状态

### ✅ 已完成

- [x] 三平台协同关系梳理文档
- [x] 应用分类梳理（53 应用、10 大类）
- [x] 应用目录来源方案会议材料（`slides/app_catalog_proposal.html`）
- [x] 更新日志两种方案泳道图（`slides/update_log_flow.html`）
- [x] 管理端原型修复：去外链 404、去 AI 文案、去工作台管理入口
- [x] 操作手册 PRD 初稿 → tdrive
- [x] 6 个文档日期修正（2025→2026）
- [x] 原型导航索引页（`index.html`）
- [x] Git 仓库打通：GitHub `lastencore/Qihang`，main 分支，三端同步
- [x] 原型目录重组：`client/` `admin/` `slides/` `blueprint/` `assets/`
- [x] Logo 跳转 BUG 修复：管理端页面 logo `href="/"` → `href="../index.html"`
- [x] progress-doc skill 创建
- [x] 产品蓝图（Tailwind CSS 版）：用户决定自行修改，AI 不再迭代
- [x] 应用管理弹窗（嵌入前端同事完整版，绑定新建+编辑按钮）
- [x] 应用分类管理页面（`admin/app_category_management.html`）
- [x] 客户端应用地图（`client/app_map.html`）
- [x] 客户端应用大厅（`client/client.html`）
- [x] 导航组件化（sidebar/header 动态加载，`assets/nav-loader.js`）
- [x] `manual_query.html` 列名修正：关联PMS → 关联PMS系统，未关联显示灰色"未关联"；关联PMS列左对齐
- [x] `update_log_*` 原型扩展：增加发布窗口字段 + 关联PMS系统下拉选择器；发布窗口格式改为 "YYYY-MM-DD常规发布/项目发布"
- [x] `update_log_modify.html` 应用管理/分类管理跳转白名单补全
- [x] 全局布局修复：nav-loader.js 保留 Ant Design 原生 fixed 定位 + 空占位 div，解决侧边栏空白和遮挡
- [x] progress-doc skill 纳入 Git 管理（`skills/progress-doc.md`）
- [x] **PMS 系统关联全链路**：`app_management.html` 新增/编辑弹窗增加 PMS 关联下拉框（114 系统 datalist 可搜索选择），列表增加"关联PMS系统"列并填充数据
- [x] **PMS 列数据补全**：`manual_query.html`、`update_log_query.html` 的 PMS 列全部填充实际系统数据，不再存在"未关联"
- [x] **PMS 列表头/样式统一**：三页面 PMS 列去除灰色字体，列表头统一为"关联PMS系统"
- [x] **`app_management.html` 弹窗修复**：移除多余 `</div>` 解决 DOM 不平衡；修复 `overflow-y: hidden` 导致的页面无法滚动；PMS 下拉宽度修正；placeholder 重叠修复
- [x] **`update_log_query.html` 样式修复**：状态列去除 sticky 固定定位；日志摘要列缩窄（300→200px）、操作列加宽（100→150px）
- [x] **`manual_query.html`**：应用名称筛选框 placeholder 移除
- [x] **`app_management.html` PMS 筛选**：表格上方增加"关联PMS系统"筛选项，带搜索下拉框（复用114系统 datalist），布局在独立第二行
- [x] **`update_log_modify.html` 导航模板化**：移除内嵌 sidebar+header HTML，改为 nav-loader.js 模板模式（占位 div + `nav-sidebar-placeholder` + `nav-header-placeholder`），与其他页面一致
- [x] **`update_log_modify.html` 发布类更新布局**：发布类更新 checkbox + 发布窗口 + 关联PMS 三个控件 label 放左侧、压缩到同一行，关联PMS 始终只读并由应用名称自动填充
- [x] **`update_log_modify.html` 间距修复**：正文内容 label 与下方富文本编辑器间距减小（margin-bottom: 4px）
- [x] **`manual_query.html` / `update_log_query.html` PMS 筛选项**：两页面均增加"关联PMS系统"筛选项（独立第二行，复用114系统 datalist），样式与 `app_management.html` 一致
- [x] **`update_log_modify.html` 非必选逻辑**：未勾选"发布类更新"时，发布窗口和关联PMS的红色必选星号隐藏（非必选）
- [x] **`update_log_modify.html` 标签改名+布局重排**："应用名称"→"所属应用"，"发布日期"→"发布时间"；标题+所属应用同行（col-12+col-12），发布类更新+发布窗口+关联PMS第二行，发布时间第三行
- [x] **`update_log_modify.html` 发布时间联动**：勾选"发布类更新"时发布时间自动填入次日12:00且不可编辑，提示文案变为"将于发布日次日中午12:00自动发布"（红色）；未勾选时恢复可编辑，提示文案恢复默认
- [x] **`app_management.html` PMS系统属主字段**：新增应用弹窗增加"PMS系统属主"必填字段，tag 选择器交互（点击候添加/×移除），提供"全部填入""全部清空"便捷操作，候选池带"可选属主"文案提示和浅色背景；关联PMS系统改用 app_map 风格下拉（按钮触发 + 搜索面板）
- [x] **`app_management.html` 弹窗栅格规范化**：label `ant-col-4` + control `ant-col-20` 填满 24 栅格，表单项 `margin-bottom: 20px` 呼吸留白
- [x] **`update_log_modify.html` 文案统一**："发布窗口"→"PMS发布窗口"，"发布时间"→"日志对外发布时间"，所有控件 placeholder 统一为"请输入"/"请选择"
- [x] **`update_log_modify.html` 发布类更新行内对齐**：PMS发布窗口和关联PMS系统 label 固定宽度 `white-space: nowrap` + 控件 `flex: 1` 同行排布，`align-items: center` 垂直居中
- [x] **progress-doc skill v1.1.0**：新增铁律——更新时间必须取系统时间（`date +%Y-%m-%d`），禁止推断；打包为 progress-doc-skill.zip 上传 tdrive

### 🔄 进行中

- [ ] **操作手册 PRD**：待用户审阅后反馈修改点
- [ ] **`manual_workspace.html` 结构化模板**：编辑页增加操作步骤/注意事项/常见问题分区

### ⏳ 待办

- [ ] 更新日志方案 PRD 落文档（方案已定，待写入）
- [ ] 应用目录方案 vs 更新日志方案待用户决策
- [ ] 产品蓝图二（操作手册模块展开）暂缓

---

## 3. 交付物清单

### 3.1 workspace 原型（`/workspace/prototype/`，已同步 GitHub）

```
prototype/
├── index.html                    # 原型导航索引（已按模板重构：合并卡片、tag分类、PM署名）
├── progress.md                   # 本文档
├── client/
│   └── client.html               # 启航客户端首页
├── admin/
│   ├── manual_query.html         # 管理端-手册大盘列表
│   ├── manual_workspace.html     # 管理端-配置工作台
│   ├── update_log_query.html     # 管理端-日志查询列表
│   ├── update_log_modify.html    # 管理端-日志新增/编辑
│   ├── app_management.html       # 管理端-应用管理
│   └── app_category_management.html # 管理端-应用分类管理
├── slides/
│   ├── app_catalog_proposal.html # 应用目录来源方案（HTML PPT）
│   └── update_log_flow.html      # 更新日志方案泳道图（Mermaid）
├── blueprint/
│   └── manual_blueprint.html     # 产品蓝图（自用，用户自行修改）
├── assets/
│   ├── common.css                # 全局样式表
│   ├── nav-loader.js             # 导航动态加载器
│   ├── sidebar.tpl               # 侧边栏模板
│   └── top_nav.tpl               # 顶栏模板
└── skills/
    └── progress-doc.md           # 交接文档 skill
```

全部状态：✅

### 3.2 tdrive 资产库文档

| 文档 | 内容 | 状态 |
|------|------|------|
| `新一代核心系统_三平台协同设计.md` | 三平台定位、协同关系 | ✅ |
| `启航平台_应用分类.md` | 53 应用、10 大分类 | ✅ |
| `启航平台_应用目录来源方案.md` | 两方案对比、案例 | ✅ |
| `启航平台_操作手册_PRD.md` | 操作手册 PRD（466行） | ✅ |
| `知行社_产品需求说明书2026.05.md` | 知行平台历史 PRD | ✅ |
| `聆听平台-状态增加_列表导出_数据看板.md` | 聆听平台历史 PRD | ✅ |

### 3.3 workspace 参考文档（非交付物，仅本地）

| 文件 | 说明 |
|------|------|
| `启航平台_技术边界与决策记录.md` | 技术约束 |
| `启航平台_交互降噪规范.md` | 交互规范 |
| `启航平台_视觉规范_个人草稿.md` | 视觉草稿 |
| `启航平台_应用目录来源方案.md` | 方案本地副本 |
| `启航平台_应用分类.md` | 分类本地副本 |

---

## 4. 关键决策

### 4.1 应用目录方案
- 方案一：直接用 PMS 系统清单 / 方案二：基于业务分类做映射
- **尚未最终决策**，但会议已明确方向：需要做 PMS→用户视角映射，V1 预留关联口子

### 4.2 更新日志方案 ✅ 已定
- **方案确认**：运营支撑域创建发布日志，PMS 发布时关联日志
- 不是纯 PMS 自动推送，也不是纯运营手动维护，是混合模式
- 已有 Mermaid 泳道图，待扩展原型

### 4.3 操作手册
- V1 不做版本控制；左树右文，最多 2 层
- 富文本 + Markdown；按应用负责人控制权限
- **新增要求**：内容需结构化，为后期版本更新做关联；V1 预留 PMS 关联字段
- **三类展示端口**：普通员工（应用内）/ 管理人员（能力地图）/ PMS 侧（组件+接口）
- **时间节点**：830 MVP 上线；2期 PMS 发布单关联操作手册

### 4.4 启航首页双视图
- **能力地图（= 岗位场景地图）**：场景导航视角，具体形式待定
- **应用大厅（= 应用大盘）**：分类清单视角，53 应用卡片平铺
- 两者互补，非替代关系

### 4.5 产品蓝图
- 用户自行修改，AI 不再迭代

### 4.6 流程图 → 统一用 Mermaid

### 4.6 Git 工作流
- 仓库：`https://github.com/lastencore/Qihang.git`，main 分支
- 提交前必须先 `git pull`，再 `commit` + `push`
- 原型分发走 GitHub，不再用 tdrive zip
- **🚫 AI 不自行推送**：原型或文档更新后，只在用户明确说「推送」时才执行 git push。GitHub 上必须是用户验证过的版本

### 4.7 任务交接
- 维护 `progress.md`，用 progress-doc skill

---

## 5. 核心上下文

### 5.1 关键路径与认证
- 原型根目录：`/workspace/prototype/`
- 预览：`python3 -m http.server 8080` + notify
- GitHub 仓库：`https://github.com/lastencore/Qihang.git`，main 分支
- GitHub Token：需用户在新对话中提供（或使用 SSH key 方式 clone）
- Clone 命令模板：`git clone https://lastencore:<TOKEN>@github.com/lastencore/Qihang.git /workspace/prototype`
- tdrive 根 ID：`SrgvhjiFWppt`

### 5.2 关键数据
- 启航：53 应用、10 大分类
- PMS：284 系统（198 上线）、10 技术类别
- 操作手册目录：最多 2 层

### 5.3 三平台角色
- 启航 → 分发、知行 → 赋能、聆听 → 反馈

### 5.4 用户身份
- 产品经理：中华财险创新研发中心业务中台部

---

## 6. 下一步行动

### 新对话启动指令

> **第一步（初始化仓库）**：
> 新对话 workspace 为空，需要从 GitHub clone。用户提供 Token 后执行：
> ```bash
> git clone https://lastencore:<TOKEN>@github.com/lastencore/Qihang.git /workspace/prototype
> ```
> 如果 `/workspace/prototype/` 已存在旧数据，先 `rm -rf /workspace/prototype`。
>
> **第二步（读取进度）**：
> ```bash
> cat /workspace/prototype/progress.md
> ```
>
> **说明**：用户只需上传 `progress.md` 并告知 Token，clone 后所有原型文件、Git 历史都在。

### 当前可执行任务
1. **`manual_workspace.html` 结构化模板**：编辑页增加操作步骤/注意事项/常见问题三个分区
2. **PRD 修订**：新增应用目录章节、三类展示端口、结构化 + PMS 关联留口、830 MVP 时间节点
3. **更新日志方案 PRD**：方案已定（运营创建 + PMS 关联），落成 PRD 文档

### 待用户决策
- 能力地图/岗位场景地图的具体形式（待用户设计）
- 应用目录最终方案细节
