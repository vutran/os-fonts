let mockFiles = [];
let mockError = false;

/**
 * Reads the directory and apply the callback
 * with the mocked values
 *
 * @param {String} directory
 */
const recursiveReaddirSync = directory => {
    if (mockError) {
        throw new Error(true);
    }
    return mockFiles;
};

/**
 * Sets the mock return value for recursive-readdir
 *
 * @param {String[]} files - An array of files
 */
recursiveReaddirSync.__setFiles = files => {
    mockFiles = files;
};

/**
 * Set a flag to return an error or not
 *
 * @param {Boolean} flag - Set to true to return an err
 */
recursiveReaddirSync.__setReturnError = flag => {
    mockError = flag;
};

module.exports = recursiveReaddirSync;
