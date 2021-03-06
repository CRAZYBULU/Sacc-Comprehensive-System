class Utli {
  /* 获取 url 参数 */
  getUrlParam (name) {
    const queryString = window.location.search.split('?')[1] || '',
          reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
          result = queryString.match(reg);
    return result ? decodeURIComponent(result[2]) : null
  }
}

export default Utli