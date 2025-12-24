'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { toast } from 'sonner';
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
      {pending ? 'Sending…' : 'Submit'}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(sendFormData, initialState);
  const formRef = useRef<HTMLFormElement>(null);

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
    <form ref={formRef} action={formAction} className="space-y-6">
      {/* Honeypot (hidden) */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full bg-black border border-white/30 rounded-md px-4 py-3 text-white"
          />
          {state.errors?.email && (
            <p className="text-red-400 text-sm mt-1">{state.errors.email}</p>
          )}
        </div>
      </div>

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
  );
}
