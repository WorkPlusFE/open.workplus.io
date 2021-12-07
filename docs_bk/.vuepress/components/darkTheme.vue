<template>
  <div class="theme-dark">
  <h2> 主题色 </h2>
  <div id="w6s-theme"  class="el-row" style="margin-left: -6px; margin-right: -6px; margin-top: 12px">
    <div  class="el-col el-col-6" style="padding-left: 6px; padding-right: 6px;">
        <div class="theme-color-box theme-color-box-border" style="background-color: var(--dark-primary)">
            <div class="theme-color-info-dark">
                primary
                <div class="theme-color-value-dark">{{ primary }} </div>
            </div>
        </div>
        <div class="theme-color-desc">通用主题色</div>
    </div>
    <div  class="el-col el-col-6" style="padding-left: 6px; padding-right: 6px;">
        <div class="theme-color-box" style="background-color: var(--dark-secondary)">
            <div class="theme-color-info-dark theme-color-accent-dark">
                secondary
                <div class="theme-color-value-dark theme-color-accent-dark">{{ secondary }} </div>
            </div>
        </div>
        <div class="theme-color-desc">通用主题色(偏亮)</div>
    </div>
</div>

<h2> 辅助色 </h2>
<div id="w6s-theme"  class="el-row" style="margin-left: -6px; margin-right: -6px; margin-top: 12px">
    <div  class="el-col el-col-6" style="padding-left: 6px; padding-right: 6px;">
        <div class="theme-color-box" style="background-color: var(--dark-accent0)">
            <div class="theme-color-info-dark theme-color-accent-dark">
                accent0
                <div class="theme-color-value-dark theme-color-accent-dark">{{ accent0 }} </div>
            </div>
        </div>
        <div class="theme-color-desc">辅助色, 常用语红点提示, 警告⚠️等</div>
    </div>
    
</div>

<h2> 文字 </h2>
<div id="w6s-theme"  class="el-row" style="margin-left: -6px; margin-right: -6px; margin-top: 12px">
    <div  class="el-col el-col-6" style="padding-left: 6px; padding-right: 6px;">
        <div class="theme-color-box theme-color-box-border" style="background-color: var(--dark-primary-text)">
            <div class="theme-color-info-dark">
                primary text
                <div class="theme-color-value-dark">{{ primaryText }} </div>
            </div>
        </div>
        <div class="theme-color-desc">文字主颜色, 通常用在标题, 主体等一级内容</div>
    </div>
    <div  class="el-col el-col-6" style="padding-left: 6px; padding-right: 6px;">
        <div class="theme-color-box theme-color-box-border" style="background-color: var(--dark-secondary-text)">
            <div class="theme-color-info-dark">
                secondary text
                <div class="theme-color-value-dark">{{ secondaryText }} </div>
            </div>
        </div>
        <div class="theme-color-desc">文字次颜色, 用与副标题或者描述等内容</div>
    </div>
    <div  class="el-col el-col-6" style="padding-left: 6px; padding-right: 6px;">
        <div class="theme-color-box theme-color-box-border" style="background-color: var(--dark-tertiary-text)">
            <div class="theme-color-info-dark">
                tertiary text
                <div class="theme-color-value-dark">{{ tertiaryText }} </div>
            </div>
        </div>
        <div class="theme-color-desc">文字三级颜色, 表现相对较弱的场景</div>
    </div>
    <div  class="el-col el-col-6" style="padding-left: 6px; padding-right: 6px;">
        <div class="theme-color-box theme-color-box-border" style="background-color: var(--dark-common-text0)">
            <div class="theme-color-info-dark" style="color: #333333">
                common text0
                <div class="theme-color-value-dark" style="color: #333333">{{ commonText0 }} </div>
            </div>
        </div>
        <div class="theme-color-desc">通用文字颜色, 一般为白色, 较深背景颜色时使用</div>
    </div>
</div>

