<template>
    <section class="leftBomB">
        <ul class="leftBom">
            <li @click="cutDayNgint"><span class="dayNgintText iconfont icon-yejianmoshi">{{dayNgintText}}</span></li>
            <li><span class="iconfont icon-shezhi"></span>设置</li>
            <li><span class="iconfont icon-power"></span>退出</li>
        </ul>
    </section>
</template>

<script>
export default {
    name:'',
    data(){
        return{
            dayNgintText:'夜间模式'
        }
    },
    created(){
      
    },
    methods:{
        cutDayNgint(){
            if(this.dayNgintText === '夜间模式'){
                this.dayNgintText = '日间模式'
            }else{
                this.dayNgintText = '夜间模式'


                window.app[0].style('background','#ccc')
            }
        
        }
    }
}
</script>
<style scoped lang="scss">
   .leftBom{
        width: 6rem;
        height: .8rem;
        display: flex;
        justify-content:space-around;
        align-items: center;
        position: fixed;
        bottom: 0;
        z-index: 9999;
        background: wheat;
    }
</style>