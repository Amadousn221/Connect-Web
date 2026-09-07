'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import { ourRole as ourRoleFr } from '@/content/fr/notreRole';
import { ourRole as ourRoleEn } from '@/content/en/notreRole';
import styles from './OurRole.module.css';

// S05b — « Notre rôle » (Refonte Accueil, sept. 2026). Transition entre la
// réassurance (StatsBlock) et « À qui on parle » (NeedSelector) : explique la
// valeur avant les audiences. 3 axes courts reliés par un filet fin — pas de
// carte. Desktop : ligne horizontale, survol/focus par axe. Mobile : ligne
// verticale, l'axe actif suit le scroll (repère de lecture, jamais requis
// pour comprendre le contenu — les 3 textes restent visibles en clair).
export function OurRole({ locale }: { locale: Locale }) {
  const content = locale === 'en' ? ourRoleEn : ourRoleFr;
  const [mobileActive, setMobileActive] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = itemRefs.current.findIndex((el) => el === entry.target);
          if (index !== -1) setMobileActive(index);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="notre-role" className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            lead={content.lead}
          />
        </RevealOnScroll>

        <div className={styles.list}>
          {content.axes.map((axis, i) => (
            <RevealOnScroll key={axis.title} className={styles.axis} delay={i * 70}>
              <div
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className={styles.axisInner}
                data-mobile-active={mobileActive === i}
              >
                <span className={styles.dot} aria-hidden="true" />
                <span className={styles.num} aria-hidden="true">
                  {axis.num}
                </span>
                <h3 className={`cw-serif ${styles.axisTitle}`}>{axis.title}</h3>
                <p className={styles.axisBody}>{axis.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className={styles.ctaRow}>
          <Link href={localePath(locale, content.cta.href)} className={styles.cta}>
            <span>{content.cta.label}</span>
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
