<template>
     <section class="leftBomB">
        <ul class="leftBom">
            <li @click="modelBrn"><span class="dayNgintText iconfont icon-yejianmoshi">{{dayNgintText}}间模式</span></li>
            <li><span class="iconfont icon-shezhi"></span>设置</li>
            <li><span class="iconfont icon-power"></span>退出</li>
        </ul>
    </section>
</template>

<script>
export default {
    name: "DarkModelPage",
    data(){
        return {
          dark:false,
          dayNgintText:'夜'
        }
    },
    methods:{
        modelBrn(){
            this.dark = !this.dark;
            if(this.dark){
                 this.dayNgintText = '日'
                window.document.documentElement.setAttribute( "data-theme", 'dark' );
            }else{
                  this.dayNgintText = '夜'
                 window.document.documentElement.setAttribute( "data-theme", 'light' );
            }
        },
    },
    mounted() {
        window.document.documentElement.setAttribute( "data-theme", 'light' );
    },
}
</script>

<style scoped lang="scss">

@import './assets/scss/common.scss';

.leftBom{
    //在此使用了背景颜色变量
    @include background_color("background_color");
    //再次使用了文字颜色变量
    @include font_color("text-color");

    width: 6rem;
    height: .8rem;
    display: flex;
    justify-content:space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    z-index: 9999;
    transition: background 1s , color 0.6s;
    .title{
        margin-bottom: 20px;
    }
    .btn{
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 40px;
        margin:  0 auto;
    }
}
</style>