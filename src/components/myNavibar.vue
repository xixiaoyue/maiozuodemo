<template>
    <div v-show="$store.state.navisShow">
        <ul>
            <li>
                <router-link to="/films" active-class="cc"><i class="iconfont icon-dianying ic"></i><span>电影</span></router-link>
            </li>
            <li>
                <router-link to="/cinemas" active-class="cc"><i class="iconfont icon-yingyuan ic"></i><span>影院</span></router-link>
            </li>
            <li>
                <router-link to="/massege" active-class="cc"><i class="iconfont icon-zixun ic"></i><span>资讯</span></router-link>
            </li>
            <li>
                <router-link to="/center" active-class="cc"><i class="iconfont icon-wodedamaijihuo
 ic"></i><span>我的</span></router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import '../assets/font_3799536_kmg63sa17qm/iconfont.css'
export default {
  data () {
    return {
      isheade: false
    }
  }
}
</script>
<style lang="scss" scoped>
div{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 3.0625rem;
    background-color: #fff;
    z-index: 100;
    ul{
        display: flex;
        height: 3.0625rem;
        li{
            flex: 1;
            a{
                color: #797d82;
                display: flex;
                flex-direction: column;
                text-align: center;
                height: 3.0625rem;
                padding-top: .4375rem;
                span{
                    font-size:.75rem;
                    text-align: .75rem;
                }
            }
        }
    }
}
.cc{
    color: #ff5f16;
}
.ic{
    font-size: 1.3125rem;
}
</style>
