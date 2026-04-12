
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaWhatsapp, FaFacebook, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Info & Links */}
          <div className="footer-col">
            <h3 className="h3 footer-title">Cluster of Stars</h3>
            <p className="footer-tagline">Empowering futures through education since 2017.</p>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/work">Our Work</Link>
              <Link to="/involved">Get Involved</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="footer-col">
            <h3 className="h3 footer-title">Contact Us</h3>
            <div className="contact-item">
              <Phone size={18} />
              <span>+91 99540 78661</span>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <span>clusterofstarsghy@gmail.com</span>
            </div>
            <div className="contact-item">
              <MapPin size={24} />
              <span>3rd Floor, Late Leturam Das Market,<br />Pandav Nagar, Pandu,<br />Guwahati – 781012, Assam</span>
            </div>
          </div>

          {/* Column 3: Social & Maps */}
          <div className="footer-col">
            <h3 className="h3 footer-title">Follow Us</h3>
            <div className="social-links">
              <a href="https://wa.me/+918486535639" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp size={26} color="#25D366" />
              </a>
              <a href="https://www.facebook.com/clusterofstarsghy/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook size={26} color="#1877F2" />
              </a>
              <a href="https://www.youtube.com/@clusterofstar9575" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube size={30} color="#FF0000" />
              </a>
            </div>
            <div className="footer-map-container mt-4">
              <iframe
                title="Google Maps Mini Embed Pandu, Guwahati"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.1898951852986!2d91.68299377574962!3d26.160473577103556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5b30096033cd%3A0xac640b4db191d4a!2sCluster%20of%20Stars!5e1!3m2!1sen!2sin!4v1775330527160!5m2!1sen!2sin"
                width="100%"
                height="150"
                style={{ border: 0, borderRadius: 'var(--radius-md)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Cluster of Stars. Registered Charitable Trust, Section 12A | Guwahati, Assam</p>
          <p>Designed & Managed by Samarjit Roy</p>
          <button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
