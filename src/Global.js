import { execFile } from 'child_process';

export function runCommand(exeFilePath) {
	if (exeFilePath && confirm(`Run ${exeFilePath} ?`)) {
		console.log('Run exe');
		execFile(exeFilePath, function (err, data) {
			console.log(err);
			console.log(data);
		});
	} else {
		alert('Fail');
	}
}
