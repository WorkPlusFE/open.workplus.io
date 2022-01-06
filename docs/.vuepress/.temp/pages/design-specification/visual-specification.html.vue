<template><h1 id="视觉规范" tabindex="-1"><a class="header-anchor" href="#视觉规范" aria-hidden="true">#</a> 视觉规范</h1>
<h2 id="颜色" tabindex="-1"><a class="header-anchor" href="#颜色" aria-hidden="true">#</a> 颜色</h2>
<p>颜色在人机交互中，扮演着极具重要的角色，它传达品牌特色，凸显内容的强弱层次，传达关联性等信息。良好的色彩搭配，可以更好得帮助用户完成任务，执行操作。</p>
<p>经过了多年企业服务积累与实践，我们不断抽象视觉，沉淀出独有的色彩规范，满足不同企业级视觉文化价值观的需求。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>以下色彩规范主要展示不同场景，不同组件，颜色的使用规范，指引每个设计者或开发者做更好地判断和决策，所展示的具体色值以<code>恒拓高科</code>为例，仅供参考，并非指定使用。</p>
</div>
<h3 id="主题色" tabindex="-1"><a class="header-anchor" href="#主题色" aria-hidden="true">#</a> 主题色</h3>
<div id="w6s-theme"  class="el-row" style="margin-left: -6px; margin-right: -6px; margin-top: 12px">
    <div  class="el-col el-col-6" style="padding-left: 6px; padding-right: 6px;">
        <div class="theme-color-box" style="background-color: var(--primary)">
            <div class="theme-color-info">
                primary
                <div class="theme-color-value">{{ primary }} </div>
            </div>
        </div>
        <div class="theme-color-desc">通用主题色</div>
    </div>
    <div  class="el-col el-col-6" style="padding-left: 6px; padding-right: 6px;">
        <div class="theme-color-box" style="background-color: var(--secondary)">
            <div class="theme-color-info">
                secondary
                <div class="theme-color-value">{{ secondary }} </div>
            </div>
        </div>
        <div class="theme-color-desc">通用主题色(偏亮)</div>
    </div>
</div>
<h3 id="辅助色" tabindex="-1"><a class="header-anchor" href="#辅助色" aria-hidden="true">#</a> 辅助色</h3>
<div id="w6s-theme"  class="el-row" style="margin-left: -6px; margin-right: -6px; margin-top: 12px">
    <div  class="el-col el-col-6" style="padding-left: 6px; padding-right: 6px;">
        <div class="theme-color-box" style="background-color: var(--accent0)">
            <div class="theme-color-info">
                accent0
                <div class="theme-color-value">{{ accent0 }} </div>
            </div>
        </div>
        <div class="theme-color-desc">辅助色, 常用语红点提示, 警告⚠️等</div>
    </div>
</div>
<h3 id="文字" tabindex="-1"><a class="header-anchor" href="#文字" aria-hidden="true">#</a> 文字</h3>
<div id="w6s-theme"  class="el-row" style="margin-left: -6px; margin-right: -6px; margin-top: 12px">
    <div  class="el-col el-col-6" style="padding-left: 6px; padding-right: 6px;">
        <div class="theme-color-box" style="background-color: var(--primary-text)">
            <div class="theme-color-info">
                primary text
                <div class="theme-color-value">{{ primaryText }} </div>
            </div>
        </div>
        <div class="theme-color-desc">文字主颜色, 通常用在标题, 主体等一级内容</div>
    </div>
    <div  class="el-col el-col-6" style="padding-left: 6px; padding-right: 6px;">
        <div class="theme-color-box" style="background-color: var(--secondary-text)">
            <div class="theme-color-info">
                secondary text
                <div class="theme-color-value">{{ secondaryText }} </div>
            </div>
        </div>
        <div class="theme-color-desc">文字次颜色, 用与副标题或者描述等内容</div>
    </div>
    <div  class="el-col el-col-6" style="padding-left: 6px; padding-right: 6px;">
        <div class="theme-color-box" style="background-color: var(--tertiary-text)">
            <div class="theme-color-info">
                tertiary text
                <div class="theme-color-value">{{ tertiaryText }} </div>
            </div>
        </div>
        <div class="theme-color-desc">文字三级颜色, 表现相对较弱的场景</div>
    </div>
    <div  class="el-col el-col-6" style="padding-left: 6px; padding-right: 6px;">
        <div class="theme-color-box" style="background-color: var(--common-text0); color: #333333;  border: 0.3px dashed #A3A3A3">
            <div class="theme-color-info" style="color: #333333">
                common text0
                <div class="theme-color-value" style="color: #333333">{{ commonText0 }} </div>
            </div>
        </div>
        <div class="theme-color-desc">通用文字颜色, 一般为白色, 较深背景颜色时使用</div>
    </div>
