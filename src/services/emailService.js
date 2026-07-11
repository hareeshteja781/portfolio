const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_w2f8h6t',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_yz2u9v6',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'L7nxDQ4m7x7QbZB4N'
};

export async function sendPortfolioEmail(payload) {
  if (!window.emailjs) {
    return {
      status: 'fallback',
      message: 'EmailJS is unavailable in this environment. Your message was not sent automatically.'
    };
  }

  return window.emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    payload,
    EMAILJS_CONFIG.publicKey
  );
}
