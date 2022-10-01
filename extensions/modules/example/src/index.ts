import { defineModule } from '@directus/extensions-sdk';
import ModuleComponent from './module.vue';

export default defineModule({
	id: 'graphiql',
	name: 'GraphiQL Explorer',
	icon: 'science',
	routes: [
		{
			path: '',
			component: ModuleComponent,
		},
	],
});
