<script>
	const { ipcRenderer } = window.require('electron');

	let exeFilePath = '';
</script>

<div id="launch-MySurvey">
	<input
		type="text"
		placeholder="C:/path/to/mySurvey.exe ..."
		bind:value={exeFilePath}
	/>
	<button
		on:click={() => {
			ipcRenderer.send('openMySurvey', exeFilePath);
		}}>Lancer MySurvey</button
	>
</div>
