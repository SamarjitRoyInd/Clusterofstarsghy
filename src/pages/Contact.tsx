
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaWhatsapp, FaFacebook, FaYoutube } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Cluster of Stars</title>
        <meta name="description" content="Get in touch with Cluster of Stars for volunteer opportunities, donations, and queries." />
      </Helmet>

      {/* Header */}
      <section className="section bg-blue-grad text-left about-header">
        <div className="container">
          <motion.h1
            className="h1 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Get in Touch
          </motion.h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section pattern-bg">
        <div className="container">
          <div className="contact-grid">
            {/* Direct Contact Info */}
            <div className="card contact-info-card">
              <h3 className="h3 mb-6 text-primary">Contact Information</h3>

              <div className="contact-detail-item">
                <div className="icon-circ"><Phone size={20} /></div>
                <div>
                  <span className="detail-label">Phone</span>
                  <p className="detail-text">+91 99540 78661</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="icon-circ"><Mail size={20} /></div>
                <div>
                  <span className="detail-label">Email</span>
                  <p className="detail-text">clusterofstarsghy@gmail.com</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="icon-circ"><MapPin size={20} /></div>
                <div>
                  <span className="detail-label">Office Address</span>
                  <p className="detail-text">
                    3rd Floor, Late Leturam Das Market<br />
                    Pandav Nagar, Pandu<br />
                    Guwahati – 781012, Assam
                  </p>
                </div>
              </div>

              <div className="social-row mt-8">
                <span className="detail-label mb-2 block">Connect With Us</span>
                <div className="flex gap-4">
                  <a href="https://wa.me/+918486535639" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="WhatsApp">
                    <FaWhatsapp size={20} color="#25D366" /> WhatsApp
                  </a>
                  <a href="https://www.facebook.com/clusterofstarsghy/" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="Facebook">
                    <FaFacebook size={20} color="#1877F2" /> Facebook
                  </a>
                  <a href="https://www.youtube.com/@clusterofstar9575" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="YouTube">
                    <FaYoutube size={20} color="#FF0000" /> YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Google Form Placeholder */}
            <div className="card form-card">
              <h3 className="h3 mb-2 text-primary">Volunteer & Queries</h3>
              <p className="text-body mb-6">
                For volunteer opportunities or general queries, fill out the form below.
              </p>

              <div className="form-placeholder">
                <p className="text-center text-body">
                  <em>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfx5xFmygt_FHiOebj9sWZWyg1pFuqxW3RZrdAeGZh8x6SisA/viewform?embedded=true" width="640" height="400">Loading…</iframe>
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Google Maps Embed */}
      <section className="map-section">
        <div className="container mb-4">
          <h2 className="h2 text-center text-primary">Visit Our Office</h2>
        </div>
        <div className="map-container">
          <iframe
            title="Google Maps Full Embed Pandu, Guwahati"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.1898951852986!2d91.68299377574962!3d26.160473577103556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5b30096033cd%3A0xac640b4db191d4a!2sCluster%20of%20Stars!5e1!3m2!1sen!2sin!4v1775330527160!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
