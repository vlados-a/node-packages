'use strict';

const path = require('path');
const Package = require('./Package');
const Namespace = require('./Namespace');

const defaultApplicationRoot = path.resolve('../');

class PackagesManager{

	constructor(packages, appRoot){
		this._packages = new Namespace();
		this._root = appRoot || defaultApplicationRoot;
		this._setupPackages(packages, this._packages);
	}

	_setupPackages(packagesPathes, namespace){

		Object.keys(packagesPathes).forEach((key) => {

			var val = packagesPathes[key];

			switch(typeof(val)){
				case 'string':
						let packagePath = path.resolve(this._root + val);
						let packageName = key
						namespace.addPackage(packageName, packagePath);
						break;
				case 'object':
						let newNamespace = new Namespace(key);
						this._setupPackages(val, newNamespace);
						namespace.addNamespace(newNamespace);
						break;
				default:
						throw new Error('Invalid packages configuration file format');
			}
		});
	}

	get packages(){
		return this._packages.Packages;
	}

}

module.exports = (packagesPathes, appRoot) => {
	if(packagesPathes){
		let packageManager = new PackagesManager(packagesPathes, appRoot);
		global.packages = packageManager.packages;
	}
	return PackagesManager;
};