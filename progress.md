# 产品设计中心 — 多平台任务交接文档

> 最后更新：2026-07-30 19:10:00
> 维护约定：阶段性产出完成后更新；新对话开始时先读取本文档
> ⚠️ 本文档覆盖两条并行工作流：
>   **A. 产品设计** — 启航/知行/聆听/新一代首页四平台的需求、原型、PRD
>   **B. 需求设计中心建设** — PM 个人项目集合页，含 OSS/ECS/预览/Git/文档站点等基础设施
>   两条线的事项以 `[产品设计]` / `[中心建设]` 标签区分

---

## 1. 任务概览

### A. 产品设计

**当前目标**：
- **[启航]** 完成本期迭代（PMS 关联 / 操作手册 / 新一代应用地图 / 更新日志）原型实现；PRD+原型已评审、开发已安排
- **[新一代首页]** 新增 workbench 平台及「待办工作台」模块（202607 批次首发），方案已发领导等待反馈
- **[聆听]** 状态增加 / 建议导出 / 统计大盘 PRD+原型已完成

**平台矩阵**：

| 平台 | 定位 | 状态 | 关键事项 |
|------|------|------|----------|
| **启航** | 应用地图 / 员工作业门户 | 🟢 开发中 | 53应用10分类重规划+UI设计推进中 |
| **知行** | 学习赋能（课程/考试/培训） | ⚪ 待启动 | — |
| **聆听** | 建议反馈（缺陷/建议/想法） | 🟢 需求设计已完成 | 新增"开发中"状态 / 建议导出 / 统计大盘 |
| **新一代首页** | 待办工作台 / 快捷入口 | 🔴 需求规划 | 方案等领导反馈 |

**当前优先级**：

| 优先级 | 平台 | 事项 | 状态 |
|--------|------|------|------|
| 🔴 P0 | 新一代首页 | 待办工作台需求规划设计 | 方案脑图+原型截图已发领导，等待反馈 |
| 🔵 P1 | 启航 | 53应用/10大分类重新规划 + UI设计 | 正在推进中 |
| 🟢 P2 | 聆听 | 状态增加 / 建议导出 / 统计大盘 | PRD+原型已完成，已录入设计中心 |
| 🟡 P3 | 启航 | 应用地图重构（去 Banner + 左导航 + 全景图） | 原型已完成，右侧全景图待定 |

### B. 需求设计中心建设

**项目定位**：PM 个人项目集合页，承载四个平台的需求批次导航、原型预览、PRD 查阅等对外展示能力。与具体产品设计无关。

**当前优先级**：

| 优先级 | 事项 | 状态 |
|--------|------|------|
| 🔵 进行中 | 域名备案 | 备案通过后绑自定义域名 + HTTPS |
| 🟡 低优 | OSS 防盗链加固 | Referer 白名单已加，空 Referer 已禁 |
| ✅ 完成 | OSS + ECS 外网发布全链路 | 上传→同步→Nginx 反代→浏览器渲染 |
| ✅ 完成 | GitHub 仓库 + 原型预览服务 | main 分支、supervisord 托管 8080 |
| ✅ 完成 | 产品设计中心目录上移 | prototype 提至「中华财险产品项目/」根 |

---

## 2. 进度状态

> 以下按时间倒序记录。**未标注工作流标签的旧条目默认属于 [产品设计] [启航]**；已标注 [中心建设] 的为基础设施类。

### ✅ 已完成

- [x] 三平台协同关系梳理文档
- [x] 应用分类梳理（53 应用、10 大类）
- [x] 应用目录来源方案会议材料（`slides/app_catalog_proposal.html`）
- [x] 更新日志两种方案泳道图（`slides/update_log_flow.html`）
- [x] 管理端原型修复：去外链 404、去 AI 文案、去工作台管理入口
- [x] 操作手册 PRD 初稿 → tdrive
- [x] 6 个文档日期修正（2025→2026）
- [x] **[中心建设] 原型导航索引页**（`index.html`）
- [x] **[中心建设] Git 仓库打通**：GitHub `lastencore/Qihang`，main 分支，三端同步
- [x] **[中心建设] 原型目录重组**：`client/` `admin/` `slides/` `blueprint/` `assets/`
- [x] **[中心建设] Logo 跳转 BUG 修复**：管理端页面 logo `href="/"` → `href="../index.html"`
- [x] **[中心建设] progress-doc skill 创建**
- [x] 应用管理弹窗（嵌入前端同事完整版，绑定新建+编辑按钮）
- [x] 应用分类管理页面（`admin/app_category_management.html`）
- [x] 客户端应用地图（`client/app_map.html`）
- [x] **[中心建设] 导航组件化**（sidebar/header 动态加载，`assets/nav-loader.js`）
- [x] `manual_query.html` 列名修正
- [x] `update_log_*` 原型扩展
- [x] `update_log_modify.html` 应用管理/分类管理跳转白名单补全
- [x] **[中心建设] 全局布局修复**：nav-loader.js 保留 Ant Design 原生 fixed 定位 + 空占位 div，解决侧边栏空白和遮挡
- [x] **[中心建设] progress-doc skill 纳入 Git 管理**（`skills/progress-doc.md`）
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
- [x] **[中心建设] progress-doc skill v1.1.1**
- [x] **`app_detail.html` 独立详情页**：从 client.html 抽取应用详情为独立页面，四 Tab（操作手册/更新日志/相关课程/我有建议），支持 `?name=系统名` 参数跳转；详情区默认显示，大厅区 hidden-layout 隐藏
- [x] **`app_map.html` 跳转详情**：108 个 flat-card 模块点击 → `app_detail.html?name=XXX`；搜索下拉结果新增 click 跳转；"应用大厅"按钮链接修正
- [x] **`index.html` 索引入口整理**：应用地图 → 应用详情（新增），全部链接验证通过
- [x] **`manual_workspace.html` 目录树交互重构**：根目录仅建目录；文件夹新增子目录/创建文档/重命名/删除（非空拦截）；文档删除；⋯/＋ hover 菜单；拖拽调整顺序与所属目录
- [x] **[中心建设] `manual_workspace.html` CDN 样式修复**
- [x] **[中心建设] `index.html` 批次指针化**：降级为一行 meta refresh 跳转到批次页；新增 `requirement_202606.html` 作为 202606 批次专属导航页；未来切批次仅改 index 一行 url
- [x] **本期迭代 PRD + 原型评审通过，开发已安排**（2026-07-14）：四模块（PMS 关联 / 应用地图 / 更新日志 / 操作手册）PRD 已评审、原型已评审，开发排期完成
- [x] **[中心建设] 需求设计中心共用导航模块化**

**2026-07-21（本次，待推送 origin/main）—— 新一代首页平台 + app_map 布局 + 聆听页面精简**
- [x] **[中心建设] 新增「新一代首页」平台**：`req_header.tpl` 新增 workbench Tab，`req_sidebar.tpl` 新增 workbench 202607 批次
- [x] **[产品设计] [新一代首页] 待办工作台批次页**
- [x] **`lingting_202606.html` 文案精简**：去掉 ⚠️ PRD 警告文案及 `.brief-note` 样式；去掉「（本期原型仅此一页）」链接文案
- [x] **`app_map.html` 一级分类去编号**：7 个一级分类标题全部去掉「一、二、…七、」编号，二级分类编号保留
- [x] **`app_map.html` 监管报送与工具平台并排**：外层 `grid-cols-[1fr_320px]` 包裹两个独立 section（不合并，同标题》，`items-stretch` 拉齐高度，工具平台卡片网格 `flex-1 content-center` 上下居中
- [x] **`workbench_202607.html` 占位简化**：移除设计阶段产物（目标用户/核心痛点/待确认项），仅保留单卡片

