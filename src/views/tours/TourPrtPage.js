import React, { Component } from 'react';
import TourItem from '../../components/TourItem';
import {
    Button
} from 'antd';
import { Link } from 'react-router-dom'

class TourPrtPage extends Component {
    
    render() { 
        return (  
            <div>
                <Button className="btn-success pb-1 mr-auto m-2 mt-3"> 
                    <Link to="/tours/create" className="text-white">تعریف تور گردشگری</Link>
                </Button>
                <div className="m-2 row bg-white">
                    <div className="col-md-3 p-3 d-flex justify-content-center">
                        <TourItem />   
                    </div>             
                    <div className="col-md-3 p-3 d-flex justify-content-center">
                        <TourItem />   
                    </div>             
                    <div className="col-md-3 p-3 d-flex justify-content-center">
                        <TourItem />   
                    </div>             
                    <div className="col-md-3 p-3 d-flex justify-content-center">
                        <TourItem />   
                    </div>             
                    <div className="col-md-3 p-3 d-flex justify-content-center">
                        <TourItem />   
                    </div>             
                    <div className="col-md-3 p-3 d-flex justify-content-center">
                        <TourItem />   
                    </div>             
                    <div className="col-md-3 p-3 d-flex justify-content-center">
                        <TourItem />   
                    </div>                
                </div>
            </div>
        );
    }
}
 
export default TourPrtPage;