// app/contact/page.js
'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';
import '../styles/contactpage.css';

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [copied, setCopied] = useState(false);

  const onSubmit = async (data) => {
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.error || 'Unknown error');
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shravan@auxobitaerospace.com')
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        /* optionally handle failure */
      });
  };

  return (
    <motion.main
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <section className="contact-header">
        <motion.h1
          className="contact-title"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          className="contact-subtitle"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          We’d love to hear from you — drop us a message below or find us on socials.
        </motion.p>
      </section>

      <div className="contact-content">
        <motion.div
          className="contact-info"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="info-item">
            <MapPin size={20} />
            <span>Auxobit Aerospace, 213, Samarth Nagar, Aurangabad, Maharashtra-431001.</span>
          </div>

          {/* Email (copy to clipboard) */}
          <div className="info-item" style={{ position: 'relative' }}>
            <Mail size={20} className="info-icon" />
            <span
              className="info-link"
              title="Click to copy email"
              style={{ cursor: 'pointer' }}
              onClick={handleCopyEmail}
            >
              info@auxobit.com
            </span>
            {copied && (
              <span className="copied-badge">
                Copied!
              </span>
            )}
          </div>

          {/* Phone */}
          <div className="info-item">
            <Phone size={20} className="info-icon" />
            <a
              href="tel:+918208124471"
              className="info-link"
              title="Call us"
            >
              +91 82081 24471
            </a>
          </div>

          <div className="socials">
            <a href="https://www.instagram.com/auxobitaerospace?igsh=cmJua2Zhb2M2dTJn">
              <Instagram size={24} />
            </a>
            <a href="https://www.linkedin.com/company/auxobitaerospace/">
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-wrapper"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {status === 'success' ? (
            <div className="form-success">Thank you! We’ll be in touch soon.</div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Name"
                  {...register('name', { required: true })}
                  disabled={isSubmitting}
                />
                {errors.name && <span className="error">Required</span>}
              </div>
              <div className="form-row">
                <input
                  type="email"
                  placeholder="Email"
                  {...register('email', { required: true })}
                  disabled={isSubmitting}
                />
                {errors.email && <span className="error">Required</span>}
              </div>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Subject"
                  {...register('subject')}
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-row">
                <textarea
                  placeholder="Message"
                  {...register('message', { required: true })}
                  disabled={isSubmitting}
                />
                {errors.message && <span className="error">Required</span>}
              </div>
              <button
                type="submit"
                className="form-btn"
                disabled={isSubmitting || status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send Message ➔'}
              </button>
              {status === 'error' && (
                <p className="form-error">
                  Oops—something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>

      <motion.div
        className="map-container"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <h2 className="map-title">We Are Here 📍 </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7504.167026626479!2d75.31047660115776!3d19.87869518516772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb986a573c2cef%3A0x740dcb16b025f60b!2sSamarth%20Nagar%2C%20Chhatrapati%20Sambhajinagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1753437004800!5m2!1sen!2sin"
          className="contact-map"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </motion.main>
  );
}