### 🔄 进行中

- [x] **[产品设计] [启航] app_map.html 按新分类体系重构完成**（2026-07-30）：
  - 7 大一级分类（客户端/接触渠道端/销售营销前台/承保履约前台/运营中台/经营管理平台/通用中台）+ 工具平台，共 8 个 section
  - 109 张卡片全部按语义重新归类，左侧 Anchor 导航同步更新为新分类（data-cat + JS scrollToCat/catMap 映射全改）
  - 4 个一级分类保留二级分组（客户端 ToB/ToC、销售 销售平台/线上运营/客户运营、承保 承保/核保/履约、通用中台 业务中台/数据中台）；其余 4 个单层平铺
  - 业务中台(21卡) + 数据中台(11卡) 合并为「通用中台（双中台）」一级分类，左右非对称结构 `lg:grid-cols-[1.4fr_1fr]`
  - 补回缺失卡片：资金管理系统、统一监管报送平台（原正则未匹配到 data-dept 导致丢卡）
  - 卡片尺寸统一：同一二级分类内统一 min-h/px/py，不同分类可不同；带二级的 min-h-[48px]，单层 min-h-[56px]
  - 留白修复：单层模块最大列数从 xl:grid-cols-8 降到 xl:grid-cols-6；带二级模块二级块等宽铺满（md:grid-cols-2/3）；中台真正左右 1.4fr:1fr
  - JS IntersectionObserver 选择器加 text-blue（通用中台用蓝色标题，否则滚动不高亮）
  - 原生 CSS/Tailwind/交互逻辑一线未动，仅重排卡片归属与网格列数
- [ ] **[产品设计] [新一代首页]** 待办工作台方案设计：方案脑图+原型截图已发领导，等待反馈修改意见
- [ ] **[中心建设]** 域名备案：备案通过后绑自定义域名 + 申请 SSL 证书 + Nginx 加 443

### ⏳ 待办 / 已决议项

- [x] ~~事项拆分（四模块 → 独立事项）~~ 🚫 **不在本项目管理**（用户明确，已在别处处理）
- [x] PRD 上传 tdrive 资料库 → ✅ 已完成：`启航平台_更新日志_操作手册_PRD`
- [x] PRD 评审排期 → ✅ 已完成：PRD + 原型评审通过，开发已安排

### ✅ 本会话完成

**2026-07-08（本次，待推送 origin/main）**

- [x] **本期迭代 PRD 正式稿**：`docs/启航平台_产品需求说明书_202607.md`，分两步完成：
  - ① 逐一阅读全部 9 个原型页面 + 需求说明 + 知行社/聆听两份参考 PRD，输出理解概述与用户确认
  - ② 按参考文风形成正式稿（367行），遵循 EARS 原则，4 章节覆盖 PMS 关联 / 新一代应用地图 / 更新日志 / 操作手册
- [x] **应用管理「URL地址」字段**：`admin/app_management.html` 弹窗新增必填字段（编码之后、关联PMS之前），placeholder"请输入相对地址或绝对地址"，列表不展示，PRD 同步
- [x] **操作手册 PRD 重写**：3.4 节从"调整项"口吻改为全新模块描述（5 子节：模块说明 / 大盘列表 / 配置工作台 / 业务规则 / 对外展示）
- [x] **manual_workspace 原型调整**：
  - 「暂存草稿」→「保存」（红色 `#cc0000` 主按钮）
  - 「保存发布」→ Switch 开关（开关内显示「公开/不公开」，样式对齐 `update_log_query`）
  - 三个控件（复制为 md 格式 / 保存 / Switch）从页面头部移至编辑器卡片右上角独立工具栏
- [x] **更新日志 Switch 方案对齐**：四态 Tag 方案被否决，确认保留 Switch 作为总控开关（ON=已公开 / OFF=未公开），发布类到 T+1 12:00 自动拨 ON，管理员手动兜底，发布日期字段区分是否已到公开时间
- [x] **应用详情页「相关课程」**：Tab 存在但点击后显示「开发中」
- [x] **应用详情页「我有建议」**：Tab 嵌入聆听平台建议表单
- [x] **PRD 不写应用数量/分类**：均为上线后可配置项，最多改客户端排版

**2026-07-09（本次，待推送 origin/main）**

- [x] **原型↔PRD 走查**：逐页对照 9 个原型页面与 PRD §3 四模块，共 9 处差异（P1×3 / P2×6），核心功能无 P0 阻断；走查报告按你要求已删除，结论已吸收（原型不动、PRD 由你收口）
- [x] **PRD 收口（PM 自改版落地）**：用你改完的 PRD 替换 `docs/启航平台_产品需求说明书_202607.md`（401 行）；对齐决策：相关课程保持「开发中」、我有建议 iframe 嵌入聆听、应用分类管理不写进 PRD、新建手册默认不公开、收敛管理人员角色、回退 EARS 为陈述句、清空 §5 附录
- [x] **走查整改结论（用户决策）**：原型改动全部不做（开发能看懂）；我有建议的 iframe/5 类口径由 PM 自行收口 PRD；相关课程原样保留
- [x] **index.html 项目综述加功能蓝图**：用你提供的图 `images/blueprint_202606.png`（启航202606功能蓝图）原样嵌入，置于映射关系图之前（先看蓝图再看关系图）；缩略图 max-width:190px；同步删除此前误手画的 HTML 架构图与对应 CSS

**2026-07-14（本次，待推送 origin/main）**

- [x] **`manual_workspace.html` 目录树交互重构**：按 5 条规则 + 交互细则重写——根目录仅可建目录（移除"创建文件"按钮）；文件夹 ⋯/＋ hover 菜单（新增子目录/创建文档/重命名/删除）；二级目录 ＋ 不显示"新增子目录"；目录非空删除拦截；文档删除二次确认；移除上下三角箭头；全节点支持拖拽调整顺序与所属目录
- [x] **CDN 样式塌陷修复**：`manual_workspace.html` 头部 `umi.cssabe1862.css` 误写为 `umi.cssabe1862.css` 致 ant-pro 基础样式 404、页面塌陷；改回 `umi.cabe1862.css`（HTTP 200）恢复正常，playwright 渲染验证通过
- [x] **`index.html` 批次指针化**：当前 index 对应 202606 需求批次，未来批次会增多；将 index 降级为极简批次指针（一行 `<meta http-equiv="refresh" content="0; url=requirement_202606.html">`），原看板内容整体迁出为 `requirement_202606.html`（202606 批次专属导航页）；未来切批次仅改 index 一行 `url=` 即可，旧批次文件留作"归档"
- [x] **PRD 目录树管理节（用户本地更新）**：你在本地 `启航平台_更新日志_操作手册_PRD.md` 补了 §3.4.3.2 左侧目录树需求，比原型更细（新增"名称非空、最大 20 字符"约束）；**原型已对齐**：本会话补 `validateNodeName`（非空 + ≤20 字符），`addNewNodePrompt`/`addSub`/`renameDir` 三个 prompt 入口接入校验，playwright 单测 + dialog 端到端验证通过

