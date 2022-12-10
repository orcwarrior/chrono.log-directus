import { defineModule } from '@directus/extensions-sdk';
import ModuleComponent from './module.vue';

export default defineModule({
	id: 'react-boilerplate',
	name: 'React: boilerplate',
	description: 'React boilerplate for directus-vue',
	icon: 'help',
	routes: [
		{
			path: '',
			component: ModuleComponent,
		},
	],
});
