import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
const Silder=()=> {
    var [flag,setFlag]=useState(1);
    const detail=["Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt is the most explicabo. ",
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, ",
                    "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt is ",
                    "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt is the most explicabo. ",
                    "voluptatem accusantium doloremque laudantium, ",
                    "quasi architecto beatae vitae dicta sunt is the most explicabo. "
                ];

                useEffect(()=>{
                    if(flag>6){
                        setFlag(flag=1);
                    }
                    setTimeout(() => {
                       setFlag(flag+=1);
                      }, 7000);
                },[flag])

    return (
        <div className="slider-wrapper">
             <div className="img-nav">
                 <img src="Images/3.png" alt="" className="img-link1" onClick={()=>setFlag(flag=1)}/>
                 <img src="Images/1.png" alt="" className="img-link2" onClick={()=>setFlag(flag=2)}/>
                 <img src="Images/22.png" alt="" className="img-link3" onClick={()=>setFlag(flag=3)}/>
                 <img src="Images/3.png" alt="" className="img-link4" onClick={()=>setFlag(flag=4)}/>
                 <img src="Images/1.png" alt="" className="img-link5" onClick={()=>setFlag(flag=5)}/>
                 <img src="Images/22.png" alt="" className="img-link6" onClick={()=>setFlag(flag=6)}/>

             </div>
             <div className="feedback-detail">
                   { flag==1 ? <p><img src="Images/mark.png" className="upper-mark"/> 
                       {detail[0]}
                       <img src="Images/mark.png" className="lower-mark"/> 
                       </p> :<></>}
                     {  flag==2 ? <p><img src="Images/mark.png" className="upper-mark"/> 
                         {detail[1]}
                         <img src="Images/mark.png" className="lower-mark"/> 
                         </p>: <></>}
                      { flag==3 ? <p><img src="Images/mark.png" className="upper-mark"/> 
                          {detail[2]}
                          <img src="Images/mark.png" className="lower-mark"/> 
                          </p>: <></>}
                      { flag==4 ? <p><img src="Images/mark.png" className="upper-mark"/> 
                          {detail[3]}
                          <img src="Images/mark.png" className="lower-mark"/> 
                          </p>: <></>}
                      { flag==5 ? <p><img src="Images/mark.png" className="upper-mark"/> 
                          {detail[4]}
                          <img src="Images/mark.png" className="lower-mark"/> 
                          </p>: <></>}
                       {flag==6 ? <p><img src="Images/mark.png" className="upper-mark"/> 
                           {detail[5]}
                           <img src="Images/mark.png" className="lower-mark"/> 
                           </p>: <></>}

                   
               <h6>- Sara Smith
                   <span>CEO ABC Company</span></h6>
             </div>
        </div>
    )
}

export default Silder
