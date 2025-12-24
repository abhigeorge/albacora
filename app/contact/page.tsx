import type { Metadata } from 'next';
import Breadcrumb from '../components/Breadcrumb';
import { RevealLinks } from '../components/RevealLinks';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Albacora Pictures | Miami Video Production Company',
  description:
    'Get in touch with Albacora Pictures Inc. — Miami’s trusted video production company. Reach out for commercial shoots, corporate videos, documentaries, and post-production services.',
  openGraph: {
    title: 'Contact Albacora Pictures | Miami Video Production Company',
    description:
      'Connect with Albacora Pictures for professional video production services in Miami. Let’s discuss your project today.',
    url: 'https://www.albacorapictures.com/contact',
    siteName: 'Albacora Pictures Inc.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Albacora Pictures | Miami Video Production Company',
    description:
      'Reach out to Albacora Pictures Inc. for expert video production services in Miami.',
  },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumb title="Contact" className="bg-black" />
      <main className="bg-black text-white flex items-center justify-center px-4">
        <div className="w-full max-w-2xl">
          <ContactForm />
        </div>
      </main>
      <RevealLinks />
    </>
  );
}
