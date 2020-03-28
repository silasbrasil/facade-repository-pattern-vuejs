<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import serviceMixin from './service-mixin'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  mixins: [serviceMixin],
  components: {
    HelloWorld
  },
  async created() {
    // const result = await this.$getAllCourse()
    const result = await this.$getCourse()
    console.log(result)
  }
}
</script>
