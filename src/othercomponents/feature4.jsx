import React,{Component} from 'react';
import feature1img1 from './image/shadowanalysis.jpg';
import dummy from './image/main.jpg';
import './styles/feature4.css';
import Header from './Header';
import Footer from './Footer';
class Feature4 extends Component{
    render(){
        return(
            <>
            <Header/>
             <div className="feature-4-body">
                <div className="feature-4-heading">Shadow Analysis</div>
                <div className="feature-4-container">
                    
                        

                        <div className="feature-4-iteam">
                        {/* <span className="feature-33">Enter Yearly Energy Usage:</span> */}
                        <input type="file" ></input>
                        </div>



                        

                        <div className="feature-4-iteam">
                            <button>Analysis Photo</button>
                         </div>

                        
                        

                         
                </div>
                <div className="feature4-image"><img src={feature1img1} alt={dummy}/></div>
            </div>
            <Footer/>
            </>
        )
    }
}
export default Feature4;