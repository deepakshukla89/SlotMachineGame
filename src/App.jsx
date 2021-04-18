import  React from "react";
import SlotM from "./SlotMach"

const App =()=>{
    return(    <>
        <h1 className="heading_style">Welcome to <span className="span_heading" style={{fontWeight:"bold"}}>Slot Machine Game </span> </h1>
        <div className="slot_machine">
            <SlotM  x='😊' y='😊' z='😊' />
            <hr/>
            <SlotM  x='😊' y='😃' z='😊' />
            <hr/>
            <SlotM  x='😅' y='😊' z='😃' />
            <hr/>
            <h2 className="heading_style_two"> I hope You enjoy this Game </h2>
        </div>
        
    </>);

};
 export default App;