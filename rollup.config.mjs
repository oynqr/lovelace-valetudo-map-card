import typescript from "@rollup/plugin-typescript";
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import json from "@rollup/plugin-json";

const plugins = [
    nodeResolve({}),
    commonjs(),
    typescript({
        target: "es6",
        lib: [ "esnext" ],
    }),
    json(),
    babel({
        exclude: "node_modules/**",
        babelHelpers: 'bundled',
        plugins: [
            ["inline-json-import", {}]
        ]
    }),
    terser(),
];

export default [
    {
        input: "src/valetudo-map-card.js",
        output: {
            dir: "dist",
            format: "es",
        },
        plugins: [...plugins],
    },
];
