import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		motherearth: 'Gaia'
	}
});

export default app;