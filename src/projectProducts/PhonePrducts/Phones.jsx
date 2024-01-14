import React from 'react'
import "./Phones.scss"
import phoneImage from "../../assets/img/phone.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay,Pagination } from 'swiper/modules';
function Phones() {
  return (
    <div className='Laptops'>
     <Swiper className="mySwiper"
     slidesPerView={1}
     autoplay={{
      delay: 2000
    }}
     loop={true}
     pagination={{
      clickable:true
    }}
    modules={[Autoplay,Pagination]}>
        <SwiperSlide >
          <div className="card">
            <img className='cardImage' src={phoneImage} />
            <h2>iphone1</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="card">
            <img className='cardImage' src={phoneImage} />
            <h2>iphone2</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="card">
            <img className='cardImage' src={phoneImage} />
            <h2>iphone3</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="card">
            <img className='cardImage' src={phoneImage} />
            <h2>iphone4</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="card">
            <img className='cardImage' src={phoneImage} />
            <h2>iphone5</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img className='cardImage' src={phoneImage} />
            <h2>iphone6</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="card">
            <img className='cardImage' src={phoneImage} />
            <h2>iphone7</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Phones