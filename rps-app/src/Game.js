import { useState } from "react";
// import { useHistory } from "react-router";


const Game = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [rps1, setRps1] = useState('RPS');
    const [rps2, setRps2] = useState('RPS');
    const [refresh, setRefresh] = useState(false);

    const handleChange1 = () =>{
        const arr = ["Rock","Papper","Scissor"]
        const ind = Math.floor(Math.random()*3)
        const item = arr[ind]
        if(item==="Papper"){
            setCount2(count2+1)
            setRps1("You Rock")
            setRps2("Bot Papper")
        }
        else if(item==="Scissor"){
            setCount1(count1+1)
            setRps1("You Rock")
            setRps2("Bot Scissor")
        }
        else{
            setCount1(count1)
            setCount2(count2)
            setRps1("You Rock")
            setRps2("Bot Rock")
        }

        if(count1===3){
            setRps1("You Win")
            setRps2("Bot Lost")
            setCount1(0)
            setCount2(0) 
        }
        else if(count2===3){
            setRps1("You Lost")
            setRps2("Bot Win")
            setCount1(0)
            setCount2(0) 
        }
        else if(count1===3 && count2===3){
            setRps1("Draw Match")
            setRps2("Draw Match")
            setCount1(0)
            setCount2(0) 
        }
    }

    const handleChange2 = () =>{
        const arr = ["Rock","Papper","Scissor"]
        const ind = Math.floor(Math.random()*3)
        const item = arr[ind]
        if(item==="Papper"){
            setCount1(count1+1)
            setRps1("You Scissor")
            setRps2("Bot Papper")
        }
        else if(item==="Rock"){
            setCount2(count2+1)
            setRps1("You Scissor")
            setRps2("Bot Rock")
        }
        else{
            setCount1(count1)
            setCount2(count2)
            setRps1("You Scissor")
            setRps2("Bot Scissor")
        }
        if(count1===3){
            setRps1("You Win")
            setRps2("Bot Lost")
            setCount1(0)
            setCount2(0) 
        }
        else if(count2===3){
            setRps1("You Lost")
            setRps2("Bot Win")
            setCount1(0)
            setCount2(0) 
            
        }
        else if(count1===3 && count2===3){
            setRps1("Draw Match")
            setRps2("Draw Match")
            setCount1(0)
            setCount2(0) 
        }
    }

    const handleChange3 = () =>{
        const arr = ["Rock","Papper","Scissor"]
        const ind = Math.floor(Math.random()*3)
        const item = arr[ind]
        if(item==="Rock"){
            setCount1(count1+1)
            setRps1("You Papper")
            setRps2("Bot Rock")
        }
        else if(item==="Scissor"){
            setCount2(count2+1)
            setRps1("You Papper")
            setRps2("Bot Scissor")
        }
        else{
            setCount1(count1)
            setCount2(count2)
            setRps1("You Papper")
            setRps2("Bot Papper")
        }
        if(count1===3){
            setRps1("You Win")
            setRps2("Bot Lost")
            setCount1(0)
            setCount2(0) 
        }
        else if(count2===3){
            setRps1("You Lost")
            setRps2("Bot Win")
            setCount1(0)
            setCount2(0)
        }
        else if(count1===3 && count2===3){
            setRps1("Draw Match")
            setRps2("Draw Match")
            setCount1(0)
            setCount2(0) 
        }
    
    }

    
    return (
        <div className="container">
            <div className="header text-center">
            <h1>WELCOME TO RPS</h1>
            </div>
            <div className="btn4 text-center">
                {
                    (rps1==="You Win" || rps2==="Bot Win")
                    ?
                    (
                        <button className="refresh" onClick={() =>setRefresh(window.location.reload(false))}>{refresh}Play Again</button>
                    )
                    :
                    (
                        <button className="refresh">{refresh}Enjoy</button>
                    )
                }
            </div>
            <div className="icons">
            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="56" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="96" height="56" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg>
            </div>
            <div className="Counter">
                <h3>{count1}</h3>
                <h3>{count2}</h3>
            </div>
            <div className="elements">
                <h3>{rps1}</h3>
                <h3>{rps2}</h3>
            </div>
            <div className="images">
                <button className="btn1" onClick={handleChange1} ><img src={require("./fist.png")} alt="Loading.." style={{width:50,height:50}}/></button>
                <button className="btn1" onClick={handleChange2} ><img src={require("./scissors.png")} alt="Loading.." width={50} height={50}/></button>
                <button className="btn1" onClick={handleChange3} ><img src={require("./document.png")} alt="Loading.." width={50} height={50} /></button>                 
            </div>
        </div>
    );
}
 
export default Game;