import { EntidadeBase } from "./entidade.model";
import { IPaginaHTML } from "./pagina.interface";

export abstract class PaginaBase<T extends EntidadeBase> implements IPaginaHTML{

    // private _keys: Array<keyof T>;
    protected keys : keyof T[];

    constructor(){        
        
    }

    /*
    const keys = Object.keys(item) // get items keys
    const thisKeys = Object.keys(this) // get this class keys
    const limitedItem = keys.reduce((newObj, key) => { // combine same keys
      if (thisKeys.includes(key)) {
        newObj[key] = item[key]
      }
      return newObj
    }, {})
    Object.assign(this, limitedItem)
    */
    
    /*
let fruits = [
  { name: "apple", quantity: 2, price: "" },
  { name: "orange", quantity: "", price: "2" },
  { name: "banana", quantity: "", price: "" },
];

const output = fruits.reduce((previousValue, currentValue, currentIndex) => {
  const keys = Object.keys(currentValue).filter((key) => !currentValue[key]);

  if (keys.length) {
    previousValue[currentIndex] = keys;
  }

  return previousValue;
}, {});

console.log(output);
    */

    //      this._keys = Object.keys(obj) as Array<keyof T>;
    abstract configurarElementos(): void 
}