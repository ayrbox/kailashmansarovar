import Link from "next/link";

type BookCTAProps = {
  children: React.ReactNode;
};

export default function BookCTA({ children }: BookCTAProps) {
  return (
    <Link
      href="tel:+447545066652"
      className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold"
    >
      {children}
    </Link>
  );
}