</div>
<h3 id="icon" tabindex="-1"><a class="header-anchor" href="#icon" aria-hidden="true">#</a> icon</h3>
<div id="w6s-theme"  class="el-row" style="margin-left: -6px; margin-right: -6px; margin-top: 12px">
    <div  class="el-col el-col-6" style="padding-left: 6px; padding-right: 6px;">
        <div class="theme-color-box" style="background-color: var(--icf-primary)">
            <div class="theme-color-info">
                icf primary
                <div class="theme-color-value">{{ icfPrimary }} </div>
            </div>
        </div>
        <div class="theme-color-desc">icon 主颜色(iconfont等纯色icon)</div>
    </div>
</div>
<h3 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h3>
<div id="w6s-theme"  class="el-row" style="margin-left: -6px; margin-right: -6px; margin-top: 12px">
    <div  class="el-col el-col-6" style="padding-left: 6px; padding-right: 6px;">
        <div class="theme-color-box" style="background-color: var(--main-background); ">
            <div class="theme-color-info" style="color: #333333">
                main background
                <div class="theme-color-value" style="color: #333333">{{ mainBackground }} </div>
            </div>
        </div>
        <div class="theme-color-desc">页面主背景色</div>
    </div>
    <div  class="el-col el-col-6" style="padding-left: 6px; padding-right: 6px;">
        <div class="theme-color-box" style="background-color: var(--common-background0);  border: 0.3px dashed #A3A3A3">
            <div class="theme-color-info" style="color: #333333">
                common background0
                <div class="theme-color-value" style="color: #333333">{{ commonBackground0 }} </div>
            </div>
        </div>
        <div class="theme-color-desc">通用页面背景色, 一般为白色</div>
    </div>
</div>
<div id="w6s-theme"  class="el-row" style="margin-left: -6px; margin-right: -6px; margin-top: 12px">
    <div  class="el-col el-col-6" style="padding-left: 6px; padding-right: 6px;">
        <div class="theme-color-box-group">
            <div class="theme-color-box theme-color-box-border" style="background-color: var(--surface-background0-normal); ">
                <div class="theme-color-info" style="color: #333333">
                    surface background0 normal
                    <div class="theme-color-value" style="color: #333333">{{ surfaceBackground0Normal }} </div>
                </div>
            </div>
            <div class="theme-color-box theme-color-box-border" style="background-color: var(--surface-background1-normal); ">
                <div class="theme-color-info" style="color: #333333">
                    surface background1 normal
                    <div class="theme-color-value" style="color: #333333">{{ surfaceBackground1Normal }} </div>
                </div>
            </div>
            <div class="theme-color-box" style="background-color: var(--surface-background2-normal); ">
                <div class="theme-color-info" style="color: #333333">
                    surface background2 normal
                    <div class="theme-color-value" style="color: #333333">{{ surfaceBackground2Normal }} </div>
                </div>
            </div>
        </div>
        <div class="theme-color-desc">内容背景(正常状态), 包括列表, 卡片等具备层次感内容的背景, 数字越大, 层次越高, 越接近用户</div>
    </div>
    <div  class="el-col el-col-6" style="padding-left: 6px; padding-right: 6px;">
        <div class="theme-color-box-group">
            <div class="theme-color-box" style="background-color: var(--surface-background0-pressed); border-bottom: 0.3px dashed #A3A3A3">
                <div class="theme-color-info" style="color: #333333">
                    surface background0 pressed
                    <div class="theme-color-value" style="color: #333333">{{ surfaceBackground0Pressed }} </div>
                </div>
            </div>
            <div class="theme-color-box" style="background-color: var(--surface-background1-pressed); ">
                <div class="theme-color-info" style="color: #333333">
                    surface background1 pressed
                    <div class="theme-color-value" style="color: #333333">{{ surfaceBackground1Pressed }} </div>
                </div>
            </div>
            <div class="theme-color-box" style="background-color: var(--surface-background1-normal); ">
            </div>
        </div>
        <div class="theme-color-desc">内容背景(按下状态), 与"正常状态"一一对应</div>
    </div>
</div>
<h3 id="标题" tabindex="-1"><a class="header-anchor" href="#标题" aria-hidden="true">#</a> 标题</h3>
<div id="w6s-theme"  class="el-row" style="margin-left: -6px; margin-right: -6px; margin-top: 12px">
    <div  class="el-col el-col-6" style="padding-left: 6px; padding-right: 6px;">
        <div class="theme-color-box" style="background-color: var(--title-background);  border: 0.3px dashed #A3A3A3">
            <div class="theme-color-info" style="color: #333333">
                title background
                <div class="theme-color-value" style="color: #333333">{{ titleBackground }} </div>
            </div>
        </div>
        <div class="theme-color-desc">标题背景色</div>
    </div>
</div>
<h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3>
<div id="w6s-theme"  class="el-row" style="margin-left: -6px; margin-right: -6px; margin-top: 12px">
    <div  class="el-col el-col-6" style="padding-left: 6px; padding-right: 6px;">
        <div class="theme-color-box" style="background-color: var(--common-divider0);">
            <div class="theme-color-info" style="color: #333333">
                common divider0
                <div class="theme-color-value" style="color: #333333">{{ commonDivider0 }} </div>
            </div>
        </div>
        <div class="theme-color-desc">分割线主颜色</div>
    </div>
