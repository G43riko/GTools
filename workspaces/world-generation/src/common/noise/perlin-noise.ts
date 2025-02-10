export type Noise2Fn = (x: number, y: number) => number;
export type Noise3Fn = (x: number, y: number, z: number) => number;

export interface PerlinNoiseOptions {
    amplitude: number;
    frequency: number;
    octaves: number;
    persistence: number;
}

function processOptions(options: Partial<PerlinNoiseOptions>): PerlinNoiseOptions {
    return {
        amplitude: typeof options.amplitude === "number" ? options.amplitude : 1,
        frequency: typeof options.frequency === "number" ? options.frequency : 1,
        octaves: typeof options.octaves === "number" ? Math.floor(options.octaves) : 1,
        persistence: typeof options.persistence === "number" ? options.persistence : 0.5,
    };
}

export class PerlinNoise {
    /**
     * @param noise2
     * @param options
     * @returns number between 0 and {@link Number.MAX_SAFE_INTEGER}
     */
    public static createDynamicIntProvider2(
        noise2: Noise2Fn,
        options: Partial<PerlinNoiseOptions> = {},
    ): (x: number, y: number) => number {
        const noise = this.createDynamicProvider2(noise2, options);

        return (x: number, y: number) => Math.floor((noise(x, y) + 1) / 2 * Number.MAX_SAFE_INTEGER);
    }

    /**
     * @param noise2
     * @param options
     * @returns number from -1 to 1
     */
    public static createDynamicProvider2(
        noise2: Noise2Fn,
        options: Partial<PerlinNoiseOptions> = {},
    ): (x: number, y: number) => number {
        const { amplitude, frequency, octaves, persistence } = processOptions(options);

        return (x: number, y: number) => {
            let value = 0;
            for (let octave = 0; octave < octaves; octave++) {
                const freq = frequency * 2 ** octave;
                value += noise2(x * freq, y * freq) *
                    (amplitude * persistence ** octave);
            }

            return value / (2 - 1 / 2 ** (octaves - 1));
        };
    }

    public static createDynamicIntProvider3(
        noise3: Noise3Fn,
        options: Partial<PerlinNoiseOptions> = {},
    ): (x: number, y: number, z: number) => number {
        const noise = this.createDynamicProvider3(noise3, options);

        return (x: number, y: number, z: number) => Math.floor((noise(x, y, z) + 1) / 2 * Number.MAX_SAFE_INTEGER);
    }

    /**
     * @param noise3
     * @param options
     * @returns number from -1 to 1
     */
    public static createDynamicProvider3(
        noise3: Noise3Fn,
        options: Partial<PerlinNoiseOptions> = {},
    ): (x: number, y: number, z: number) => number {
        const { amplitude, frequency, octaves, persistence } = processOptions(options);

        return (x: number, y: number, z: number) => {
            let value = 0;
            for (let octave = 0; octave < octaves; octave++) {
                const freq = frequency * 2 ** octave;
                value += noise3(x * freq, y * freq, z * freq) * (amplitude * persistence ** octave);
            }

            return value / (2 - 1 / 2 ** (octaves - 1));
        };
    }

    public static makeRectangle(
        width: number,
        height: number,
        noise2: Noise2Fn,
        options: Partial<PerlinNoiseOptions> = {},
        offset = { x: 0, y: 0 },
    ): number[][] {
        const { amplitude, frequency, octaves, persistence } = processOptions(options);
        const field = new Array(width);
        for (let x = 0; x < width; x++) {
            field[x] = new Array(height);
            for (let y = 0; y < height; y++) {
                let value = 0;
                for (let octave = 0; octave < octaves; octave++) {
                    const freq = frequency * 2 ** octave;
                    value += noise2((offset.x + x) * freq, (offset.y + y) * freq) *
                        (amplitude * persistence ** octave);
                }
                field[x][y] = value / (2 - 1 / 2 ** (octaves - 1));
            }
        }

        return field;
    }

    public static makeBox(
        width: number,
        height: number,
        depth: number,
        noise3: Noise3Fn,
        options: Partial<PerlinNoiseOptions> = {},
        offset = { x: 0, y: 0, z: 0 },
    ): number[][][] {
        const { amplitude, frequency, octaves, persistence } = processOptions(
            options,
        );
        const field = new Array(width);
        for (let x = 0; x < width; x++) {
            field[x] = new Array(height);
            for (let y = 0; y < height; y++) {
                field[x][y] = new Array(height);
                for (let z = 0; z < depth; z++) {
                    let value = 0;
                    for (let octave = 0; octave < octaves; octave++) {
                        const freq = frequency * 2 ** octave;
                        value += noise3(
                            (width * offset.x + x) * freq,
                            (height * offset.y + y) * freq,
                            (depth * offset.z + z) * freq,
                        ) *
                            (amplitude * persistence ** octave);
                    }
                    field[x][y][z] = value / (2 - 1 / 2 ** (octaves - 1));
                }
            }
        }

        return field;
    }
}
