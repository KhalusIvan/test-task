import React, {useEffect} from 'react'
import {Button, FormGroup, Label, Input, Col} from 'reactstrap'

export const Tab1 = (props) => {
    let information = {};
    useEffect(()=>{
        document.getElementById('header').value = props.tab1.header || '';
        document.getElementById('description').value = props.tab1.description || '';
        document.getElementById('status').checked = props.tab1.status || '';
    },[])
    function data(){
        if(document.getElementById('header').value === '') {
            alert('Заполните поле "Заголовок"')
        } else {
            information.header = document.getElementById('header').value;
            information.description = document.getElementById('description').value;
            information.status = document.getElementById('status').checked;
            props.setTab1(information); 
            props.setStep(2);
        }    
    }
    return (
        <Col sm='8' md='6' className="mx-auto border border-warning rounded p-4 mt-5">
            <h2 className="text-center mb-3">Основная информация</h2>
            <FormGroup >
                <Input id="header" type="text" name='header'/>
                <Label for="header">Заголовок*</Label><br />
                <Input className="mt-2" type="textarea" id="description" name='description'/>
                <Label for="description">Описание</Label><br /></FormGroup>
            <FormGroup check className="d-flex justify-content-between align-items-center">
                <div>
                    <Input id="status" type="checkbox" name="status" />
                    <Label for="status">Статус</Label>
                </div>       
                    <Button color="success" onClick={()=>{data()}}>Дальше</Button>
            </FormGroup>
           
        </Col>
    )
}
