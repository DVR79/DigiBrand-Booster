import { X, Check } from 'lucide-react';

const OLD_WAY = [
  {
    title: 'Junior account managers learning the craft on your budget.',
    desc: '',
  },
  {
    title: 'Reports full of numbers that look busy but do not tie to revenue.',
    desc: '',
  },
  {
    title: 'Twelve-month lock-ins that hold you even when results do not come.',
    desc: '',
  },
];

const DBB_WAY = [
  {
    title: 'A senior specialist runs your account and does the actual work.',
    desc: '',
  },
  {
    title: 'Reporting tied to the numbers you care about: ROAS, cost per lead, qualified pipeline.',
    desc: '',
  },
  {
    title: 'KPIs written into the contract before we spend a rupee.',
    desc: '',
  },
];

export default function ProblemSection() {
  return (
    <section
      className="relative overflow-hidden py-14 md:py-20"
      style={{ background: '#ffffff' }}
      aria-label="The Problem section"
    >
      {/* Gradient background blob */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 blur-3xl rounded-full pointer-events-none"
        style={{
          width: '100%',
          maxWidth: '1000px',
          height: '100%',
          background: 'radial-gradient(ellipse at center top, rgba(224, 227, 229, 0.2), transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Heading block */}
        <div className="text-center mb-12">
          <p className="pill mb-4" style={{ display: 'inline-flex', justifyContent: 'center' }}>The difference</p>
          <h2
            className="font-heading font-bold leading-tight"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: '#11161e', marginBottom: '24px' }}
          >
            The usual agency deal is stacked against you
          </h2>
          <p
            className="text-lg"
            style={{ color: '#45464d', maxWidth: '760px', margin: '0 auto' }}
          >
            Most agencies win your account with a senior pitch, then hand the day-to-day to a junior team you never meet, report on numbers that look good but do not move revenue, and tie you into a year. We built the opposite on purpose: a senior specialist on your account, reporting you can check yourself, and terms you can walk away from.
          </p>
        </div>

        {/* Two-column comparison */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">

          {/* Left: Old Way */}
          <div
            className="rounded-[6px] p-6 md:p-10 flex flex-col justify-center"
            style={{
              background: '#ffffff',
              border: '1px solid rgba(198,198,205,0.3)',
              boxShadow: '0 2px 8px rgba(13,27,54,0.05)',
            }}
          >
            <h3
              className="font-heading text-3xl font-semibold mb-8 pb-4"
              style={{ color: '#000000', borderBottom: '1px solid #e0e3e5' }}
            >
              The Old Way
            </h3>
            <div className="space-y-6">
              {OLD_WAY.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: '#ffdad6', color: '#ba1a1a' }}
                  >
                    <X size={16} strokeWidth={3} />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-base leading-relaxed"
                      style={{ color: '#000000' }}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: DBB Way - elevated and scaled */}
          <div
            className="rounded-[6px] p-6 md:p-10 relative z-10 flex flex-col justify-center overflow-hidden"
            style={{
              background: '#11161e',
              color: '#ffffff',
              boxShadow: '0 24px 48px rgba(19,27,46,0.25)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {/* Accent gradient blob */}
            <div
              className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 rounded-full blur-3xl pointer-events-none"
              style={{
                width: '256px',
                height: '256px',
                background: 'rgba(0, 88, 190, 0.2)',
              }}
              aria-hidden="true"
            />

            <h3
              className="font-heading text-3xl font-semibold mb-8 pb-4 relative z-10"
              style={{ color: '#ffffff', borderBottom: 'rgba(255,255,255,0.2) 1px solid' }}
            >
              The Digi Brand Booster Way
            </h3>
            <div className="space-y-6 relative z-10">
              {DBB_WAY.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      background: '#0058be',
                      color: '#ffffff',
                      boxShadow: '0 0 15px rgba(0, 88, 190, 0.5)',
                    }}
                  >
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-base leading-relaxed"
                      style={{ color: '#ffffff' }}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
