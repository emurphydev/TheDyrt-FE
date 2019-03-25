import React from 'react';
import find from 'ramda/src/find';
import propEq from 'ramda/src/propEq';
import Display from "./Display.jsx";
import List from "./List.jsx";
import AddItem from "./AddItem.jsx";

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selected: props.items[0],
            items: props.items.sort(this.itemSort("name")),
            isModalOpen: false
        }
    }
    
    /**
     * Toggle Add Item Modal
     */
    toggleAddItem() {
		this.setState(isModalOpen => ({
			isModalOpen: !this.state.isModalOpen
		  }));
	}
    /**
	 * Change the selected item
     * @param {String} id - the id of the selected list item
	 */
    onItemClick(id){
 
        this.setState(() => ({
            selected: this.getItem(id)
        }));
    }
    
    /**
	 * Pass this function to Array.sort to sort by an object value. Add "-" prefix for descending
     * @param {String} property - object property to sort by
	 */
    itemSort(property) {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

     /**
	 * Get the an item from the collection by its id
     * @param {String} id - The id of the desired item
	 */
    getItem(id){
        const item = find( propEq('id', id))(this.state.items);
        return item;
    }

    addItem(item){
        if(!item.id){
            item.id = "CG00" + (this.state.items.length+1);
        }

        let all = this.state.items;
        all.push(item);
        window.localStorage.items = JSON.stringify(all);

        this.setState(() => ({
            items: all
        }));
        this.toggleAddItem();
    }

    render(){
        return (
            <div className="app">
                <div className="sidebar">
                    <List items={this.state.items} onItemClick={(id) => this.onItemClick(id)}/>
                    <div className="add-item">
                        <button className="btn" onClick={() => this.toggleAddItem()}>Add</button>
                    </div>
                </div>
                    
                <Display item={this.state.selected}/>
                {this.state.isModalOpen &&(
                    <AddItem onClose={() => this.toggleAddItem()} onSubmit={(item) => this.addItem(item)}/>
                )}
            </div>
        )
    }
}