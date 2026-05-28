import React, { useState } from 'react';
import { personal } from '../data/portfolioData';
import './Contact.css';

const contactItems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'fahadi-idrees',
    href: personal.linkedin,
    description: 'Connect professionally',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    label: 'GitHub',
    value: 'Fahad1110136',
    href: personal.github,
    description: 'Browse my source code',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    label: 'Email',
    //value: personal.email,
    value: 'fahadidrees1110136@gmail.com',
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}`,
    description: 'Send me a message',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.6 4.38 2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: +923201480611,
    href: `https://api.whatsapp.com/send?phone=923201480611`,
    description: 'Call or WhatsApp',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location',
    value: personal.location,
    href: 'https://maps.google.com/?q=Samanabad+Lahore+Pakistan',
    description: 'View on map',
    external: true,
  },
];


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();

    const targetPhone = "923201480611";

    const encryptedText =
      `*Hi Fahad, you have recieved a new message from Portfolio Contact Form* 🚀%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name)} %0A` +
      `*Phone:* ${encodeURIComponent(formData.phone)} %0A` +
      `*Email:* ${encodeURIComponent(formData.email)} %0A%0A` +
      `*Message:* %0A${encodeURIComponent(formData.message)}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${targetPhone}&text=${encryptedText}`;
    window.open(whatsappUrl, '_blank');
  };

  // ── STARTS: Email send handler (opens Gmail compose in new tab) ──
const handleEmailSend = (e) => {
  e.preventDefault();

  // Validate fields manually (since type="button" skips native form validation)
  if (!formData.name || !formData.phone || !formData.email || !formData.message) {
    alert('Please fill in all fields before sending.');
    return;
  }

  const to = encodeURIComponent(personal.email);
  const subject = encodeURIComponent(
    `Portfolio Contact: Message from ${formData.name}`
  );
  const body = encodeURIComponent(
    `Hi Fahad,\n\nYou received a new message from portfolio contact form.\n\n` +
    `Name:    ${formData.name}\n` +
    `Phone:   ${formData.phone}\n` +
    `Email:   ${formData.email}\n\n` +
    `Message:\n${formData.message}\n\n`
  );

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
  window.open(gmailUrl, '_blank');
};
// ── ENDS: Email send handler ──

  return (
    <div className="page-wrapper">
      <div className="container section">
        <p className="section-subheading">// get in touch</p>
        <h1 className="section-heading">Contact</h1>
        <div className="section-divider" />

        <div className="contact__layout">
          {/* Left column — intro only, cards moved below */}
          <div className="contact__intro">
            <h2 className="contact__intro-title">Let's build something together.</h2>
            <p className="contact__intro-text">
              Whether you're looking to collaborate on a project, discuss a professional opportunity,
              or simply want to connect with a fellow developer — I'm always open to meaningful conversations.
              Reach out through any channel below and I'll get back to you promptly.
            </p>
            <div className="contact__availability">
              <span className="contact__availability-dot" />
              <span>Currently available for freelance work &amp; internship opportunities</span>
            </div>
          </div>

          {/* Right column — contact form */}
          <div className="contact__form-container">
            <div className="contact__form-wrapper">
              <div className="contact__form-header">
                <span className="contact__form-label">// Quick Connect</span>
                <h3 className="contact__form-title">Drop your message</h3>
              </div>

              <form className="contact__whatsapp-form">
                <div className="contact__form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="e.g Muhammad Fahad Idrees"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+92 3XX XXXXXXX"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="e.g fahad@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                {/* ── STARTS: Dual send buttons row ── */}
                <div className="contact__submit-row">
                  <button
                    type="submit"
                    className="btn-solid contact__submit-btn contact__submit-btn--whatsapp"
                    onClick={handleWhatsAppSend}
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    className="btn-solid contact__submit-btn contact__submit-btn--email"
                    onClick={handleEmailSend}
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    <span>Send via Email</span>
                  </button>
                </div>
                {/* ── ENDS: Dual send buttons row ── */}

              </form>
            </div>
          </div>
        </div>

        {/* ── STARTS: Horizontal contact cards strip below layout ── */}
        <div className="contact__cards-strip">
          {contactItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="card contact__strip-card"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="contact__strip-icon">{item.icon}</div>
              <div className="contact__strip-body">
                <p className="contact__strip-label">{item.label}</p>
                <p className="contact__strip-value">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
        {/* ── ENDS: Horizontal contact cards strip below layout ── */}

      </div>
    </div>
  );
};

export default Contact;