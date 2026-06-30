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
  fetch(pre+'assets/sidebar.html').then(function(r){return r.text()}).then(function(html){
    var d=document.createElement('div');d.innerHTML=html;
    var s=d.querySelector('aside');
    if(!s)return;
    fixLinks(s);
    if(sel) s.querySelectorAll('li[title]').forEach(function(li){
      if(li.getAttribute('title')===sel) li.classList.add('ant-menu-item-selected');
    });
    sp.parentNode.replaceChild(s,sp);
  });
}

function loadHeader(){
  var hp=document.getElementById('nav-header-placeholder');
  if(!hp)return;
  fetch(pre+'assets/top_nav.html').then(function(r){return r.text()}).then(function(html){
    var d=document.createElement('div');d.innerHTML=html;
    var h=d.querySelector('header');
    if(h) hp.parentNode.replaceChild(h,hp);
  });
}

document.addEventListener('DOMContentLoaded',function(){loadSidebar();loadHeader();});
})();