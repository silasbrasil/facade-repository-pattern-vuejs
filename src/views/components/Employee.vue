<template>
  <div>
    <h2>{{ name }}</h2>
    <h4>{{ salary }}</h4>
    <img :src="employee.picture" :alt="employee.name">
  </div>
</template>

<script>
import Employee from '../models/Employee.js'

export default {
  name: 'Employee',
  props: {
    employee: {
      type: Employee,
      required: true
    }
  }
}
</script>

<style scoped>

</style>