// 公共导航加载器 - 改模板即生效
(function(){
var PM={'manual_query':'操作手册管理','manual_workspace':'操作手册管理','update_log_query':'更新日志管理','update_log_modify':'更新日志管理','app_management':'应用管理','app_category_management':'应用分类管理'};
var page=window.location.pathname.split('/').pop().replace('.html','');
var sel=PM[page]||'';
var pre='../';

function fixLinks(el){
  el.querySelectorAll('a[href]').forEach(function(a){
    var h=a.getAttribute('href');
    if(h&&!h.startsWith('http')&&!h.startsWith('javascript:')&&!h.startsWith('../')&&!h.startsWith('/')&&!h.startsWith('#'))
      a.setAttribute('href',h);
  });
}

function loadSidebar(){
  var sp=document.getElementById('nav-sidebar-placeholder');
  if(!sp)return;
  fetch(pre+'assets/sidebar.tpl').then(function(r){if(!r.ok)throw Error('HTTP '+r.status);return r.text()}).then(function(html){
    // 移除内嵌 <style> 避免干扰 HTML 解析
    html=html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi,'');
    var d=document.createElement('div');d.innerHTML=html;
    var s=d.querySelector('aside');
    if(!s)return;
    fixLinks(s);
    // 保留空占位div：fixed定位下防止右侧内容左移被遮挡
    // 保留 sidebar.tpl 原生 Ant Design 样式，只修正宽度（确保 flex 布局正常）
    s.style.flex = '0 0 208px';
    s.style.maxWidth = '208px';
    s.style.minWidth = '208px';
    s.style.width = '208px';
    s.style.transition = 'background-color 0.3s, min-width 0.3s, max-width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)';
    if(sel) s.querySelectorAll('li[title]').forEach(function(li){
      if(li.getAttribute('title')===sel)li.classList.add('ant-menu-item-selected');
    });
    sp.parentNode.replaceChild(s,sp);
  }).catch(function(){});
}

function loadHeader(){
  var hp=document.getElementById('nav-header-placeholder');
  if(!hp)return;
  fetch(pre+'assets/top_nav.tpl').then(function(r){if(!r.ok)throw Error('HTTP '+r.status);return r.text()}).then(function(html){
    html=html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi,'');
    var d=document.createElement('div');d.innerHTML=html;
    var h=d.querySelector('header');
    if(!h)return;
    hp.parentNode.replaceChild(h,hp);
  }).catch(function(){});
}

setTimeout(function(){loadSidebar();loadHeader();},0);
})();
