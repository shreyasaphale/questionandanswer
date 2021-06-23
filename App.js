import React, { Component } from 'react';
import './App.css';
import ListItems from './components/ListItems';
import './components/MyappStyle.css';


class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          items:[],
          currentItem:{
              text:'',
              key:'',
              answers:''
          }
      }
      this.handleInput = this.handleInput.bind(this);
      this.addItem = this.addItem.bind(this);
      
      

  }
  handleInput(e){
      this.setState({
          currentItem:{
              text: e.target.value,
              key:Date.now()
          }
      })
  }
  addItem(e){
      e.preventDefault();
      const newItem = this.state.currentItem;
      //console.log(newItem);
      if(newItem.text!==""){
          const newItems=[...this.state.items,newItem];
          this.setState({
              items:newItems,
              currentItem:{
                  text: '',
                  key:'',
                  answers:''
              }
          })
      }

  }



  
 render() {
     return (
         <div className="app1">
             <header>
             <h3>Have a burning question?Ask the community</h3>
             <form id="to-do-form" onSubmit={this.addItem}>
                 
                 <input type="text" placeholder="Enter Text" value={this.state.currentItem.text} onChange={this.handleInput}></input>
                 <button type="submit">Post</button>
                 
                 
                 
             </form>
         </header>
         <ListItems items= {this.state.items}></ListItems>
         
         
         
         
         </div>
         
                     
     )
 }

}



export default App

