import { defineModule } from '@directus/extensions-sdk';
import ModuleComponent from './module.vue';

export default defineModule({
	id: 'graphiql',
	name: 'React: boilerplate',
	description: 'React boilerplate for directus-vue',
	icon: 'potted_plant',
	routes: [
		{
			path: '',
			component: ModuleComponent,
		},
	],
});