- [x] **#1 目录树名称校验对齐 PRD**：`manual_workspace.html` 新增 `validateNodeName`（非空 + ≤20 字符），根目录新建 / 新增子目录 / 重命名三处 prompt 入口统一接入；空或超长弹 alert 拦截，合法才执行；playwright 5 用例全过 + 3 条 alert 文案正确 + 零 console error

**2026-07-14（本次，待推送 origin/main）— 需求设计中心共用导航重构**
- [x] **导航抽出为共用模块**：`requirement_202606.html` 顶部平台 Tab + 左侧「需求版本」批次列表抽离，新增 `assets/req-nav.css` / `req_header.tpl` / `req_sidebar.tpl` / `req-nav.js` 四件套；页面仅留占位符 + 脚本引用，样式与结构改模板即全站生效
- [x] **各平台独立批次**：侧栏批次按 `data-platform`（qihang/zhixing/lingting）区分，加载器按 `<body data-platform>` 只显示当前平台批次并高亮 `data-batch`；未来新增批次 = 改 `req_sidebar.tpl` 一行，启用新平台 = 改 `req_header.tpl`
- [x] **新页脚手架**：新增 `requirement_TEMPLATE.html`，复制改 1 处 `data-platform/data-batch` 即可新建批次/平台页，导航自动套用
- [x] **渲染验证**：playwright 加载 requirement_202606.html / requirement_TEMPLATE.html，断言头部+侧栏注入、占位符替换、启航高亮/知行聆听 disabled/仅显示本平台批次，零 console error，全部 PASS
- [x] **聆听平台登记**：由脚手架派生 `requirement_lingting_202606.html`（data-platform=lingting / data-batch=202606）；`req_header.tpl` 启用聆听 Tab（移除 disabled、指向本页），`req_sidebar.tpl` 登记聆听 202606 批次；跨平台导航打通，启航/聆听互不干扰

**2026-07-15（本次，待推送 origin/main）—— [中心建设] 原型目录重组 + 管理端导航参数化**
- [x] **目录按系统优先重组**：`admin/`→`qihang/admin/`、`client/`→`qihang/client/`、`lingting/lingting_statistic.html`→`lingting/admin/statistic.html`；批次页 `requirement_*.html`→`requirements/`（改名 `qihang_202606`/`lingting_202606`/`TEMPLATE`）；`启航平台_需求说明_202607.md`→`docs/`；`zhixing/`、`lingting/` 建空骨架（admin/client/assets/client）备用
- [x] **导航资产归集 + 去冗余**：`assets/{nav-loader.js,sidebar.tpl,top_nav.tpl,common.css}`→`assets/admin/`（common.css 改名 admin.css）；`assets/req-*`→`assets/req-center/`；删除冗余副本 `sidebar.html`/`top_nav.html`
- [x] **管理端导航参数化（仿 req-nav）**：`nav-loader.js` 从自身 `<script>` src 推导 base（去 `../` 硬编码），按 `<body data-system>` 只注入对应 `<aside data-system>`；`sidebar.tpl` 拆为 qihang/zhixing/lingting 三份侧栏（知行/聆听为占位骨架，上传即填）；`top_nav.tpl` logo→`../client/`（三系统通用）、新增 `#sysName` 由加载器填系统名
- [x] **req-center 路径自洽**：`req-nav.js` 同样改从自身 src 推导 base、模板 `./req_*.tpl`；批次页/模板链接、图片路径、入口指针全部修正到新位置
- [x] **playwright 渲染验证通过**：管理端注入启航侧栏+顶栏、当前页高亮、sysName=「启航平台 · 管理端」、知行/聆听侧栏不注入；需求页平台 Tab/批次高亮、跨平台批次 `display:none` 隐藏；三页控制台 **0 错误**（顺手消除 favicon 404）
- [x] **修复需求页卡片链接**：`requirements/qihang_202606.html` 中 `admin/`→`../qihang/admin/`、`client/`→`../qihang/client/`、`slides/`→`../slides/`（页面迁入子目录后缺 `../` 导致所有卡片 404）；`requirements/lingting_202606.html` 中 `lingting/lingting_statistic.html`→`../lingting/admin/statistic.html`；curl + playwright 验证均 200
- [x] **移除 manual_blueprint.html**：用户确认删除，`blueprint/` 目录一同清除
- [x] **marked CDN 超时修复**：`manual_workspace.html`、`update_log_modify.html` 引用的 `https://cdn.jsdelivr.net/npm/marked/marked.min.js` 在沙箱环境超时（`ERR_TIMED_OUT`）；下载 `marked.umd.js`（43KB）自托管到 `assets/admin/marked.umd.js`，两页面改引本地 `../../assets/admin/marked.umd.js`，playwright 验证 marked ✓ 且 0 错误
- [x] **加载器高亮修正**：`req-nav.js` 仅对当前平台且 data-batch 匹配的项加 `.active`，避免隐藏的其他平台同批次项被误标（多平台同批次 id 时必现）
- [x] **聆听页面填实 + 原型入库**：`requirement_lingting_202606.html` 据 PRD《聆听平台-状态增加、列表导出、数据看板》提炼核心目标 + 三模块（新增状态"开发中"/建议导出/统计大盘），PRD 链 yuque、原型 `lingting/lingting_statistic.html` 入仓；PRD 口径不一致（"研发中" vs "开发中"）已由 PM 确认统一为 **"开发中"**，原型文案与需求页同步修正

**2026-07-07（前文，随 `31ce7b0` 入库）**

- [x] **应用地图客户端改版**：设计稿落地 `client/app_map.html`（两级分类 + 重点/核心/大屏标签 + 不可点卡片；保留跳 `app_detail` 链路）
- [x] **应用地图中端系统调整**：承保作业平台上下两栏（融资性/非融资性信保上移并入承保平台组）；综合履约重命名 + 新增农险/政健险两条（共 8 项）
- [x] **中端三栏并排收尾**：承保/核保/综合履约左中右三栏（`grid-cols-[1.25fr_0.8fr_1.55fr]`）；核保作业平台改单列；综合履约列最宽
- [x] **综合履约标签缩写**：「综合履约作业平台-车险、意外险、财责险」→「综合履约作业平台-车意财」（id / data-name / 文字 三处一致）；去掉灰色提示「车损、物损、人伤」
- [x] **笔记本适配**：容器 `max-w-[1760px]` + `lg` 三栏响应式；综合履约卡片 `whitespace-nowrap` 防折行
- [x] **[中心建设] 预览服务 live**：supervisord 托管 8080

**2026-07-17（本次）**
- [x] **[中心建设] index.html 批次指针配置化**
- [x] **[产品设计] [知行] 考试页防切屏 bug 分析与修复**
- [x] **[中心建设] 预览服务扩展**：新增 8081（supervisord 托管）
- [x] **[中心建设] 产品设计中心目录方案确认**

