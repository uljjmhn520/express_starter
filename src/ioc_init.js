import Ioc from 'electrolyte';
import path from 'path';


Ioc.use(Ioc.dir(path.join(__dirname , 'ioc_component' )));

console.log('ioc init');