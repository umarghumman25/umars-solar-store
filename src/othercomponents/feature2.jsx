import React,{useState} from 'react';
import feature1img1 from './image/electricloadusage.jpg';
import dummy from './image/main.jpg';
import './styles/feature2.css';
import Header from './Header';
import Footer from './Footer';

const Feature2=()=>{
   
    const [inputFields, setInputFields] = useState([
        {name: ''}
    ])
    const [value, setValue] = useState([
        {appliance: '',watt:'',quantity:''}
    ])
    const [result, setResult] = useState('0')
  

    const addFields = () => {
        let count=0;
        for (let i in inputFields){
            count=i;
            

        }
        if(count<10){
        let newfield = { name: ''}
        let newvalue ={appliance: '',watt:'',quantity:''}
     
    
        setInputFields([...inputFields, newfield])
        setValue([...value, newvalue])}
        else{
            alert("MAX Field Reached...");
        }
       
    }

    let removeFields = () => {
        let data = [...inputFields];
       data.pop();
        
        setInputFields(data)
        let data1 = [...value];
        data1.pop();
        // data1[index].appliance='0';
        setValue(data1);
       
    }

    const handleFormChange = (index, event) => {
        
        let data = [...value];
        data[index].appliance = event.target.value;
        setValue(data);
        watt(data,index)
        
        
      
    }
    const handlenumberChange = (index, event) => {
        let data = [...value];
        data[index].quantity = event.target.value;
        setValue(data);   
      
    }
    const Computeres=()=>{
        let result=0;
        let data = [...value];
          for (let i=0;i<data.length;i++) {
            let a=data[i].watt;
            let b=data[i].quantity;
             result=result+(a*b);
            // console.log(a*b)
          }
          result=(result/1000);
          setResult(result);
    }
    
    const submit = (e) => {
        e.preventDefault();
        Computeres();
        console.log(value);
        
    }
    function watt(val,i){
        let wattVal='',targetindex='';
        let appliances_data = [{
            
            "appliance_name": "Energy Saver",
            "power_rating": "25.00",
            
        }, {
            
            "appliance_name": "Tube Lights",
            "power_rating": "40.00",
           
        }, {
          
            "appliance_name": "LED Bulb",
            "power_rating": "15.00",
            
        }, {
          
            "appliance_name": "Fans",
            "power_rating": "100.00",
          
        }, {
         
            "appliance_name": "TV",
            "power_rating": "400.00",
        
        }, {
           
            "appliance_name": "LED TV",
            "power_rating": "18.00",
            
        }, {
            
            "appliance_name": "Computer",
            "power_rating": "250.00",
            
        }, {
         
            "appliance_name": "Refrigerator",
            "power_rating": "350.00",
            
        }, {
          
            "appliance_name": "Fridge",
            "power_rating": "250.00",
           
        }, {
            
            "appliance_name": "Washing Machine",
            "power_rating": "500.00",
            
        }, {
          
            "appliance_name": "Water Pump 1 HP",
            "power_rating": "1500.00",
            
        }, {
           
            "appliance_name": "Iron",
            "power_rating": "1100.00",
          
        }, {
            
            "appliance_name": "Split AC",
            "power_rating": "3504.00",
          
        }, {
            
            "appliance_name": "Inverter AC",
            "power_rating": "1954.00",
          
        }, {
            "appliance_name": "Microwave",
            "power_rating": "1200.00",
            
        },{
            "appliance_name": "Select Option",
            "power_rating": "0",
            
        }
    ]
   
        
 
        appliances_data.map((input, index)=> {
           if( appliances_data[index].appliance_name===val[i].appliance)
           {
           
            wattVal=(appliances_data[index].power_rating);
            targetindex=i;
        
            
           }
           return 0;

        })
        let data = [...value];
        data[targetindex].watt = wattVal;
        setValue(data);
    
    }
        return(
            <>
            <Header/>
            <div className="feature-2-body">
            <div className="feature-2-heading">Calculate Electric Load</div>
                    
            <div className="App">
                <div className="fieldheading">
                    <div className="fieldname">Appliance</div>
                    <div className="fieldname">Power Rating (Watts)</div>
                     <div className="fieldname">Quantity</div>
                     </div>
              
        
            
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
                 <div className="feature-2-iteam">
              <select  className="point-1" id="first_val" onChange={e=>handleFormChange(index,e)}>
              <option value="Select Option">Select Option</option>
                <option value="Energy Saver">Energy Saver</option>
                <option value="Tube Lights">Tube Lights</option>
                <option value="LED Bulb">LED Bulb</option>
                <option value="Fans">Fans</option>
                <option value="TV">TV</option>
                <option value="LED TV">LED TV</option>
                <option value="Computer">Computer</option>
                <option value="Refrigerator">Refrigerator</option>
                <option value="Fridge">Fridge</option>
                <option value="Washing Machine">Washing Machine</option>
                <option value="Water Pump 1 HP">Water Pump 1 HP</option>
                <option value="Iron">Iron</option>
                <option value="Split AC">Split AC</option>
                <option value="Inverter AC">Inverter AC</option>
                <option value="Microwave">Microwave</option>
                </select>
                <span className="feature-2-form"><input defaultValue={value[index].watt}></input></span>
                <span className="feature-2-form"><input type="number" name="point-a" id="a1"min='0' max='30' onChange={e=>handlenumberChange(index,e)}></input></span>
                </div>
            </div>
          )
        })}
      
    
      <span className="feature-2-button"><button  onClick={addFields}>Add </button></span>
      <span className="feature-2a-button"><button onClick={removeFields}>Remove</button></span>
    </div>
    

    <span className="feature-2d-button"> <h1>{result} KW</h1></span>
    <span className="feature-2c-button"><button onClick={submit}>Calculate Electric Load</button></span>
   
                       

                        

         
    <div className="feature2-image"><img src={feature1img1} alt={dummy}/></div> 
            </div>
            <Footer/>
            </>
          
        )
      
    }

export default Feature2;