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
  var url=pre+'assets/sidebar.tpl';
  fetch(url).then(function(r){if(!r.ok)throw Error('HTTP '+r.status);return r.text()}).then(function(html){
    // 用 DOMParser 替代 innerHTML，避免内嵌 <style> 破坏解析
    var parser=new DOMParser();
    var doc=parser.parseFromString(html,'text/html');
    var s=doc.querySelector('aside');
    if(!s)return;
    fixLinks(s);
    // 删除空占位 div
    var prev=sp.previousElementSibling;
    if(prev&&prev.style&&prev.style.width==='208px'&&!prev.querySelector('aside,ul,nav'))prev.remove();
    // 导入到主文档
    var imported=document.adoptNode(s);
    // 去掉 fixed 定位，让 sidebar 正常参与父容器布局
    imported.classList.remove('ant-pro-sider-fixed');
    imported.style.position='';
    imported.style.paddingTop='';
    if(sel) imported.querySelectorAll('li[title]').forEach(function(li){
      if(li.getAttribute('title')===sel)li.classList.add('ant-menu-item-selected');
    });
    sp.parentNode.replaceChild(imported,sp);
  }).catch(function(){});
}

function loadHeader(){
  var hp=document.getElementById('nav-header-placeholder');
  if(!hp)return;
  var url=pre+'assets/top_nav.tpl';
  fetch(url).then(function(r){if(!r.ok)throw Error('HTTP '+r.status);return r.text()}).then(function(html){
    var parser=new DOMParser();
    var doc=parser.parseFromString(html,'text/html');
    var h=doc.querySelector('header');
    if(!h)return;
    var imported=document.adoptNode(h);
    hp.parentNode.replaceChild(imported,hp);
  }).catch(function(){});
}

setTimeout(function(){loadSidebar();loadHeader();},0);
})();
