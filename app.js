export let str =`Welcome to javascript Modules`;
export const obj ={
    name:'jaffa',
    age:28
}
export var arr =[1,2,3,4,5,6]

function add(a ,b){
    return a+b
}

class person{
    constructor(tribe){
        this._tribe =tribe;
    }
    showTribe(){
        return this._tribe;
    }
}

export {add ,person}