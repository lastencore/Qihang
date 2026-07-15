// 需求设计中心 · 共用导航加载器
// 用法：页面 <body data-platform="qihang" data-batch="202606"> 内放
//   <div id="req-header-placeholder"></div>（body 首子）
//   <div id="req-sidebar-placeholder"></div>（main 首子）
// 然后引入本脚本。改 assets/req_*.tpl 即全站生效。
(function () {
    var body = document.body;
    var platform = body.getAttribute('data-platform') || 'qihang';
    var batch = body.getAttribute('data-batch') || '';

    function inject(placeholderId, url, onReady) {
        var ph = document.getElementById(placeholderId);
        if (!ph) return;
        fetch(url)
            .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.text(); })
            .then(function (html) {
                // 去掉模板里可能夹带的 <style>，避免污染解析
                html = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
                var d = document.createElement('div');
                d.innerHTML = html;
                var node = d.firstElementChild || d;
                if (onReady) onReady(node);
                if (ph.parentNode) ph.parentNode.replaceChild(node, ph);
            })
            .catch(function (e) { console.error('[req-nav] 加载失败:', url, e); });
    }

    function applyHeader(header) {
        header.querySelectorAll('.platform-tab[data-platform]').forEach(function (t) {
            if (t.getAttribute('data-platform') === platform) t.classList.add('active');
            else t.classList.remove('active');
        });
    }

    function applySidebar(aside) {
        // 只显示当前平台的批次，并仅对当前平台中 data-batch 匹配的项高亮
        aside.querySelectorAll('.version-item[data-platform]').forEach(function (li) {
            var isCurrent = li.getAttribute('data-platform') === platform;
            li.style.display = isCurrent ? '' : 'none';
            if (isCurrent && li.getAttribute('data-batch') === batch) li.classList.add('active');
            else li.classList.remove('active');
        });
    }

    // 等 DOM 就绪后注入（占位元素已在页面中）
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            inject('req-header-placeholder', 'assets/req_header.tpl', applyHeader);
            inject('req-sidebar-placeholder', 'assets/req_sidebar.tpl', applySidebar);
        });
    } else {
        inject('req-header-placeholder', 'assets/req_header.tpl', applyHeader);
        inject('req-sidebar-placeholder', 'assets/req_sidebar.tpl', applySidebar);
    }
})();
