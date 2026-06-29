'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Globe, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import { siteConfig } from '@/lib/data';

const EMAILJS_SERVICE_ID = 'service_5eim0hb';
const EMAILJS_TEMPLATE_ID = 'template_uqhv0en';
const EMAILJS_PUBLIC_KEY = 'jtjhN7XHpbOIrNbar';

interface FormState {
  name: string;
  email: string;
  phone: string;
  website: string;
  spend: string;
  message: string;
}

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  website: '',
  spend: '',
  message: '',
};

const contactInfo = [
  {
    icon: <Phone size={16} aria-hidden="true" />,
    label: 'Phone',
    value: '+91 79816 32581',
    href: 'tel:+917981632581',
    title: 'Call us at +91 79816 32581',
  },
  {
    icon: <Mail size={16} aria-hidden="true" />,
    label: 'Email',
    value: 'venkat.digitalseo@gmail.com',
    href: 'mailto:venkat.digitalseo@gmail.com',
    title: 'Email us at venkat.digitalseo@gmail.com',
  },
  {
    icon: <MapPin size={16} aria-hidden="true" />,
    label: 'Location',
    value: 'BTM 1st Stage, Bangalore, Karnataka, India',
    href: 'https://maps.google.com/?q=BTM+1st+Stage+Bangalore+Karnataka+India',
    title: 'View our location on Google Maps',
  },
  {
    icon: <Globe size={16} aria-hidden="true" />,
    label: 'Website',
    value: 'digibrandbooster.tech',
    href: 'https://www.digibrandbooster.tech',
    title: 'Visit digibrandbooster.tech',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
    label: 'WhatsApp',
    value: '+91 79816 32581',
    href: `https://wa.me/${siteConfig.whatsapp}`,
    title: 'Chat with us on WhatsApp',
  },
];

