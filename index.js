const cowsay = require("cowsay");
const myInfos = require("./information.js");
const myInformation = require('./information.js');


console.log(cowsay.say({
	text : "Hi, I'm " + myInfos.name + " from the famous " + myInfos.campus + " campus!",
	e : "oO",
	T : "U "
}));