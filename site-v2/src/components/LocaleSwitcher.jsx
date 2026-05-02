import { useMemo } from 'react';

export default function LocaleSwitcher({ currentLocale = 'es' }) {
  const options = useMemo(() => [
    { code: 'es', label: 'Español' },
    { code: 'en', label: 'English' }
  ], []);

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-2 text-sm">
      <span className="text-slate-600">Idioma / Language:</span>
      {options.map((option) => (
        <a
          key={option.code}
          href={`/${option.code}/`}
          className={option.code === currentLocale ? 'font-semibold text-indigo-700' : 'text-slate-500 hover:text-indigo-700'}
        >
          {option.label}
        </a>
      ))}
    </div>
  );
}
