'use strict';

class Animal{
	constructor(name){
		this._x = 0;
		this._name = name;
		this._walkSpeed = 5;
	}

	get name(){
		return this._name;
	}

	get walkSpeed(){
		return this._walkSpeed;
	}

	move(time, speed){
		this._x += speed * time;
		console.log('Animal ' + this._name + ' coordinate is: ' + this._x);
	}

	walk(time){
		this.move(time, this._walkSpeed);
	}
}

module.exports = Animal;