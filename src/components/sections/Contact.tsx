'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Globe, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import { siteConfig } from '@/lib/data';

const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  ?? 'service_5eim0hb';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? 'template_uqhv0en';
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  ?? 'jtjhN7XHpbOIrNbar';

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
          title="Book your free 48-hour audit"
          description="Share your details and we will deliver a written audit of your ad accounts, SEO, and conversion funnel within 48 hours. No credit card. No sales call first."
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
              Based in Bangalore, working with brands across India and internationally.
              Submit the form and get a written audit within 48 hours. Or reach us directly on any channel below.
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

            <div className="flex flex-wrap gap-2">
              <a
                href="tel:+917981632581"
                title="Call DigiBrand Booster"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors"
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
                <Phone size={13} aria-hidden="true" /> Call Us
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                title="Chat on WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors"
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
                WhatsApp Us ↗
              </a>
              <a
                href="https://www.linkedin.com/in/d-venkataramana"
                title="Connect on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors"
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
                LinkedIn ↗
              </a>
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
                    Get your free audit in 48 hours
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
                    {loading ? 'Sending your request...' : (
                      <>Send Audit Request <ArrowRight size={16} aria-hidden="true" /></>
                    )}
                  </button>

                  <p className="text-xs text-center" style={{ color: 'var(--text-secondary)' }}>
                    Written audit delivered within 48 hours. No spam, no sales call before the audit.
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