<h2> icon </h2>
<div id="w6s-theme"  class="el-row" style="margin-left: -6px; margin-right: -6px; margin-top: 12px">
    <div  class="el-col el-col-6" style="padding-left: 6px; padding-right: 6px;">
        <div class="theme-color-box theme-color-box-border" style="background-color: var(--dark-icf-primary)">
            <div class="theme-color-info-dark">
                icf primary
                <div class="theme-color-value-dark">{{ icfPrimary }} </div>
            </div>
        </div>
        <div class="theme-color-desc">icon 主颜色(iconfont等纯色icon)</div>
    </div>
    
</div>

<h2> 背景 </h2>
<div id="w6s-theme"  class="el-row" style="margin-left: -6px; margin-right: -6px; margin-top: 12px">
    <div  class="el-col el-col-6" style="padding-left: 6px; padding-right: 6px;">
        <div class="theme-color-box " style="background-color: var(--dark-main-background); ">
            <div class="theme-color-info-dark theme-color-accent-dark">
                main background
                <div class="theme-color-value-dark theme-color-accent-dark">{{ mainBackground }} </div>
            </div>
        </div>
        <div class="theme-color-desc">页面主背景色</div>
    </div>
    <div  class="el-col el-col-6" style="padding-left: 6px; padding-right: 6px;">
        <div class="theme-color-box" style="background-color: var(--dark-common-background0)">
            <div class="theme-color-info-dark theme-color-accent-dark">
                common background0
                <div class="theme-color-value-dark theme-color-accent-dark">{{ commonBackground0 }} </div>
            </div>
        </div>
        <div class="theme-color-desc">通用页面背景色, 一般为白色</div>
    </div>
</div>

<div id="w6s-theme"  class="el-row" style="margin-left: -6px; margin-right: -6px; margin-top: 12px">
    <div  class="el-col el-col-6" style="padding-left: 6px; padding-right: 6px;">
        <div class="theme-color-box-group">
            <div class="theme-color-box theme-color-box-border" style="background-color: var(--dark-surface-background0-normal); ">
                <div class="theme-color-info-dark theme-color-accent-dark">
                    surface background0 normal
                    <div class="theme-color-value-dark theme-color-accent-dark">{{ surfaceBackground0Normal }} </div>
                </div>
            </div>
            <div class="theme-color-box theme-color-box-border" style="background-color: var(--dark-surface-background1-normal); ">
                <div class="theme-color-info-dark theme-color-accent-dark">
                    surface background1 normal
                    <div class="theme-color-value-dark theme-color-accent-dark">{{ surfaceBackground1Normal }} </div>
                </div>
            </div>
            <div class="theme-color-box" style="background-color: var(--dark-surface-background2-normal); ">
                <div class="theme-color-info-dark theme-color-accent-dark">
                    surface background2 normal
                    <div class="theme-color-value-dark theme-color-accent-dark">{{ surfaceBackground2Normal }} </div>
                </div>
            </div>
        </div>
        <div class="theme-color-desc">内容背景(正常状态), 包括列表, 卡片等具备层次感内容的背景, 数字越大, 层次越高, 越接近用户</div>
    </div>
    <div  class="el-col el-col-6" style="padding-left: 6px; padding-right: 6px;">
        <div class="theme-color-box-group">
            <div class="theme-color-box" style="background-color: var(--dark-surface-background0-pressed); border-bottom: 0.3px dashed #A3A3A3">
                <div class="theme-color-info-dark theme-color-accent-dark">
                    surface background0 pressed
                    <div class="theme-color-value-dark theme-color-accent-dark">{{ surfaceBackground0Pressed }} </div>
                </div>
            </div>
            <div class="theme-color-box" style="background-color: var(--dark-surface-background1-pressed); ">
                <div class="theme-color-info-dark theme-color-accent-dark">
                    surface background1 pressed
                    <div class="theme-color-value-dark theme-color-accent-dark">{{ surfaceBackground1Pressed }} </div>
                </div>
            </div>
            <div class="theme-color-box" style="background-color: #fff">
            </div>
        </div>
        <div class="theme-color-desc">内容背景(按下状态), 与"正常状态"一一对应</div>
    </div>
</div>

