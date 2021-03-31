type UseType = 'user' | 'local' | 'network' | 'system';

declare module 'os-fonts' {
const osFonts: {
/**
 * Retrieve all font files in the given directory.
 *
 * @param dir The directory to read
 * @return Array of fonts
 */
getFontsInDirectory: (dir: string) => Promise<string[]>;

/**
 * Retrieve all font files in the given directory (synchronous).
 *
 * @param dir The directory to read
 * @return Array of fonts
 */
getFontsInDirectorySync: (dir: string) => string[];

/**
 * Get all fonts.
 *
 * @param useType The use type. Default is 'system'.
 * @return An array of fonts available
 */
getAll: (useType?: UseType) => Promise<string[]>;

/**
 * Get all fonts (synchronous).
 *
 * @param useType The use type. Default is 'system'.
 * @return An array of fonts available
 */
getAllSync: (useType?: UseType) => string[];

};
export = osFonts;
}
