const fs = {};

let mockFiles = [];
let mockError = false;

/**
 * Sets the mock return value for fs.readdir
 *
 * @param {String[]} files - An array of files
 */
 // eslint-disable-next-line no-underscore-dangle
fs.__setFiles = (files) => {
  mockFiles = files;
};

/**
 * Set a flag to return an error or not
 *
 * @param {Boolean} flag - Set to true to return an err
 */
fs.__setReturnError = (flag) => {
  mockError = flag;
};

/**
 * Reads the directory and apply the callback
 * with the mocked values
 *
 * @param {String} directory
 * @param {Function} callback
 */
fs.readdir = (directory, callback) => {
  callback.call(null, mockError, mockFiles);
};

module.exports = fs;
