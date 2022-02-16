function checkObject(obj, prop){
  return (prop in obj)
}


const human = {age: 25, name: "Mike"}

console.log(checkObject(human, 'age'))
console.log(checkObject(human, 'gender'))