'use strict';

const Animal = packages.Animals.Animal;

class Bird extends Animal{
	constructor(name){
		super(name);
		this._flySpeed = 20;
	}

	get flySpeed(){
		return this._flySpeed;
	}

	fly(time){
		this.move(time, this._flySpeed);
	}
}

module.exports = Bird;