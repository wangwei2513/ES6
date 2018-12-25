let arr = [1, 2, 3, 4]
// forin 支持break continue操作
for (const key in arr) {
  const element = arr[key]
  if (element === 3) {
    console.log(typeof key)
    break
  }
  console.log(typeof element)
}