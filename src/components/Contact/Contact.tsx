import React, { useEffect, useRef, useState } from 'react';
import { contact, site, socials } from '../../data/site';
import Arrow from '../ui/Arrow';
import Reveal from '../ui/Reveal';
import SectionLabel from '../ui/SectionLabel';
import styles from './Contact.module.css';

/**
 * Contact = one big call to action. The email address IS the button
 * (a mailto: link), with a second button that copies it to the clipboard.
 * No form means no backend to maintain and nothing to break.
 */
const Contact: React.FC = () => {
      const [copied, setCopied] = useState<boolean>(false);
      const timer = useRef<number>(0);

      // Clear the pending timeout if the component disappears mid-wait.
      useEffect(() => () => window.clearTimeout(timer.current), []);

      const copyEmail = async (): Promise<void> => {
            try {
                  await navigator.clipboard.writeText(site.email);
                  setCopied(true);
                  window.clearTimeout(timer.current);
                  timer.current = window.setTimeout(() => setCopied(false), 2200);
            } catch {
                  // Clipboard blocked (older browser / insecure page): the mailto link still works.
                  setCopied(false);
            }
      };

      return (
            <section id="contact" className={styles.contact} aria-labelledby="contact-title">
                  <div className={styles.inner}>
                        <Reveal>
                              <SectionLabel number="05" title="Contact" />
                        </Reveal>

                        <Reveal delay={100}>
                              <h2 id="contact-title" className={styles.title}>
                                    {contact.heading}
                              </h2>
                        </Reveal>

                        <Reveal delay={160}>
                              <p className={styles.lead}>{contact.lead}</p>
                        </Reveal>

                        <Reveal delay={220}>
                              <div className={styles.emailRow}>
                                    <a href={`mailto:${site.email}`} className={styles.email}>
                                          <span className={styles.emailText}>{site.email}</span>
                                          <Arrow size={40} className={styles.emailArrow} />
                                    </a>
                                    <button type="button" className={styles.copy} onClick={copyEmail}>
                                          {copied ? 'Copied ✓' : 'Copy email'}
                                    </button>
                                    <span className="sr-only" role="status" aria-live="polite">
                                          {copied ? 'Email address copied to clipboard' : ''}
                                    </span>
                              </div>
                        </Reveal>

                        <Reveal delay={280}>
                              <div className={styles.cols}>
                                    <div>
                                          <h3 className={styles.colTitle}>Elsewhere</h3>
                                          <ul className={styles.socials}>
                                                {socials.map((social) => (
                                                      <li key={social.label}>
                                                            <a
                                                                  href={social.url}
                                                                  target="_blank"
                                                                  rel="noopener noreferrer"
                                                                  className={styles.social}
                                                            >
                                                                  <span>{social.label}</span>
                                                                  <span className={styles.handle}>{social.handle}</span>
                                                                  <Arrow size={18} />
                                                                  <span className="sr-only">(opens in a new tab)</span>
                                                            </a>
                                                      </li>
                                                ))}
                                          </ul>
                                    </div>

                                    <div>
                                          <h3 className={styles.colTitle}>Call or read</h3>
                                          <ul className={styles.socials}>
                                                <li>
                                                      <a href={`tel:${site.phone.replace(/\s/g, '')}`} className={styles.social}>
                                                            <span>Phone</span>
                                                            <span className={styles.handle}>{site.phone}</span>
                                                            <Arrow size={18} />
                                                      </a>
                                                </li>
                                                <li>
                                                      <a href={site.cvUrl} download={site.cvFileName} className={styles.social}>
                                                            <span>Résumé</span>
                                                            <span className={styles.handle}>PDF</span>
                                                            <Arrow dir="down" size={18} />
                                                      </a>
                                                </li>
                                          </ul>
                                    </div>
                              </div>
                        </Reveal>
                  </div>
            </section>
      );
};

export default Contact;
