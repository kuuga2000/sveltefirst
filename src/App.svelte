<script>
	export let name;
	export let motherearth;
	let godname = "Zeus";

	const handleClick = () => {
		godname = "Cronos";
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<h1>Hello {motherearth}</h1>
	<p>What is your name {godname}</p>
	<button on:click={handleClick}>Update Name</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>