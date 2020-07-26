import  _ from 'lodash';
export const RemoveTrailing = pathname => {
    if (pathname != "/") {
      const regex = /\/+\s*$/g;
      if (regex.exec(pathname) !== null) {
        return pathname.replace(regex, "");
      }
    }
    return pathname;
  };

  export const getLocalStorage=(key)=>{
    return JSON.parse(localStorage.getItem(key))?JSON.parse(window.localStorage.getItem(key)):false;
  }

  export const setLocalStorage=(key,value)=>{
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  }

  export const stringToInputObject=(name,value)=>{
    const reducer = (accumulator, currentValue) =>{
        return {[accumulator]:{[currentValue]:value}};
      };
      let names=name.split(".");
      let x=names.reduce(reducer);
      return x;
    }

  export const formInputToObject=(name,value,previousObject={})=>{
    let newOject;
    if(name.includes('.')){
      newOject= stringToInputObject(name,value);
    }else{
      newOject={
        [name]:value
      }
    }
    return _.merge(previousObject, newOject);
  }