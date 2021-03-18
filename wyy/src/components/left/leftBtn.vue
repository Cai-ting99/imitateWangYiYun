<template>
    <section>
        <ul class="leftBtn">
            <li>
                <div class="iconss iconfont icon-youxiang"></div>
                <p class="icon_text">我的消息</p>
            </li>
            <li>
                 <div class="iconss iconfont icon-ren"></div>
                <p class="icon_text">我的好友</p>
            </li>
            <li>
                 <div class="iconss iconfont icon-xiaoxi"></div>
                <p class="icon_text">个性皮肤</p>
            </li>
            <li>
                 <div class="iconss iconfont icon-xiaoxi"></div>
                <p class="icon_text">听歌识曲</p>
            </li>
        </ul>
    </section>
</template>

<style scoped lang="scss">
.leftBtn{
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    li{
        width: 25%;
    }
    .iconss{
        color: red;
        font-size: .6rem;
    }
    .icon_text{
        font-size: .2rem;
        color: #333;
        margin-top: .4rem;
    }
}
   
</style>