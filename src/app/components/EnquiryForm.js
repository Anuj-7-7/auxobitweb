'use client';

import { useState } from 'react';
import {
  FiMail,
  FiPhone,
} from 'react-icons/fi';

export default function EnquiryForm() {
  const [form, setForm] = useState({ email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

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

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('shravan@auxobitaerospace.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Clipboard copy failed', err);
    }
  };

  return (
    <div className="enquiry-wrapper">
      <div className="info-section">
        <h2>Let's Talk</h2>
        <p>
          Curious to learn more about what we do or how we work?
Drop us a message — we’re always happy to answer any question you have 
        </p>

        <div className="contact-block">
          
          <ul>
            <li onClick={handleCopyEmail} className="copy-target">
              <div className="icon-circle"><FiMail /></div>
              <div className="text">
                  <small>Reach at</small>
                <span>shravan@auxobitaerospace.com</span>
                {copied && <div className="copied-popup">Copied!</div>}
              </div>
            </li>
          </ul>
        </div>

        <div className="contact-block">
          
          <ul>
            <li>
              <a href="tel:+918208124471" className="call-link">
                <div className="icon-circle"><FiPhone /></div>
                <div className="text">
                  <small>Call Us</small>
                  <span>+91 82081 24471</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

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

        {status === 'success' && <p style={{ color: 'green' }}>Thanks! Your message has been sent.</p>}
        {status === 'error' && <p style={{ color: 'red' }}>Oops—something went wrong. Please try again.</p>}
      </form>

      <style jsx>{`
        .enquiry-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          height:450px;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          background: #fff;
          margin-top:-28px;
          padding-top:50px;
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

        .contact-block li,
        .call-link {
          display: flex;
          align-items: center;
          cursor: pointer;
          position: relative;
          transition: transform 0.2s ease;
        }

        .call-link {
          text-decoration: none;
        }

        .call-link:hover .icon-circle,
        .copy-target:hover .icon-circle {
          background: #0070f3;
          color: white;
        }

        .copy-target:hover,
        .call-link:hover {
          transform: scale(1.02);
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
          transition: background 0.3s ease;
        }

        .text small {
          font-size: 0.75rem;
          color: #333;
        }

        .text span {
          font-size: 0.875rem;
          font-weight: 600;
          color: #6d6d6dff;
          display: block;
          text-decoration:none
        }

        .copied-popup {
          position: absolute;
          top: -1.5rem;
          left: 1rem;
          background: #28a745;
          color: white;
          padding: 0.3rem 0.6rem;
          border-radius: 0.3rem;
          font-size: 0.75rem;
          opacity: 0.9;
          animation: fadeOut 1.5s forwards;
        }

        @keyframes fadeOut {
          0% { opacity: 0; transform: translateY(-5px); }
          20% { opacity: 1; }
          100% { opacity: 0; transform: translateY(-10px); }
        }

        .form-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-section input,
        .form-section textarea {
          padding: 0.75rem 1rem;
          border: 1px solid #ddd;
          border-radius: 0.5rem;
          font-size: 1rem;
          background: #f7f7f7;
          transition: border-color 0.2s;
        }

        .form-section input:focus,
        .form-section textarea:focus {
          border-color: #0070f3;
          outline: none;
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
          transition: background 0.2s ease;
        }

        .form-section button:hover {
          background: #333;
        }
          /* ———— MOBILE PHONES (≤639px) ———— */
@media (max-width: 639px) {
  .enquiry-wrapper {
    grid-template-columns: 1fr !important;
    height: auto !important;
    padding: 1rem !important;
    gap: 1.5rem !important;
  }
  .info-section,
  .form-section {
    width: 100% !important;
  }
  .info-section h2 {
    font-size: 1.5rem !important;
  }
  .form-section input,
  .form-section textarea {
    font-size: 0.9rem !important;
  }
  .form-section button {
    font-size: 0.9rem !important;
    padding: 0.6rem 1rem !important;
  }
}

/* ———— TABLETS (640px–1023px) ———— */
@media (min-width: 640px) and (max-width: 1023px) {
  .enquiry-wrapper {
    grid-template-columns: 1fr 1fr !important;
    height: auto !important;
    padding: 1.5rem !important;
    gap: 2rem !important;
  }
  .info-section h2 {
    font-size: 1.75rem !important;
  }
  .info-section p {
    font-size: 0.95rem !important;
  }
  .form-section input,
  .form-section textarea {
    font-size: 1rem !important;
  }
  .form-section button {
    font-size: 1rem !important;
    padding: 0.75rem 1rem !important;
  }
}

      `}</style>
    </div>
  );
}
