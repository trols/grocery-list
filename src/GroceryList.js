import { Component } from 'react';
import check from'./check.png';

export class GroceryList extends Component{
    state={
userInput:"",
groceryList:[]
    }

    onChangeEvent(e){
        this.setState({userInput: e})
    }
    addItem(input){
        if(input===''){
            alert('Please enter an item')
        }
        else{
        let listArray=this.state.groceryList;
        listArray.push(input);
        this.setState({groceryList: listArray,userInput:''})
    }}
    deleteItem(){
        let listArray=this.state.groceryList;
        listArray=[];
        this.setState({groceryList: listArray})
    }
    crossedWord(e){
        const li=e.target;
        li.classList.toggle('crossed');
    }
    onFormSubmit(e){
        e.preventDefault();
    }
   


    render(){
        return(
<div>
    <form onSubmit={this.onFormSubmit}>
    <div className='container'>
<input type="text" placeholder='What do you want to buy?' 
onChange={(e)=>{this.onChangeEvent(e.target.value)}}
value={this.state.userInput}/>
</div>

<div className='container'>
    <button className='add' onClick={()=>this.addItem(this.state.userInput)}>Add</button>
</div>

<ul>
    {this.state.groceryList.map((item,index)=>(
        <li onClick={this.crossedWord} key={index}
        alt="check-box" >
            <img src={check} width="40px" alt='check'/>
            {item}</li>
    ))}
</ul>

<div className='container'>
    <button className='delete' onClick={()=>this.deleteItem()}>Delete</button>
</div>
</form>
</div>
        )

    }
}