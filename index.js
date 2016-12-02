'use strict';

if(!global.packages){
	const path = require('path');
	const appRoot = path.resolve(__dirname);
	const PackagesPathes = require('./packagesPath.json');
	const PackagesManager = require('./packagesManager/PackagesManager')(PackagesPathes, appRoot);
}

const _ = packages.lodash;
const Bird = packages.Animals.Bird;

let bird1 = new Bird('Malloy');
bird1.walk(10);
bird1.fly(10);