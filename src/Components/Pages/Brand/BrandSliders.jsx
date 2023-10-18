import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import { useParams } from 'react-router-dom';

const BrandSliders = () => {
    const { bname } = useParams();
    console.log(bname)
    const [sliders, setSliders] = useState([]);
    console.log(sliders)
    useEffect(() => {
        fetch(`http://localhost:5000/sliders/${bname}`)
            .then(res => res.json())
            .then(data => setSliders(data))
    }, [])

    return (

        <>
            <div className='max-w-7xl mx-auto'>

                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
                    slidesPerView={1}
                    navigation
                    autoplay
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >



                    {
                        sliders.map(slider =>
                            <SwiperSlide>
                                <div className='m-2 px-2 py-2'>
                                    <div className='flex justify-center'>
                                        <img className='w-full h-60' src={slider.img} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }


                </Swiper>
            </div>

        </>


    );
};

export default BrandSliders;