const inputClass =
  'w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:opacity-40';

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function update(field: keyof FormState) {
    return (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return; // double-submit guard
    setLoading(true);
    setError('');

    const messageBody = `Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone || 'Not provided'}
Website: ${form.website || 'Not provided'}
Monthly Ad Spend: ${form.spend || 'Not provided'}
Message: ${form.message || 'Not provided'}`;

    const waText = `New Audit Request from digibrandbooster.tech\n\n${messageBody}`;
    const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(waText)}`;

    // Send email via EmailJS
    let emailSent = false;
    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: form.name,
            from_email: form.email,
            from_phone: form.phone || 'Not provided',
            subject: 'New Audit Request from digibrandbooster.tech',
            title: 'New Audit Request from digibrandbooster.tech',
            message: messageBody,
          },
        }),
      });
      emailSent = res.ok;
    } catch {
      // network failure - still open WhatsApp below
    }

    setLoading(false);

    if (emailSent) {
      setSubmitted(true);
      // Open WhatsApp in same user gesture thread
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } else {
      // Email failed - redirect to WhatsApp directly so no lead is lost
      setError('Email could not be sent. Redirecting you to WhatsApp instead...');
      setTimeout(() => {
        window.location.href = waUrl;
      }, 1500);
    }
  }

  const inputStyle: React.CSSProperties = {
    background: 'var(--bg-card-hover)',
    border: '1px solid var(--border)',
    color: 'var(--text-primary)',
  };

  const focusStyle = {
    outline: 'none',
    border: '1px solid var(--accent-primary)',
    boxShadow: '0 0 0 3px rgba(91,141,255,0.12)',
  };

  return (
    <section id="contact" className="py-24 px-4" style={{ background: 'var(--bg-card)' }}>
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Get in touch"
          title="Let us work together"
          description="Ready to grow faster? Fill in the form and we will send a free 48-hour audit of your ad accounts, SEO, and conversion funnel."
        />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">

          {/* Left - contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              We are based in Bangalore and work with brands across India and internationally.
              Reach us on any of these channels and we will respond within 4 hours.
            </p>

            <div className="space-y-3 mb-7">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  title={item.title}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-3 p-3.5 rounded-xl transition-colors"
                  style={{ background: 'var(--bg-card-hover)', border: '1px solid var(--border)' }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.borderColor =
                      'rgba(91,141,255,0.4)')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)')
                  }
                >
                  <span className="mt-0.5 shrink-0" style={{ color: 'var(--accent-primary)' }}>
                    {item.icon}
                  </span>
                  <div>
                    <p
                      className="text-[10px] font-bold uppercase tracking-wider mb-0.5"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {item.label}
                    </p>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links - only real URLs */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/d-venkataramana', title: 'Connect on LinkedIn' },
                { label: 'GitHub', href: 'https://github.com/DVR79', title: 'View GitHub profile' },
                { label: 'Portfolio', href: 'https://venkat-portfolio-omega.vercel.app/', title: 'View full portfolio' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg text-xs font-semibold transition-colors"
                  style={{ border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent-primary)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-primary)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)';
                  }}
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <GlassCard hover={false}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-10 gap-4"
                >
                  <CheckCircle size={52} style={{ color: 'var(--accent-success)' }} aria-hidden="true" />
                  <h3 className="font-heading text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    Message received.
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    You will hear from us within 48 hours. Check WhatsApp too.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                  <h3 className="font-heading text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                    Request Free Audit
                  </h3>

                  {error && (
                    <div
                      role="alert"
                      className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm"
                      style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: '#ef4444' }}
                    >
                      <AlertCircle size={15} aria-hidden="true" />
                      {error}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-name" className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        required
                        style={inputStyle}
                        className={inputClass}
                        value={form.name}
                        onChange={update('name')}
                        placeholder="Priya Sharma"
                        autoComplete="name"
                        onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                        onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-email" className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        required
                        type="email"
                        style={inputStyle}
                        className={inputClass}
                        value={form.email}
                        onChange={update('email')}
                        placeholder="priya@brand.com"
                        autoComplete="email"
                        onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                        onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-phone" className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                        Phone
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        style={inputStyle}
                        className={inputClass}
                        value={form.phone}
                        onChange={update('phone')}
                        placeholder="+91 XXXXX XXXXX"
                        autoComplete="tel"
                        onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                        onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-spend" className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                        Monthly Ad Spend
                      </label>
                      <select
                        id="contact-spend"
                        style={inputStyle}
                        className={inputClass}
                        value={form.spend}
                        onChange={update('spend')}
                        onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                        onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                      >
                        <option value="">Select range</option>
                        <option>Under Rs 1 lakh</option>
                        <option>Rs 1 to 5 lakh</option>
                        <option>Rs 5 to 20 lakh</option>
                        <option>Rs 20 to 50 lakh</option>
                        <option>Above Rs 50 lakh</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-website" className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                      Website
                    </label>
                    <input
                      id="contact-website"
                      type="url"
                      style={inputStyle}
                      className={inputClass}
                      value={form.website}
                      onChange={update('website')}
                      placeholder="https://yourbrand.com"
                      autoComplete="url"
                      onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                      onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                      What is your biggest growth challenge? *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      style={{ ...inputStyle, resize: 'none' }}
                      className={inputClass}
                      value={form.message}
                      onChange={update('message')}
                      placeholder="Tell us where you are stuck..."
                      onFocus={(e) => Object.assign(e.target.style, { ...focusStyle, resize: 'none' })}
                      onBlur={(e) => Object.assign(e.target.style, { ...inputStyle, resize: 'none' })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    title="Submit your audit request - we will respond within 48 hours"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-purple))',
                      color: '#fff',
                    }}
                  >
                    {loading ? 'Sending...' : (
                      <>Send Message <ArrowRight size={16} aria-hidden="true" /></>
                    )}
                  </button>

                  <p className="text-xs text-center" style={{ color: 'var(--text-secondary)' }}>
                    No spam. Free audit delivered within 48 hours.
                  </p>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
