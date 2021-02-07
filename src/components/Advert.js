import React, {useState, useEffect} from 'react'
import { Container } from 'reactstrap'
import { SavedAdverb } from './SavedAdverb'
import { Tab1 } from './Tab1'
import { Tab2 } from './Tab2'
import { Tab3 } from './Tab3'
import { Tab4 } from './Tab4'

export const Advert = () => {
    let formData = new FormData() 
    let [step, setStep] = useState(1)
    let [tab1, setTab1] = useState({})
    let [tab2, setTab2] = useState({})
    let [tab3, setTab3] = useState({photo:[]})
    let [tab4, setTab4] = useState({})
    var b64toBlob = require('b64-to-blob');
    useEffect(()=>{
        if(step === 5) {
            formData.append("header",tab1.header);
            if(tab1.description !== '') formData.append("description",tab1.description);
            formData.append("status",tab1.status);
            formData.append("phone",tab2.phone);
            if(tab2.email !== '') formData.append("email",tab2.email)
            for(let i = 0; i < tab3.photo.length; i++) {
                var contentType = 'image/png';
                var blob = b64toBlob(btoa(tab3.photo[i]), contentType);
                formData.append("photo" + i, blob, "image.png")
            }
            formData.append("service1",tab4.service1);
            formData.append("service2",tab4.service2);
            formData.append("service3",tab4.service3);
            formData.append("service4",tab4.service4);
            formData.append("service5",tab4.service5);
            for(var pair of formData.entries()) {
                console.log(pair[0]+ ', '+ pair[1]);
             }
        } else if (step === 0) {
            setTab1({})
            setTab2({})
            setTab3({photo:[]})
            setTab4({})
            setStep(1)
        }
    })
    return (
       
        <Container style={{minHeight:"100vh"}} className="bg-light mh-100 h-100" fluid={true}>
            {
                (step === 1) ? (
                    <>
                        <h1 className="text-center pt-5">Создание объявления</h1>
                        <Tab1 setStep={setStep} setTab1={setTab1} tab1={tab1} />
                    </>    
                ):(
                    (step === 2) ? (
                        <>
                            <h1 className="text-center pt-5">Создание объявления</h1>
                            <Tab2 setStep={setStep} setTab2={setTab2} tab2={tab2} />
                        </> 
                        
                    ) : (
                        (step === 3) ? (
                            <>
                                <h1 className="text-center pt-5">Создание объявления</h1>
                                <Tab3 setStep={setStep} setTab3={setTab3} tab3={tab3} />
                            </> 
                            
                        ) : (
                            (step === 4)?(
                                <>
                                    <h1 className="text-center pt-5">Создание объявления</h1>
                                    <Tab4 setStep={setStep} setTab4={setTab4} tab4={tab4} />
                                </> 
                                
                            ):(
                                <SavedAdverb tab1={tab1} tab2={tab2} tab3={tab3} tab4={tab4} setStep={setStep} />
                            )
                        )
                    )
                    
                )
            }
        </Container>
    )
}
