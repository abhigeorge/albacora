'use client';

interface BreadcrumbProps {
  /** Main heading text */
  title: string;
  /** Optional subtitle or description */
  subtitle?: string;
  /** Optional extra classes for customization */
  className?: string;
}

export default function Breadcrumb({
  title,
  subtitle,
  className,
}: BreadcrumbProps) {
  return (
    <section
      className={`relative flex items-center justify-center min-h-[30vh] sm:min-h-[40vh] md:min-h-[40vh] bg-black text-white overflow-hidden ${
        className ?? ''
      }`}
    >
      <div className="text-center px-6 lg:px-12">
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-[var(--font-montserrat)] font-bold leading-tight tracking-wider uppercase
                     animate-fadeInUp animation-delay-300 animation-duration-1500"
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-gray-300 animate-fadeInUp animation-delay-600 animation-duration-1500">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
