// 管理端共用导航加载器（参数化，仿 req-nav 范式）
// 用法：页面 <body data-system="qihang"> 内放
//   <div id="nav-sidebar-placeholder"></div>（布局侧栏位置）
//   <div id="nav-header-placeholder"></div>（布局顶栏位置）
// 然后引入本脚本：<script src="../../assets/admin/nav-loader.js"></script>
// 改 assets/admin/sidebar.tpl / top_nav.tpl 即全系统管理端生效。
// 新增系统：在 sidebar.tpl / top_nav.tpl 增加对应 data-system 块即可。
(function () {
    var body = document.body;
    var system = body.getAttribute('data-system') || 'qihang';
    var SYS_NAME = {
        qihang: '启航平台 · 管理端',
        zhixing: '知行平台 · 管理端',
        lingting: '聆听平台 · 管理端'
    };

    // 从自身 <script> 的 src 推导 base，避免硬编码相对路径（搬目录不再破链接）
    function baseUrl() {
        var s = document.currentScript;
        if (!s || !s.src) return '';
        return s.src.substring(0, s.src.lastIndexOf('/') + 1);
    }
    var BASE = baseUrl();

    function fillSysName() {
        var el = document.getElementById('sysName');
        if (el) el.textContent = SYS_NAME[system] || system;
    }

    function stripStyle(html) {
        return html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
    }

    function loadSidebar() {
        var sp = document.getElementById('nav-sidebar-placeholder');
        if (!sp) return;
        fetch(BASE + 'sidebar.tpl')
            .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.text(); })
            .then(function (html) {
                html = stripStyle(html);
                var d = document.createElement('div');
                d.innerHTML = html;
                // 只注入当前系统的侧栏（sidebar.tpl 内含多份 <aside data-system>）
                var s = d.querySelector('aside[data-system="' + system + '"]');
                if (!s) return;
                // 保留 Ant Design 原生 fixed 定位所需宽度
                s.style.flex = '0 0 208px';
                s.style.maxWidth = '208px';
                s.style.minWidth = '208px';
                s.style.width = '208px';
                s.style.transition = 'background-color 0.3s, min-width 0.3s, max-width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)';
                // 高亮当前页：按 href 末段匹配
                var page = location.pathname.split('/').pop();
                s.querySelectorAll('a[href]').forEach(function (a) {
                    if (a.getAttribute('href').split('/').pop() === page) {
                        var li = a.closest('li');
                        if (li) li.classList.add('ant-menu-item-selected');
                    }
                });
                sp.parentNode.replaceChild(s, sp);
            })
            .catch(function (e) { console.error('[nav-loader] 侧栏加载失败:', e); });
    }

    function loadHeader() {
        var hp = document.getElementById('nav-header-placeholder');
        if (!hp) return;
        fetch(BASE + 'top_nav.tpl')
            .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.text(); })
            .then(function (html) {
                html = stripStyle(html);
                var d = document.createElement('div');
                d.innerHTML = html;
                var h = d.querySelector('header');
                if (!h) return;
                hp.parentNode.replaceChild(h, hp);
                // 必须在 header 插入 DOM 后再填 #sysName（否则 getElementById 取不到）
                fillSysName();
            })
            .catch(function (e) { console.error('[nav-loader] 顶栏加载失败:', e); });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () { loadSidebar(); loadHeader(); });
    } else {
        loadSidebar(); loadHeader();
    }
})();
