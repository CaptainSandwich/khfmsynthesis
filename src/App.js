import React, { Component } from 'react';
import './App.css';
var data = require('./data.js')
var lib = require('./lib.js')

function Heartless(props) {
	var name = props.name;
	var worlds = props.worlds.map((world) =>
		<li>{world}</li>
	);
	console.log(name)
	return (
		<div>
			<h3>{name}</h3>
			<ul>{worlds}</ul>
		</div>
	);
}

function SynthesisMaterial(props) {
	console.log(Object.entries(props.droppedBy))
	var heartlessList = props.droppedBy.map((heartless) =>
		<Heartless name={heartless.name} worlds={heartless.worlds} />
	);
	return(
		<div>
			<h3>{props.name}</h3>
			<h4>{props.numRequired}</h4>
			<ul>{heartlessList}</ul>
		</div>
	);
}

function SynthesisItem(props) {
	const item = props.item;
	const name = props.name;
	const matsRequired = item.matsRequired.map((material) =>
		<li key={name}>{material.name} x{material.quantity}</li>
	);

	return (
		<div>
			<h3>{name}</h3>
			<ul>{matsRequired}</ul>
			<label  className={"container"}><input type="checkbox" onChange={() => props.onClick()}/><span className={"checkmark"}></span></label>
		</div>
	);
}

function MaterialList(props) {
	var matsRequired = Object.entries(props.materials).map(([key, material]) =>
		<SynthesisMaterial name={key} numRequired={material.quantity} droppedBy={material.droppedBy}/>
	);
	return (
		<ul>
			{matsRequired}
		</ul>
	);
}

function ItemList(props) {
	var divStyle = {
		height: '10px'
	}
	var items = Object.entries(props.items).map(([key, item]) =>
        <div><SynthesisItem name={key} item={props.items[key]} onClick={() => props.onClick(key)}/><div style={divStyle}></div></div>
    );
    return (
        <ul>
			{items}
		</ul>
    )
}

class App extends Component {
	constructor() {
		super();
		this.state = data.state;
	}
	render() {
		return(
		<div>
			<span className={"scrollbox"}>
				<ItemList items={this.state.synthesisList} onClick={(key) => this.setState(lib.selectItem(this.state.synthesisList[key], key, this.state.synthesisList, this.state.materials))}/>
			</span>
			<span className={"scrollbox"}>
				<MaterialList materials={this.state.materials} />
			</span>
		</div>
		);
	}
}

export default App;