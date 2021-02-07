import React, {useEffect} from 'react'
import {Button, FormGroup, Input, Label, Col} from 'reactstrap'

export const Tab4 = (props) => {
    let information = {};
    useEffect(()=>{
        document.getElementById('service1').checked = props.tab4.service1 || '';
        document.getElementById('service2').checked = props.tab4.service2 || '';
        document.getElementById('service3').checked = props.tab4.service3 || '';
        document.getElementById('service4').checked = props.tab4.service4 || '';
        document.getElementById('service5').checked = props.tab4.service5 || '';
    },[])
    function data(){
        information.service1 = document.getElementById('service1').checked;
        information.service2 = document.getElementById('service2').checked;
        information.service3 = document.getElementById('service3').checked;
        information.service4 = document.getElementById('service4').checked;
        information.service5 = document.getElementById('service5').checked;
    }return (
        <>
            <Col sm='8' md='6' className="mx-auto border border-warning rounded p-4 mt-5">
                <h2 className="text-center mb-3">Услуги</h2>
                <FormGroup check>
                    <Input id='service1' type="checkbox" name="service1" />
                    <Label htmlFor="service1">Платная услуга 1</Label><br />
                    <Input id='service2' type="checkbox" name="service2" />
                    <Label htmlFor="service2">Платная услуга 2</Label><br />
                    <Input id='service3' type="checkbox" name="service3" />
                    <Label htmlFor="service3">Платная услуга 3</Label><br />
                    <Input id='service4' type="checkbox" name="service4" />
                    <Label htmlFor="service4">Платная услуга 4</Label><br />
                    <Input id='service5' type="checkbox" name="service5" />
                    <Label htmlFor="service5">Платная услуга 5</Label>
                </FormGroup>
                <div className="d-flex justify-content-between align-items-center">
                    <Button color="danger" onClick={()=>{data(); props.setTab4(information); props.setStep(3)}}>Назад</Button>
                    <Button color="success" onClick={()=>{data(); props.setTab4(information); props.setStep(5)}}>Дальше</Button>
                </div>    
            </Col>
            
            
        </>
    )
}
