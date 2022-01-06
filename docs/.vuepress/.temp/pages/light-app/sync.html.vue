<template><h1 id="账号同步" tabindex="-1"><a class="header-anchor" href="#账号同步" aria-hidden="true">#</a> 账号同步</h1>
<div class="custom-container tip"><p class="custom-container-title">阅读本文，你将了解：</p>
<ul>
<li>账号同步的方式和逻辑。</li>
</ul>
<p>相关账号同步接口，可访问<RouterLink to="/api/sync.html">服务端接口-账号同步</RouterLink>。</p>
</div>
<p>WorkPlus 提供<code>LDAP</code>、<code>API</code>、<code>Excel导入</code>等方式进行账号同步。同步程序通过定时任务读取企业组织人员数据以及人员离职、锁定、禁用等状态，并全量或增量地导入到 WorkPlus 平台中。</p>
<h2 id="同步方式" tabindex="-1"><a class="header-anchor" href="#同步方式" aria-hidden="true">#</a> 同步方式</h2>
<ul>
<li>第三方系统（如 OA系统）主动调用 WorkPlus 平台同步接口；</li>
</ul>
<p>若对数据的实时性要求较高的，建议选用该方式。可以通过对接 WorkPlus 平台的 <RouterLink to="/api/sync.html">账号同步</RouterLink> 接口，人员离职或者岗位变化等状态，都可及时同步到 WorkPlus 平台。</p>
<ul>
<li>经独立的同步程序定时同步数据；</li>
</ul>
<p>该方式是目前比较推荐的一种，通过适当的同步频率，配合增量（或全量）接口，同步人员到 WorkPlus 平台。WorkPlus 平台本身提供独立的同步程序，并在大量的客户环境上进行了验证和使用。</p>
<h2 id="同步逻辑" tabindex="-1"><a class="header-anchor" href="#同步逻辑" aria-hidden="true">#</a> 同步逻辑</h2>
<div class="custom-container tip"><p class="custom-container-title">需先创建用于同步的应用</p>
<p>同步接口需要使用<code>应用 access_token</code>，所以需要提前在管理后台上创建用于同步人员的应用。获取应用 Token 的方法，请查阅 <RouterLink to="/api/getStart.html#%E8%8E%B7%E5%8F%96-accesstoken">Token 申请-获取 AccessToken</RouterLink>。</p>
</div>
<p>从第三方系统同步账号到 WorkPlus 的逻辑：</p>
<ol>
<li>对组织数据进行组装并存到中间库；</li>
<li>对雇员信息进行组装并存到中间库；</li>
<li>对组织数据进行导入；</li>
<li>对雇员数据进行导入；</li>
<li>处理冗余组织数据，拿取 WorkPlus 某个组织下的所有的组织，跟组织中间库进行比较，对比记录要处理的组织数据；</li>
<li>处理冗余雇员数据（注意 WorkPlus 白名单信息，例如组织管理员、域管理员等非用户账号类，如不存在白名单要求可忽略），取 WorkPlus 某个组织下的所有的雇员，跟雇员中间库进行比较，对比记录要处理的雇员数据；</li>
<li>对要处理雇员数据进行操作（可以删除/设置离职）；</li>
<li>对要处理组织数据进行操作；</li>
<li>同步完成。</li>
</ol>
<p>相关账号同步接口，可访问<RouterLink to="/api/sync.html">服务端接口-账号同步</RouterLink>。</p>
</template>
