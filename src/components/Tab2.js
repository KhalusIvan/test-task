import React, {useEffect} from 'react'
import {Button, FormGroup, Label, Input, Col} from 'reactstrap'

export const Tab2 = (props) => {
    let information = {};
    useEffect(()=>{
        document.getElementById('phone').value = props.tab2.phone || '';
        document.getElementById('email').value = props.tab2.email || '';
    },[])
    function data(step){
        let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        let rePhone = /^\d{10}$/
        if(document.getElementById('phone').value === '' && step === 3) {
            alert('Заполните поле "Телефон"')
        } else if (document.getElementById('phone').value !== '' && !rePhone.test(document.getElementById('phone').value.toLowerCase())) {
            alert("Некоректный телефон")
        } else if (document.getElementById('email').value !== '' && !re.test(document.getElementById('email').value.toLowerCase())) {
            alert("Некоректный емейл")
        } else {
            information.phone = document.getElementById('phone').value;
            information.email = document.getElementById('email').value;
            props.setTab2(information);
            props.setStep(step)
        }    
    }
    return (
        <>
            <Col sm='8' md='6' className="mx-auto border border-warning rounded p-4 mt-5">
                <h2 className="text-center mb-3">Контактная информация</h2>
                <FormGroup>
                    <Input id='phone' type="text" name='phone'/>
                    <Label for="phone">Телефон*</Label><br />
                    <Input id='email' type='text' name='email'/>
                    <Label for="email">Емейл</Label>
                </FormGroup>
                <div className="d-flex justify-content-between align-items-center">
                    <Button color="danger" onClick={()=>{data(1)}}>Назад</Button>
                    <Button color="success" onClick={()=>{data(3)}}>Дальше</Button>
                </div>    
            </Col>
            
        </>
    )
}
