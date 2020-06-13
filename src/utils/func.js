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

