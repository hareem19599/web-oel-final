import "react-color-palette/lib/css/styles.css";
import React from "react";
 function Cards(){
    const main = [{
        img: 'https://www.fonewalls.com/wp-content/uploads/2019/11/Car-Background-Wallpaper-0018.jpg',
        id: 'AUDI',
        name: 'Audi AG, commonly referred to as Audi, is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany. As a subsidiary of its parent company, the Volkswagen Group, Audi produces vehicles in nine production facilities worldwide.',
    },{
        img: 'https://www.fonewalls.com/wp-content/uploads/2019/11/Car-Background-Wallpaper-010-300x585.jpg',
        id: 'FERRARI',
        name: 'Ferrari S.p.A. is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded by Enzo Ferrari in 1939 from the Alfa Romeo racing division as Auto Avio Costruzioni, the company built its first car in 1940, and produced its first Ferrari-badged car in 1947',
    },{
        img: 'https://www.fonewalls.com/wp-content/uploads/2019/11/Car-Background-Wallpaper-004-300x585.jpg',
        id: 'LAMBORGHINI',
        name: 'Automobili Lamborghini S.p.A. is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi.',
    }]
     return(
         <>
         <div className="container">
            <h1>AUTOMOBILE COMPANY</h1>
         </div>
         <div className="container">
            <div className="cardcontainer">
         {main.map((e)=>
             <div className="tc bg-light-gray dib br4 pa4 ma4 grow bw2 shadow-5">
             <div>
            <img src={e.img}/>
            </div>
            <div className="details">
                <h4>{e.id}</h4>
                <p>{e.name}</p>
            </div>
            <div>
                
                <button id="btn">Insert data</button>
                <button id="btn">Show data</button>

                </div>
         </div>
         )
         }
         </div>
         </div>
         </>
     )
 }
 export default Cards;
