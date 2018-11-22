// 字符串的扩展
// String.includes/startsWith/endsWith
{
  let s = 'hello world'
  let start = s.startsWith('hello') // true
  let end = s.endsWith('world') // true
  let include = s.includes('llo') // true
}
// 可接收第二个参数、标识开始搜索的位置
{
  let s = 'hello world'
  let start = s.startsWith('hello', 0) // true
  let end = s.endsWith('world', 6) // true 搜索前几个字符
  let include = s.includes('llo, 6') // false
}
// repeat 返回一个新字符串  重复当前字符几次
// 小数会取整，0- -1之间取0，NAN也取0；如果是负数或者infinite会报错
{
  let s = 'x'
  let a = s.repeat(3) // 'xxx'
  let b = s.repeat(0) // ''
}
// padStart头部补全,padEnd尾部补全
{
  let s = 'x'
  s.padStart(5, 'abc') // 'abcax'
  s.padEnd(4, 'en') // 'xene'
  // 如果远字符长度大于等于最大长度、则返回源字符串
  // 省略第二个参数会用空字符串补全长度
  s.padStart(4) // '    x'
  // 常见用途是数值补全指定位数、字符串提示格式
  let n = '1'
  n.padStart(10, '0') // 数值补全制定位数 0000000001
  let date = '12'
  date.padStart(10, 'YYYY-MM-DD') // 日期提示 'YYYY-MM-10'
}
// 模板字符串
{
  let s = `普通字符串`
  let ss = `多行字符串
    多行字符串`
  // 字符串嵌入变量
  let insides = `字符串嵌入变量${s},&&**${ss}`
  console.log(s, ss, insides)
  // 模板中嵌入变量、将变量写在${}中、{}中可以写任何JavaScript表达式及变量  、也可以调用函数
}


