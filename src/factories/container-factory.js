
export default containerFactory = (Component, props) => ({
  functional: true,
  render(h) {
    return h(Component, { props })
  }
})
