<!-- 左侧「需求版本」批次导航（共用模块，按平台区分） -->
<!-- 新增批次：复制一行 <li class="version-item" data-platform="平台id" data-batch="批次id"><a href="页面.html">显示名</a></li> -->
<!-- 加载器会依据 <body data-platform> 只显示当前平台的批次，并高亮 data-batch 匹配的项 -->
<aside class="sidebar-timeline">
    <h3>需求版本</h3>
    <ul class="version-menu-list">
        <!-- 启航平台批次 -->
        <li class="version-item" data-platform="qihang" data-batch="202606">
            <a href="qihang_202606.html">202606 需求批次</a>
        </li>
        <!-- 未来示例（取消注释并改 href 即可）：
        <li class="version-item" data-platform="qihang" data-batch="202607">
            <a href="requirement_202607.html">202607 需求批次</a>
        </li>
        -->
        <!-- 知行平台批次（平台启用后接）
        <li class="version-item" data-platform="zhixing" data-batch="202607">
            <a href="zhixing_202607.html">202607 需求批次</a>
        </li>
        -->
        <!-- 聆听平台批次 -->
        <li class="version-item" data-platform="lingting" data-batch="202606">
            <a href="lingting_202606.html">202606 需求批次</a>
        </li>
        <!-- 新一代首页批次 -->
        <li class="version-item" data-platform="workbench" data-batch="202607">
            <a href="workbench_202607.html">202607 待办工作台</a>
        </li>
    </ul>
</aside>
