import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import SwiperCore, { EffectFade, Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./css//Carousel.css";
SwiperCore.use([EffectFade, Mousewheel, Pagination]);

const Carousel = () => {
  return (
    <div className=".start-slider">
      <div className="title-carousel">Kenapa WOD?</div>
      <Swiper
        className="blog-slider"
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        mousewheel={{ invert: false }}
        autoHeight={true}
        pagination={{ el: ".blog-slider__pagination", clickable: true }}
      >
        <div className="blog-slider__wrp">
          {/* <div className="swiper-wrapper"> */}
          <SwiperSlide className="blog-slider__item">
            <div className="blog-slider__img">
              <img
                src="https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"
                alt="Security"
              />
            </div>
            <div className="blog-slider__content">
              {/* <span className="blog-slider__code">26 December 2019</span> */}
              <div className="blog-slider__title">
                Dilindungi Dengan Pengawasan
              </div>
              <div className="blog-slider__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptate repellendus magni illo ea animi?{" "}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="blog-slider__item">
            <div className="blog-slider__img">
              <img
                src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                alt="Maps"
              />
            </div>
            <div className="blog-slider__content">
              {/* <span className="blog-slider__code">26 December 2019</span> */}
              <div className="blog-slider__title">
                Terpantau Dengan Navigasi
              </div>
              <div className="blog-slider__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptate repellendus magni illo ea animi?
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="blog-slider__item">
            <div className="blog-slider__img">
              <img
                src="https://images.unsplash.com/photo-1642489216436-4c5075b34d53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=719&q=80"
                alt="Jadwal"
              />
            </div>
            <div className="blog-slider__content">
              {/* <span className="blog-slider__code">26 December 2019</span> */}
              <div className="blog-slider__title">Penjemputan yang Teratur</div>
              <div className="blog-slider__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptate repellendus magni illo ea animi?
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="blog-slider__item">
            <div className="blog-slider__img">
              <img
                src="https://images.unsplash.com/photo-1586739050530-2fddeb1770d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Maps"
              />
            </div>
            <div className="blog-slider__content">
              {/* <span className="blog-slider__code">26 December 2019</span> */}
              <div className="blog-slider__title">Privasi yang Terjaga</div>
              <div className="blog-slider__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptate repellendus magni illo ea animi?
              </div>
            </div>
          </SwiperSlide>
          {/* </div> */}
        </div>
        <div className="blog-slider__pagination"></div>
      </Swiper>
    </div>
  );
};
export default Carousel;
