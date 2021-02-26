<template>
    <section class="leftBomB">
        <ul class="leftBom">
            <li><span class="iconfont icon-yejianmoshi"></span>夜间模式</li>
            <li><span class="iconfont icon-shezhi"></span>设置</li>
            <li><span class="iconfont icon-power"></span>退出</li>
        </ul>
    </section>
</template>

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