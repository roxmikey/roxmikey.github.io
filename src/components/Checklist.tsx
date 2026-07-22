/** Two-column checklist with amber tick marks. */
export function Checklist({ items, columns = 2 }: { items: readonly string[]; columns?: 1 | 2 | 3 }) {
  const cols = { 1: "sm:grid-cols-1", 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3" }[columns];
  return (
    <ul className={`grid grid-cols-1 ${cols} gap-x-8 gap-y-3`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <svg className="mt-1 shrink-0 text-amber-deep" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2.5 8.5 6 12l7.5-8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[0.95rem] leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}
