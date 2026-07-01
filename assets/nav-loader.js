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
    // 删除空占位 div
    var prev=sp.previousElementSibling;
    if(prev&&prev.style&&prev.style.width==='208px'&&!prev.querySelector('aside,ul,nav'))prev.remove();
    // 去掉 fixed 定位
    s.classList.remove('ant-pro-sider-fixed');
    s.style.position='';
    s.style.paddingTop='';
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
