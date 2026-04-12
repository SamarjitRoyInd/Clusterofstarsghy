
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import './About.css';

const trustees = [
  { name: 'Chanchal Nag', role: 'Managing Trustee', bio: 'He has vast experience in administration. He has served 30 years as senior central government officer in India. He also has service experience in Indian Air Force. He is associated with various social and philanthropic services for many years.', img: '/trustee-1.jpg' },
  { name: 'CA. Sanjay Kr Barjatiya', role: 'Executive Director', bio: 'He is a reputed senior chartered accountant since last 22 years at Guwahati . He is associated with Rotaract Club of South Guwahati and he was past Director of Gauhati Stock Exchange Ltd and Nagarik Samabay Bank Ltd .', img: '/trustee-2.jpg' },
  { name: 'CA. Padam Jain', role: 'Treasurer-cum-Trustee', bio: 'He is a reputed senior chartered accountant. He is associated with various social and philanthropic service for many years.', img: '/trustee-3.jpg' },
  { name: 'Anu Nag', role: 'Trustee', bio: 'She has vast experience in educational activity. She is retired Head Mistress in a reputed school of Guwahati. She is associated with various philanthropic service for many years.', img: '/trustee-4.jpg' },
  { name: 'CA. Rajesh Kr Jain', role: 'Trustee', bio: 'He is a reputed senior chartered accountant. He is associated with various social and philanthropic service for many years.', img: '/trustee-5.jpg' },
  { name: 'Bapi Das', role: 'Trustee', bio: 'He is serving as senior central government officer in India. He is associated with various social and philanthropic services for many years.', img: '/trustee-6.jpg' },
  { name: 'Dr Aakaash Nag', role: 'Trustee', bio: 'He is a doctor by profession. He is associated with various social and philanthropic service for many years.', img: '/trustee-7.jpg' },
];

const associatedInstitutions = [
  'Pragjyotish Senior Secondary School, West Boragaon, Guwahati',
  'M/S Sumit L Jain & Associates (Auditor of the trust)',
  'Dr. Mukul Chakravarty (Professor, Gauhati University)',
  'Dr. Pradeep Kumar Jain (Professor, Gauhati University)',
  'Mritunjaya Shukla (Founder, Principal - Pragjyotish Senior Secondary School)',
  'Akhil Bhartiya Marwari Mahila Samelan, Golaghat',
  'CA. Anup Kr More',
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Cluster of Stars</title>
        <meta name="description" content="Established November 29, 2017. A Section 12A Registered Charitable Trust." />
      </Helmet>

      {/* Header Banner */}
      <section className="section bg-blue-grad text-left about-header">
        <div className="container">
          <motion.h1
            className="h1 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Journey and Leadership
          </motion.h1>
          <motion.p
            className="about-subtitle mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Established November 29, 2017 · Guwahati, Assam · Section 12A Registered Charitable Trust
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section section-light">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2 className="h2 mb-4">Our Story</h2>
              <p className="text-body mb-4">
                Cluster of Stars is a registered Charitable Trust (Section 12A(1)(b)(i)) founded in Guwahati on November 29, 2017. We are driven by the philosophy that serving humanity is the highest form of worship.
              </p>
              <p className="text-body mb-4">
                Our work centres on giving underprivileged male children from the North Eastern Region a complete foundation — education, shelter, nutrition, mentorship, and hope.
              </p>
              <div className="mb-4" style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
                <iframe 
                  className="rounded-lg" 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  src="https://www.youtube.com/embed/Yojk9yVqkq8?si=mwh_6dJQHuXzoSvL" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="timeline-wrapper card">
              <h3 className="h3 mb-6">Milestones</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="year">2017</span>
                    <p>Trust established in Guwahati</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="year">2018</span>
                    <p>First batch of scholars enrolled</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="year">2025</span>
                    <p>Scholar admitted to Tezpur Medical College</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="year">2026</span>
                    <p>45+ students benefited so far.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Trustees */}
      <section className="section pattern-bg">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="h2">The Board of Trustees</h2>
            <p className="text-body mt-2">Dedicated individuals guiding our mission.</p>
          </div>

          <div className="trustees-grid">
            {trustees.map((trustee, index) => (
              <motion.div
                className="card trustee-card text-center"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {trustee.img ? (
                  <img src={trustee.img} alt={trustee.name} className="avatar-placeholder" style={{ objectFit: 'cover' }} />
                ) : (
                  <div className="avatar-placeholder">{trustee.name.charAt(0)}</div>
                )}
                <h3 className="h3 mt-4">{trustee.name}</h3>
                <span className="role-badge mb-3">{trustee.role}</span>
                <p className="text-body text-sm mt-3">{trustee.bio}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="card associations-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className="associations-header">
              <span className="role-badge">Network of Support</span>
              <h3 className="h3 mt-4">Associated Institutions and Individuals</h3>
              <p className="text-body mt-3">
                We are grateful for the institutions and individuals who strengthen our mission through guidance, education, and community support.
              </p>
            </div>

            <ul className="associations-list">
              {associatedInstitutions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
