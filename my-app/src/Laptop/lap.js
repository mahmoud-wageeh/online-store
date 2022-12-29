import React , {Component, useEffect, useState} from "react";
import Header from "../header/header";
import axios from "axios";


import './lap.css';
import cardimg  from '../images/cardimg.jpg';
import Footer from "../footer/footer";

function Laptops()  {

  const [data,setData]= useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/products").then((res)=>{setData(res.data.data)} ,(err)=>{console.log(err)});
      

  }, []);
      


    return (
        <div>
      <div className="Laptops">
        <Header/>
        <div className="h1p">
       <h1 className="headh1">LAPTOPS</h1>
        <p className="headp"> SECTION</p>
        {/* <hr className="line"/> */}
       </div>
       <div className="container">
        
        {data.map((e)=>{
            return (e.category=== "63aca25c2bb2b90b9a35f327")? (<div className="card">
            <div className="abear">
            <img src={e.image  }/>
            <button className="add">Add to cart</button>

            </div>
             <h3 className="h3">{e.title}</h3>
             <p> {e.describtion}</p>
             <div className="specs">
             <div className="price">price:{ e.price}</div>
             <div className="sold">sol:{e.sold}</div>
             <div className="quantatiy"> the quantatiy :{e.quantity}</div>

             </div>
           </div>
            ):("");
        })}
        
             </div>
     
      </div>
      <Footer/>
      </div>
    );
  
  }
 

export default Laptops;
