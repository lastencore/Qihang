<!-- 管理端共用侧栏模板（参数化）。nav-loader 按 <body data-system> 只注入对应 <aside data-system>。
     新增系统：复制一份 <aside data-system="xxx"> 并填写该系统的菜单即可。 -->

<!-- ============ 启航平台 · 管理端 ============ -->
<aside data-system="qihang" class="ant-layout-sider ant-layout-sider-light ant-pro-sider ant-pro-sider-fixed ant-pro-sider-layout-mix ant-pro-sider-light" style="overflow: hidden; padding-top: 48px; flex: 0 0 208px; max-width: 208px; min-width: 208px; width: 208px;">
      <div class="ant-layout-sider-children">
       <div style="flex:1 1 0%; overflow: hidden auto;">
        <ul class="ant-menu ant-menu-root ant-menu-inline ant-menu-light ant-pro-sider-menu" data-menu-list="true" dir="ltr" role="menu" style="width: 100%;" tabindex="0">

         <li class="ant-menu-item ant-menu-item-only-child" data-menu-id="rc-menu-uuid-85005-3-/manual" role="menuitem" style="padding-left: 16px;" tabindex="-1" title="操作手册管理">
          <span class="ant-menu-title-content">
           <a href="manual_query.html">
            <span class="ant-pro-menu-item">
             <span aria-label="book" class="anticon anticon-book" role="img">
              <svg aria-hidden="true" data-icon="book" fill="currentColor" focusable="false" height="1em" viewBox="64 64 896 896" width="1em">
               <path d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-260 72h96v209.9L621.5 312 572 347.4V136zm220 752H232V136h280v296.9c0 3.3 1 6.6 3 9.3a15.9 15.9 0 0022.3 3.7l83.8-59.9 81.4 59.4c2.7 2 6 3.1 9.4 3.1 8.8 0 16-7.2 16-16V136h64v752z"></path>
              </svg>
             </span>
             <span class="ant-pro-menu-item-title">操作手册管理</span>
            </span>
           </a>
          </span>
         </li>

         <li class="ant-menu-item ant-menu-item-only-child" data-menu-id="rc-menu-uuid-85005-3-/updateLog" role="menuitem" style="padding-left: 16px;" tabindex="-1" title="更新日志管理">
          <span class="ant-menu-title-content">
           <a href="update_log_query.html">
            <span class="ant-pro-menu-item">
             <span aria-label="rocket" class="anticon anticon-rocket" role="img">
              <svg aria-hidden="true" data-icon="rocket" fill="currentColor" focusable="false" height="1em" viewBox="64 64 896 896" width="1em">
               <path d="M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 00-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0043.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0043.1-30.5 97.52 97.52 0 0021.4-60.8c0-8.4-1.1-16.4-3.1-23.8H864zM762.3 621.4c9.4 14.6 17 30.3 22.5 46.6H700V558.7a211.6 211.6 0 0162.3 62.7zM388 483.1V318.8l124-147 124 147V668H388V483.1zM239.2 668c5.5-16.3 13.1-32 22.5-46.6 16.3-25.2 37.5-46.5 62.3-62.7V668h-84.8zm388.9 116.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5-38.3 0-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 01-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5zM464 400a48 48 0 1096 0 48 48 0 10-96 0z"></path>
              </svg>
             </span>
             <span class="ant-pro-menu-item-title">更新日志管理</span>
            </span>
           </a>
          </span>
         </li>

         <li class="ant-menu-item ant-menu-item-only-child" data-menu-id="rc-menu-uuid-85005-3-/audit" role="menuitem" style="padding-left: 16px;" tabindex="-1" title="操作日志">
          <span class="ant-menu-title-content">
           <a href="javascript:void(0)">
            <span class="ant-pro-menu-item">
             <span aria-label="audit" class="anticon anticon-audit" role="img">
              <svg aria-hidden="true" data-icon="audit" fill="currentColor" focusable="false" height="1em" viewBox="64 64 896 896" width="1em">
               <path d="M296 250c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm184 144H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-48 458H208V148h560v320c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm440-88H728v-36.6c46.3-13.8 80-56.6 80-107.4 0-61.9-50.1-112-112-112s-112 50.1-112 112c0 50.7 33.7 93.6 80 107.4V764H520c-8.8 0-16 7.2-16 16v152c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16V780c0-8.8-7.2-16-16-16zM646 620c0-27.6 22.4-50 50-50s50 22.4 50 50-22.4 50-50 50-50-22.4-50-50zm180 266H566v-60h260v60z"></path>
              </svg>
             </span>
             <span class="ant-pro-menu-item-title">操作日志</span>
            </span>
           </a>
          </span>
         </li>

         <li class="ant-menu-submenu ant-menu-submenu-inline" role="none">
          <div aria-expanded="false" aria-haspopup="true" class="ant-menu-submenu-title" role="menuitem" style="padding-left: 16px;" tabindex="-1">
           <span class="ant-menu-title-content">
            <span class="ant-pro-menu-item" title="门户系统设置">
             <span aria-label="setting" class="anticon anticon-setting" role="img"><svg aria-hidden="true" data-icon="setting" fill="currentColor" focusable="false" height="1em" viewBox="64 64 896 896" width="1em"><path d="M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.6 58-32.8 79.2z"></path></svg></span>
             <span class="ant-pro-menu-item-title">门户系统设置</span>
            </span>
           </span>
           <i class="ant-menu-submenu-arrow"></i>
          </div>
          <ul class="ant-menu ant-menu-sub ant-menu-inline" role="menu">
           <li class="ant-menu-item ant-menu-item-only-child" role="menuitem" style="padding-left: 32px;" tabindex="-1" title="应用分类管理">
            <span class="ant-menu-title-content"><a href="app_category_management.html"><span class="ant-pro-menu-item"><span class="ant-pro-menu-item-title">应用分类管理</span></span></a></span>
           </li>
           <li class="ant-menu-item ant-menu-item-only-child" role="menuitem" style="padding-left: 32px;" tabindex="-1" title="应用管理">
            <span class="ant-menu-title-content"><a href="app_management.html"><span class="ant-pro-menu-item"><span class="ant-pro-menu-item-title">应用管理</span></span></a></span>
           </li>
          </ul>
         </li>

        </ul>
       </div>
       <div class="ant-pro-sider-links">
        <ul class="ant-menu ant-menu-root ant-menu-inline ant-menu-light ant-pro-sider-link-menu" data-menu-list="true" dir="ltr" role="menu" tabindex="0">
         <li class="ant-menu-item ant-menu-item-only-child ant-pro-sider-collapsed-button" data-menu-id="rc-menu-uuid-85005-2-collapsed" role="menuitem" style="padding-left: 16px;" tabindex="-1">
          <span class="ant-menu-title-content">
           <span aria-label="menu-fold" class="anticon anticon-menu-fold" role="img">
            <svg aria-hidden="true" data-icon="menu-fold" fill="currentColor" focusable="false" height="1em" viewBox="64 64 896 896" width="1em">
             <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"></path>
            </svg>
           </span>
          </span>
         </li>
        </ul>
       </div>
      </div>
     </aside>

