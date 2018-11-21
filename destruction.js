{
  let [a, [b, c]] = [1, [2, 3]]
  console.log(a, b, c)
}
{
  let [head, ...tail] = [1, 2, 3, 4]
  console.log(head, tail)
}
{
  // 结构不成功、值为undefined
  let [a, b] = [a]
  console.log(a, b)
}
{
  // 不完全解构
  let [a, [b], d] = ['a', ['b', 'c'], 'd']
  console.log(a, b, d)
}
{
  
}