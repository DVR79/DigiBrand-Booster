'use client';

import { useEffect, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import { serviceTabs, faqs } from '@/lib/data';

interface Result {
  type: string;
  title: string;
  description: string;
}

function buildIndex(): Result[] {
  const results: Result[] = [];
  serviceTabs.forEach((tab) =>
    tab.services.forEach((s) =>
      results.push({ type: 'Service', title: s.title, description: s.description }),
    ),
  );
  faqs.forEach((f) =>
    results.push({ type: 'FAQ', title: f.question, description: f.answer.slice(0, 80) + '...' }),
  );
  return results;
}

const INDEX = buildIndex();

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
    else setQuery('');
  }, [open]);

  const results = query.trim()
    ? INDEX.filter(
        (r) =>
          r.title.toLowerCase().includes(query.toLowerCase()) ||
          r.description.toLowerCase().includes(query.toLowerCase()),
      ).slice(0, 8)
    : [];

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4"
      style={{ background: 'rgba(10,10,20,0.8)', backdropFilter: 'blur(8px)' }}
      onClick={() => setOpen(false)}
    >
      <div
        className="glass w-full max-w-lg rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3" style={{ borderBottom: '1px solid var(--border)' }}>
          <Search size={18} style={{ color: 'var(--text-secondary)' }} />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, FAQs..."
            className="flex-1 bg-transparent text-sm outline-none"
            style={{ color: 'var(--text-primary)' }}
          />
          <button onClick={() => setOpen(false)}>
            <X size={16} style={{ color: 'var(--text-secondary)' }} />
          </button>
        </div>
        {results.length > 0 && (
          <ul className="py-2 max-h-80 overflow-y-auto">
            {results.map((r, i) => (
              <li
                key={i}
                className="px-4 py-3 flex gap-3 cursor-pointer transition-colors"
                style={{ ':hover': { background: 'var(--bg-card-hover)' } } as React.CSSProperties}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLLIElement).style.background = 'var(--bg-card-hover)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLLIElement).style.background = 'transparent')
                }
              >
                <span
                  className="text-xs font-semibold mt-0.5 shrink-0"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  {r.type}
                </span>
                <div>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                    {r.title}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                    {r.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
        {query && results.length === 0 && (
          <p className="px-4 py-6 text-sm text-center" style={{ color: 'var(--text-secondary)' }}>
            No results for &quot;{query}&quot;
          </p>
        )}
        {!query && (
          <p className="px-4 py-4 text-xs" style={{ color: 'var(--text-secondary)' }}>
            Type to search services and FAQs
          </p>
        )}
      </div>
    </div>
  );
}
