// 公共导航加载器 - 改模板即生效
(function(){
var PM={'manual_query':'操作手册管理','manual_workspace':'操作手册管理','update_log_query':'更新日志管理','update_log_modify':'更新日志管理','app_management':'应用管理','app_category_management':'应用分类管理'};
var page=window.location.pathname.split('/').pop().replace('.html','');
var sel=PM[page]||'';
var pre='../';

console.log('[nav-loader] v=3, page='+page+', sel='+(sel||'(none)'));

function fixLinks(el){
  el.querySelectorAll('a[href]').forEach(function(a){
    var h=a.getAttribute('href');
    if(h&&!h.startsWith('http')&&!h.startsWith('javascript:')&&!h.startsWith('../')&&!h.startsWith('/')&&!h.startsWith('#'))
      a.setAttribute('href',h);
  });
}

function loadSidebar(){
  var sp=document.getElementById('nav-sidebar-placeholder');
  if(!sp){console.warn('[nav-loader] sidebar placeholder not found');return;}
  console.log('[nav-loader] sidebar placeholder found, fetching...');
  var url=pre+'assets/sidebar.html';
  fetch(url).then(function(r){
    console.log('[nav-loader] sidebar fetch status='+r.status);
    if(!r.ok)throw new Error('HTTP '+r.status);
    return r.text();
  }).then(function(html){
    console.log('[nav-loader] sidebar html length='+html.length);
    var d=document.createElement('div');d.innerHTML=html;
    var s=d.querySelector('aside');
    if(!s){console.warn('[nav-loader] no <aside>, first child:',d.firstElementChild?d.firstElementChild.tagName:'none');return;}
    console.log('[nav-loader] <aside> found, replacing placeholder...');
    fixLinks(s);
    if(sel) s.querySelectorAll('li[title]').forEach(function(li){
      if(li.getAttribute('title')===sel) li.classList.add('ant-menu-item-selected');
    });
    // 删除 placeholder 前面的空占位 div（原页面残留的 width:208px overflow:hidden）
    var prev=sp.previousElementSibling;
    if(prev && prev.style && prev.style.width==='208px' && !prev.querySelector('aside,ul,nav')) prev.remove();
    sp.parentNode.replaceChild(s,sp);
    console.log('[nav-loader] sidebar replaced OK, removed prev sibling:',!!prev);
  }).catch(function(err){
    console.error('[nav-loader] sidebar fetch failed: '+err.message);
  });
}

function loadHeader(){
  var hp=document.getElementById('nav-header-placeholder');
  if(!hp){console.warn('[nav-loader] header placeholder not found');return;}
  console.log('[nav-loader] header placeholder found, fetching...');
  var url=pre+'assets/top_nav.html';
  fetch(url).then(function(r){
    if(!r.ok)throw new Error('HTTP '+r.status);
    return r.text();
  }).then(function(html){
    var d=document.createElement('div');d.innerHTML=html;
    var h=d.querySelector('header');
    if(h) {hp.parentNode.replaceChild(h,hp);console.log('[nav-loader] header replaced OK');}
    else console.warn('[nav-loader] no <header> in top_nav.html');
  }).catch(function(err){
    console.error('[nav-loader] header fetch failed: '+err.message);
  });
}

setTimeout(function(){loadSidebar();loadHeader();},0);
})();
