<template>
    <div class="w6s-color-card el-col el-col-6" :class="[hasBorder, isLight]">
        <div class="theme-color-box" :style="bgColor">
            <div class="theme-color-info">
                {{name}}
                <div class="theme-color-value">{{upperCaseColorValue}} </div>
            </div>
        </div>
        <div class="theme-color-desc" v-if="summary">{{summary}}</div>
    </div>
</template>

<script>
export default {
    name: 'ColorCard',
    props: ['name', 'color', 'summary', 'border', 'light'],
    computed: {
        bgColor() {
            return {
                'background-color': this.color,
            };
        },
        upperCaseColorValue() {
            return this.color ? this.color.toUpperCase() : '';
        },
        hasBorder() {
            return this.border ? 'has-border' : '';
        },
        isLight() {
            return this.light ? 'is-light' : '';
        },
    },
}
</script>

<style lang="stylus">
.w6s-color-card {
    padding-left: 6px; 
    padding-right: 6px;

    &.has-border {
        .theme-color-box {
            border: 0.3px dashed rgb(163, 163, 163);
        }
    }
    &.is-light {
        .theme-color-info,
        .theme-color-value {
            color: rgb(51, 51, 51);
        }
    }
}

.theme-color-box {
    border-radius: 2px;
    padding-left: 10px;
    padding-right: 10px;
    height: 50px;
    box-sizing: border-box;
}

.theme-color-info {
    color: #fff;
    font-size: 14px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    line-height: 20px;
}

.theme-color-value {
    color: #fff;
    font-size: 12px;
    opacity: .69;
}

.theme-color-desc {
    font-size: 14px;
    padding: 10px;
    color: #A3A3A3;
}

</style>