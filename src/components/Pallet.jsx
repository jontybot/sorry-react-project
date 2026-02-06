import React from "react"
import "./Pallet.css"
import  no from './no.svg'
import yes from './yes.svg'
export default function Pallet(){
    const [count, setCount] = React.useState(1);
    const [yes, setYes] = React.useState(true);
    const [e, setE] = React.useState("e");
  
    //function ifyes ()
    const yesstyle = {
        height: 100+count*10,
        width: 100+count*10
      };
      const nostyle = {
        height: 100-count*10,
        width: 100-count*10
      };

    return(
        <div className="div">
            {yes?<div>{
                    (()=>
                    {
                        switch(count) {
  
                            case 1:   return <h2>Rishikaaaaa, This app was meant to ask you for Valentines day, but yeah pre releasing it.(press No) </h2>;
                            case 2:   return <h2>I know tumhara mood kharab hai, But kya is janam me tumhaara mood thik ho paaega??</h2>;
                            case 3:   return <h2>Nai Hoga mood sahi??</h2>;
                            case 4:   return <h2>Ek Baar smile to krdo Cutuuu?</h2>;
                            case 5:   return <h2>Please krdo Pineapple</h2>;
                            case 6:   return <h2>See thodi smile aa bhi gyi hai</h2>;
                            case 10:    return <h2>No button hi hata dia! LOL!</h2>
                    
                            default:      return <h2>Pleas{e}?</h2>
                          }
                    })()
                }</div>:<h2>Mere hote hue tumhara mood off kese reh sakta hai, Hehe :)</h2>}
            {yes?<div>
                <button className="btn" style={yesstyle} onClick={()=>{setYes(false)}}></button>
                {count<10?<button className="nobutton" style={nostyle} onClick={()=>{setCount(count+1); if(count>6)setE(e+"e")}}></button>:null}
            </div>:null}
            
        </div>
    )
        
}