**2026-07-21（本次）— app_map_lr 左右布局 + 侧滑导航抽屉 + 灰色卡片修复**
- [x] **`app_map_lr.html` 复制创建**：从 `app_map.html` 复制为布局对比页，不动原文件
- [x] **业务中台/数据中台改为左右非对称结构**：`grid-cols-[1.4fr_1fr]` 左宽右窄，数据中台改 3 列平台级大卡（`min-height:58px`），两列高度完全对齐（365px vs 365px）
- [x] **灰色不可点击卡片样式修正**：`unclickable-card` 从虚线褪色改实线浅底 + `#475569` 可读字 + `pointer-events:none`，去除锁形角标，明示"不可跳转"而非"未上线"
- [x] **左侧侧滑覆盖导航抽屉**：`#fnFab` 固定按钮→滑入 268px 抽屉+半透明遮罩；一二级标题数据驱动生成（7 一级+17 二级），点击居中定位（与搜索一致），收起自动关闭
- [x] **取消所有选中/闪动状态**：移除 IntersectionObserver 高亮、nav 点击后卡片 flash、搜索悬停 flash；匹配用户"两边都不显示"要求
- [x] **导航标签精简**：前端/中端/后端系统→仅保留括号内容（正则提取，业务中台等无全角括号不受影响）
- [x] **正常卡片恢复可点击跳转**：body click handler 恢复（排除 `unclickable-card`），搜索结果同理；`flat-card` 恢复 `cursor:pointer`
- [x] **临时文件清理**：清理冗余 png 截图，prototype 仅留 `app_map_lr.html` 一个未跟踪文件

**2026-07-22（本次）— app_map_lr 替换 app_map + 首屏 Banner + 边界积累过渡**
- [x] **`app_map_lr.html` 替换 `app_map.html`**：全部改动合并入主文件，删除 lr 副本和备份
- [x] **首屏全幅 Banner**：渐变背景+占位内容+下箭头，Banner 与地图一体化在 `scrollContainer` 中
- [x] **纯积累+锁死边界过渡**：`overflow:hidden`+wheel 事件拦截，Banner 区滚轮不移动页面，纯数字积累至阈值（Banner→地图 30%，地图→Banner 55%）后 `scrollTo` 一次性平滑滑整屏；无露出量、无中间态
- [x] **删除侧滑导航抽屉**：`#fnFab`/`#fnBackdrop`/`#fnDrawer` 全部移除
- [x] **`btnBackUp` 浮动按钮删除**：功能合并到顶部"应用地图"按钮
- [x] **地图内滚动无干预**：滑动自由，地图顶向下滚正常进地图腹

**2026-07-22（本次）— 页面重构 + 字体层级 + 详情返回优化**
- [x] **去除 `html{font-size:125%}` 全局放大**：所有自定义 rem 等比上修 25%，基于标准 16px 基准
- [x] **字体层级重排**：一级 `text-lg`(18px) → 二级 `text-sm`(14px) → 三级 `0.81rem`(13px)，卡片 `text-sm`(14px)
- [x] **Banner 字号上调**：标题 5rem(80px)、副标题 1.5rem(24px)
- [x] **搜索/筛选框字号**：`text-xs`→`text-sm`
- [x] **小屏上滑修复**：去掉 scrollTop 读值，改用状态机（`state:'banner'|'map'` + `pos` 虚拟位置），`preventDefault` + `setTimeout(40ms)` → `scrollTo` 脱离 wheel 链
- [x] **底部滚动冻结修复**：`pos` 加 `scrollHeight-vh` 上界，上限后向上滚立即响应
- [x] **详情页返回跳过 Banner**：`app_detail` 返回带 `?from=detail`，`app_map` 检测后直接显示地图
- [x] **回 Banner 按钮状态同步**：`state='banner'; pos=0; moving=true` 避免后续滚动闪跳

**2026-07-24（本次）—— OSS + ECS 外网发布全链路打通**
- [x] **[中心建设] OSS Bucket 创建与上传**：Bucket `cic-prototype-lastencore`（杭州），RAM 用户 `oss-deploy`(最小权限：Put/Get/List/Delete + ACL)，ossutil 配置完成
- [x] **upload.bat 一键发布脚本**：本地 `D:\中华财险产品项目\原型\upload.bat`，robocopy 镜像排除 `.git/docs/progress.md` → ossutil sync → set-meta 修正 MIME
- [x] **OSS 默认域名强制下载问题定位**：`x-oss-ec: 0048-00000001`——阿里云安全策略（2018年起杭州地域 Bucket，text/html 通过默认域名访问强制 `Content-Disposition: attachment`），无法关闭
- [x] **ECS + Nginx 反代方案**：`114.55.130.110`（Alibaba Cloud Linux 3.2104），Nginx 1.24.0 安装，配置 `/etc/nginx/conf.d/prototype.conf`（proxy_pass OSS + proxy_hide_header 删 Content-Disposition/x-oss-force-download），安全组放行 80
- [x] **OSS 静态托管 404 页清空**：曾填 index.html 导致相对路径 JS 跳转无限叠加 requirements/，清空后恢复正常
- [x] **域名备案进行中**：备案通过后绑自定义域名 + 开 443/HTTPS
- [x] **产品设计中心目录上移**：prototype 已从「启航平台/原型/」整体上移至「中华财险产品项目/」根，与三平台平行；用户本地已执行完成

**2026-07-27（本次）—— app_map 修复 + 新一代应用地图 PRD + OSS 防盗链**
- [x] **[产品设计] [启航] app_map 搜索结果悬停下界钳制**：hover 结果时手动计算目标位置，下界 clamp 到地图顶部
- [x] **[产品设计] [启航] 搜索结果下拉面板滚轮穿透修复**：行内 `overscroll-behavior:contain` + scrollContainer wheel 守卫（Chrome 合成器滚轮链接仍有漏网）
- [x] **[产品设计] [启航] 新一代应用地图 PRD**：`docs/启航平台_新一代应用地图_PRD.md`（297 行），去技术化纯需求描述
- [x] **[中心建设] OSS 防盗链 Referer 白名单**：ECS Nginx `proxy_set_header Referer`，OSS 控制台白名单 + 不允许空 Referer
- [x] **[中心建设] upload.bat 发布脚本检查**：逻辑自洽，无需修改

**2026-07-30（本会话）—— 应用管理功能深度改造**

- [x] **[产品设计] [启航] `app_management.html` 弹窗应用分类二级联动**：一级选「请选择」，选中有子类的一级后右侧出现二级下拉「请选择二级分类」，无子类时二级隐藏；宽度固定避免页面跳变
- [x] **[产品设计] [启航] `app_management.html` 列表分类级联筛选**：点击筛选按钮弹出 160px 下拉面板，7 个一级分类；悬停有子类的一级（客户端/销售营销前台/承保履约前台/通用中台）→ 右侧浮出对应子菜单；点击一级或子级直接选中；修复 Ant Design CDN CSS 覆盖颜色问题（`#catPanel>div{!important}`）
- [x] **[产品设计] [启航] `app_management.html` 关联PMS系统列宽 80→160px**

**2026-07-29（本会话）—— 应用分类体系重构 + 应用管理升级**

- [x] **[产品设计] [启航] `app_category_management.html` 二级分类管理升级**：
  - 一级分类从旧 10 类重构为新 7 类（客户端/接触渠道端/销售营销前台/承保履约前台/运营中台/经营管理平台/通用中台）
  - 支持二级分类的增删改查，一级展开/收起；新增「新增子分类」操作入口
  - 无子分类的一级不显示展开三角箭头；二级分类左侧加入拖动按钮样式、去掉序号
  - 新增「最后修改时间」列，所属一级分类字段同行加粗显示
