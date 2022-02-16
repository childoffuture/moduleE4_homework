//Вариант 1 (не уверен что правильный)
function createObject()
{
  const obj = {}
  return obj
}


a = createObject()

console.log(Object.getPrototypeOf(a))


//Вариант 2
const b = new function(){}

console.log(Object.getPrototypeOf(b))