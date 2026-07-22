import "./site.css";
import "./site-extensions.css";
import PageProgress from "@/components/PageProgress";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { org } from "@/lib/data";

export const metadata = {
  title: {
    default: `${org.school} ${org.name} · ${org.nameCn}`,
    template: `%s · ${org.short}`,
  },
  description:
    "The Chinese Student Organization at Rutgers University — celebrating Chinese culture, building community, and bridging cultures on campus.",
};

/** Without JS the reveal animation never runs, so show everything up front. */
const revealFallback = "[data-reveal]{opacity:1;transform:none}";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: revealFallback }} />
        </noscript>
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <PageProgress />
        <SiteNav />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