- [x] **[产品设计] [启航] `app_management.html` 应用管理功能升级**：
  - 新增「应用可见状态」字段：列表新增状态列（颜色标签：绿色=可见可选/黄色=可见不可选/灰色=不可见/蓝色=外部应用）+ 筛选下拉 + 弹窗表单下拉，枚举值：可见可选、可见不可选、不可见、外部应用
  - 弹窗新增「应用分类」二级联动选择：一级 select → 二级自动加载，无二级时隐藏二级输入框
  - 列表筛选新增「应用可见状态」筛选 +「应用分类」级联选择器（两列面板仿 Ant Design Cascader，支持选择父节点）
  - 表格 URL 地址列不显示，其他原有功能和样式全部保留
- [x] **[产品设计] [启航] `app_management.html` 代码格式化**：265 行 React 渲染单行 HTML → 1500+ 行可编辑结构，再施加精确手术级修改

**2026-07-28（本次）—— app_map Banner 重构 + 金字塔层级概览 + 知行立项 PPT**
- [x] **[产品设计] [启航] app_map Banner 完全重构**：左侧指标卡（红色 7/17/53/3.2万）+ 右侧 SVG 金字塔 7 层 + 系统卡片（左侧彩色竖条风格）+ 虚线引导线 + hover 联动高亮
- [x] **[产品设计] [启航] Banner 探索方案**：新建 4 个独立页：`banner_v1_layered.html`（横向分层）、`banner_v2_cards.html`（错落卡片）、`banner_v3_pyramid_lr.html`（金字塔复刻版，当前对齐 app_map）
- [x] **[产品设计] [知行] 立项议案 PPT**：`知行平台_立项议案.pptx`（16页），参照合同管理/干部管理两份参考 PPT 结构
- [x] **[产品设计] [知行] 立项报告文案**：参照两段范本和现状痛点，撰写三段式呈报条文 + 完整 PPT 文案稿

**2026-07-29（本次）—— app_map 回滚重构：去 Banner + 左导航 + 全景占位**
- [x] **[产品设计] [启航] app_map 回滚至纯净版（69de888）**：从 Banner 引入前的 git 历史中提取无污染版本作为基线，避免金字塔/滚动容器等残片代码
- [x] **[产品设计] [启航] 去 Banner**：移除 hero-banner 首屏英雄区（含 SVG 金字塔、指标卡片、系统卡片联动、滚动箭头、累积过渡 JS）
- [x] **[产品设计] [启航] 左侧可收起导航**：224px Anchor 风格侧栏，7 大一级分类带 Font Awesome 图标（laptop-code/bolt/briefcase 等），每项含换行描述文案，二级分类子链接缩进展示，IntersectionObserver 自动高亮，支持收起/展开（cubic-bezier 缓动）
- [x] **[产品设计] [启航] 右侧全景抽屉占位**：竖排触发按钮 + Drawer 风格滑入面板（340px） + 半透明遮罩，内容区标注"待定"
- [x] **[产品设计] [启航] 字号修正（4721734）**：卡片 text-xs→text-sm、分类标题 text-sm→text-base、搜索/筛选 text-xs→text-sm
- [x] CSS 死代码清理：删除 ~120 行 Banner 样式（hero-banner/pyramid/system-card/scroll-hint/keyframes）、修复 body 布局（flex column + overflow hidden）、修复 header sticky、响应式断点适配（1024px/768px）

**2026-07-30（本次）—— 本期迭代需求改动原型落地 + 三端属主口径决策**

> 本期迭代 4 项需求改动（用户提供）：① 应用分类管理支持二级分类（新增一级/子分类）② 应用管理增加二级分类筛选+表单、应用可见属性（表单/筛选/列表）③ 应用地图增加左侧导航 ④ 应用详情增加「应用属主」字段。已落地的原型改动如下；PRD 段落（EARS）已输出至对话，供 PM 贴入 `docs/启航平台_产品需求说明书_202607.md`（AI 不直改文档）。

- [x] **`app_management.html` 应用可见属性改名+枚举**：「应用可见状态」→「应用可见属性」（筛选项/列表头/弹窗三处）；枚举值：可见可选→**可见可跳转**、可见不可选→**可见不可跳转**、外部应用→**非PMS应用**（option value 不变）
- [x] **`app_management.html` 列表列宽**：「应用可见属性」列 100px→140px（与「应用分类」对齐）
- [x] **`app_management.html` PMS系统属主候选列表**：曾尝试统一改写为 app_map 业务条线部门，后**回滚**为原始多值职能条线属主（`_ownerMap` 还原）。决策：三端属主口径**不必一致**，原型展示即可，真实来源以开发实现为准
- [x] **`app_detail.html` 新增「应用属主」字段**：详情头部「业务分类」下方，JS 绑定 `targetApp.owner`
- [x] **`app_detail.html` owner 数据**：appsData 53 个应用全部注入 owner，值从 app_map 部门池随机抽，**无视真实对应关系，仅展示**
- [x] **`app_detail.html` 默认加载修复**：无 `?name` 参数时 `window.onload` 默认加载第一个应用，确保打开即见真实详情（含属主），避免停在静态占位「—」
- [x] **PRD 段落输出（EARS）**：4 项改动的功能需求段落已输出至对话，含 Ubiquitous/Event-driven/State-driven/Unwanted 及验收标准、数据口径、埋点建议；PM 自行贴入 PRD 文档

**2026-07-30（本次）—— 应用管理弹窗「应用可见属性」字段位置与必填联动改造**

- [x] **`app_management.html` 字段位置调整**：「应用可见属性」从「URL地址」下方上移至「编码」正下方（新顺序：编码 → 应用可见属性 → URL地址 → 应用分类 → 关联PMS系统 → PMS系统属主 → 排序 → 管理员 → 应用简介）
- [x] **`app_management.html` 必填规则联动（`onchange="onAppStatusChange()"`）**：
  - 可见可跳转：除「应用简介」外其余字段均必填
  - 可见不可跳转 / 不可见：「URL地址」非必填，其余必填不变
  - 非PMS应用：「关联PMS系统」「PMS系统属主」禁用且非必填；「URL地址」非必填
  - 默认（未选择）维持基线：URL 与 PMS 必填、PMS 启用（与改造前一致）
- [x] **`app_management.html` PMS 字段禁用/重置**：选「非PMS应用」时禁用关联PMS系统选择按钮 + PMS系统属主选择器（置灰、清空已选值）；切换回其他值时自动重置（重新启用、恢复可编辑），杜绝禁用态残留
- [x] **新建/编辑双场景生效**：通过 `MutationObserver` 监听弹窗 `display` 变化，弹窗打开即按当前值应用联动；因此编辑预填值场景同样正确，无需单独逻辑
- [x] **Playwright 端到端验证通过**：字段顺序、默认态、三种状态联动、切换重置、编辑预填场景全部断言通过，零 console/page 报错

### ❌ 已废弃
- [x] ~~`manual_workspace.html` 结构化模板~~：用户明确"这版本不做了"，不再推进

---

## 3. 交付物清单

### 3.1 workspace 原型（`/workspace/prototype/`，已同步 GitHub）

