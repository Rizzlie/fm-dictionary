<script lang="ts">
	export let checked = false;
</script>

<label class="toggle">
	<input on:change type="checkbox" {checked} />
	<span class="slider round" />
</label>

<style>
	.toggle {
		position: relative;
		display: inline-block;
		width: 40px;
		height: 20px;
	}

	.toggle input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		-webkit-transition: 0.4s;
		background-color: var(--bgc-toggle-actived);
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 14px;
		width: 14px;
		left: 3px;
		bottom: 3px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider {
		background-color: var(--bgc-toggle-deactivated);
	}

	input:focus + .slider {
		box-shadow: 0 0 1px var(--bgc-toggle-actived);
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(20px);
		-ms-transform: translateX(20px);
		transform: translateX(20px);
	}

	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
</style>
