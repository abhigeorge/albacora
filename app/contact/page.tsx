'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { toast } from 'sonner';

import Breadcrumb from '../components/Breadcrumb';
import { sendFormData, FormState } from '@/lib/actions';

const initialState: FormState = {
  success: false,
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full border border-white py-3 rounded-md
        hover:bg-white hover:text-black transition
        disabled:opacity-50"
    >
      {pending ? 'Sending…' : 'Submit Message'}
    </button>
  );
}

export default function ContactPage() {
  const [state, formAction] = useActionState(sendFormData, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  /* ----------------------------
   * Toasts + Auto reset
   * ---------------------------- */
  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
      formRef.current?.reset();
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <>
      <Breadcrumb title="Contact" className="bg-black" />

      <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="w-full max-w-2xl">
          <form ref={formRef} action={formAction} className="space-y-6">
            {/* Honeypot (hidden) */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            {/* Name + Email (inline) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="full-name"
                  placeholder="Name"
                  required
                  className="w-full bg-black border border-white/30 rounded-md px-4 py-3 text-white"
                />
                {state.errors?.['full-name'] && (
                  <p className="text-red-400 text-sm mt-1">
                    {state.errors['full-name']}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full bg-black border border-white/30 rounded-md px-4 py-3 text-white"
                />
                {state.errors?.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {state.errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                required
                className="w-full bg-black border border-white/30 px-4 py-3"
              />
              {state.errors?.message && (
                <p className="text-red-400 text-sm">{state.errors.message}</p>
              )}
            </div>

            <SubmitButton />
          </form>
        </div>
      </main>
    </>
  );
}
