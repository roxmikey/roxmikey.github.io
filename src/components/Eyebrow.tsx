/** Small section label with the signature gate-track underline. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <p className="display text-sm font-semibold tracking-[0.18em] text-amber-deep mb-2">{children}</p>
      <span className="track" aria-hidden="true" />
    </div>
  );
}

export function EyebrowDark({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 on-dark">
      <p className="display text-sm font-semibold tracking-[0.18em] text-amber mb-2">{children}</p>
      <span className="track" aria-hidden="true" />
    </div>
  );
}
