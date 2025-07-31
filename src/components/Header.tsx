import { Suspense } from "react";
import MainMenu from "./MainMenu";
import Link from "next/link";

export default function Header() {
  return (
    <div className="main-banner">
        <div className='main-logo'>
            <Link href="https://livinglang.com">
            <img src="/assets/logo.webp" alt="Logo" className="h-full" />
            </Link>
        </div>
        <Suspense>
          <MainMenu />
        </Suspense>
        <div className="social-logos">
          <a href="https://x.com/livinglang">
            <img src="/assets/x-logo.png" alt="Logo" className="h-full" />
          </a>
          <a href="https://www.youtube.com/@Livin-Lang">
            <img src="/assets/yt-logo.png" alt="Logo" className="h-full" />
          </a>
        </div>
    </div>
  );
}