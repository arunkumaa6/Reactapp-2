import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

//create element in react

// const myEle=React.createElement('h1',{},'hello world');
// const myEle1=React.createElement('h2',{},'welcome');

// const container=React.createElement('div',{},[myEle,myEle1]);

// const name='react'
// const sample=<h1>{true ? 'yes': 'no'}</h1>
// const sample2=<h2>{name}</h2>

// create class

// class Myclass{
//     myfun(){
//         document.getElementById('root').innerHTML='Hi Arunkumar, how are you?';
//     }
// }

// var obj=new Myclass();
// obj.myfun();

// local clock time

function Tick() {
        const time=<div>
        <h1>time now</h1>
        <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
        
        root.render(time);
    }
    setInterval(Tick,1000);


// const styles={
//     color:'red',
//     TextAlign:'cneter'
// }

function Myfun(){
    return(
        <div style={{
            color:"blue",
            AlignItem:"center"
        }}>
            <h1>Hi arunkumar </h1>
            <h2>Good morning</h2>
        </div>
    )
}

function Myfun1(){
    return(
        <div style={{
            color:'yellow',
            textAlign:"center"
        }}>Name
            <h1>Hi prakash </h1>
            <h2>Good afternoon</h2>
        </div>
    )
}

function Home(){
    return(
        <div>
            <Myfun/>
            <Myfun1/>
            <App/>
            <Tick/>
        </div>
    )
}

// class Example{
//     Addfun() {
//         let a=10;
//         let b=46;
//         console.log(a*b);
//         // let value=<h1>{a*b}</h1>
//     }
// }


// var obj=new Example();
// obj.Addfun();

// function Example(){
//     this.name='react js';

// }
// Example.prototype.Inputfun=()=>{
//     console.log('name',`${this.name}`);
//     return this.name;
// }


// React -create class function

// class Example{
//     constructor(){
//         this.name='react js';
//     }
//     getInput(){
//         console.log("name",`${this.name}`);
//     }
// }

// class Example1 extends Example{
//     constructor(){
//         super();
//         console.log(this);
//     }
// }


// var obj= new Example1();
// console.log("obj", obj);
// obj.getInput();

// var obj={
//     name:"react js",
//     getFun:function(){
//         console.log(this.name,this.age);
//     }
// }

// var obj1={
//     name:'javascript',
//     age:46
// }

// var output=obj.getFun.bind((obj1));
// output();

root.render(<App/>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
