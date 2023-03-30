import './App.css';
import React, { Component } from 'react'
import ListItems from './ListItems/ListItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
library.add(faTrash);

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       item : [],
       currentItem :{
        text : '',
        key : ''
       }
    }

    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  deleteItem(key){
    const filterItems = this.state.item.filter( item => item.key!==key );

    this.setState({
      item: filterItems
    })
  }
  handleInput(e) {
    this.setState({ 
      currentItem:{
        text : e.target.value,
        key : Date.now()
      }
    })
  } 
  addItem(e) {
    e.preventDefault(); // this prevents from reloading\
    const newItem = this.state.currentItem;
    console.log(newItem);

    if( newItem.text !== "" ){
      const newItems = [...this.state.item,newItem];
      this.setState({
          item : newItems,
          currentItem:{
            text : '',
            key : ''
          }
      })
    }
  }
  render() {
    return (
      <div className='App'>
        <header>
          <form id='to-do-form' onSubmit={this.addItem}>
            <input type="text" placeholder='Enter Text' 
            value={this.state.currentItem.text}
            onChange={this.handleInput}
            />
            <button type='submit'>Add</button>
          </form>
        </header>
        <ListItems items={this.state.item}  deleteItem={this.deleteItem} ></ListItems>
      </div>
    )
  }
}

export default App


