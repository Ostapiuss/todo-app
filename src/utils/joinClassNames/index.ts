export function joinClassNames(...args: Array<string | Record<string, boolean> | undefined | null | false>): string {
  let classes = [];

  for (let arg of args) {
    if (typeof arg === 'string') {
      classes.push(arg);
    } else if (typeof arg === 'object' && arg !== null) {
      for (let key in arg) {
        if (arg.hasOwnProperty(key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  const modifiedClasses = classes.map((className) => className.toLowerCase());
  return modifiedClasses.join(' ');
}
