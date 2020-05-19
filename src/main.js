import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'there'
	}
});

window.app = app;

export default app;