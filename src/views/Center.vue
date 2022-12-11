<template>
    <div>
        Center
        <button @click="back">退出</button>
    </div>
</template>
<script>
export default {
  methods: {

    back () {
      localStorage.clear()
    }
  }
}
</script>
