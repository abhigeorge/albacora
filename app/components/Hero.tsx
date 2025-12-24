'use client';

import ButtonLink from './ButtonLink';

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-[70vh] bg-black text-white overflow-hidden">
      <div className="text-center px-6 lg:px-12">
        {/* Animated Title */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-[var(--font-montserrat)] font-bold leading-tight tracking-wider uppercase 
                     animate-fadeInUp animation-delay-300 animation-duration-1500"
        >
          Miami’s Best <br /> Video Production Company
        </h1>

        {/* Subtitle */}
        <div className="px-6 md:px-12">
          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed animate-fadeInUp animation-delay-600 animation-duration-1500">
            Albacora Pictures Inc. is a Miami-based video production company
            specializing in cinematography, videography,
            <br /> lighting design, and post-production services.
          </p>
        </div>

        {/* CTA Button */}
        <ButtonLink href="/about" className="mt-10">
          Learn More About Albacora Pictures
        </ButtonLink>
      </div>
    </section>
  );
}
