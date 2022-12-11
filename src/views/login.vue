<template>
    <div>
        请登录
        <button @click="login">登录</button>
        <button @click="back">退出</button>
    </div>
</template>

<script>
export default {
  methods: {
    login () {
      localStorage.setItem('token', 'cc')
      //   console.log(this.$route)
      this.$router.push(this.$route.query.sourse)
    },
    back () {
      localStorage.clear()
    }
  }
}
</script>
