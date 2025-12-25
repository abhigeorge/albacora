import type { Metadata } from 'next';
import Image from 'next/image';
import michaelValverde from '@/public/michael-valverde-albacora-pictures.webp';
import ButtonLink from '../components/ButtonLink';
import Breadcrumb from '../components/Breadcrumb';
import { FooterTop } from '../components/FooterTop';
import MotionMain from '../components/MotionMain';
import MotionDiv from '../components/MotionDiv';

export const metadata: Metadata = {
  title: 'About Albacora Pictures | Miami Video Production Experts',
  description:
    'Learn about Albacora Pictures Inc., founded by award-winning cinematographer Michael Valverde. Over a decade of experience in film, television, and documentary production.',
};

// Animation variants (can be passed down as props to MotionDiv)
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb title="About" className="bg-black" />
      <MotionMain>
        <section className="max-w-5xl mx-auto space-y-16">
          {/* Founder Section */}
          <MotionDiv
            variants={fadeUp}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Image */}
              <MotionDiv
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Image
                  src={michaelValverde}
                  alt="Founder Michael Valverde at Gullfoss"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                  priority
                />
              </MotionDiv>

              {/* Text */}
              <MotionDiv
                variants={fadeUp}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-4xl font-bold mb-8 text-center md:text-left">
                  FOUNDER
                </h2>
                <p className="text-lg leading-relaxed">
                  Albacora Pictures, founded in 2013 by Miami cinematographer{' '}
                  <a
                    href="https://michaelvalverde.tv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline hover:text-gray-300"
                  >
                    Michael Valverde
                  </a>
                  , is{' '}
                  <strong>
                    Miami’s Most Creative Video Production Company
                  </strong>
                  , specializing in{' '}
                  <strong>
                    documentaries, films, corporate videos, TV, agencies, music
                    artists, and brands
                  </strong>
                  . Based in South Florida and trusted worldwide, we combine{' '}
                  <strong>
                    videography, cinematography, and post-production
                  </strong>{' '}
                  to deliver cinematic storytelling with a{' '}
                  <strong>Miami-rooted creative perspective</strong>.
                </p>
              </MotionDiv>
            </div>
          </MotionDiv>

          {/* What We Do */}
          <MotionDiv
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-4">What We Do</h2>
            <p className="text-lg leading-relaxed">
              We produce <strong>premium digital content</strong> and offer{' '}
              <strong>full-service video production in Miami</strong>, including{' '}
              <strong>
                videography, lighting, grip, sound, and post-production
              </strong>
              . Every project is handled with{' '}
              <strong>precision, clarity, and efficiency</strong>.
            </p>
          </MotionDiv>

          {/* Why the Name */}
          <MotionDiv
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-4">Why the Name?</h2>
            <p className="text-lg leading-relaxed">
              Albacora Pictures Inc. takes its name from the{' '}
              <strong>Albacore tuna</strong> used in{' '}
              <strong>Encebollado de Pescado</strong>, a traditional Ecuadorian
              dish. The name represents{' '}
              <strong>culture, authenticity, and passion</strong>—values infused
              into every production.
            </p>
          </MotionDiv>

          {/* Key Facts */}
          <MotionDiv
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-4">Key Facts</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>
                <strong>Top-tier video production</strong> for most budgets
              </li>
              <li>
                <strong>Fast turnaround</strong> and deadline-driven workflow
              </li>
              <li>
                <strong>
                  Branding, digital distribution & social media expertise
                </strong>
              </li>
              <li>
                <strong>Worldwide travel-ready crew</strong>
              </li>
              <li>
                <strong>Professional, stress-free collaboration</strong>
              </li>
            </ul>
          </MotionDiv>

          {/* Press Button */}
          <MotionDiv
            className="flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ButtonLink
                href="https://canvasrebel.com/meet-michael-valverde/"
                target="_blank"
                rel="noopener"
                className="text-center mt-6"
              >
                PRESS
              </ButtonLink>
            </MotionDiv>
          </MotionDiv>
        </section>
      </MotionMain>
      <FooterTop />
    </>
  );
}
