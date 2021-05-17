const cowsay = require("cowsay");
const myInformation = require('./information.js');


console.log(cowsay.say({
	text : "Hi, I'm " + myInfo.name + " from the famous " + myInfo.campus + " campus!",
	e : "oO",
	T : "U "
}));