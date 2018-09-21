$(document).ready(function () {

	$(".navButton").click(function () {
		$(this).toggleClass("active");
		$("." + $(this).html() + "-box").toggle();
	});

	const res = $(".resultArea").contents().find("body");
	res.html(`<div id="resHTML"></div><style id="resCSS"></style>`);

	require.config({ paths: { 'vs': 'vs' } });
	require(['vs/editor/editor.main'], () => {

		const sharedConfig = {
			automaticLayout: true,
			minimap: {
				enabled: false
			},
			theme: "vs-dark",
		}

		const htmlEditor = monaco.editor.create(document.getElementById('htmlEditor'), {
			value: [
				'<html>',
				'</html>'
			].join('\n'),
			language: 'html',
			...sharedConfig
		});

		const cssEditor = monaco.editor.create(document.getElementById('cssEditor'), {
			value: [
				'body {',
				'  font-family: sans-serif;',
				'  color: white;',
				'  background: black;',
				'}'
			].join('\n'),
			language: 'css',
			...sharedConfig
		});

		const jsEditor = monaco.editor.create(document.getElementById('jsEditor'), {
			value: [
				'console.log(\'hello\')'
			].join('\n'),
			language: 'javascript',
			...sharedConfig
		});

		htmlEditor.onDidChangeModelContent(() => {
			res.find("#resHTML").html(htmlEditor.getValue());
		})
		cssEditor.onDidChangeModelContent(() => {
			res.find("#resCSS").html(cssEditor.getValue());
		})

		res.find("#resHTML").html(htmlEditor.getValue());
		res.find("#resCSS").html(cssEditor.getValue());


		$("#btnRun").on('click', () => {
			res.find("#botjs").remove();
			res.append('<script id="botjs">' + jsEditor.getValue() + '</script>');
		});
	});
})