import Link from "next/link";

export function ServiceCard({
  title,
  text,
  href,
  icon,
}: {
  title: string;
  text: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="card-rail group block bg-paper border border-line rounded-lg p-6 pt-7 hover:shadow-lg hover:shadow-ink/5 hover:-translate-y-0.5 transition-all"
    >
      <span className="inline-flex items-center justify-center w-11 h-11 rounded-md bg-bone text-amber-deep mb-4" aria-hidden="true">
        {icon}
      </span>
      <h3 className="text-xl mb-1.5 group-hover:text-amber-deep transition-colors">{title}</h3>
      <p className="text-sm text-graphite leading-relaxed">{text}</p>
    </Link>
  );
}
