import React, {useState} from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption, 
    Col,
    ListGroup,
    ListGroupItem,
    Button
  } from 'reactstrap';

  

export const SavedAdverb = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const items = []
    
    for (let i = 0; i < props.tab3.photo.length; i++) {
        items.push({
            src: props.tab3.photo[i],
            altText: '',
            caption: ''
        })
    }

    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem className="w-100"
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img className="w-100" src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    function Services() {
      let htmlArray = [];
        for (let i = 1; i <= 5; i++) {
            if (props.tab4['service'+i] === true)
              htmlArray.push(<ListGroupItem key={i}>Платная услуга {i}</ListGroupItem>)
        }
        return htmlArray;
    }

    function newAdvert() {
      props.setStep(0);
    }
  
    return (
        <div>
            <div className='d-blcok d-md-flex pt-3'>    
                <Col sm='10' md='6'>
                    <Carousel  activeIndex={activeIndex} next={next} previous={previous}>
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                </Col> 
                <Col sm='10' md='6'>
                    <h1 className='text-center'>{props.tab1.header}</h1>
                    <p>{props.tab1.description}</p>
                    <h2>Контакты</h2>
                    <p>Телефон: {props.tab2.phone}</p>
                    {props.tab2.email === ''?(<p></p>):(<p>Емейл:{props.tab2.email}</p>)}
                    <h2>Услуги</h2>
                    <ListGroup>
                      <Services />
                    </ListGroup>
                    <h2 className="d-inline">Статус:</h2>
                    <p>{props.tab1.status === true?(<span>Активно</span>):(<span>Неактивно</span>)}</p>
                    {props.tab2.email === ''?(<p></p>):(<p>Емейл:{props.tab2.email}</p>)}
                    <Button color="success" onClick={()=>{newAdvert()}}>Создать новое объявление</Button>
                </Col>
                
            </div>
            
        </div>
      
    );
}