</div>
<h2 id="图标" tabindex="-1"><a class="header-anchor" href="#图标" aria-hidden="true">#</a> 图标</h2>
<p>整理中，敬请期待！</p>
<h2 id="字号" tabindex="-1"><a class="header-anchor" href="#字号" aria-hidden="true">#</a> 字号</h2>
<p>整理中，敬请期待！</p>
<h2 id="圆角" tabindex="-1"><a class="header-anchor" href="#圆角" aria-hidden="true">#</a> 圆角</h2>
<p>整理中，敬请期待！</p>
<h2 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h2>
<p>整理中，敬请期待！</p>
<h2 id="暗黑模式" tabindex="-1"><a class="header-anchor" href="#暗黑模式" aria-hidden="true">#</a> 暗黑模式</h2>
<p>在人机交互中，越来越多人关注并使用暗黑模式，渐渐地暗黑模式已经成为一款成熟产品必不可少的设计规范。除了在光线较弱的环境中，减少屏幕亮度，进而降低用户视觉疲劳感以及机器电量损耗，更进一步，通过暗黑模式层次凸显出内容，弱化干扰，让用户更加专注内容本身，提高工作专注力。</p>
<p>基于追求交互<code>舒适自然</code>，不破坏原有内容交互<code>层级关系</code>的原则，我们倾向于建议企业在设计自身主题的同时，也考虑暗黑模式的输出。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>👇下面为<code>恒拓高科</code>主题颜色对应的暗黑模式色彩规范。</p>
</div>
<darkTheme />
</template>

<style type="text/css">

    .theme-color-box-group .theme-color-box {
        border-radius: 0px;
    }

    .theme-color-box-group .theme-color-box:first-child {
        border-radius: 4px 4px 0 0;
    }

    .theme-color-box-group .theme-color-box:last-child {
        border-radius: 0 0 4px 4px;
    }

    .theme-color-box {
        border-radius: 4px;
        padding-left: 20px;
        padding-right: 20px;
        height: 74px;
        box-sizing: border-box;
        
    }

    .theme-color-box-group .theme-color-box-border:first-child {
        border-bottom-width: 0;

    }
    .theme-color-box-border {
        border: 0.3px dashed #A3A3A3
    }

    .theme-color-info {
        color: #fff;
        font-size: 14px;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }

    .theme-color-value {
        font-size: 12px;
        color: #fff;
        padding-top: 4px
    }

    .theme-color-desc {
        font-size: 14px;
        padding: 10px;
        color: #A3A3A3;
    }



    :root {
        --primary: #333333;
        --secondary: #007AFF;
        --accent0: #FF3B30;
        --accent1: #333333;
        --primary-text: #333333;
        --secondary-text: #666666;
        --tertiary-text: #333333;
        --common-text0: #FFFFFF;
        --main-background: #F5F5F5;
        --title-background: #FFFFFF;
        --tabbar-background: #FFFFFF;
        --nav-shadow: #DDDDDD;
        --surface-background0-normal: #FFFFFF;
        --surface-background0-pressed: #E4E5E6;
        --surface-background1-normal: #FFFFFF;
        --surface-background1-pressed: #E4E5E6;
        --surface-background2-normal: #F5F5F5;
        --common-background0: #FFFFFF;
        --common-background1: #F5F5F5;
        --common-divider0: rgba(0, 0, 0, 0.1);
        --icf-primary: #333333;
        --button-background: #007AFF;
        --popup-background: #FFFFFF;
        --toast-background: #333333;
        --tabbar-item-unselected: #333333;
        --tabbar-item-selected: #007AFF;
        --tabbar-item-text-unselected: #333333;
        --tabbar-item-text-selected: #F12525;
        --search-background: #F5F5F5;
        --page-control-selected: #007AFF;
        --page-control-unselected: #F5F5F5;


    }



</style>

<script>
    
	function themeColor(color) {
        if(typeof getComputedStyle != "function") {
            return
        }
        return window.getComputedStyle(document.documentElement).getPropertyValue(color)
    }
    

    export default {
    data () {
        return {
            primary: themeColor('--primary'),
            secondary: themeColor('--secondary'),
            accent0: themeColor('--accent0'),
            accent1: themeColor('--accent1'),
            primaryText: themeColor('--primary-text'),
            secondaryText: themeColor('--secondary-text'),
            tertiaryText: themeColor('--tertiary-text'),
            commonText0: themeColor('--common-text0'),
            icfPrimary: themeColor('--icf-primary'),
            mainBackground: themeColor('--main-background'),
            commonBackground0: themeColor('--common-background0'),
            commonBackground1: themeColor('--common-background1'),
            titleBackground: themeColor('--title-background'),
            surfaceBackground0Normal: themeColor('--surface-background0-normal'),
            surfaceBackground0Pressed: themeColor('--surface-background0-pressed'),
            surfaceBackground1Normal: themeColor('--surface-background1-normal'),
            surfaceBackground1Pressed: themeColor('--surface-background1-pressed'),
            surfaceBackground2Normal: themeColor('--surface-background2-normal'),
            commonDivider0: themeColor('--common-divider0'),
        }
    }


}


    
</script> 
