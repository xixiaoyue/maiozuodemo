<template>
    <div id="smyheader">
        <ul id="myheader" :class="{'fle':isfle}">
            <li><router-link to="/films/nowplaying" active-class="cc"><span>正在热映</span></router-link></li>
            <li><router-link to="/films/comingsoon" active-class="cc"><span>即将上映</span></router-link></li>
        </ul>
    </div>
</template>

<style scoped>

ul{
    /* position: relative; */
    /* top: 2.5rem; */
    width: 100%;
    background-color: #fff;
    height: 3.0625rem;
    display: flex;
    text-align: center;
    line-height: 3.0625rem;
    font-size: .875rem;
    z-index: 100;
}
.fle{
    position: fixed;
}
li{
    flex: 1;
}
span{
    color: #000;
    /* display: block; */
    padding-bottom: .9375rem;
    /* border-bottom: 2px solid #000; */
}
.cc>span{
    border-bottom: 2px solid #ff5f16;
}
</style>
<script>
export default {
  props: {
    isfle: {
      type: Boolean,
      default: false
    }
  }
}
</script>
