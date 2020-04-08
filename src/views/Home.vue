<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import diMixin from './di-mixin'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  mixins: [diMixin],
  components: {
    HelloWorld
  },
  async created() {
    // const result = await this.$getAllCourse()
    // const course = new CourseRepository()
    // const result = await course.getAllCourses()
    const result = await this.$getCourse()
    console.log(result)
  }
}
</script>
