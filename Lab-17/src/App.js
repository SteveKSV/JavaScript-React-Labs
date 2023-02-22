import React from 'react';


function Task1 (){
    return (<div>Taks-1-Text</div>);
}


function Task2 (){
    const block = <div>Task-2-Text</div>
    return (block);
}


function Task3() {
	const pTeg = <p>Task-3-Text</p>
	return (
		<div>{pTeg}</div>
		);
}

function Task4() {
	const text1 = <p>Task-4-text1</p>
	const text2 = <p>Task-4-text2</p>
	return (
		<div>{text1} <p>!!!</p> {text2}</div>
	);
}

function Task5() {
	const attr = 'block';
	return (
		<div id={attr}>Task-5-Text</div>
	);
}

function Task6() {
	const attr = 'block';
	return (
		<div class={attr}>Task-6-Text</div>
	);
}

function Task7() {
	const css = {backgroundColor:'green', borderStyle:'solid', borderRadius:'30px'};
	return (
		<div style={css}>Task-7-Text with css</div>
	);
}

function Task8() {
	const show = true;
	if (show) {
		return <div>Task-8-Text-True</div>
	} else {
		return <div>Task-8-Text-False</div>
	}
}

function Task9() {
	const arr = ['a', 'b', 'c', 'd', 'e'];
	const list = arr.map(function (item, index) {
		return <li key={index}>{item}</li>;
	});
	return (
		<div>
			Task-9
			<ul>{list}</ul>
		</div>
		);
}

function Task10() {
	function getText() {
		return (
			<p>Task-10-Text with function getText()</p>
		);
	}

	return getText();
}

function Task11() {
	function getNum1() {
		return 1;
	}

	function getNum2() {
		return 2;
	}

	return (
		<div>Taks-11: {getNum1() + getNum2()}</div>
		);
}


class App extends React.Component {
	render() {
		return (
			<div>
				<div><Task1 /></div>
				-------
				<div><Task2 /></div>
				-------
				<div><Task3 /></div>
				-------
				<div><Task4 /></div>
				-------
				<div><Task5 /></div>
				-------
				<div><Task6 /></div>
				-------
				<div><Task7 /></div>
				-------
				<div><Task8 /></div>
				-------
				<div><Task9 /></div>
				-------
				<div><Task10 /></div>
				-------
				<div><Task11 /></div>
				-------
			</div>
		);
	}
}

export default App;
