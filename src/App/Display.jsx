import React from 'react';

export default class Display extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="display-container">
                <div className="display-image-wrapper">
                    <img src={this.props.item.imageSrc} />
                    <div className="display-details">
                        <div className="display-details__title">
							{this.props.item.name}
						</div>
                        <div className="display-details__description">
                            {this.props.item.description}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}