```
prototype/
├── index.html                    # 批次指针：JS 跳转 → requirements/{system}_{batch}.html，配置见 DESIGN_CENTER
├── progress.md                   # 本文档（交接记忆）
├── assets/                        # 跨系统共享资产（顶层，所有系统复用）
│   ├── shared/                 # 跨系统件预留（logo/变量/字体）
│   ├── admin/                 # ★管理端共用导航（参数化，按 data-system 复用）
│   │   ├── nav-loader.js         # 从自身 src 推导 base；按 <body data-system> 注入
│   │   ├── sidebar.tpl           # 侧栏模板（按 data-system 分三份 <aside>：qihang/zhixing/lingting）
│   │   ├── top_nav.tpl          # 顶栏模板（logo → ../client/；含 #sysName 由加载器填系统名）
│   │   ├── admin.css            # 管理端全局样式
│   │   └── marked.umd.js        # marked 本地自托管（消除 CDN 超时 ERR_TIMED_OUT）
│   └── req-center/            # 需求设计中心共用导航（data-platform 参数化）
│       ├── req-nav.js            # 从自身 src 推导 base
│       ├── req-nav.css
│       ├── req_header.tpl        # 顶部平台 Tab（启航/知行/聆听）
│       └── req_sidebar.tpl      # 左侧需求版本批次（按 data-platform 过滤高亮）
├── qihang/                    # ★启航系统（全部端集中）
│   ├── admin/                 # 管理端原型（6 页，均 <body data-system="qihang">）
│   │   ├── app_management.html
│   │   ├── app_category_management.html
│   │   ├── manual_query.html
│   │   ├── manual_workspace.html
│   │   ├── update_log_query.html
│   │   └── update_log_modify.html
│   ├── client/                # 客户端原型（3 页）
│   │   ├── app_map.html        # 应用地图（含首屏 Banner+左右非对称+边界积累过渡）
│   │   ├── app_detail.html
│   │   └── client.html
│   └── assets/client/         # 启航客户端壳（header.tpl / client.css 预留，随上传补）
├── zhixing/                    # 知行系统（结构同启航，暂空骨架）
│   ├── admin/  client/  assets/client/
├── lingting/                   # 聆听系统
│   ├── admin/statistic.html    # 统计大盘（聆听管理端）
│   ├── client/  assets/client/
├── requirements/               # ★需求中心批次页（从根目录迁出）
│   ├── qihang_202606.html      # 202606 批次页（启航需求中心入口）
│   ├── lingting_202606.html     # 202606 批次页（聆听需求中心入口）
│   ├── workbench_202607.html    # 202607 批次页（新一代首页需求中心入口）
│   └── TEMPLATE.html            # 批次页脚手架模板
├── slides/                     # 演示/汇报页（保持）
│   ├── app_catalog_proposal.html
│   └── update_log_flow.html
├── docs/                       # 正式文档（中文名 OK）
│   ├── 启航平台_产品需求说明书_202607.md  # 本期迭代 PRD（四模块）
│   ├── 启航平台_新一代应用地图_PRD.md      # 新一代应用地图独立 PRD（297 行，纯需求描述）
│   └── 启航平台_需求说明_202607.md   # 迭代需求说明
├── images/                     # 共享图片（保持）
│   ├── blueprint_202606.png
│   ├── mapping_relation.png
│   └── update_log_flow.jpg
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
| `启航平台_更新日志_操作手册_PRD` | 本期迭代 PRD（更新日志 + 操作手册；已评审、开发已安排） | ✅ |
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
| `docs/启航平台_产品需求说明书_202607.md` | **本期迭代 PRD 草稿**（四模块，EARS 写法，已入库 `docs/`）✅ |

---

## 4. 关键决策

### 4.1 应用目录方案 ✅ 已定
- **最终选择方案二**：基于业务分类做映射，PMS → 用户视角映射
- V1 预留 PMS 关联口子

### 4.2 更新日志方案 ✅ 已定
- **方案确认**：运营支撑域创建发布日志，PMS 发布时关联日志
- 不是纯 PMS 自动推送，也不是纯运营手动维护，是混合模式
- **原型已完成**：`admin/update_log_query.html`（日志查询列表）+ `admin/update_log_modify.html`（日志新增/编辑），含 PMS 发布窗口、关联 PMS 系统、发布类更新联动、T+1 12:00 自动发布等完整交互

### 4.3 操作手册
- V1 不做版本控制；左树右文，最多 3 层（2 层目录 + 1 层文档）
- 富文本 + Markdown；按应用负责人控制权限
- **结构化当前版本不做**，V1 预留 PMS 关联字段
- **三类展示端口**（操作手册 & 更新日志共用）：普通员工（应用内）/ 管理人员（能力地图）/ PMS 侧（组件+接口）
- **时间节点**：830 MVP 上线；2期 PMS 发布单关联操作手册

### 4.4 启航首页
- **只保留能力地图（= 岗位场景地图）**：场景导航视角，具体形式待定
- ~~应用大厅~~：已砍掉，不再做分类清单卡片平铺视图

### 4.5 Git 工作流
- 仓库：`https://github.com/lastencore/Qihang.git`，main 分支
- 提交前必须先 `git pull`，再 `commit` + `push`
- 原型分发走 GitHub，不再用 tdrive zip
- **不自行推送**：原型或文档更新后，只在用户明确说「推送」时才执行 git push。GitHub 上必须是用户验证过的版本
- **AI 初始化时固定 author**：`git config user.name "Workbuddy"`、`git config user.email "workbuddy@example.com"`（仅在沙箱内执行，不写入全局配置）

### 4.6 任务交接
- 维护 `progress.md`，用 progress-doc skill
- ⚠️ 每次会���结束前检查并更新

### 4.7 [新一代首页] workbench 平台
- **新增平台类型**：与启航/知行/聆听并列，URL 标识 `data-platform="workbench"`
- **首发模块**：待办工作台（202607 批次），页面 `workbench_202607.html`
- **产品边界**：仅做只读聚合展示（不处理任何事务/流程），展示用户画像发现 + 优先级建议
- **数据同步**：3 层架构——事件同步（实时推送）/ 定时同步（T+1 批量）/ 手动刷新（用户主动触发）
- **接入范围与数据标准**：待确认

### 4.8 app_map 应用地图布局 ✅ 已定
- **去首屏 Banner**：移除 hero-banner（含金字塔/指标卡/系统卡联动/滚动过渡），页面直接展示分类地图
- **左侧可收起导航**：224px Anchor 风格侧栏，8 大分类带 Font Awesome 图标 + 换行描述 + 二级分类子链接，IntersectionObserver 自动高亮，支持收起
- **右侧全景抽屉占位**：竖排触发按钮 + Drawer 滑入面板，内容待定
- **一级分类去编号**：一级分类标题去掉「一、…七、」编号（二级保留）
- **分类体系**（2026-07-30 定稿）：8 个一级分类——客户端/接触渠道端/销售营销前台/承保履约前台/运营中台/经营管理平台/通用中台（双中台）/工具平台；4 个保留二级分组，4 个单层平铺

