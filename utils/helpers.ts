/**
 *
 * @param value
 * @returns {string}
 */
export const getNumberOfString = (value: string) => value.replace(/\D/g, '');
/**
 *
 * @param value
 * @returns {string}
 */
export const getLettersOfString = (value: string) => value.replace(/[^a-zA-Z]+/g, '');
/**
 *
 * @param {*} value
 * @returns {boolean}
 */
export const isNullOrEmpty = (value: any) => (!value || value.length === 0);
