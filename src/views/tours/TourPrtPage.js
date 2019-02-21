import React, { Component } from 'react';
import TourItem from '../../components/TourItem';

class NewTourPage extends Component {
    
    render() { 
        return (  
            <div className="m-2 row bg-white d-flex justify-left-center ">
                <div className="col-md-3 p-3">
                    <TourItem />   
                </div>             
                <div className="col-md-3 p-3">
                    <TourItem />   
                </div>                            
            </div>
        );
    }
}
 
export default NewTourPage;