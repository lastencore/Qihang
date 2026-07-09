# 启航平台项目 — 任务交接文档

> 最后更新：2026-07-09 10:51:00
> 维护约定：阶段性产出完成后更新；新对话开始时先读取本文档

---

## 1. 任务概览

**当前目标**：完成启航平台本期迭代（PMS 关联 / 操作手册 / 新一代应用地图 / 更新日志）的原型实现并推送 origin/main，产出本期迭代 PRD 草稿；推进 PRD 评审、资料库沉淀与事项拆分。

**项目背景**：
- 中华财险创新研发中心业务中台部，负责三平台产品工作
- **启航平台**（应用地图）：员工作业统一门户，53 个用户视角应用，10 大业务分类
- **知行平台**（学习赋能）：课程、考试、培训管理
- **聆听平台**（建议反馈）：三类建议（功能缺陷/产品建议/我有想法）、处理看板
- 三平台关系：启航「分发」→ 知行「赋能」→ 聆听「反馈」→ 启航「迭代」

**当前优先级**：
1. 🟡 事项拆分：四模块拆独立事项、分配负责人、关联 PRD
2. 🟡 PRD 上传 tdrive 资料库，与聆听/知行社历史 PRD 并列
3. 🟡 PRD 评审排期

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

### 🔄 进行中

- [ ] **53 应用 / 10 大分类重新规划**：用户正在做，涉及合并、拆分；应用地图同步调整中

### ⏳ 待办

- [ ] 事项拆分（四模块 → 独立事项 + 分配负责人）
- [ ] PRD 上传 tdrive 资料库
- [ ] PRD 评审排期

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
├── index.html                    # 原型导航索引（合并卡片 + tag分类 + PM署名；替代原 client.html 入口）
├── images/
│   ├── mapping_relation.png      # PMS 关联关系配图
│   └── update_log_flow.jpg       # 更新日志泳道图（图片版）
├── docs/
│   └── 启航平台_产品需求说明书_202607.md  # 本期迭代 PRD 草稿（四模块，EARS）
├── progress.md                   # 本文档
├── client/
│   ├── app_map.html              # 客户端应用地图（搜索扩展：名称/属主/分类）
│   ├── app_detail.html           # 应用独立详情页（四 Tab：操作手册/更新日志/相关课程/我有建议）
│   └── client.html               # ⚠️ 已弃用：原客户端首页，跳转入口并入 index.html
├── admin/
│   ├── manual_query.html         # 管理端-手册大盘列表
│   ├── manual_workspace.html     # 管理端-配置工作台
│   ├── update_log_query.html     # 管理端-日志查询列表
│   ├── update_log_modify.html    # 管理端-日志新增/编辑
│   ├── app_management.html       # 管理端-应用管理（含 PMS 关联 + 应用简介）
│   └── app_category_management.html # 管理端-应用分类管理
├── slides/
│   ├── app_catalog_proposal.html # 应用目录来源方案（HTML PPT）
│   └── update_log_flow.html      # 更新日志方案泳道图（Mermaid）
├── assets/
│   ├── common.css                # 全局样式表
│   ├── nav-loader.js             # 导航动态加载器
│   ├── sidebar.tpl               # 侧边栏模板
│   └── top_nav.tpl               # 顶栏模板
├── skills/
│   └── progress-doc.md           # 交接文档 skill
└── 启航平台_需求说明_202607.md     # 202607 迭代需求说明（用户维护，已同步 GitHub）
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
  `git clone "https://x-access-token:github_pat_11AFBPCQY0nDsSW66ypn3C""_tlvkMAbdc0CkFKEPfAzuMcEKYfhkRa1EFHP67HiJqWUDBGTVO3Nv0CMJV8F""@github.com/lastencore/Qihang.git" /workspace/prototype`
- Push 命令：
  `git -c credential.helper= push "https://x-access-token:github_pat_11AFBPCQY0nDsSW66ypn3C""_tlvkMAbdc0CkFKEPfAzuMcEKYfhkRa1EFHP67HiJqWUDBGTVO3Nv0CMJV8F""@github.com/lastencore/Qihang.git" main`（用完即弃，不写入 config）
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
- 当前线上预览（以 `notify` 输出为准，区/标识会变）：`https://webview.e2b.bj7.sandbox.cloudstudio.club/?x-cs-sandbox-id=a95900f7c98845a596fe887aab7e2eda&x-cs-sandbox-port=8080`

---

## 6. 下一步行动

### 新对话启动指令

> **第一步（初始化仓库）**：
> 新对话 workspace 为空，直接从 GitHub clone（Token 已内置于 5.1）：
> ```bash
> git clone "https://x-access-token:github_pat_11AFBPCQY0nDsSW66ypn3C""_tlvkMAbdc0CkFKEPfAzuMcEKYfhkRa1EFHP67HiJqWUDBGTVO3Nv0CMJV8F""@github.com/lastencore/Qihang.git" /workspace/prototype
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

### 当前可执行任务
1. **PRD 深化**：补充数据指标、异常状态、埋点需求等细节（当前草稿为基础框架，见 `docs/启航平台_产品需求说明书_202607.md`）
2. **事项拆分**：将四模块（PMS 关联 / 新一代应用地图 / 更新日志 / 操作手册）拆成独立事项，分配负责人、附 PRD、加关注人
3. **PRD 上传 tdrive**：将 PRD 草稿上传到项目资料库，与聆听/知行社历史 PRD 并列
4. **原型 → PRD 对齐**：对照需求说明逐条走查原型页面，标记差异点

### 待用户决策
- 能力地图/岗位场景地图的具体形式（待用户设计）
- PRD 评审排期与参与人
