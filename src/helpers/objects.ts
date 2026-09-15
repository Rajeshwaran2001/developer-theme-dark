/**
 * Get the nested properties of an object.
 * This solution is lighter than the lodash get-version.
 * Source: http://stackoverflow.com/a/6491621/6942210
 */
export const getObjectPropertyValue = (obj: object, path: string) => {
  const pathArray = path
    .replace(/\[(\w+)\]/g, '.$1') // convert indexes to properties
    .replace(/^\./, '') // strip a leading dot
    .split('.'); // separate paths in array

  /** Avoid errors in the getValue function. */
  const isObject = (object: unknown) => {
    return object === Object(object);
  };
  let result = JSON.parse(JSON.stringify(obj));

  for (let i = 0; i < pathArray.length; ++i) {
    const k = pathArray[i];
    if (isObject(result) && k in result) {
      result = result[k];
    } else {
      return;
    }
  }
  return result;
};

/**
 * Set a value for a nested object property.
 * @param obj Object
 * @param path Properties as string e.g. `'a.b.c'`
 * @param value Value to be set for the given property
 * Source: https://stackoverflow.com/a/13719799/6942210
 */
export const setObjectPropertyValue = (
  obj: Record<string, unknown>,
  path: string | string[],
  value: unknown
) => {
  const segments = typeof path === 'string' ? path.split('.') : path;

  if (segments.length > 1) {
    const [head, ...rest] = segments;
    const next =
      Object.prototype.toString.call(obj[head]) === '[object Object]'
        ? (obj[head] as Record<string, unknown>)
        : {};
    obj[head] = next;
    setObjectPropertyValue(next, rest, value);
  } else {
    obj[segments[0]] = value;
  }
};
