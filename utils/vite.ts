import { pluginDeno } from "jsr:@deno-plc/vite-plugin-deno";
import { type InlineConfig, defineConfig } from "vite";

import solid from "vite-plugin-solid";
export const config: InlineConfig = defineConfig({
    configFile: false, // configuration is inlined here
    resolve: {
        conditions: [],
    },
    server: {
        port: 80,
    },
    ssr: {
        resolve: {
            conditions: []
        }
    },
    plugins: [
        solid(),
        pluginDeno({
            // see configuration docs
        }),
    ],
});