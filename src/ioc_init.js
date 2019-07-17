const Ioc = require('electrolyte');
const path = require('path');


Ioc.use(_iocObj.dir(path.join(__dirname , 'ioc_component' )));

console.log('ioc init');