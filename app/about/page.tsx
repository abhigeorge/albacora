'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import michaelValverde from '@/public/michael-valverde.webp';
import ButtonLink from '../components/ButtonLink';
import Breadcrumb from '../components/Breadcrumb';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb title="About" className="bg-black" />
      <motion.main
        className="w-full bg-black text-white font-[var(--font-montserrat)] px-6 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <section className="max-w-5xl mx-auto space-y-16">
          {/* Founder Section */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Image */}
              <motion.div
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
              </motion.div>

              {/* Text */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
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
              </motion.div>
            </div>
          </motion.div>

          {/* What We Do */}
          <motion.div
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
          </motion.div>

          {/* Why the Name */}
          <motion.div
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
          </motion.div>

          {/* Key Facts */}
          <motion.div
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
          </motion.div>

          {/* Press Button */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ButtonLink
                href="https://canvasrebel.com/meet-michael-valverde/"
                target="_blank"
                rel="noopener"
                className="text-center mt-6"
              >
                PRESS
              </ButtonLink>
            </motion.div>
          </motion.div>
        </section>
      </motion.main>
    </>
  );
}
