import React from 'react';

export default class ListItem extends React.Component{

    constructor(props){
        super(props);
        this.imageSrc = props.imageSrc;
        this.name = props.title;
        this.id = props.id;
    }

    render(){
        return (
            <div className="list-item" onClick={(id) => this.props.onItemClick(this.id)}  >
                <img src={this.imageSrc} />
                <div className="list-item-overlay">
                    <span className="list-item__title">{this.name}</span>
                </div>
            </div>
        )
    }
}