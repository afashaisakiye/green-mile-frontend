export const RemoveTrailing = pathname => {
    if (pathname != "/") {
      const regex = /\/+\s*$/g;
      if (regex.exec(pathname) !== null) {
        return pathname.replace(regex, "");
      }
    }
    return pathname;
  };
