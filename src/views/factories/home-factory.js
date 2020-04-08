'use-strict'
import Vue from 'vue'
import containerFactory from '@/factories/containerFactory'
import repository from '@/repositories/api/core/course-repository'

import LoadingComp from '../components/Loading.vue'
import ErrorComp from '../components/Error.vue'


const fetchEmployee = async () => {
  const employee = await repository.getEmployeeById()
  const EmployeeComp = () => import(/* webpackChunkName: "Users" */ '@/home/components/Employee')

  return containerFactory(EmployeeComp, { employee })
}

const Employee = () => {
  return {
    component: fetchEmployee(),
    loading: LoadingComp,
    error: ErrorComp,
    delay: 0,
    timeout: 5000
  }
}

export default Employee