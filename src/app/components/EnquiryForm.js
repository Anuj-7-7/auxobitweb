'use client';

import { useState } from 'react';
import {
  FiMail,
  FiPhone,
  FiInfo,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
} from 'react-icons/fi';

export default function EnquiryForm() {
  const [form, setForm] = useState({
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Network response was not ok');
      setStatus('success');
      setForm({ email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="enquiry-wrapper">
      {/* Info Section */}
      <div className="info-section">
        <h2>Let's Talk</h2>
        <p>
          Have some big idea or brand to develop and need help? Then reach out—
          we'd love to hear about your project and provide help.
        </p>

        <div className="contact-block">
          <h3>Email</h3>
          <ul>
            <li>
              <div className="icon-circle"><FiMail /></div>
              <div className="text">
                <small>Mail</small>
                <span>shravanayadavmail@gmail.com</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="contact-block">
          <h3>Contact</h3>
          <ul className="social-list">
            <li>+91 8275143470</li>
            <li>+91 9858959878</li>
          </ul>
        </div>
      </div>

      {/* Form Section */}
      <form className="form-section" onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
        />
        <textarea
          name="message"
          rows={6}
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message ➔'}
        </button>

        {status === 'success' && (
          <p style={{ color: 'green', marginTop: '1rem' }}>
            Thanks! Your message has been sent.
          </p>
        )}
        {status === 'error' && (
          <p style={{ color: 'red', marginTop: '1rem' }}>
            Oops—something went wrong. Please try again.
          </p>
        )}
      </form>

      {/* Scoped Styles */}
      <style jsx>{`
        .enquiry-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          background: #fff;
        }

        @media (min-width: 1024px) {
          .enquiry-wrapper {
            grid-template-columns: 1fr 1fr;
          }
        }

        .info-section h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .info-section p {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .contact-block {
          margin-bottom: 1.5rem;
        }

        .contact-block h3 {
          font-size: 1rem;
          font-weight: 600;
          color: #111;
          margin-bottom: 0.75rem;
        }

        .contact-block ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .contact-block li {
          display: flex;
          align-items: center;
        }

        .icon-circle {
          width: 2.5rem;
          height: 2.5rem;
          background: rgba(230, 230, 230, 0.8);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
        }

        .contact-block small {
          display: block;
          font-size: 0.75rem;
          color: #333;
        }

        .contact-block span {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: #0070f3;
        }

        .social-list {
          display: flex;
          gap: 1rem;
        }

        .form-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-section input,
        .form-section textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #ddd;
          border-radius: 0.5rem;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s;
          background: #f7f7f7;
        }

        .form-section input:focus,
        .form-section textarea:focus {
          border-color: #333;
        }

        .form-section button {
          padding: 0.75rem 1rem;
          background: #111;
          color: #fff;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: background 0.2s;
        }

        .form-section button:hover {
          background: #333;
        }
      `}</style>
    </div>
  );
}
