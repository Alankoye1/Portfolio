import React, { useState } from 'react';
import styles from './Contact.module.css';

interface ContactForm {
      name: string;
      email: string;
      subject: string;
      message: string;
}

interface ContactProps { }

const Contact: React.FC<ContactProps> = () => {
      const [formData, setFormData] = useState<ContactForm>({
            name: '',
            email: '',
            subject: '',
            message: ''
      });

      const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
      const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
            const { name, value } = e.target;
            setFormData(prev => ({
                  ...prev,
                  [name]: value
            }));
      };

      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
            e.preventDefault();
            setIsSubmitting(true);
            setSubmitStatus('idle');

            try {
                  // Simulate API call
                  await new Promise(resolve => setTimeout(resolve, 2000));

                  console.log('Form submitted:', formData);

                  setSubmitStatus('success');
                  setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                  });
            } catch (error) {
                  console.error('Error submitting form:', error);
                  setSubmitStatus('error');
            } finally {
                  setIsSubmitting(false);
            }
      };

      return (
            <section className={styles.contact} id="contact">
                  <div className={styles.container}>
                        <div className={styles.sectionTitle}>
                              <h2>Get In Touch</h2>
                              <p>Let's work together to bring your ideas to life</p>
                        </div>

                        <div className={styles.contactGrid}>
                              <div className={styles.contactInfo}>
                                    <div className={styles.infoCard}>
                                          <h3>Contact Information</h3>
                                          <p>Feel free to reach out through any of these channels:</p>

                                          <div className={styles.infoItems}>
                                                <div className={styles.infoItem}>
                                                      <div className={styles.infoIcon}>
                                                            <i className="fas fa-envelope"></i>
                                                      </div>
                                                      <div className={styles.infoContent}>
                                                            <h4>Email</h4>
                                                            <p>alan.koye277@gmail.com</p>
                                                      </div>
                                                </div>
                                                <div className={styles.infoItem}>
                                                      <div className={styles.infoIcon}>
                                                            <i className="fas fa-phone"></i>
                                                      </div>
                                                      <div className={styles.infoContent}>
                                                            <h4>Phone</h4>
                                                            <p>+964 750 375 6011</p>
                                                      </div>
                                                </div>
                                                <div className={styles.infoItem}>
                                                      <div className={styles.infoIcon}>
                                                            <i className="fas fa-map-marker-alt"></i>
                                                      </div>
                                                      <div className={styles.infoContent}>
                                                            <h4>Location</h4>
                                                            <p>Erbil, Iraq</p>
                                                      </div>
                                                </div>
                                          </div>

                                          <div className={styles.socialSection}>
                                                <h4>Follow Me</h4>
                                                <div className={styles.socialLinks}>
                                                      <a
                                                            href="https://github.com/Alankoye1"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={styles.socialLink}
                                                            aria-label="Follow on GitHub"
                                                      >
                                                            <i className="fab fa-github"></i>
                                                      </a>
                                                      <a
                                                            href="https://linkedin.com/in/alanazadakram"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={styles.socialLink}
                                                            aria-label="Follow on LinkedIn"
                                                      >
                                                            <i className="fab fa-linkedin"></i>
                                                      </a>
                                                      <a
                                                            href="https://twitter.com/yourusername"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={styles.socialLink}
                                                            aria-label="Follow on Twitter"
                                                      >
                                                            <i className="fab fa-twitter"></i>
                                                      </a>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              <div className={styles.contactForm}>
                                    <form onSubmit={handleSubmit} className={styles.form}>
                                          <div className={styles.formGrid}>
                                                <div className={styles.formGroup}>
                                                      <label htmlFor="name" className={styles.label}>
                                                            Full Name *
                                                      </label>
                                                      <input
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            required
                                                            className={styles.input}
                                                            placeholder="Enter your full name"
                                                      />
                                                </div>

                                                <div className={styles.formGroup}>
                                                      <label htmlFor="email" className={styles.label}>
                                                            Email Address *
                                                      </label>
                                                      <input
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            required
                                                            className={styles.input}
                                                            placeholder="Enter your email"
                                                      />
                                                </div>
                                          </div>

                                          <div className={styles.formGroup}>
                                                <label htmlFor="subject" className={styles.label}>
                                                      Subject *
                                                </label>
                                                <input
                                                      type="text"
                                                      id="subject"
                                                      name="subject"
                                                      value={formData.subject}
                                                      onChange={handleChange}
                                                      required
                                                      className={styles.input}
                                                      placeholder="What's this about?"
                                                />
                                          </div>

                                          <div className={styles.formGroup}>
                                                <label htmlFor="message" className={styles.label}>
                                                      Message *
                                                </label>
                                                <textarea
                                                      id="message"
                                                      name="message"
                                                      value={formData.message}
                                                      onChange={handleChange}
                                                      required
                                                      rows={6}
                                                      className={styles.textarea}
                                                      placeholder="Tell me about your project or say hello!"
                                                />
                                          </div>

                                          {submitStatus === 'success' && (
                                                <div className={styles.successMessage}>
                                                      <i className="fas fa-check-circle"></i>
                                                      Thank you! Your message has been sent successfully.
                                                </div>
                                          )}

                                          {submitStatus === 'error' && (
                                                <div className={styles.errorMessage}>
                                                      <i className="fas fa-exclamation-triangle"></i>
                                                      Sorry, there was an error sending your message. Please try again.
                                                </div>
                                          )}

                                          <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={`${styles.submitBtn} ${isSubmitting ? styles.submitting : ''}`}
                                          >
                                                {isSubmitting ? (
                                                      <>
                                                            <i className="fas fa-spinner fa-spin"></i>
                                                            Sending...
                                                      </>
                                                ) : (
                                                      <>
                                                            <i className="fas fa-paper-plane"></i>
                                                            Send Message
                                                      </>
                                                )}
                                          </button>
                                    </form>
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default Contact;