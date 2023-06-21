import React,{useState} from "react";
import feature1img1 from './image/solarsystemcost.jpg';
import dummy from './image/main.jpg';
import './styles/solarprojectcost.css';
import Header from './Header';
import Footer from './Footer';
const SolarProjectCost=()=>{
    const [inputFields, setInputFields] = useState([
        {name: '0'},{name: '0'},{name: '0'},{name: '0'},{name: '0'}
        ,{name: '0'},{name: '0'},{name: '0'},{name: '0'},{name: '0'},
    ])
    const [value, setValue] = useState([
        {price: '0',quantity:'0'},{price: '0',quantity:'0'},{price: '0',quantity:'0'},{price: '0',quantity:'0'},{price: '0',quantity:'1'},{price: '0',quantity:'1'},{price: '0',quantity:'1'},{price: '0',quantity:'1'},{price: '0',quantity:'1'},{price: '0',quantity:'1'},
    ])

    const [result, setResult] = useState('0')
   
   
    const handleFormChange = (index,event) => {
        
        let data = [...inputFields];
        data[index].name = event.target.value;
        setInputFields(data);
         product(index);  
      
    }

    const handlenumberChange = (index, event) => {
        let data = [...value];
        data[index].quantity = event.target.value;
        setValue(data);   
      
    }
    const handleFormChange1 = (index,event) => {
        
        let data1 = [...value];
        let data = [...inputFields];
        data[index].name = event.target.value;
        setInputFields(data);
       
        if(index===4){
           
         
            let data2 =inputFields[index].name
            data1[index].price = data2*5000;
            setValue(data1);
        }
       else if(index===5){
           
        
            let data2 =inputFields[index].name
            data1[index].price = data2*2000;
            setValue(data1);
        }
       else if(index===6){
           
            
            let data2 =inputFields[index].name
            data1[index].price = data2*500;
           setValue(data1);
        }
        else if(index===7){
           
            
            let data2 =inputFields[index].name
            data1[index].price = data2*1000;
            setValue(data1);
        }
        else if(index===8){
           
            
            let data2 =inputFields[index].name
            data1[index].price = data2*30000;
            setValue(data1);
        }
        
        
      
    }

    function product(i){
        let price='',targetindex='';
        
        let product_data = [{
            
            "product_name": "Longi 550W",
            "price": "55000",
            
        }, {
            
            "product_name": "Jinko 550W",
            "price": "53900",
           
        }, {
          
            "product_name": "Canadian 550W",
            "price": "54450",
            
        }, {
          
            "product_name": "Aluminium Stand",
            "price": "7000",
          
        }, {
         
            "product_name": "Galvanized Steel Stand",
            "price": "5000",
        
        }, {
           
            "product_name": "Elevated Structure",
            "price": "10000",
            
        }, {
            
            "product_name": "Invervex 5KW",
            "price": "400000",
            
        }, {
         
            "product_name": "Solar Max4KW",
            "price": "200000",
            
        }, {
          
            "product_name": "Crown 4KW",
            "price": "170000",
           
        }, {
            
            "product_name": "Growatt 10KW",
            "price": "350000",
            
        }, {
          
            "product_name": "Huwai 10Kw",
            "price": "400000",
            
        }, {
           
            "product_name": "Fronus 6KW",
            "price": "180000",
          
        }, {
            
            "product_name": "Tabular Battery 1800",
            "price": "50000",
          
        }, {
            
            "product_name": "Tabular Battery 2500",
            "price": "70000",
          
        },{
            "product_name": "0",
            "price": "0",
            
        },{
            "product_name": "Net-Metering",
            "price": "75000",
            
        }
    ]

    product_data.map((input, index)=> {
        if( product_data[index].product_name===inputFields[i].name)
        {
        
         price=(product_data[index].price);
         targetindex=i;
     
         
        }
        return 0;

     });

      
     
     let data1 = [...value];
     data1[targetindex].price = price;
     setValue(data1);
     
    }
    const Computeres=()=>{
        let result=0;
        let data = [...value];
          for (let i=0;i<data.length;i++) {
            
            let a=data[i].price;
            let b=data[i].quantity;
             result=result+a*b;
            
              
          }
          
          
          
          setResult(result);
        
    }
    function myFunction(index,e) {
        // Get the checkbox
        var checkBox = document.getElementById("myCheck");
    

        if (checkBox.checked === true){
            handleFormChange(index,e)
        } 
        else {
          let data=[...value]
          data[index].price=0
          setValue(data);
        }
      }
    const display=(e)=>{
        e.preventDefault();
        Computeres(result);
        for (let i in value)
        {
            console.log(value[i])
        }
    }
    
        return(
            <>
            <Header/>
            <div className="feature-1-b">
                <div className="feature-1-heading">Solar Project Cost Estimation</div>
                    <div className="feature-1-con">
                    <div className="feature-1-iteam">
                        
                        <select className="point-1" id="first_val" 
                        onChange={e=>handleFormChange(0,e)}>
                        <option value='0'>Select Panel</option>
                        <option value='Longi 550W'>Longi 550W</option>
                        <option value='Jinko 550W'>Jinko 550W</option>
                        <option value='Canadian 550W'>Canadian 550W</option>
                        </select>
                       
                        <span className="feature-1a">Quantity:</span>
                        <span className="feature-1-form"><input type="number" name="point-a"  id="a1"min='0' max='30' onChange={e=>handlenumberChange(0,e)}></input></span>
                        </div>

                        <div className="feature-1-iteam">
                  
                        <select name="point-1" id="second_val"
                         onChange={e=>handleFormChange(1,e)}
                         >
                        <option value='0'>Select Stand</option>
                        <option value='Aluminium Stand'>Aluminium Stand</option>
                        <option value='Galvanized Steel Stand'>Galvanized Steel Stand</option>
                        <option value='Elevated Structure'>Elevated Structure</option>
                        </select>
                        <span className="feature-1a">Quantity:</span>
                        <span className="feature-1-form"><input type="number" name="point-a" id="point-a"min='0' max='30' onChange={e=>handlenumberChange(1,e)}></input></span>
                        </div>

                        <div className="feature-1-iteam">
                      
                        <select name="point-1" id="third_val"
                         onChange={e=>handleFormChange(2,e)}
                         >
                        <option value='0'>Select Invertor</option>
                        <option value='Invervex 5KW' >Invervex 5KW</option>
                        <option value='Solar Max4KW'>Solar Max4KW</option>
                        <option value='Crown 4KW'>Crown 4KW</option>
                        <option value='Growatt 10KW' >Growatt 10KW</option>
                        <option value='Huwai 10Kw'>Huwai 10Kw</option>
                        <option value='Fronus 6KW'>Fronus 6KW</option>
                        </select>
                        <span className="feature-1a">Quantity:</span>
                        <span className="feature-1-form"><input type="number" name="point-a" id="point-a"min='0' max='30' onChange={e=>handlenumberChange(2,e)}></input></span>
                        </div>

                        <div className="feature-1-iteam">
                       
                        <select name="point-1" id="sixth_val"
                         onChange={e=>handleFormChange(3,e)}
                         >
                        <option value='0'>Select Battery</option>
                        <option value='Tabular Battery 1800'>Tabular Battery 1800</option>
                        <option value='Tabular Battery 2500'>Tabular Battery 2500</option>
                       
                        </select>
                        <span className="feature-1a">Quantity:</span>
                        <span className="feature-1-form"><input type="number" name="point-a" id="point-a"min='0' max='30' onChange={e=>handlenumberChange(3,e)}
                        ></input></span>
                        </div>

                        <div className="feature-1-iteam">
             
                        <span className="feature-1a-form"><input type="number" name="point-a" id="point-a"min='0' max='30' placeholder=' Protection in KW' 
                        
                        onChange={e=>handleFormChange1(4,e)}/></span>
                        </div>

                        <div className="feature-1-iteam">
                        
                        <span className="feature-1a-form"><input type="number" name="point-a" id="point-a"min='0' max='30' placeholder=' Ducting' 
                        
                           onChange={e=>handleFormChange1(5,e)}
                           ></input></span>
                        
                        </div>

                        <div className="feature-1-iteam">
                        
                        <span className="feature-1a-form"><input type="number" name="point-a" id="point-a"min='0' max='30'placeholder=' Cables' 
                           
                           onChange={e=>handleFormChange1(6,e)}
                           ></input></span>
                        
                        </div>

                       

                        <div className="feature-1-iteam">
                        <span className="feature-1a-form"><input type="number" name="point-a" id="point-a"min='0' max='30' placeholder=' Miscellaneous'
                         
                           onChange={e=>handleFormChange1(7,e)} 
                           ></input></span>
                        </div>

                        <div className="feature-1-iteam">
                        <span className="feature-1a-form"><input type="number" name="point-a" id="point-a"min='0' max='5' placeholder=' Booring'
                         
                           onChange={e=>handleFormChange1(8,e)} 
                           ></input></span>
                        </div>

                        <div className="feature-1-iteam">
                        <span className="feature-1ab-form"><input type="checkbox" id='myCheck'name='fieldone' value='Net-Metering' onClick={(e=>myFunction(9,e))}></input><span className="fff">Net-Metering</span>
                        </span>
                        </div>

                         <div className="feature-1-iteam">
                         <span className="feature-button"> <h1>Rs. {result}</h1></span>
                            <button onClick={e=>display(e)}> Calculate Cost</button>

                          
                         </div>
                </div>
                <div className="feature1-image"><img src={feature1img1} alt={dummy}/></div>
            </div>
             
            <Footer/>
            
           </>
        )
       
    }
    

export default SolarProjectCost;