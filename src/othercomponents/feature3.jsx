import React,{useState} from 'react';
import feature1img1 from './image/roi.jpg';
import dummy from './image/main.jpg';
import './styles/feature3.css';
import Header from './Header';
import Footer from './Footer';
const Feature3=()=>{
    const [inputFields, setInputFields] = useState([
        {value: '0'}, {value: '0'}, {value: '0'},
    ])
    const [value, setValue] = useState('0')

    const handleFormChange = (index, event) => {
        
        let data = [...inputFields];
        if(index===1){
        data[index].value = event.target.value*4.2*365;
        setInputFields(data);
        }
        else{
            data[index].value = event.target.value;
        setInputFields(data); 
        }
        
         
    }
    const result=()=>{
        let  result=0;
        let res=0;
    
    
        result=inputFields[1].value*inputFields[2].value;
        res=inputFields[0].value/result;
        setValue(res.toFixed(2));
    }
    const submit = (e) => {
        e.preventDefault();
        result();
        for (let i in inputFields){
            console.log(inputFields[i])
        }
        
        
    }
    
        return(
            <>
            <Header/>
             <div className="feature-3-body">
                <div className="feature-3-heading">Return On Investment</div>
                <div className="feature-3-container">
                    <div className="feature-3-iteam">
                        <span className="feature-31">Enter System Cost:</span>
                        <input type="number" placeholder="Enter Amount" min='0' max='0'
                        onChange={e=>handleFormChange(0,e)}></input>
                        </div>

                        <div className="feature-3-iteam">
                        <span className="feature-32">Enter System Capacity:</span>
                        <input type="number" placeholder="Enter Amount"min='0' max='30'
                         onChange={e=>handleFormChange(1,e)}></input>
                        </div>

                        <div className="feature-3-iteam">
                        <span className="feature-33">Unit Cost:</span>
                        <input type="number" min='0' max='30'placeholder="Enter Amount"
                         onChange={e=>handleFormChange(2,e)}></input>
                        </div>

                        {/* <div className="feature-3-iteam">
                        <span className="feature-34">Include 26% Fedral Tax Credit</span>
                        </div> */}


                        {/* <div className="feature-3-itea">
                        <span className="feature-35"><input type="radio" name="sel"/>Yes</span>
                        <span className="feature-35"><input type="radio" name="sel"/>No</span>
                        </div> */}

                        <div className="feature-3-iteam">
                           
                            <button onClick={submit}>Calculate ROI</button>
                            <span class="val"><h1>{value} Years</h1></span>
                         </div>

                        
                        

                         
                </div>
                <div className="feature3-image"><img src={feature1img1} alt={dummy}/></div>
            </div>
            <Footer/>
            </>
        )
    }

export default Feature3;