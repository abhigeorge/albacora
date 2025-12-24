import { FlipTextLink } from './FlipTextLink';

export function FooterTop() {
  return (
    <section className="grid place-content-center gap-8 bg-black px-8 py-24 text-white">
      <h1 className="text-1xl sm:text-lg md:text-1xl lg:text-1xl font-semibold text-center uppercase leading-tight tracking-wider">
        Got a project in mind?
      </h1>

      <FlipTextLink
        href="/contact"
        text="Let's&nbsp;Talk"
        className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl"
      />
    </section>
  );
}
