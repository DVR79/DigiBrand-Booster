import ShimmerButton from '@/components/ui/ShimmerButton';

const steps = [
  {
    n: '01',
    title: 'KPIs in Writing',
    desc: 'Agreed and signed into the contract before we spend a rupee. What we are accountable for is never a grey area.',
  },
  {
    n: '02',
    title: 'Weekly Reporting',
    desc: 'A live dashboard plus a written report every Monday. You never have to ask us where things stand.',
  },
  {
    n: '03',
    title: 'Month to Month',
    desc: 'No long lock-in. Leave any month with 30 days notice. Clients stay because the results keep compounding, not because a contract says they must.',
  },
];

export default function Guarantee() {
  return (
    <section
      id="how-we-work"
      className="relative overflow-hidden py-14 md:py-20"
      style={{ background: '#f3f3f4' }}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Heading block */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2
            className="font-heading font-bold leading-tight mb-8 tracking-tight"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: '#000000' }}
          >
            How We Work With You
          </h2>
          <p
            className="text-xl leading-relaxed"
            style={{ color: '#45464d', maxWidth: '800px', margin: '0 auto' }}
          >
            Before anything goes live, we agree your KPIs in writing and sign them into the contract. From there you get a live dashboard, a written report every Monday, and a senior specialist on your account personally, on a month-to-month agreement. We keep your business by earning it, not by locking you in.
          </p>
        </div>

        {/* Three steps with large numbers and connecting lines */}
        <div className="grid sm:grid-cols-3 gap-12 relative">

          {/* Desktop connector lines */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(224,227,229,0.5), transparent)' }} aria-hidden="true" />

          {steps.map((step) => (
            <div
              key={step.n}
              className="relative overflow-hidden rounded-[8px] p-6 md:p-10 flex flex-col items-center text-center"
              style={{
                background: '#ffffff',
                border: '1px solid rgba(198,198,205,0.3)',
                boxShadow: '0 2px 8px rgba(13,27,54,0.05)',
              }}
            >
              {/* Large background number */}
              <div
                aria-hidden="true"
                className="font-heading absolute -top-4 -right-2 leading-none select-none pointer-events-none"
                style={{
                  fontSize: '120px',
                  fontWeight: 700,
                  color: '#e0e3e5',
                  zIndex: 0,
                  lineHeight: 1,
                }}
              >
                {step.n}
              </div>

              {/* Content */}
              <div className="relative z-10 pt-16 w-full">
                <h3
                  className="font-heading text-2xl font-semibold mb-3"
                  style={{ color: '#000000' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#45464d' }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <ShimmerButton href="/#contact" variant="primary" size="lg">
            Get Your Free Audit
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
}
