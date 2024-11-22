import clsx from "clsx";
import Link from "next/link";

export default function Header({ isInArticlePage = false }) {
  return (
    <header className="mb-8 bg-yellow-200">
      <div className="container mx-auto px-5 py-14">
        <div className="flex flex-col items-center lg:flex-row">
          {isInArticlePage ? (
            <h1 className="text-4xl font-bold leading-tight tracking-tighter md:pr-8 md:text-6xl">
              <Link href="/" className="hover:underline">
                Heidi Poels
              </Link>
            </h1>
          ) : (
            <h1 className="text-6xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
              <Link href="/" className="hover:underline">
                Heidi Poels
              </Link>
            </h1>
          )}

          <nav
            className={clsx(
              "flex grow justify-end text-2xl font-bold md:text-4xl",
              "accentFont"
            )}
          >
            <ul className="flex flex-col items-end justify-end lg:w-1/2 lg:flex-row lg:pl-4">
              <li className="md:mr-4">
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
