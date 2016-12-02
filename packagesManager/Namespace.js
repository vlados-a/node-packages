'use strict';

const Package = require('./Package');

class Namespace{
	constructor(name){
		this._name = name;
		this._packages = {};
	}

	get Packages(){
		return this._packages;
	}

	get name(){
		return this._name;
	}

	addPackage(packageName, packagePath){
		let newPackage = new Package(packagePath);
		Object.defineProperty(this._packages, packageName, {get: () => newPackage.getPackage()});
	}

	addNamespace(namespace){
		this._packages[namespace.name] = namespace.Packages;
	}
}

module.exports = Namespace;