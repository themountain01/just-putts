import copy from 'rollup-plugin-copy';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

export default {
    input: 'src/js/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'iife',
        sourcemap: true,
    },
    plugins: [
        nodeResolve(), 

        postcss({
            extract: 'bundle-min.css',
            minimize: true,
        }),

        copy({
            targets: [
                { src: 'public/index.html', dest: 'dist' },
                { src: 'src/pages/*.html', dest: 'dist' },
                { src: 'public/images/**/*', dest: 'dist/images' },
            ],
            overwrite: true,
            hook: 'buildStart',
            verbose: true,
        }),

        // Commented out as interferes with build and deploy process on Netlify
        
        // serve({
        //     open: true, 
        //     contentBase: 'dist', 
        //     port: 3000,
        // }),

        // livereload({
        //     watch: ['dist', 'public'],
        //     delay: 2,
        //     verbose: true,
        // }),
    ],
};