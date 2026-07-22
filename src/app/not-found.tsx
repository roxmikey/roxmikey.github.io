import Link from "next/link";
import { QuoteButton } from "@/components/Buttons";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-24 text-center">
      <p className="display text-7xl text-amber-deep mb-2">404</p>
      <h1 className="text-4xl mb-4">This page doesn&apos;t exist</h1>
      <p className="text-graphite mb-8">
        The link may be old or mistyped. Head back to the{" "}
        <Link href="/" className="text-amber-deep underline underline-offset-4 font-medium">
          homepage
        </Link>{" "}
        or get in touch about your gate or garage door.
      </p>
      <QuoteButton />
    </div>
  );
}
