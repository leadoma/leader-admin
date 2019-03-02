import React, { Component } from 'react';
import InputBox from '../../components/InputBox/InputBox';
import { Calendar, DatePicker } from 'react-persian-datepicker';
import {
    Input
} from 'antd';
import '../../components/basicCal.css'

const { TextArea } = Input;

class CreateTourPage extends Component {
    state = {  }
    render() { 
        console.log("create tour page")
        return ( 
            <div>
                <p dir="rtl" className="text-right m-4 text-secondary font-weight-bold">تعریف تور گردشگری</p>
                <p className="text-right"><small dir="rtl" className="  m-4 text-secondary">می توانید در این صفحه تور گردشگری خود را تعریف نمایید.</small></p>
                <div className="m-2 bg-white p-3">
                    <div className="col-md-6 p-2 ml-auto">
                        <InputBox placholder="عنوان تور" type="user"/>
                    </div>   
                    <div className="col-md-6 p-2 ml-auto">
                        <TextArea dir="rtl" rows={3} placeholder="توضیحی مختصر از تور"/>
                    </div> 
                    <div className="col-md-6 p-2 ml-auto">
                        <DatePicker />
                    </div> 
                                              
                </div>
            </div>
         );
    }
}
 
export default CreateTourPage;