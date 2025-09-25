// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Frontmap',
			//social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Get Started',
					items: [
						{ label: 'Vamos a empezar', slug: 'get-started/get-started' },
						{ label: 'Roadmap', slug: 'get-started/roadmap' },
					],
				},
				{
					label: 'Fundamentos',
					items: [
						{ label: 'Historia y funcionamiento de la Web', slug: 'fundamentals/internet' },
						{ label: 'HTTP - Protocolo de comunicación web', slug: 'fundamentals/http' },
					],
				},
			],
		}),
	],
});
