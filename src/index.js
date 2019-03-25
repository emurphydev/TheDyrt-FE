import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App.jsx';
import $ from 'jquery';
const jsonFileItems = require('./campgrounds.json');

const localStorageItems = window.localStorage.items;
let source = "";
if(localStorageItems){
    let obj = JSON.parse(localStorageItems);
    source = obj;
    
}else{
    window.localStorage.items = JSON.stringify(jsonFileItems.items);
    source = jsonFileItems.items;
}

ReactDOM.render(<App items={source}/>, document.getElementById('root'));

//attach an event handler to mobile list toggle
function toggleList(e){

    const list = $('.sidebar');
    if(list.hasClass('is-open')){
        list.removeClass('is-open');
        $('#js-list-toggle').css('background-color', '');
    }else{
        list.addClass('is-open');
        $('#js-list-toggle').css('background-color', '#0a172b');
    }
}

$('#js-list-toggle').click((e) => toggleList(e) );
