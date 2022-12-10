/** https://stackoverflow.com/a/23304189
 * @example
 * Math.random = Math.seed(32); */
// TODO: Gives poor randomness use different impl
Math.seed = function (s: number) {
    const mask = 0xffffffff;
    let m_w = (123456789 + s) & mask;
    let m_z = (987654321 - s) & mask;

    return function () {
        m_z = (36969 * (m_z & 65535) + (m_z >> 16)) & mask;
        m_w = (18000 * (m_w & 65535) + (m_w >> 16)) & mask;
        let result = ((m_z << 16) + (m_w & 65535)) >>> 0;
        result /= 4294967296;
        return result;
    };
};

Math.randomRng = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min) + min);
};

Math.sample = <T = any>(array: T[]): T => {
    const idx = Math.randomRng(0, array.length - 1);
    return array[idx];
};

// TODO: Disable serverside
// - 3,
const SEED = new Date().getUTCSeconds();
Math.random = Math.seed(SEED);
console.log(`SEED: `, SEED);

interface Math {
    seed(seed?: number): () => number;

    randomRng(min: number, max: number): number;

    sample<T = any>(array: T[]): T;
}
