// Базовая функция-конструктор
function Device(name){
  this.name = name;
  this.plugged = false;
  this.power = 0;
}

// Метод "Включить прибор"
Device.prototype.plug = function(){
  this.plugged = true;
}

// Метод "Выключить прибор"
Device.prototype.unplug = function(){
  this.plugged = false;
}

// Метод "Выключить прибор"
Device.prototype.setPower = function(power){
  this.power = power;
}

// Метод "вернуть мощность"
Device.prototype.getPluggedPower = function(){
  if (this.plugged)
    return this.power;
  else
    return 0;
}

// Функция "Лампа"
function Lamp(){
    this.power = 15;
    this.workmode = 1;
}

// Создаем прототип для лампы
Lamp.prototype = new Device("Lamp");

// Установить режим работы лампы
Lamp.prototype.setWorkmode = function(mode){
  this.workmode = mode
}

// Вернуть режим работы (простой, цветной, мигающий, поломка)
Lamp.prototype.getWorkmode = function(){
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


// Функция "Компьютер"
function Computer(){
    this.power = 700;
}

// Создаем прототип для компьютера
Computer.prototype = new Device("Computer");

// Описание устройства
Computer.prototype.describe = function(){
  return `I am a ${this.name}. I has a keyboard, monitor, mouse and processor. My power is ${this.power} W.`;
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