<!-- ============ 知行平台 · 管理端（占位骨架，上传真实原型后填 href） ============ -->
<aside data-system="zhixing" class="ant-layout-sider ant-layout-sider-light ant-pro-sider ant-pro-sider-fixed ant-pro-sider-layout-mix ant-pro-sider-light" style="overflow: hidden; padding-top: 48px; flex: 0 0 208px; max-width: 208px; min-width: 208px; width: 208px;">
      <div class="ant-layout-sider-children">
       <div style="flex:1 1 0%; overflow: hidden auto;">
        <ul class="ant-menu ant-menu-root ant-menu-inline ant-menu-light ant-pro-sider-menu" data-menu-list="true" dir="ltr" role="menu" style="width: 100%;" tabindex="0">
         <li class="ant-menu-item ant-menu-item-only-child" role="menuitem" style="padding-left: 16px;" tabindex="-1" title="课程管理">
          <span class="ant-menu-title-content"><a href="#"><span class="ant-pro-menu-item"><span class="ant-pro-menu-item-title">课程管理</span></span></a></span>
         </li>
         <li class="ant-menu-item ant-menu-item-only-child" role="menuitem" style="padding-left: 16px;" tabindex="-1" title="考试管理">
          <span class="ant-menu-title-content"><a href="#"><span class="ant-pro-menu-item"><span class="ant-pro-menu-item-title">考试管理</span></span></a></span>
         </li>
         <li class="ant-menu-item ant-menu-item-only-child" role="menuitem" style="padding-left: 16px;" tabindex="-1" title="培训管理">
          <span class="ant-menu-title-content"><a href="#"><span class="ant-pro-menu-item"><span class="ant-pro-menu-item-title">培训管理</span></span></a></span>
         </li>
        </ul>
       </div>
       <div class="ant-pro-sider-links">
        <ul class="ant-menu ant-menu-root ant-menu-inline ant-menu-light ant-pro-sider-link-menu" data-menu-list="true" dir="ltr" role="menu" tabindex="0">
         <li class="ant-menu-item ant-menu-item-only-child ant-pro-sider-collapsed-button" role="menuitem" style="padding-left: 16px;" tabindex="-1"><span class="ant-menu-title-content"><span aria-label="menu-fold" class="anticon anticon-menu-fold" role="img"><svg aria-hidden="true" data-icon="menu-fold" fill="currentColor" focusable="false" height="1em" viewBox="64 64 896 896" width="1em"><path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"></path></svg></span></span></li>
        </ul>
       </div>
      </div>
     </aside>

