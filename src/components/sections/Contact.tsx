'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import ShimmerButton from '@/components/ui/ShimmerButton';
import { siteConfig } from '@/lib/data';

interface FormState {
  name: string;
  email: string;
  website: string;
  spend: string;
  message: string;
}

const initialForm: FormState = { name: '', email: '', website: '', spend: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function update(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const message = [
      `New Audit Request from digibrandbooster.tech`,
      ``,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Website: ${form.website || 'Not provided'}`,
      `Monthly Ad Spend: ${form.spend || 'Not provided'}`,
      `Challenge: ${form.message || 'Not provided'}`,
    ].join('\n');

    const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;

    setLoading(false);
    setSubmitted(true);
    window.open(waUrl, '_blank');
  }

  const inputStyle: React.CSSProperties = {
    background: 'var(--bg-card-hover)',
    border: '1px solid var(--border)',
    color: 'var(--text-primary)',
    borderRadius: '0.75rem',
    padding: '0.75rem 1rem',
    width: '100%',
    outline: 'none',
    fontSize: '0.875rem',
  };

  return (
    <section id="contact" className="py-24 px-4" style={{ background: 'var(--bg-card)' }}>
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Contact"
          title="Let us take a look at your accounts"
          description="Fill in the form and we will send a 48-hour audit of your ad accounts, SEO, and conversion funnel, free."
        />

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info */}
          <div className="md:col-span-2 space-y-4">
            {[
              { label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
              { label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { label: 'Location', value: siteConfig.address, href: '#' },
            ].map((item) => (
              <GlassCard key={item.label} hover={false} className="py-4">
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--accent-primary)' }}>
                  {item.label}
                </p>
                <a
                  href={item.href}
                  className="text-sm"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {item.value}
                </a>
              </GlassCard>
            ))}
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <GlassCard hover={false}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-8 gap-4"
                >
                  <CheckCircle size={48} style={{ color: 'var(--accent-success)' }} />
                  <h3 className="font-heading text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    We have got your details.
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Expect your audit in your inbox within 48 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                        Name *
                      </label>
                      <input
                        required
                        style={inputStyle}
                        value={form.name}
                        onChange={update('name')}
                        placeholder="Priya Sharma"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                        Email *
                      </label>
                      <input
                        required
                        type="email"
                        style={inputStyle}
                        value={form.email}
                        onChange={update('email')}
                        placeholder="priya@brand.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                      Website
                    </label>
                    <input
                      type="url"
                      style={inputStyle}
                      value={form.website}
                      onChange={update('website')}
                      placeholder="https://yourbrand.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                      Monthly ad spend
                    </label>
                    <select style={inputStyle} value={form.spend} onChange={update('spend')}>
                      <option value="">Select range</option>
                      <option>Under Rs 1 lakh</option>
                      <option>Rs 1-5 lakh</option>
                      <option>Rs 5-20 lakh</option>
                      <option>Rs 20-50 lakh</option>
                      <option>Above Rs 50 lakh</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                      What is your biggest growth challenge right now?
                    </label>
                    <textarea
                      rows={3}
                      style={{ ...inputStyle, resize: 'none' }}
                      value={form.message}
                      onChange={update('message')}
                      placeholder="Tell us where you are stuck..."
                    />
                  </div>

                  <ShimmerButton
                    variant="cta"
                    type="submit"
                    disabled={loading}
                    className="w-full"
                  >
                    {loading ? 'Sending...' : (
                      <>
                        <Send size={16} />
                        Request Free Audit
                      </>
                    )}
                  </ShimmerButton>

                  <p className="text-xs text-center" style={{ color: 'var(--text-secondary)' }}>
                    No spam. Just a detailed audit within 48 hours.
                  </p>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
