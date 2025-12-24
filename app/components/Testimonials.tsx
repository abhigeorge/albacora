'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import QuoteIcon from './QuoteIcon';

const testimonials = [
  {
    text: "I've used Albacora Pictures exclusively over the last several years whenever we shoot in Florida. They are very easy to work with, Michael knows his craft and we always end up with very high quality capture. If you\re reading this, you know that finding reliable video vendors can be a challenge.  With Michael, put your worries away.  Tell him what you need and he will deliver professional quality with a professional attitude at a reasonable price.",
    name: 'Jane D',
    role: 'CEO',
    avatar: '/logo.png',
  },
  {
    text: "Albacora Pictures does great work at affordable prices, and Michael is one of the nicest technically minded people I have worked with. He did production and post production for my company, and not only took initiative and creative direction, but also delivered us a high quality result in a timely fashion. We'll definitely work with him again!",
    name: 'Susan Su',
    role: '500 Startups',
    avatar: '/logo.png',
  },
  {
    text: 'We worked with Albacora Pictures on an interview shoot and were very impressed. Michael and his team were very prepared and brought a lot of experience and instruction to the set. Would definitely recommend Albacora for any of your media needs.',
    name: 'Joe Gannari',
    role: 'Lennox',
    avatar: '/logo.png',
  },
  {
    text: "I've used Albacora Pictures exclusively over the last several years whenever we shoot in Florida. They are very easy to work with, Michael knows his craft and we always end up with very high quality capture. If you're reading this, you know that finding reliable video vendors can be a challenge.  With Michael, put your worries away.  Tell him what you need and he will deliver professional quality with a professional attitude at a reasonable price.",
    name: 'Jane D',
    role: 'CEO',
    avatar: '/logo.png',
  },
  {
    text: "Albacora Pictures does great work at affordable prices, and Michael is one of the nicest technically minded people I have worked with. He did production and post production for my company, and not only took initiative and creative direction, but also delivered us a high quality result in a timely fashion. We'll definitely work with him again!",
    name: 'Susan Su',
    role: '500 Startups',
    avatar: '/logo.png',
  },
  {
    text: 'We worked with Albacora Pictures on an interview shoot and were very impressed. Michael and his team were very prepared and brought a lot of experience and instruction to the set. Would definitely recommend Albacora for any of your media needs.',
    name: 'Joe Gannari',
    role: 'Lennox',
    avatar: '/logo.png',
  },
];

export default function TestimonialSlider() {
  return (
    <section className="py-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-2">
        {/* Header */}
        <div className="mb-16 text-center">
          <span
            className="text-md text-white font-medium block mb-2 font-bold leading-tight tracking-wider mt-6 uppercase 
                     animate-fadeInUp animation-delay-300 animation-duration-1500"
          >
            TESTIMONIALS
          </span>
          <h2
            className="text-4xl font-bold text-white font-[var(--font-montserrat)] font-bold leading-tight tracking-wider mt-6 uppercase 
                     animate-fadeInUp animation-delay-300 animation-duration-1500"
          >
            What our happy user says!
          </h2>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          loop
          centeredSlides
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={32}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                  group bg-black border border-gray-300 rounded-xl p-6
                  transition-all duration-500
                  hover:border-gray-400 hover:shadow-sm
                "
              >
                {/* Rating */}
                <div className="flex items-center mb-7 gap-2">
                  <QuoteIcon className="w-8 h-8 text-white" />
                </div>

                {/* Text */}
                <p className="text-base text-white leading-6 pb-8 group-hover:text-gray-200">
                  {t.text}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between gap-5 border-t border-gray-200 pt-5">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h5 className="text-white font-medium">{t.name}</h5>
                    <span className="text-sm text-white">{t.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
