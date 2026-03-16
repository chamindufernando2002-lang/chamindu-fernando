'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, MessageCircle } from 'lucide-react';
import './ContactModal.css';

const PHONE_NUMBER = '+94769912948'; // E.164 format for tel: and wa.me

const ContactModal = ({ isOpen, onClose }) => {
  // Close on ESC key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="contact-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="contact-modal-card"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()} // Prevent backdrop close on card click
          >
            {/* Close button */}
            <button className="modal-close-btn cursor-hover" onClick={onClose} aria-label="Close">
              <X size={18} />
            </button>

            <div className="modal-header">
              <p className="modal-label">Get in touch</p>
              <h3 className="modal-title heading-font">Let's Talk</h3>
              <p className="modal-number">(+94) 76 991 2948</p>
            </div>

            <div className="modal-actions">
              {/* Call option */}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="modal-action-btn modal-action-call cursor-hover"
                aria-label="Call"
              >
                <div className="modal-action-icon">
                  <Phone size={22} />
                </div>
                <div className="modal-action-text">
                  <span className="modal-action-title">Call</span>
                  <span className="modal-action-sub">Open phone dialler</span>
                </div>
              </a>

              {/* WhatsApp option */}
              <a
                href={`https://wa.me/${PHONE_NUMBER.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-action-btn modal-action-whatsapp cursor-hover"
                aria-label="WhatsApp"
              >
                <div className="modal-action-icon">
                  {/* WhatsApp SVG icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="modal-action-text">
                  <span className="modal-action-title">WhatsApp</span>
                  <span className="modal-action-sub">Open chat directly</span>
                </div>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
