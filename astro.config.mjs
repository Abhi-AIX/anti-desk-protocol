import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Anti desk handbook',
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
					label: 'Start Here',
					items: [
						{ label: 'Introduction', link: '/intro' },
					],
				},
				{
        // CHANGE THIS LINE BELOW:
        label: 'Body Maintenance', // <--- This is what the user sees
        autogenerate: { directory: 'patches' }, // <--- This is where the files live
                },
			],
		}),
	],

});

