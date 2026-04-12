
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, ExternalLink } from 'lucide-react';
import './GetInvolved.css';

const GetInvolved = () => {
  return (
    <>
      <Helmet>
        <title>Get Involved | Cluster of Stars</title>
        <meta name="description" content="Support a child's future. 100% of your donation goes directly to scholar welfare." />
      </Helmet>

      {/* Header */}
      <section className="section bg-blue-grad text-left about-header">
        <div className="container">
          <motion.h1
            className="h1 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Support a Child's Future
          </motion.h1>
          <motion.p
            className="about-subtitle mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Your contribution however large or small directly funds a scholar's education, meals, and shelter.
          </motion.p>
        </div>
      </section>

      {/* How to Donate */}
      <section className="section pattern-bg">
        <div className="container">
          <div className="donate-grid">
            {/* Column 1 */}
            <div className="card donate-card">
              <div className="mb-8">
                <h2>How to Donate:</h2>
                <h3 className="text-xl font-bold mb-4 text-primary">(A) Indian Donations</h3>
                <p className="text-body mb-4">
                  Send a DD or crossed cheque in favour of <strong>"CLUSTER OF STARS"</strong>, payable at Guwahati:
                </p>

                <div className="address-box mb-4">
                  <p>
                    <strong>Cluster of Stars</strong><br />
                    3rd Floor, Late Leturam Das Market<br />
                    Pandav Nagar, Pandu<br />
                    Guwahati – 781012, Assam, India
                  </p>
                </div>

                <p className="text-body font-medium mb-6 text-sm">
                  📌 Please include your name and email ID for receipt issuance.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 text-primary">(B) Foreign Donations</h3>
                <p className="text-red-500 font-medium mb-2">
                  Currently not accepted until FCRA registration is approved.
                </p>
                <p className="text-body italic text-sm">
                  For future contributions, share your name, address, email ID, and proposed donation details.
                </p>
              </div>

              <div className="flex-buttons">
                <a href="#" className="btn btn-outline"><MessageCircle size={18} /> WhatsApp Us</a>
                <a href="mailto:clusterofstarsghy@gmail.com" className="btn btn-outline"><Mail size={18} /> Email Us</a>
              </div>
            </div>

            {/* Column 2 */}
            <div className="card donate-impact-card">
              <h3 className="h3 mb-4 text-white">Why Donate?</h3>
              <p className="mb-8 opacity-90">
                100% of your donation goes directly to scholar welfare education fees, food, clothing, and shelter. We are a Section 12A registered Trust.
              </p>

              <div className="impact-list">
                <div className="impact-item">
                  <div className="impact-amount">₹72,000/-</div>
                  <div className="impact-desc">Sponsorship of one child for 6 months</div>
                </div>
                <div className="impact-item">
                  <div className="impact-amount">₹1,20,000/-</div>
                  <div className="impact-desc">Sponsorship of one child for one year</div>
                </div>
                <div className="impact-item">
                  <div className="impact-amount">₹6,00,000/-</div>
                  <div className="impact-desc">Sponsorship of one child for five year</div>
                </div>
                <div className="impact-item">
                  <div className="impact-amount">₹15,00,000/-</div>
                  <div className="impact-desc">Sponsorship of one child till completion of his/her education</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="section bg-white text-center">
        <div className="container volunteer-container">
          <h2 className="h2 mb-4 text-primary">Want to give your time?</h2>
          <p className="text-body mb-8 text-lg">
            We welcome mentors, tutors, and event volunteers.
          </p>
          <a href="/contact" className="btn btn-primary btn-large">
            Fill Out Volunteer Form <ExternalLink size={20} />
          </a>
        </div>
      </section>
    </>
  );
};

export default GetInvolved;
