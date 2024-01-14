import React from 'react'
import "./Laptops.scss"
import laptopImage from "../../assets/img/laptops.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay,Pagination } from 'swiper/modules';
function Laptops() {
  return (
    <div className='Laptops'>
     <Swiper className="mySwiper"
     slidesPerView={1}
     autoplay={{
      delay: 2000
    }}
     loop={true}
     pagination={{
      clickable:true,
      
    }}
    modules={[Autoplay,Pagination]}>
        <SwiperSlide >
          <div className="card">
            <img className='cardImage' src={laptopImage} />
            <h2>laptop1</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="card">
            <img className='cardImage' src={laptopImage} />
            <h2>laptop2</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="card">
            <img className='cardImage' src={laptopImage} />
            <h2>laptop3</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="card">
            <img className='cardImage' src={laptopImage} />
            <h2>laptop4</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="card">
            <img className='cardImage' src={laptopImage} />
            <h2>laptop5</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img className='cardImage' src={laptopImage} />
            <h2>laptop6</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="card">
            <img className='cardImage' src={laptopImage} />
            <h2>laptop7</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Laptops