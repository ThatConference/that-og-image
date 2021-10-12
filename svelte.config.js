/** @type {import('@sveltejs/kit').Config} */
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

import vercelAdapter from '@sveltejs/adapter-vercel';

const dev = process.env.NODE_ENV === 'development' ? true : false;
console.log('process.env.NODE_ENV', dev);

const config = {
	extensions: ['.svelte'],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		trailingSlash: 'always',
		vite: {
			resolve: {
				alias: {
					$utils: resolve('src/_utils')
				}
			}
		},
		adapter: vercelAdapter()
	},
	preprocess: !dev
		? [
				preprocess({
					postcss: true
				})
		  ]
		: []
};

export default config;
