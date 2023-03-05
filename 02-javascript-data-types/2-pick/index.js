/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  const pickedObj = {};
  fields.map((field) => {
    if (Object.hasOwnProperty.call(obj, field)) {
      pickedObj[field] = obj[field];
    }
  });
  return pickedObj;
};
