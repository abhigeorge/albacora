import { FlipTextLink } from './FlipTextLink';

export function RevealLinks() {
  return (
    <section className="grid place-content-center gap-4 bg-black px-8 py-24 text-white">
      <FlipTextLink
        href="mailto:michael@albacorapictures.com"
        text="Mail"
        className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl"
      />
      <FlipTextLink
        href="tel:305-345-4764"
        text="Phone"
        className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl"
      />
      <FlipTextLink
        href="https://www.facebook.com/albacorapictures/"
        text="Facebook"
        newTab
        className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl"
      />
      <FlipTextLink
        href="https://www.instagram.com/albacorapictures/"
        text="Instagram"
        newTab
        className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl"
      />
    </section>
  );
}

// import { FlipTextLink } from './FlipTextLink';

// export function RevealLinks() {
//   return (
//     <section className="grid place-content-center gap-4 bg-black px-8 py-24 text-white">
//       <FlipTextLink
//         href="#"
//         text="Twitter"
//         className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl"
//       />
//       <FlipTextLink href="#" text="Linkedin" />
//       <FlipTextLink href="#" text="Facebook" />
//       <FlipTextLink href="#" text="Instagram" />
//     </section>
//   );
// }
