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
  if(!sp){console.warn('[nav-loader] placeholder #nav-sidebar-placeholder not found');return;}
  var url=pre+'assets/sidebar.html';
  fetch(url).then(function(r){
    if(!r.ok)throw new Error('HTTP '+r.status);
    return r.text();
  }).then(function(html){
    var d=document.createElement('div');d.innerHTML=html;
    var s=d.querySelector('aside');
    if(!s){console.warn('[nav-loader] no <aside> in sidebar.html');return;}
    fixLinks(s);
    if(sel) s.querySelectorAll('li[title]').forEach(function(li){
      if(li.getAttribute('title')===sel) li.classList.add('ant-menu-item-selected');
    });
    sp.parentNode.replaceChild(s,sp);
  }).catch(function(err){
    console.error('[nav-loader] sidebar load failed:',err.message,'retrying with XHR...');
    var x=new XMLHttpRequest();
    x.open('GET',url);
    x.onload=function(){
      var d=document.createElement('div');d.innerHTML=x.responseText;
      var s=d.querySelector('aside');
      if(!s)return;
      fixLinks(s);
      if(sel) s.querySelectorAll('li[title]').forEach(function(li){
        if(li.getAttribute('title')===sel) li.classList.add('ant-menu-item-selected');
      });
      sp.parentNode.replaceChild(s,sp);
    };
    x.onerror=function(){console.error('[nav-loader] XHR sidebar load also failed');};
    x.send();
  });
}

function loadHeader(){
  var hp=document.getElementById('nav-header-placeholder');
  if(!hp){console.warn('[nav-loader] placeholder #nav-header-placeholder not found');return;}
  var url=pre+'assets/top_nav.html';
  fetch(url).then(function(r){
    if(!r.ok)throw new Error('HTTP '+r.status);
    return r.text();
  }).then(function(html){
    var d=document.createElement('div');d.innerHTML=html;
    var h=d.querySelector('header');
    if(h) hp.parentNode.replaceChild(h,hp);
  }).catch(function(err){
    console.error('[nav-loader] header load failed:',err.message,'retrying with XHR...');
    var x=new XMLHttpRequest();
    x.open('GET',url);
    x.onload=function(){
      var d=document.createElement('div');d.innerHTML=x.responseText;
      var h=d.querySelector('header');
      if(h) hp.parentNode.replaceChild(h,hp);
    };
    x.onerror=function(){console.error('[nav-loader] XHR header load also failed');};
    x.send();
  });
}

console.log('[nav-loader] script loaded, v=2');
// 用 setTimeout 0 确保 DOM 已解析，不依赖 DOMContentLoaded（Live Server 外部浏览器可能抢注事件）
setTimeout(function(){loadSidebar();loadHeader();},0);
})();