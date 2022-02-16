// Базовый класс
class Device{
  constructor(name)
  {
    this.name = name;
    this.plugged = false;
    this.power = 0;
  }
  
  // Метод "Включить прибор"
  plug(){
    this.plugged = true;
  }

  // Метод "Выключить прибор"
  unplug(){
    this.plugged = false;
  }

  // Метод "Выключить прибор"
  setPower(power){
    this.power = power;
  }

  // Метод "вернуть мощность"
  getPluggedPower(){
    if (this.plugged)
      return this.power;
    else
      return 0;
  }
}

// Функция "Лампа"
class Lamp extends Device{
  constructor(){
	super("Lamp");
    this.power = 15;
    this.workmode = 1;
  }

// Установить режим работы лампы
  setWorkmode(mode){
    this.workmode = mode;
  }

// Вернуть режим работы (простой, цветной, мигающий, поломка)
  getWorkmode(){
    let result = "lamp is switched off";
    if (this.plugged)
    {
	    switch(this.workmode){
		  case 1:
		    result = "base";
            break;
		  case 2:
		    result = "colour";
            break;
		  case 3:
		    result = "blinking";
            break;
		  default:
		    result = "broken(";
            break;
	    }
    }
    return result;
  }
}

// Функция "Компьютер"
class Computer extends Device{
  constructor(){
	super("Computer");
    this.power = 700;
  }

// Описание устройства
  describe(){
    return `I am a ${this.name}. I has a keyboard, monitor, mouse and processor. My power is ${this.power} W.`;
  }
}

// Создаем экземпляр лампы
const lamp = new Lamp();
console.log(lamp.getWorkmode())
lamp.plug();
lamp.setWorkmode(3);
console.log(lamp.getPluggedPower(), lamp.getWorkmode())

//console.log(lamp) // for debug

// Создаем экземпляр компьютера
const computer = new Computer();
computer.plug();

console.log(computer.getPluggedPower())
console.log(computer.describe())

//console.log(computer) // for debug
