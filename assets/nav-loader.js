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
  var url=pre+'assets/sidebar.html';
  fetch(url).then(function(r){if(!r.ok)throw Error('HTTP '+r.status);return r.text()}).then(function(html){
    var d=document.createElement('div');d.innerHTML=html;
    var s=d.querySelector('aside');
    if(!s)return;
    fixLinks(s);
    // 删除前面空占位 div
    var prev=sp.previousElementSibling;
    if(prev&&prev.style&&prev.style.width==='208px'&&!prev.querySelector('aside,ul,nav'))prev.remove();
    // 强制可见 + 参与flex布局
    s.removeAttribute('style');
    s.style.cssText='flex:0 0 208px;max-width:208px;min-width:208px;width:208px;display:block;visibility:visible;opacity:1;position:relative;overflow:hidden auto;';
    if(sel)s.querySelectorAll('li[title]').forEach(function(li){
      if(li.getAttribute('title')===sel)li.classList.add('ant-menu-item-selected');
    });
    sp.parentNode.replaceChild(s,sp);
  }).catch(function(){});
}

function loadHeader(){
  var hp=document.getElementById('nav-header-placeholder');
  if(!hp)return;
  var url=pre+'assets/top_nav.html';
  fetch(url).then(function(r){if(!r.ok)throw Error('HTTP '+r.status);return r.text()}).then(function(html){
    var d=document.createElement('div');d.innerHTML=html;
    var h=d.querySelector('header');
    if(!h)return;
    h.removeAttribute('style');
    h.style.cssText='height:48px;line-height:48px;background:#fff;padding:0;z-index:9;position:relative;flex-shrink:0;';
    hp.parentNode.replaceChild(h,hp);
  }).catch(function(){});
}

setTimeout(function(){loadSidebar();loadHeader();},0);
})();
