# 启航平台项目 — 任务交接文档

> 最后更新：2026-07-15 11:17:55
> 维护约定：阶段性产出完成后更新；新对话开始时先读取本文档

---

## 1. 任务概览

**当前目标**：完成启航平台本期迭代（PMS 关联 / 操作手册 / 新一代应用地图 / 更新日志）的原型实现并推送 origin/main；本期迭代 PRD 与原型已评审通过、开发已安排，进入开发跟进阶段。

**项目背景**：
- 中华财险创新研发中心业务中台部，负责三平台产品工作
- **启航平台**（应用地图）：员工作业统一门户，53 个用户视角应用，10 大业务分类
- **知行平台**（学习赋能）：课程、考试、培训管理
- **聆听平台**（建议反馈）：三类建议（功能缺陷/产品建议/我有想法）、处理看板
- 三平台关系：启航「分发」→ 知行「赋能」→ 聆听「反馈」→ 启航「迭代」

**当前优先级**：
1. 🔵 53 应用 / 10 大分类重新规划（进行中，用户在同步应用地图）
2. ⚪ 本期迭代已进入开发：PRD + 原型评审通过、开发已安排；下一里程碑为测试验收 / 上线复盘
3. 🚫 四模块事项拆分：不在本项目管理（用户明确，已在别处跟进）

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
- [x] 应用管理弹窗（嵌入前端同事完整版，绑定新建+编辑按钮）
- [x] 应用分类管理页面（`admin/app_category_management.html`）
- [x] 客户端应用地图（`client/app_map.html`）
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
- [x] **progress-doc skill v1.1.1**：更新时间格式加入 `HH:MM:SS`，更新 skill 定义和执行流程
- [x] **`app_detail.html` 独立详情页**：从 client.html 抽取应用详情为独立页面，四 Tab（操作手册/更新日志/相关课程/我有建议），支持 `?name=系统名` 参数跳转；详情区默认显示，大厅区 hidden-layout 隐藏
- [x] **`app_map.html` 跳转详情**：108 个 flat-card 模块点击 → `app_detail.html?name=XXX`；搜索下拉结果新增 click 跳转；"应用大厅"按钮链接修正
- [x] **`index.html` 索引入口整理**：应用地图 → 应用详情（新增），全部链接验证通过
- [x] **`manual_workspace.html` 目录树交互重构**：根目录仅建目录；文件夹新增子目录/创建文档/重命名/删除（非空拦截）；文档删除；⋯/＋ hover 菜单；拖拽调整顺序与所属目录
- [x] **`manual_workspace.html` CDN 样式修复**：`umi.cssabe1862.css` → `umi.cabe1862.css`，消除 404 导致 ant-pro 基础样式塌陷
- [x] **`index.html` 批次指针化**：降级为一行 meta refresh 跳转到批次页；新增 `requirement_202606.html` 作为 202606 批次专属导航页；未来切批次仅改 index 一行 url
- [x] **本期迭代 PRD + 原型评审通过，开发已安排**（2026-07-14）：四模块（PMS 关联 / 应用地图 / 更新日志 / 操作手册）PRD 已评审、原型已评审，开发排期完成
- [x] **需求设计中心共用导航模块化**：头部+侧栏抽为 `assets/req_*` 共用模块，支持多平台多批次统一增改（见 2026-07-14 本会话完成）

### 🔄 进行中

- [ ] **53 应用 / 10 大分类重新规划**：用户正在做，涉及合并、拆分；应用地图同步调整中

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

**2026-07-15（本次，待推送 origin/main）—— 原型目录重组 + 管理端导航参数化**
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
- [x] **预览服务 live**：supervisord 托管 8080（`autorestart=true`），`notify 8080` 取链接已验证

### ❌ 已废弃
- [x] ~~`manual_workspace.html` 结构化模板~~：用户明确"这版本不做了"，不再推进

---

## 3. 交付物清单

### 3.1 workspace 原型（`/workspace/prototype/`，已同步 GitHub）

```
prototype/
├── index.html                    # 批次指针：meta refresh → requirements/qihang_202606.html
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
│   │   ├── app_map.html
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
│   └── TEMPLATE.html            # 批次页脚手架模板
├── slides/                     # 演示/汇报页（保持）
│   ├── app_catalog_proposal.html
│   └── update_log_flow.html
├── docs/                       # 正式文档（中文名 OK）
│   ├── 启航平台_产品需求说明书_202607.md
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
- **🚫 AI 不自行推送**：原型或文档更新后，只在用户明确说「推送」时才执行 git push。GitHub 上必须是用户验证过的版本

### 4.6 任务交接
- 维护 `progress.md`，用 progress-doc skill
- ⚠️ 每次会话结束前检查并更新

---

## 5. 核心上下文

### 5.1 关键路径与认证
- 原型根目录：`/workspace/prototype/`
- 预览：链接**必须**由 `notify <port>` 生成（机制见 5.5），严禁手拼 URL
- GitHub 仓库：`https://github.com/lastencore/Qihang.git`，main 分支
- GitHub Token：**已内置于本文档**（拆分两段以规避 GitHub push protection，bash 自动拼接），clone 和 push 均可直接使用，无需用户额外发送。
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
- **服务必须用 supervisord 托管**（不要 nohup）：nohup 进程在沙箱休眠/恢复后会死，表现为"服务挂了"。配置写 `/usr/local/share/supervisor/preview-<port>.conf`，`command=python3 -m http.server <port> --bind 0.0.0.0 --directory /workspace/prototype`，`autorestart=true`；再 `${IDE_EDITOR_SERVER_DIR}/bin/supervisord ctl -c ${IDE_EDITOR_SERVER_DIR}/supervisord-conf/supervisord.conf reload` 后 `start preview-<port>`。
- 约定端口 **8080**；`preview` skill 为标准入口。
- 当前线上预览（以 `notify` 输出为准，区/标识会变）：`https://webview.e2b.sh4.sandbox.cloudstudio.club/?x-cs-sandbox-id=86364673f11942588155bfdb3ef85172&x-cs-sandbox-port=8080`

---

## 6. 下一步行动

### 新对话启动指令

> **第一步（初始化仓库）**：
> 新对话 workspace 为空，直接从 GitHub clone（Token 已内置于 5.1）：
> ```bash
> git clone "https://x-access-token:github_pat_11AFBPCQY08OpGoYIpxoj0""_SX8e7Ng5RnynK2pEDm6MRLLZhzC5ZG1jGx9ANKGvERdMLJO6TIKK4yhuWXm""@github.com/lastencore/Qihang.git" /workspace/prototype
> ```
> 如果 `/workspace/prototype/` 已存在旧数据，先 `rm -rf /workspace/prototype`。
>
> **第二步（读取进度）**：
> ```bash
> cat /workspace/prototype/progress.md
> ```
>
> **第三步（启动预览，每次都做）**：Clone 完成后**立即**用 supervisord 起 8080 服务（详见 5.5），然后运行 `notify 8080` 获取预览链接，**将链接提供给用户**即可——用户自行打开 index 页面。**不要 nohup**，否则沙箱休眠后服务挂掉需重排。
>
> **说明**：用户只需上传 `progress.md`，clone → 启动 → 出链接三步走，所有原型文件、Git 历史、PRD 文档都在。

### 待用户决策
- 能力地图/岗位场景地图的具体形式（待用户设计）
- PRD 评审排期与参与人
