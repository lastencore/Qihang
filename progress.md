# 启航平台项目 — 任务交接文档

> 最后更新：2026-06-25
> 维护约定：阶段性产出完成后更新；新对话开始时先读取本文档

---

## 1. 任务概览

**当前目标**：完成操作手册 PRD 修改、更新日志方案原型扩展。产品蓝图由用户自行修改。

**项目背景**：
- 中华财险创新研发中心业务中台部，负责三平台产品工作
- **启航平台**（应用地图）：员工作业统一门户，53 个用户视角应用，10 大业务分类
- **知行平台**（学习赋能）：课程、考试、培训管理
- **聆听平台**（建议反馈）：三类建议（功能缺陷/产品建议/我有想法）、处理看板
- 三平台关系：启航「分发」→ 知行「赋能」→ 聆听「反馈」→ 启航「迭代」

**当前优先级**：
1. 🔄 操作手册 PRD 完善（待用户审阅反馈）
2. ⏳ 更新日志两种管理方案的原型扩展
3. 🟡 产品蓝图：用户自行修改中，AI 不再迭代

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

### 🔄 进行中

- [ ] **操作手册 PRD**：待用户审阅后反馈修改点

### ⏳ 待办

- [ ] 更新日志两种方案的原型页面扩展
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
│   └── update_log_modify.html    # 管理端-日志新增/编辑
├── slides/
│   ├── app_catalog_proposal.html # 应用目录来源方案（HTML PPT）
│   └── update_log_flow.html      # 更新日志方案泳道图（Mermaid）
├── blueprint/
│   └── manual_blueprint.html     # 产品蓝图（自用，用户自行修改）
└── assets/
    └── common.css                # 全局样式表
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
- **尚未决策**

### 4.2 更新日志方案
- 方案一：运营支撑域主导 / 方案二：PMS 全链路主导
- **尚未决策**，已有 Mermaid 泳道图

### 4.3 操作手册
- V1 不做版本控制；左树右文，最多 2 层
- 富文本 + Markdown；按应用负责人控制权限

### 4.4 产品蓝图
- 用户自行修改，AI 不再迭代

### 4.5 流程图 → 统一用 Mermaid

### 4.6 Git 工作流
- 仓库：`https://github.com/lastencore/Qihang.git`，main 分支
- 提交前必须先 `git pull`，再 `commit` + `push`
- 原型分发走 GitHub，不再用 tdrive zip

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
1. **PRD 修改**：用户审阅 `启航平台_操作手册_PRD.md`（tdrive）后反馈修改点
2. **更新日志原型**：用户确定方案后扩展 `admin/update_log_*` 原型

### 待用户决策
- 应用目录方案一 vs 方案二
- 更新日志方案一 vs 方案二
