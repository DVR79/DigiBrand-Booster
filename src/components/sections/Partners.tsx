/* Server component — certified partners section */

const partners = [
  'Google Partner',
  'Meta Business',
  'SEMrush',
  'HubSpot',
];

export default function Partners() {
  return (
    <section
      className="py-8 md:py-10 px-4"
      style={{
        background: '#f3f3f4',
        borderTop: '1px solid #e6e6e6',
        borderBottom: '1px solid #e6e6e6',
      }}
      aria-label="Certified partners section"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p
          className="pill justify-center mb-8"
          style={{ display: 'flex' }}
        >
          Certified &amp; Verified Partners
        </p>

        <div className="group flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-60 grayscale transition-all duration-700 hover:opacity-100 hover:grayscale-0">
          {partners.map(name => (
            <span
              key={name}
              className="font-heading text-xl font-bold tracking-tight"
              style={{ color: '#11161e' }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
