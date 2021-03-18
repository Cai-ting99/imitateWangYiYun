<template>
    <div class="login">
        <van-button class="login_btn"  round type="default">登录</van-button>
    </div>
</template>

<style lang="scss">
    .login{
        width: 100vw;
        height: 100vh;
        background: #DD001B;
        .login_btn{
            width: 80%;
            height: 1rem;
            line-height: 1rem;
            text-align: center;
            display: block;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            background: #fff;
            color:"#DD001B";
            font-size:.3rem
        }
    }
</style>