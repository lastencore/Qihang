/* ============================================================
 * ★ 公共页脚加载器 —— 备案信息集中配置,改这里全站生效
 * 使用方式:在页面 </body> 前引入 <script src="<相对路径>/assets/footer-loader.js"></script>
 * 公安备案号通过后,只需把 POLICE_NO 常量填上,所有页面自动更新
 * ============================================================ */
(function () {
  /* ↓↓↓ 备案信息配置(唯一需要修改的地方)↓↓↓ */
  var ICP_NO = "浙ICP备2026059325号-1";
  var ICP_LINK = "https://beian.miit.gov.cn";
  var POLICE_NO = "浙公网安备33011002020242号"; // 公安备案号,通过后填写,留空则不显示
  var POLICE_LINK = "https://beian.mps.gov.cn/#/query/webSearch?code=33011002020242";
  var COPYRIGHT = "2026 创新研发中心 业务中台部 陈俊帆";
  /* ↑↑↑ 配置结束 ↑↑↑ */

  /* 移除管理端旧 footer(版权信息并入公共 footer,避免页面出现两行页脚) */
  var oldFooter = document.querySelector("footer.ant-layout-footer");
  if (oldFooter && oldFooter.parentNode) {
    oldFooter.parentNode.removeChild(oldFooter);
  }

  /* 从自身 script src 推导 base，使图标 src 在不同目录深度的页面都能正确解析
   * 优先用 currentScript（与 nav-loader.js 同款写法），避免依赖"最后一个 script 是自己"的脆弱假设 */
  var scriptSrc = (document.currentScript && document.currentScript.src) || (function () {
    var s = document.getElementsByTagName("script");
    return (s[s.length - 1] && s[s.length - 1].src) || "";
  })();
  var base = scriptSrc.substring(0, scriptSrc.lastIndexOf("/"));
  var POLICE_ICON = base + "/police_icon.png";

  /* 构建备案行 */
  var parts = [];
  parts.push('<a href="' + ICP_LINK + '" target="_blank" rel="noopener">' + ICP_NO + '</a>');
  if (POLICE_NO) {
    parts.push(
      '<a href="' + POLICE_LINK + '" target="_blank" rel="noopener" ' +
        'style="display:inline-flex;align-items:center;gap:5px;line-height:1;vertical-align:middle;">' +
        '<img src="' + POLICE_ICON + '" alt="" style="height:14px;width:14px;display:inline-block;">' +
        POLICE_NO +
      '</a>'
    );
  }

  var html =
    '<footer class="wb-global-footer" style="text-align:center;padding:14px 16px;font-size:12px;color:#999;line-height:1.8;font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,\'Helvetica Neue\',Arial,sans-serif;">' +
    '<div>' + COPYRIGHT + '</div>' +
    '<div>' + parts.join(' &nbsp;|&nbsp; ') + '</div>' +
    '</footer>';

  /* 智能定位插入点:
   * - 管理端(ant-layout-has-sider):插入到 section > div.ant-layout 末尾(原 ant-layout-footer 位置)
   *   保证 footer 在 main 之后、footer-bar 之前,跟随内容流
   * - 需求中心(.content-display-pane):插入到滚动容器内部末尾
   *   避免 body {height:100vh;overflow:hidden} 把 footer 挤到视口底部吸底
   * - 普通页面:body 末尾(正常文档流) */
  var container = null;
  var antLayout = document.querySelector("section.ant-layout-has-sider > div.ant-layout");
  if (antLayout) {
    container = antLayout;
  } else {
    var pane = document.querySelector(".content-display-pane");
    if (pane) container = pane;
  }
  (container || document.body).insertAdjacentHTML("beforeend", html);
})();