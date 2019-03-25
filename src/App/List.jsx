import React from 'react';
import ListItem from './ListItem.jsx';

export default class List extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            items: props.items
        }
    }

    render(){
        return (
            <div className="list-container">
                {this.state.items.map((item, i) => (
                    <ListItem key={i} imageSrc={item.imageSrc} title={item.name} id={item.id} onItemClick={(id) => this.props.onItemClick(id)} /> 
                ))}
            </div>
        )
    }
}