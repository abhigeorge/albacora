'use client';

import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function ContactPage() {
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(
        'https://www.abhifind.com/wp-json/contact-form-7/v1/contact-forms/122/feedback',
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await res.json();

      if (!res.ok || data.status !== 'mail_sent') {
        throw new Error('Submission failed');
      }

      setStatus('success');
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  }

  return (
    <>
      <Breadcrumb title="Contact" className="bg-black" />
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="w-full max-w-2xl font-[var(--font-montserrat)]">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-3">
              <input
                type="text"
                name="your-name" // ✅ MUST MATCH CF7
                placeholder="Name"
                required
                className="w-full bg-black border border-white/30 rounded-md px-4 py-3 text-white"
              />

              <input
                type="email"
                name="your-email" // ✅ MUST MATCH CF7
                placeholder="Email"
                required
                className="w-full bg-black border border-white/30 rounded-md px-4 py-3 text-white"
              />
            </div>

            {/* Message */}
            <textarea
              name="your-message" // ✅ MUST MATCH CF7
              placeholder="Message"
              required
              rows={6}
              className="w-full bg-black border border-white/30 rounded-md px-4 py-3 text-white resize-none"
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full border border-white py-3 rounded-md hover:bg-white hover:text-black transition"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {/* Status */}
            {status === 'success' && (
              <p className="text-green-400 text-sm mt-2">
                Message sent successfully.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm mt-2">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>
      </main>
    </>
  );
}
