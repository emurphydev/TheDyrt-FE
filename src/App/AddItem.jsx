import React from 'react';


export default class AddItem extends React.Component{

    constructor(props){
        super(props);
    }

    getItem(){
        let d = document.getElementById('new-item-description').value;
        let n = document.getElementById('new-item-name').value;
        let newItem = {
            "name": n,
            "description": d,
            "imageSrc" : "img/default.png"
        }
        return newItem;
    }

    render(){
        return (
            <div className="add-item-container">
                <div className="add-item-inner">
                    <div className="close" onClick={this.props.onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200"><path d="M600 0C268.63 0 0 268.63 0 600c0 331.369 268.63 600 600 600 331.369 0 600-268.63 600-600S931.369 0 600 0zm0 130.371c259.369 0 469.556 210.325 469.556 469.629 0 259.305-210.187 469.556-469.556 469.556-259.37 0-469.556-210.251-469.556-469.556C130.445 340.696 340.63 130.371 600 130.371zM435.425 305.347L305.347 435.425 469.922 600 305.347 764.575l130.078 130.078L600 730.078l164.575 164.575 130.078-130.078L730.078 600l164.575-164.575-130.078-130.078L600 469.922 435.425 305.347z"/></svg>
                    </div>
                    <label>Campground Name</label>
                    <input type="text" id="new-item-name"/>
                    <label>Description</label>
                    <textarea rows="4" cols="33" id="new-item-description"></textarea>
                    <button className="submit" onClick={(item) => this.props.onSubmit( this.getItem() )}>Submit</button>
                </div>
            </div>
        )
    }
}