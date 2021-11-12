/**
 *
 * @param string
 * @returns {void | Promise<Route> | * | boolean | Promise | Promise<any>}
 */
export const getNumberOfString = (string: String) => string.replace(/\D/g, '');
/**
 *
 * @param string
 * @returns {string}
 */
export const getLettersOfString = (string: String) => string.replace(/[^a-zA-Z]+/g, '');
/**
 *
 * @param {*} value
 * @returns {boolean}
 */
export const isNullOrEmpty = (value: any) => {
  if (!value || value === '' || value.length === 0) return true;
  return false;
};
