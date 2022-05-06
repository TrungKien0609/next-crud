export default userApi = {
  getMe: () => {
    return new Promise((resove, reject) => {
      setTimeout(() => {
        resove({
          name: "trungkien"
        })
      }, 500);
    })
  }
}