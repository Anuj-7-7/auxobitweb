'use client';

import { useState } from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function EnquiryForm() {
  const [form, setForm] = useState({ email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [copied, setCopied] = useState('');

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
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm({ email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const copyText = async (type, text) => {
    await navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <div className="enquiry-wrapper">
      <div className="info">
        <h1>Connect with Auxobit</h1>
        <div className="methods">
          <button
            className="method"
            onClick={() => copyText('email', 'info@auxobit.com')}
          >
            <div className="icon-circle"><FiMail /></div>
            <span>info@auxobit.com</span>
            {copied === 'email' && <span className="copied">Copied!</span>}
          </button>
          <a href="tel:+918208124471" className="method">
            <div className="icon-circle"><FiPhone /></div>
            <span>+91 82081 24471</span>
          </a>
          <a
            href="https://wa.me/918275343970"
            target="_blank"
            rel="noopener noreferrer"
            className="method"
          >
            <div className="icon-circle whatsapp"><FaWhatsapp /></div>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      <form className="form" onSubmit={handleSubmit}>
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
          placeholder="Subject (optional)"
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
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
        {status === 'success' && <p className="success">Thanks! We’ve received your message.</p>}
        {status === 'error' && <p className="error">Oops! Something went wrong.</p>}
      </form>

      <style jsx>{`
        .enquiry-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 960px;
          margin: 2rem auto;
          padding: 2rem;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          font-style:normal;
        }
        @media(min-width:768px) {
          .enquiry-wrapper {
            grid-template-columns: 1fr 1fr;
          }
        }
        .info h2 {
          margin-bottom: 1.5rem;
          font-size: 2rem;
          font-weight: 700;
          color: #111;
          font-style:normal;
        }
        .methods {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .method {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: #f9f9f9;
          border: none;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-size: 1rem;
          color: #222;
          cursor: pointer;
          text-decoration: none;
          position: relative;
          transition: background 0.2s, transform 0.2s;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .method:hover {
          background: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.08);
        }
        .icon-circle {
          width: 2.5rem;
          height: 2.5rem;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: background 0.2s;
        }
        .method:hover .icon-circle {
          background: #0070f3;
          color: #fff;
        }
        .icon-circle.whatsapp:hover {
          background: #25D366;
        }
        .copied {
          position: absolute;
          top: -1.5rem;
          right: 1rem;
          background: #111;
          color: #fff;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
        }
        .form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .form input,
        .form textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: #f9f9f9;
          font-size: 1rem;
          color: #222;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form input:focus,
        .form textarea:focus {
          border-color: #0070f3;
          box-shadow: 0 0 0 3px rgba(0,112,243,0.1);
          outline: none;
        }
        .form button {
          padding: 0.75rem;
          background: #111;
          color: #fff;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .form button:hover:not(:disabled) {
          background: #333;
          transform: translateY(-1px);
        }
        .success, .error {
          font-size: 0.875rem;
          margin-top: 0.5rem;
        }
        .success { color: #28a745; }
        .error { color: #dc3545; }
      `}</style>
    </div>
  );
}