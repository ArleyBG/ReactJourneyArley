import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';
import Button from '../button/button';

// Muestra el producto 
const Slide = ({ burgers, productClick }) => { // props y funcion para manejar el click en cada producto

  // Renderizado
  return (
    <>
    {/* Cantidad de cards por tamaño de la pantalla */}
      <Swiper
      slidesPerView="2"
      spaceBetween={10}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1840: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      }}
      pagination={{
        clickable: true,
      }}
        modules={[Pagination]}
        className="mySwiper"
      > 
      {/* Mapeo de los productos */}
        {burgers.map((burger) => (
          <SwiperSlide key={burger.id} className="burger-id">
            <div className="description-card"
              // Manejar el click en el producto
              onClick={() => productClick(burger)} // pasar props a la funcion
            >
              <div className='container-img'>
                <img src={burger.imagen} alt={burger.nombre} className="img-card" />
                <Button /> {/* Renderizar componente button para agregar un producto*/}
              </div>
              <h4 className="name-product">{burger.nombre}</h4>
              <p className="valor-product">${burger.valor}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slide;