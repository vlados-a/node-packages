'use strict';

class Package{
	constructor(path){
		this.m = false;
		this._path = path;
	}

	getPackage(){
		if(!this.m){
			this.m = require(this._path)
		}
		return this.m;
	}
}

module.exports = Package;