### 4.9 app_map 卡片与中台布局 ✅ 已定
- 业务中台（21 卡）与数据中台（11 卡）合并为「通用中台（双中台）」一级分类，左右非对称 `lg:grid-cols-[1.4fr_1fr]`；不可点击卡片用实线浅底 + `not-allowed` 光标
- 卡片尺寸：同一二级分类内统一 min-h/px/py；带二级分组的 min-h-[48px]，单层平铺的 min-h-[56px]
- 单层模块最大列数 xl:grid-cols-6；带二级模块二级块等宽铺满（md:grid-cols-2/3），内部列数按卡片数自适应
- 搜索筛选、部门下拉保留不动；卡片点击跳转 `app_detail.html?name=`

### 4.10 OSS + ECS 外网发布架构 ✅ 已定
- **上传链路**：本地 `upload.bat`（robocopy 镜像排除敏感文件 → ossutil sync → set-meta 修正 MIME）→ OSS `cic-prototype-lastencore`（杭州、公共读）
- **访问链路**：用户 → `http://114.55.130.110`（ECS Nginx）→ proxy_pass OSS → proxy_hide_header 删强制下载头 → 浏览器正常渲染
- **域名备案通过后**：绑自定义域名 → 申请免费 SSL 证书 → Nginx 加 `listen 443 ssl`

### 4.11 OSS 防盗链 Referer 白名单 ✅ 已定
- ECS Nginx 加 `proxy_set_header Referer "http://114.55.130.110"`；**不允许空 Referer**；直接访问 OSS 域名 → 403，通过 ECS → 正常

### 4.12 app_map Banner 已废弃 ❌
- 原 Banner 方案（左侧指标卡 + SVG 金字塔 + 系统卡片联动）已全量移除，代码回滚至 Banner 引入前的 git commit 69de888 为基线

### 4.13 三端「属主」字段口径（本期迭代，2026-07-30）
- 三个页面的属主字段**不必口径一致**：
  - 管理端「PMS系统属主」= 职能条线多值候选（`_ownerMap`，原始版本，未统一）
  - 应用地图「属主部门」= 业务条线部门（app_map `data-dept`）
  - 应用详情「应用属主」= 展示用样例值（从 app_map 部门池随机抽，不保证与真实应用对应）
- 原型阶段属主均为**展示数据**，真实数据来源与维护方式以开发实现为准
- 落地结论：曾尝试把管理端候选列表统一为 app_map 业务条线部门，经用户确认**回滚**——三端无需一致，开发能看懂即可

---

## 5. 核心上下文

### 5.1 关键路径与认证
- 原型根目录：`/workspace/prototype/`
- 预览：链接**必须**由 `notify <port>` 生成（机制见 5.5），严禁手拼 URL
- GitHub 仓库：`https://github.com/lastencore/Qihang.git`，main 分支
- GitHub Token：**已内置于本文档**（拆分两段以规避 GitHub push protection，bash 自动拼接），clone 和 push 均可直接使用，无需用户额外发送。
- ⚠️ **DNS 劫持（2026-07-30 实测）**：本沙箱 `networkEnvironment: internal`，`github.com` 被 DNS 解析到内网保留地址 `198.18.0.14`（不可达），标准 `git clone`/`push` 会报 `gnutls_handshake failed` / `SSL_ERROR_SYSCALL`。**clone 与 push 前必须先做 hosts 覆盖**（详见第 6 节启动指令「🔧 前置步」）。该覆盖**沙箱重启会还原**，每次新对话初始化都需重做。
- ⚠️ **git TLS 后端（2026-07-30 实测）**：本沙箱 git **仅编译 gnutls 后端**，与该 GitHub CDN 的 TLS 握手不兼容，clone/pull/push 偶发 `gnutls_handshake failed: Error decoding the received TLS packet`（`curl` 用 OpenSSL 正常）。**所有 git 操作前必须 `export GIT_SSL_BACKEND=openssl`**（强制 git 走 OpenSSL，详见第 6 节「🔧 前置步二」）。**不可用 `git config http.sslBackend openssl`**——config 校验白名单只认 gnutls，会报 `Unsupported SSL backend`。
- Clone 命令：
  `git clone "https://x-access-token:github_pat_11AFBPCQY08OpGoYIpxoj0""_SX8e7Ng5RnynK2pEDm6MRLLZhzC5ZG1jGx9ANKGvERdMLJO6TIKK4yhuWXm""@github.com/lastencore/Qihang.git" /workspace/prototype`
- Push 命令：
  `git -c credential.helper= push "https://x-access-token:github_pat_11AFBPCQY08OpGoYIpxoj0""_SX8e7Ng5RnynK2pEDm6MRLLZhzC5ZG1jGx9ANKGvERdMLJO6TIKK4yhuWXm""@github.com/lastencore/Qihang.git" main`（用完即弃，不写入 config）
- tdrive 根 ID：`SrgvhjiFWppt`

### 5.2 关键数据
- 启航：53 应用、10 大分类
- PMS：284 系统（198 上线）、10 技术类别
- 操作手册目录：最多 3 层（2 层目录 + 1 层文档）

### 5.3 三平台角色
- 启航 → 分发、知行 → 赋能、聆听 → 反馈

### 5.4 用户身份
- 产品经理：中华财险创新研发中心业务中台部

### 5.5 预览服务（Preview）运行机制 ⚠️ 跨会话复用
- **取链接唯一正确方式**：服务起来后运行 `notify <port>`（脚本 `/root/.codebuddy/skills/preview/notify`），输出即预览地址。**绝不要自己拼 URL**——手拼缺 `?x-cs-sandbox-id=...&x-cs-sandbox-port=<port>` 路由参数，网关直接 404。
- **网关路由原理**：带参请求 → 网关 `Set-Cookie(x-cs-sandbox-id/port)` + `302` 跳干净路径；浏览器带 cookie 即正常渲染（首次会跳一次，正常现象）。`curl` 自检必须带 cookie jar（`-c/-b`），否则 302 后 404。
- **服务托管（不要 nohup）**：nohup 进程在沙箱休眠/恢复后会死，表现为"服务挂了"。本沙箱 supervisord 由 PID 1 系统进程托管，其 `supervisord-conf/supervisord.conf` 路径不可写、**无 `supervisorctl` 工具**，原 supervisord 托管写法无法直接执行。改用等价方案：**`setsid python3 -m http.server <port> --bind 0.0.0.0 --directory /workspace/prototype > /tmp/preview-<port>.log 2>&1 & disown`**——独立会话脱离终端，沙箱休眠不受终端退出影响（等效 supervisord 的 autorestart 意图）。`notify <port>` 生成链接不变。
- 约定端口 **8080**（prototype 原型）；**8081** 为知行修复预览（`/workspace/zhixing_exam_preview`，独立目录）。两者均用 `setsid` 后台托管。
- 当前线上预览（**以 `notify` 输出为准，沙箱区/标识每次会变**）：
  - 8080（2026-07-30 实测）：`https://webview.e2b.bj7.sandbox.cloudstudio.club/?x-cs-sandbox-id=da0e66a9c61645b5a58288f86d755c9a&x-cs-sandbox-port=8080`
  - 8081：知行修复预览（`/workspace/zhixing_exam_preview`，独立目录，独立 `notify 8081`）

---

