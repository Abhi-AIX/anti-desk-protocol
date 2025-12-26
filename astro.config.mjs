import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Anti desk handbook',
			components: {
				Header: './src/components/Header.astro',
			},
			social: [
				{
					label: 'Instagram',
					href: 'https://www.instagram.com/bellamkonda.ff/',
					icon: 'instagram'
				},
				{
					label: 'GitHub',
				    href: 'https://github.com/Abhi-AIX/anti-desk-protocol.git',
					icon: 'github'
				}
			],
			
			sidebar: [
                {
                    label: 'Wellness Library',
                    items: [
                        { label: 'Stretches', autogenerate: { directory: 'patches/stretches' } },
                        // You can add other categories here as you create them, for example:
                        // { label: 'Exercise', autogenerate: { directory: 'patches/exercise' } },
                    ],
                },
            ],
        }),
    ],

});