<!-- ============ 聆听平台 · 管理端（占位骨架，上传真实原型后填 href） ============ -->
<aside data-system="lingting" class="ant-layout-sider ant-layout-sider-light ant-pro-sider ant-pro-sider-fixed ant-pro-sider-layout-mix ant-pro-sider-light" style="overflow: hidden; padding-top: 48px; flex: 0 0 208px; max-width: 208px; min-width: 208px; width: 208px;">
      <div class="ant-layout-sider-children">
       <div style="flex:1 1 0%; overflow: hidden auto;">
        <ul class="ant-menu ant-menu-root ant-menu-inline ant-menu-light ant-pro-sider-menu" data-menu-list="true" dir="ltr" role="menu" style="width: 100%;" tabindex="0">
         <li class="ant-menu-item ant-menu-item-only-child" role="menuitem" style="padding-left: 16px;" tabindex="-1" title="建议看板">
          <span class="ant-menu-title-content"><a href="#"><span class="ant-pro-menu-item"><span class="ant-pro-menu-item-title">建议看板</span></span></a></span>
         </li>
         <li class="ant-menu-item ant-menu-item-only-child" role="menuitem" style="padding-left: 16px;" tabindex="-1" title="建议导出">
          <span class="ant-menu-title-content"><a href="#"><span class="ant-pro-menu-item"><span class="ant-pro-menu-item-title">建议导出</span></span></a></span>
         </li>
         <li class="ant-menu-item ant-menu-item-only-child" role="menuitem" style="padding-left: 16px;" tabindex="-1" title="统计大盘">
          <span class="ant-menu-title-content"><a href="statistic.html"><span class="ant-pro-menu-item"><span class="ant-pro-menu-item-title">统计大盘</span></span></a></span>
         </li>
        </ul>
       </div>
       <div class="ant-pro-sider-links">
        <ul class="ant-menu ant-menu-root ant-menu-inline ant-menu-light ant-pro-sider-link-menu" data-menu-list="true" dir="ltr" role="menu" tabindex="0">
         <li class="ant-menu-item ant-menu-item-only-child ant-pro-sider-collapsed-button" role="menuitem" style="padding-left: 16px;" tabindex="-1"><span class="ant-menu-title-content"><span aria-label="menu-fold" class="anticon anticon-menu-fold" role="img"><svg aria-hidden="true" data-icon="menu-fold" fill="currentColor" focusable="false" height="1em" viewBox="64 64 896 896" width="1em"><path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"></path></svg></span></span></li>
        </ul>
       </div>
      </div>
     </aside>
