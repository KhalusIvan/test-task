import React, {useEffect} from 'react'
import {Button, FormGroup, Input, FormText, Col} from 'reactstrap'

export const Tab3 = (props) => {
    let information = {};
    let counter = props.tab3.photo.length;
    information.photo = props.tab3.photo.slice()
    useEffect(()=>{
        for(let i = 0; i < props.tab3.photo.length; i++) {
            document.getElementById("img" + i).src = props.tab3.photo[i];
        }
        document.getElementById('photo').addEventListener('change', (e)=>{
            if(counter === 5){
                alert('Максимум 5 изображений')
            } else {
                if (FileReader) {
                    var fr = new FileReader();
                    fr.onload = function () {
                        document.getElementById("img"+counter).src = fr.result;
                        information.photo.push(fr.result)
                        counter++;
                    }
                    fr.readAsDataURL(document.getElementById('photo').files[0]);
                }
            }   
        })
    },[])
    return (
        <>
            <Col sm='8' md='6' className="mx-auto border border-warning rounded p-4 mt-5 mb-5">
                <h2 className="text-center mb-3">Фотографии</h2>
                <FormGroup>
                    <Input id='photo' type="file" accept="image/*" name='photo'/>
                    <FormText>Загрузка фото</FormText>
                    <div className='d-flex justify-content-around flex-wrap'>
                        <Col sm='6' md='4'>
                            <img className="w-100 mt-1" id="img0"></img>
                        </Col>
                        <Col sm='6' md='4'>
                            <img className="w-100 mt-1" id="img1"></img>
                        </Col>
                        <Col sm='6' md='4'>
                            <img className="w-100 mt-1" id="img2"></img>
                        </Col>
                        <Col sm='6' md='4'>
                            <img className="w-100 mt-1" id="img3"></img>
                        </Col>
                        <Col sm='6' md='4'>
                            <img className="w-100 mt-1" id="img4"></img>
                        </Col>
                    </div>
                </FormGroup>
                <div className="d-flex justify-content-between align-items-center">
                    <Button color="danger" onClick={()=>{props.setTab3(information); props.setStep(2)}}>Назад</Button>
                    <Button color="success" onClick={()=>{props.setTab3(information); props.setStep(4)}}>Дальше</Button>
                </div>    
            </Col>     
        </>
    )
}
