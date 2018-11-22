// 二进制、八进制
{
  // 0o\0O二进制前缀  
  console.log(0b111110111 === 503)  // true
  // 0b\0B八进制前缀
  console.log(0o767 === 503) // true 
  // 二进制转换
  Number('0b111')  // 7
  Number('0o10')  // 8  
}
// isFinite isNaN
{
  Number.isFinite(11) // ture
  Number.isFinite(Infinity) // false
  Number.isFinite(-Infinity) // false
  Number.isNaN(NaN) // true
}
// ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。
{
  Number.parseInt('121212')
  Number.parseFloat('21.2131')
}
// isInteger 判断是否为整数
{
  Number.isInteger(12.1) // false
}
// Number.EPSILON表示 1 与大于 1 的最小浮点数之间的差。
{
  Number.EPSILON === Math.pow(2, -52)
}
// Math对象扩展
{
  Math.trunc() // 去除一个数的小数部分返回整数部分 ，对于非数值会先使用Number方法先将其转换为数值
  Math.sign() // 判断一个数是正数还是负数、还是0、对于非数值先会转换 正数+1、负数-1、0:0、-0：-0、其他值 NaN
  Math.cbrt() // 计算立方根
  Math.clz32() // javascript的整数使用32位2进制形式
  Math.imul() // 返回两个数以32位带符号整数形式相乘的结果、返回的也是一个32位的带符号的整数
  Math.fround() // 返回一个数的32位单精度浮点数形式 、、 、、Math.fround方法的主要作用，是将64位双精度浮点数转为32位单精度浮点数。如果小数的精度超过24个二进制位，返回值就会不同于原值，否则返回值不变（即与64位双精度值一致）。
  Math.hypot() // Math.hypot方法返回所有参数的平方和的平方根。
}
// 对数方法
{
  Math.expm1() // 
}