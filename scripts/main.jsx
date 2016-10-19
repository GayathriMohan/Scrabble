import React from 'react';
import {render} from 'react-dom';
import { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import _ from 'underscore';

export default class extends React.Component{
	constructor(props){
		super(props);

		this.state={

			layout :[
      			{i: 'A', x: 0, y: 0, w: 1, h: 3.5},
      			{i: 'B', x: 1, y: 0, w: 1, h: 3.5},
      			{i: 'C', x: 2, y: 0, w: 1, h: 3.5},
      			{i: 'D', x: 3, y: 0, w: 1, h: 3.5},
      			{i: 'E', x: 4, y: 0, w: 1, h: 3.5},
      			{i: 'F', x: 0, y: 2, w: 1, h: 3.5},
      			{i: 'G', x: 1, y: 2, w: 1, h: 3.5},
      			{i: 'H', x: 2, y: 2, w: 1, h: 3.5},
      			{i: 'I', x: 3, y: 2, w: 1, h: 3.5},
      			{i: 'J', x: 4, y: 2, w: 1, h: 3.5},
      			{i: 'K', x: 0, y: 4, w: 1, h: 3.5},
      			{i: 'L', x: 1, y: 4, w: 1, h: 3.5},
      			{i: 'M', x: 2, y: 4, w: 1, h: 3.5},
      			{i: 'N', x: 3, y: 4, w: 1, h: 3.5},
      			{i: 'O', x: 4, y: 4, w: 1, h: 3.5},
      			{i: 'P', x: 0, y: 6, w: 1, h: 3.5},
      			{i: 'Q', x: 1, y: 6, w: 1, h: 3.5},
      			{i: 'R', x: 2, y: 6, w: 1, h: 3.5},
      			{i: 'S', x: 3, y: 6, w: 1, h: 3.5},
      			{i: 'T', x: 4, y: 6, w: 1, h: 3.5}
    		],
    		word:[
	    		{w1:'ABORT'},
	    		{w2:'BLAME'},
	    		{w3:'TRAP'},
	    		{w4:'DRAFT'},
	    		{w5:'CLEAN'}
    		]
		}
	}

	// propTypes: {
 //    onLayoutChange: React.PropTypes.func.isRequired
 //  }

	// onLayoutChange(){
	// 	console.log('sad')
	// 	this.props.onLayoutChange(this.state.layout);
	// }

	randomize(){
		 var p = this.state;
    return _.map(new Array(p.items), function(item, i) {
      var y = _.result(p, 'y') || Math.ceil(Math.random() * 4) + 1;
      return {x: i * 2 % 12, y: Math.floor(i / 6) * y, w: 2, h: y, i: i.toString()};
    });
	}

	render(){
    	var alphabet=_.pluck(this.state.layout, 'i');
    	var tiles=[];
			for (var i=0; i < this.state.layout.length; i++) {
		    	tiles.push(
		    		<div className="demo-card-square mdl-shadow--2dp card-style " key={alphabet[i]} >
                     	<h1 className="letter">{alphabet[i]}</h1> 
					</div>
				);
			}
		var b=_.pluck(this.state.word,'w1');
		for(var j=0;j< this.state.word.length;j++){
			if(b[j]=='ABORT'){
				console.log('Abort success');
			}
		}
		return(
			<ReactGridLayout className="layout" layout={this.state.layout} onLayoutChange={this.onLayoutChange} data-grid={this.randomize()} cols={12} rowHeight={30} width={3000}>
				{tiles}
        	</ReactGridLayout>
		);
	}
}