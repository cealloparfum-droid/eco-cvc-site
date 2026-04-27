import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTransition from "./PageTransition";
import PageHeader from "./PageHeader";

interface LegalLayoutProps {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  breadcrumbLabel: string;
  lastUpdate: string;
  children: ReactNode;
}

const LegalLayout = ({ eyebrow, title, subtitle, breadcrumbLabel, lastUpdate, children }: LegalLayoutProps) => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <PageHeader
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          breadcrumb={[{ label: breadcrumbLabel }]}
        />

        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-3xl">
            <div className="bg-white rounded-3xl border border-border shadow-soft p-7 md:p-10">
              <p className="text-xs text-muted-foreground mb-8 pb-5 border-b border-border">
                Dernière mise à jour : <strong className="text-foreground">{lastUpdate}</strong>
              </p>
              <div className="prose-legal space-y-6 text-[15px] leading-relaxed text-slate-700">
                {children}
              </div>
            </div>
          </div>
        </section>

        <style>{`
          .prose-legal h2 {
            font-size: 1.4rem;
            font-weight: 800;
            color: hsl(var(--foreground));
            margin-top: 2rem;
            margin-bottom: 0.75rem;
            letter-spacing: -0.01em;
          }
          .prose-legal h2:first-child { margin-top: 0; }
          .prose-legal h3 {
            font-size: 1.05rem;
            font-weight: 700;
            color: hsl(var(--foreground));
            margin-top: 1.4rem;
            margin-bottom: 0.4rem;
          }
          .prose-legal p { margin-bottom: 0.75rem; }
          .prose-legal ul {
            list-style: disc;
            padding-left: 1.4rem;
            margin-bottom: 0.75rem;
          }
          .prose-legal li { margin-bottom: 0.35rem; }
          .prose-legal a {
            color: hsl(var(--brand-blue));
            text-decoration: underline;
            text-underline-offset: 2px;
          }
          .prose-legal a:hover { color: hsl(var(--brand-bluedark)); }
          .prose-legal strong { color: hsl(var(--foreground)); font-weight: 700; }
          .prose-legal .placeholder {
            display: inline-block;
            background: hsl(var(--brand-red) / 0.08);
            color: hsl(var(--brand-red));
            border: 1px dashed hsl(var(--brand-red) / 0.4);
            padding: 1px 8px;
            border-radius: 6px;
            font-size: 0.85em;
            font-weight: 600;
          }
        `}</style>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default LegalLayout;
