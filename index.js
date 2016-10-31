const path = require('path');
const fs = require('fs');
const os = require('os');

if (process.platform !== 'win32') {
  process.env.WINDIR = '';
}

const FONT_DIRS = {
  // https://support.apple.com/en-us/HT201722
  // https://discussions.apple.com/thread/6866858?start=0&tstart=0
  darwin: {
    user: path.join(os.homedir(), 'Library', 'Fonts'),
    local: path.join('/', 'Library', 'Fonts'),
    network: path.join('/', 'Network', 'Library', 'Fonts'),
    system: path.join('/', 'System', 'Library', 'Fonts'),
  },
  win32: {
    user: path.join(process.env.WINDIR, 'Fonts'),
    local: path.join(process.env.WINDIR, 'Fonts'),
    network: path.join(process.env.WINDIR, 'Fonts'),
    system: path.join(process.env.WINDIR, 'Fonts'),
  },
  linux: {
    user: path.join(os.homedir(), 'share', 'fonts'),
    local: path.join(os.homedir(), '.local', 'share', 'fonts'),
    network: path.join('/', 'usr', 'share', 'fonts'),
    system: path.join('/', 'usr', 'share', 'fonts'),
  },
};

/**
 * Retrieve all font files in the given directory.
 *
 * @param {String} dir - The directory to read
 * @return {Promise} - Array of fonts
 */
exports.getFontsInDirectory = dir => new Promise((resolve, reject) => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      reject(err);
    }
    resolve(files.map(f => path.join(dir, f)));
  });
});

/**
 * Get all fonts.
 *
 * @param {String} - The use type.
 * @return {Promise} - An array of fonts available
 */
exports.getAll = (useType = 'system') => exports.getFontsInDirectory(FONT_DIRS[process.platform][useType]);
