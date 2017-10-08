let mockFiles = [];
let mockError = false;

/**
 * Reads the directory and apply the callback
 * with the mocked values
 *
 * @param {String} directory
 * @param {Function} callback
 */
const recursiveReaddir = (directory, callback) => {
    callback.call(null, mockError, mockFiles);
};

/**
 * Sets the mock return value for recursive-readdir
 *
 * @param {String[]} files - An array of files
 */
recursiveReaddir.__setFiles = files => {
    mockFiles = files;
};

/**
 * Set a flag to return an error or not
 *
 * @param {Boolean} flag - Set to true to return an err
 */
recursiveReaddir.__setReturnError = flag => {
    mockError = flag;
};

module.exports = recursiveReaddir;