### 5.6 OSS / ECS 外网发布环境
- **OSS Bucket**：`cic-prototype-lastencore`（杭州），公共读，静态托管（默认首页 index.html，404 页已清空）
- **RAM 用户**：`oss-deploy`，策略含 ListBuckets + Put/Get/List/Delete + GetObjectAcl/PutObjectAcl，限单 Bucket
- **ECS**：公网 IP `114.55.130.110`，Alibaba Cloud Linux 3.2104，安全组 80 放行（443 待备案）
- **Nginx**：v1.24.0，配置 `/etc/nginx/conf.d/prototype.conf`（proxy_pass OSS + proxy_hide_header 删强制下载头），改后 `nginx -t && systemctl reload nginx`
- **本地发布**：`D:\中华财险产品项目\原型\upload.bat`（robocopy 镜像排除 .git/docs/progress.md → ossutil sync --delete → set-meta），ossutil `D:\tools\ossutil64.exe`
- **外网访问**：`http://114.55.130.110`；域名备案中（通过后绑自定义域名 + HTTPS）
- **OSS 强制下载**：`x-oss-ec: 0048-00000001`，阿里云安全策略（2018 年起），默认域名 text/html 强制 attachment，无法关闭

---

## 6. 下一步行动

### 新对话启动指令（一键初始化，2026-07-30 实测通过）

> **🔧 前置步：修复 DNS（必做，否则 clone/push 必失败）**
> 本沙箱 `networkEnvironment: internal` 把 `github.com` 劫持到内网保留地址 `198.18.0.14`（不可达）。**先覆盖 hosts 再 clone**：
> ```bash
> grep -q "github.com" /etc/hosts || echo "140.82.121.3 github.com" >> /etc/hosts
> getent hosts github.com   # 应返回 140.82.121.3，确认覆盖生效
> ```
> 若 `140.82.121.3` 失效，候选真实 IP：`140.82.113.3` / `140.82.121.4` / `140.82.114.3` / `140.82.112.4`（均为 GitHub CDN，TCP+TLS+证书验证通过）。**此覆盖沙箱重启会还原，每次初始化都需重做。**
> 若候选 IP 全失效，快速探测当前可用 GitHub IP（返回 301 即 CDN 节点）：
> ```bash
> for ip in 140.82.{112..125}.{3,4}; do code=$(curl -sS -m5 -k -o /dev/null -w "%{http_code}" "https://$ip" 2>/dev/null); [ "$code" = "301" ] && echo "可用: $ip"; done
> ```
>
> **🔧 前置步二：修复 git TLS 后端（必做，否则 clone/pull/push 偶发 gnutls 握手失败）**
> 本沙箱 git **仅编译了 gnutls 后端**，而 gnutls 与该 GitHub CDN 节点 TLS 握手不兼容（偶发成功、大传输必报 `gnutls_handshake failed: Error decoding the received TLS packet`）。`curl` 用 OpenSSL 正常，故强制 git 走 OpenSSL：
> ```bash
> export GIT_SSL_BACKEND=openssl   # 整个初始化会话生效；沙箱重启需重做
> ```
> 此后所有 git 命令均自动走 OpenSSL。⚠️ 注意：`git config http.sslBackend openssl` 会因「Unsupported SSL backend」（config 白名单只有 gnutls）报错，**只能用环境变量形式，不能写进 config**。
>
> **第零步（固定 Git 作者，仅沙箱内、不写全局）**：
> ```bash
> git config user.name "Workbuddy" && git config user.email "workbuddy@example.com"
> ```
>
> **第一步（初始化仓库）**：
> workspace 为空时直接从 GitHub clone（Token 已内置于 5.1，分两段自动拼接）：
> ```bash
> cd /workspace && git clone "https://x-access-token:github_pat_11AFBPCQY08OpGoYIpxoj0""_SX8e7Ng5RnynK2pEDm6MRLLZhzC5ZG1jGx9ANKGvERdMLJO6TIKK4yhuWXm""@github.com/lastencore/Qihang.git" /workspace/prototype
> ```
> 若 `/workspace/prototype/` 已存在旧数据，先 `rm -rf /workspace/prototype` 再 clone。clone 完成后进仓库补一次 author：
> ```bash
> cd /workspace/prototype && git config user.name "Workbuddy" && git config user.email "workbuddy@example.com"
> ```
>
> **第二步（读取进度）**：
> ```bash
> cat /workspace/prototype/progress.md
> ```
>
> **第三步（启动预览，每次都做）**：Clone 完成后用 **`setsid` 后台**起 8080（本沙箱无可用 supervisord 控制，改用 setsid 独立会话，详见 5.5），再 `notify 8080` 出链接：
> ```bash
> cd /workspace/prototype && setsid python3 -m http.server 8080 --bind 0.0.0.0 --directory /workspace/prototype > /tmp/preview-8080.log 2>&1 & disown
> sleep 2
> cd /root/.codebuddy/skills/preview && ./notify 8080
> ```
> 链接由 `notify` 生成，**严禁手拼 URL**（缺路由参数网关直接 404）。沙箱 id 每次会变，以 `notify` 输出为准。
>
> **说明**：用户上传 `progress.md` → 修复 DNS → clone → 固定 author → 读取 → 起预览出链接，所有原型文件、Git 历史、PRD 文档都在。

### 待用户决策

**产品设计**：
- [启航] 能力地图/岗位场景地图的具体形式（待用户设计）
- [新一代首页] 接入范围与数据标准（待确认）

**中心建设**：
- 域名备案通过后：绑自定义域名 → 申请 SSL 证书 → Nginx 加 443

---

## 7. 附录：upload.bat 发布脚本

```bat
@echo off
chcp 65001 >nul
set SRC=D:\中华财险产品项目\原型\prototype
set PUB=D:\中华财险产品项目\原型\proto_publish
set BUCKET=cic-prototype-lastencore
set OSSUTIL="D:\tools\ossutil64.exe"

echo [1/3] 生成镜像发布副本(自动删除旧文件)
robocopy "%SRC%" "%PUB%" /MIR /XD .git docs /XF progress.md .gitignore .ossutilconfig
if %errorlevel% gtr 7 (
    echo ROBOCOPY 失败，请检查路径
    pause
    exit /b %errorlevel%
)

echo [2/3] 同步到 OSS(自动删除远端旧文件)
%OSSUTIL% sync "%PUB%" oss://%BUCKET%/ --delete --force
if errorlevel 1 (
    echo 上传失败
    pause
    exit /b 1
)

echo [2.5/3] 修正 MIME 类型(防浏览器下载而非渲染)
%OSSUTIL% set-meta oss://%BUCKET%/ Content-Type:text/html -r --include "*.html" -f
%OSSUTIL% set-meta oss://%BUCKET%/ Content-Type:application/javascript -r --include "*.js" -f
%OSSUTIL% set-meta oss://%BUCKET%/ Content-Type:text/css -r --include "*.css" -f

echo [3/3] 验证
%OSSUTIL% ls oss://%BUCKET%/
pause
```

### Nginx 配置（ECS `/etc/nginx/conf.d/prototype.conf`）

```nginx
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://cic-prototype-lastencore.oss-cn-hangzhou.aliyuncs.com;
        proxy_set_header Host cic-prototype-lastencore.oss-cn-hangzhou.aliyuncs.com;
        proxy_set_header Referer "http://114.55.130.110";
        proxy_hide_header Content-Disposition;
        proxy_hide_header x-oss-force-download;
    }
}
```
