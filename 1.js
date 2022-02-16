function dumpObject(obj){
  for (let key in obj)
  {

    if (obj.hasOwnProperty(key))
    {

        console.log(`${key}: ${obj[key]}`);
    }   
  }
}


const human = {age: 25, name: "Mike"}

const familyMan = Object.create(human)

familyMan.surname = "Jackson"

dumpObject(familyMan)