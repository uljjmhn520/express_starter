import {Hello} from "../src/libs/hello";

describe('test hello', () => {


  it('test hello',()=>{

    console.log('hello');
    console.log(new Hello().say());
  });
});