<h2> 标题 </h2>
<div id="w6s-theme"  class="el-row" style="margin-left: -6px; margin-right: -6px; margin-top: 12px">
    <div  class="el-col el-col-6" style="padding-left: 6px; padding-right: 6px;">
        <div class="theme-color-box" style="background-color: var(--dark-title-background)">
            <div class="theme-color-info-dark theme-color-accent-dark">
                title background
                <div class="theme-color-value-dark theme-color-accent-dark">{{ titleBackground }} </div>
            </div>
        </div>
        <div class="theme-color-desc">标题背景色</div>
    </div>
</div>

<h2> 分割线 </h2>
<div id="w6s-theme"  class="el-row" style="margin-left: -6px; margin-right: -6px; margin-top: 12px">
    <div  class="el-col el-col-6" style="padding-left: 6px; padding-right: 6px;">
        <div class="theme-color-box theme-color-box-border" style="background-color: var(--dark-common-divider0);">
            <div class="theme-color-info-dark" style="color: #333333">
                common divider0
                <div class="theme-color-value-dark" style="color: #333333">{{ commonDivider0 }} </div>
            </div>
        </div>
        <div class="theme-color-desc">分割线主颜色</div>
    </div>
</div>
  </div>
</template>

<style type="text/css" scoped>

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

  .theme-color-info-dark {
      color: #333333;
      font-size: 14px;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
  }

  .theme-color-value-dark {
      font-size: 12px;
      color: #333333;
      padding-top: 4px
  }

  .theme-color-desc {
      font-size: 14px;
      padding: 10px;
      color: #A3A3A3;
  }

  .theme-color-accent-dark {
    color: #fff;
  }


  :root {
    --dark-primary: #FFFFFFCC;
    --dark-secondary: #0A84FF;
    --dark-accent0: #FF453A;
    --dark-accent1: #C7C7C7;
    --dark-primary-text: #FFFFFFCC;
    --dark-secondary-text: #FFFFFF66;
    --dark-tertiary-text: #FFFFFFCC;
    --dark-common-text0: #FFFFFFCC;
    --dark-main-background: #000000;
    --dark-title-background: #171717;
    --dark-tabbar-background: #171717;
    --dark-nav-shadow: #00000000;
    --dark-surface-background0-normal: #000000;
    --dark-surface-background0-pressed: #363738;
    --dark-surface-background1-normal: #171717;
    --dark-surface-background1-pressed: #363738;
    --dark-surface-background2-normal: #303030;
    --dark-common-background0: #121212;
    --dark-common-background1: #1C1C1C;
    --dark-common-divider0: #FFFFFF0C;
    --dark-icf-primary: #FFFFFFCC;
    --dark-button-background: #0A84FF;
    --dark-popup-background: #151517;
    --dark-toast-background: #151517;
    --dark-tabbar-item-unselected: #FFFFFFCC;
    --dark-tabbar-item-selected: #0A84FF;
    --dark-tabbar-item-text-unselected: #FFFFFFCC;
    --dark-tabbar-item-text-selected: #F12525;
    --dark-search-background: #1C1C1C;
    --dark-page-control-selected: #C7C7C7;
    --dark-page-control-unselected: #444444;


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
          primary: themeColor('--dark-primary'),
          secondary: themeColor('--dark-secondary'),
          accent0: themeColor('--dark-accent0'),
          accent1: themeColor('--dark-accent1'),
          primaryText: themeColor('--dark-primary-text'),
          secondaryText: themeColor('--dark-secondary-text'),
          tertiaryText: themeColor('--dark-tertiary-text'),
          commonText0: themeColor('--dark-common-text0'),
          icfPrimary: themeColor('--dark-icf-primary'),
          mainBackground: themeColor('--dark-main-background'),
          commonBackground0: themeColor('--dark-common-background0'),
          commonBackground1: themeColor('--dark-common-background1'),
          titleBackground: themeColor('--dark-title-background'),
          surfaceBackground0Normal: themeColor('--dark-surface-background0-normal'),
          surfaceBackground0Pressed: themeColor('--dark-surface-background0-pressed'),
          surfaceBackground1Normal: themeColor('--dark-surface-background1-normal'),
          surfaceBackground1Pressed: themeColor('--dark-surface-background1-pressed'),
          surfaceBackground2Normal: themeColor('--dark-surface-background2-normal'),
          commonDivider0: themeColor('--dark-common-divider0'),
      }
  }


}


  
</script> 