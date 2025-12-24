'use server';

export type FieldErrors = Record<string, string>;

export type FormState = {
  success: boolean;
  message: string;
  errors?: FieldErrors;
};

export async function sendFormData(
  _: FormState,
  formData: FormData
): Promise<FormState> {
  /* ----------------------------
   * Honeypot check
   * ---------------------------- */
  if (formData.get('company')) {
    return {
      success: false,
      message: 'Spam detected.',
    };
  }

  /* ----------------------------
   * Required by CF7
   * ---------------------------- */
  formData.append('_wpcf7_unit_tag', '88e941f');

  try {
    const WP_API_URL = process.env.WP_API_URL;

    if (!WP_API_URL) {
      throw new Error('WP_API_URL is not defined');
    }

    const response = await fetch(
      `${WP_API_URL}/wp-json/contact-form-7/v1/contact-forms/132/feedback`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const data = await response.json();

    /* ----------------------------
     * Success
     * ---------------------------- */
    if (data.status === 'mail_sent') {
      return {
        success: true,
        message: 'Your message has been sent successfully!',
      };
    }

    /* ----------------------------
     * CF7 field-level errors
     * ---------------------------- */
    const errors: FieldErrors = {};
    if (Array.isArray(data.invalid_fields)) {
      data.invalid_fields.forEach((field: any) => {
        errors[field.field] = field.message;
      });
    }

    return {
      success: false,
      message: data.message || 'Submission failed.',
      errors,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: 'Unexpected server error. Please try again later.',
    };
  }
}
