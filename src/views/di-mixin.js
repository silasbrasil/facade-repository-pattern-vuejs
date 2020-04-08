import CourseRepository from '../repositories/api/core/course-repository'

export default {
  methods: {
    $getAllCourse() {
      const company = this.$store.getters.company
      const repository = new CourseRepository(company)

      return repository.getAllCourses()
    },
    $getCourse() {
      // console.log(this.$route)
      // const id = this.$route.params.courseId
      const id = 1
      const company = this.$store.getters.company
      const repository = new CourseRepository(company)

      return repository.getCourseById(id)
    },
  }
}
