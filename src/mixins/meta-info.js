function getMeta (vm) {
  const { meta } = vm.$options
  if (meta) {
    return typeof meta === 'function'
      ? meta.call(vm)
      : meta
  } else {
    return null
  }
}

const clientMetaInfoMixin = {
  activated () {
    const meta = getMeta(this)
    if (meta) {
      document.title = `${meta.title} - Apexsoft` /* FIXME : 사이트이름으로 변경  */
    }
  }
}

export default clientMetaInfoMixin
