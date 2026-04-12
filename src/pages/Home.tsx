
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Download, GraduationCap, MapPin, ArrowRight, Quote, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import VerticalMarquee from '../components/VerticalMarquee';
import './Home.css';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Cluster of Stars - Empowering the Future of North East India through Education</title>
        <meta name="description" content="Supporting BPL students with free education, mentorship, and life essentials since 2017." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="h1 hero-title">Empowering the Future of North East India through Education.</h1>
            <p className="hero-subtitle">
              Supporting BPL students with free education, mentorship, and life essentials since 2017.
            </p>
            <div className="hero-actions">
              <a href="#scholarship" className="btn btn-primary">Apply for Scholarship 2026</a>
              <Link to="/involved" className="btn btn-accent">Donate Now</Link>
            </div>

	            <div className="hero-stats">
	              <span className="badge badge-primary">Since 2017</span>
	              <span className="badge badge-primary"><MapPin size={14} /> Guwahati, Assam</span>
	              <span className="badge badge-primary"><GraduationCap size={14} /> 100% Free for Scholarship</span>
	            </div>
	          </motion.div>
	          <VerticalMarquee />
	        </div>
	      </section>

      {/* Scholarship 2026 Alert */}
      <section id="scholarship" className="section bg-blue-grad" style={{ padding: '2rem 0' }}>
        <div className="container">
          <div className="scholarship-wrapper card">
            <div className="scholarship-content">
              <span className="badge">● APPLICATIONS OPEN 2026</span>
              <h2 className="h2 mt-4">Scholarship Test 2026</h2>
              <p className="mt-4 text-body">
                We invite applications for our prestigious scholarship program. Selected students receive completely free education, lodging, food, and clothing — from Class VI/VII all the way through professional levels including Medical, Engineering, MBA, and CA.
              </p>
              <p className="bold-line mt-4">
                <strong>Admission into Pragjyotish Senior Secondary School, West Boragaon, Guwahati.</strong>
              </p>

              <div className="mt-6">
                {/* External dummy link per user request */}
                <a href="https://drive.google.com/file/d/10FFpOU0by4OyegARdK78BS217LzR1RkO/view" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <Download size={20} /> Download Application Form
                </a>
              </div>

              <div className="address-block mt-6">
                <h4 className="h4">Send completed applications to:</h4>
                <p className="text-body mt-2">
                  Cluster of Stars<br />
                  3rd Floor, Late Leturam Das Market<br />
                  Pandav Nagar, Pandu<br />
                  Guwahati – 781012, Assam
                </p>
              </div>
            </div>

            <div className="scholarship-sidebar">
              <div className="eligibility-card mb-4">
                <h3 className="h3 mb-3">Who Can Apply?</h3>
                <ul className="check-list">
                  <li>Male students from the North Eastern Region (NER)</li>
                  <li>BPL category or annual family income below ₹1,00,000</li>
                  <li>Passed Class V (for Class VI) or Class VI (for Class VII)</li>
                </ul>
              </div>

              <div className="divider"></div>

              <div className="eligibility-card mt-4">
                <h3 className="h3 mb-3">What You Receive</h3>
                <ul className="icon-list">
                  <li><span>📚</span> Free Education</li>
                  <li><span>🏠</span> Lodging</li>
                  <li><span>🍽</span> Food</li>
                  <li><span>👕</span> Clothing</li>
                </ul>
                <div className="mt-6">
                  <a href="https://drive.google.com/file/d/1N5cy6rDtyhudGz1-r60AvTkdo7SCqsYE/view" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'block', textAlign: 'center', borderColor: 'rgba(255,255,255,0.4)', color: 'white', padding: '0.6rem 1rem', fontSize: '0.9rem' }}>
                    View 2026 Advertisement
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Success Story */}
      <section className="section bg-blue-grad text-white">
        <div className="container">
          <div className="text-center mb-8">
            <span className="badge" style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: '1px solid var(--color-accent)',
              color: 'var(--color-accent)',
              fontSize: '26px',
              padding: '0.75rem 2rem',
              gap: '0.75rem'
            }}>
              <Sparkles size={28} /> SUCCESS STORY <Sparkles size={28} />
            </span>
          </div>

          <div className="success-grid">
            <div className="success-img-wrapper">
              <img src="/success-student.jpg" alt="Successful student from Cluster of Stars" className="success-img" />
              <div className="success-glow"></div>
            </div>

            <div className="success-content">
              <Quote className="quote-icon" size={48} />
              <h2 className="h2 text-white mt-4" style={{ lineHeight: 1.3 }}>
                Proud moment – our first batch student from Stars Trust secured admission to Tezpur Medical College.
              </h2>
              <p className="text-body mt-6" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                This remarkable achievement showcases the potential within every underprivileged child when given the right opportunities. From humble beginnings to a prestigious medical college, this journey inspires us to continue our mission.
              </p>

              <div className="success-highlight-card mt-8">
                <div className="highlight-icon" style={{ backgroundColor: '#2563EB', overflow: 'hidden' }}>
                  <img src="/tezpurclg.png" alt="Tezpur Medical College" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: 'var(--color-primary)' }}>First Batch Student</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-primary)', opacity: 0.8 }}>Tezpur Medical College, Assam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel (Simplified Stack or CSS Scroll for now) */}
      <section className="section section-light pattern-bg">
        <div className="container">
          <div className="carousel-grid">
            <motion.div className="card carousel-card" whileHover={{ y: -5 }}>
              <div className="carousel-img" style={{ backgroundImage: "url('/carousel-1.jpeg')" }}></div>
              <div className="carousel-caption">
                <p>Dhoni receiving award for his outstanding class 12 result</p>
              </div>
            </motion.div>
            <motion.div className="card carousel-card" whileHover={{ y: -5 }}>
              <div className="carousel-img" style={{ backgroundImage: "url('/carousel-2.jpeg')" }}></div>
              <div className="carousel-caption">
                <p>Youbaraj and his friend won 2nd prize in interschool maths model competition</p>
              </div>
            </motion.div>
            <motion.div className="card carousel-card" whileHover={{ y: -5 }}>
              <div className="carousel-img" style={{ backgroundImage: "url('/carousel-3.jpeg')" }}></div>
              <div className="carousel-caption">
                <p>Our student won prize in Mathopedia 2.0 at Sarla Birla School</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header text-center mb-10">
            <span className="small-caps">Our Work</span>
            <h2 className="h2 mt-2">From Dreams to Reality</h2>
          </div>

          <div className="stories-grid">
            <div className="card story-card">
              <div className="story-header">
                <div>
                  <h3 className="h3">Raktim Kumar Nath</h3>
                  <span className="location"><MapPin size={14} /> Morigaon, Assam</span>
                </div>
                <span className="badge badge-primary story-tag">Class VI Scholar</span>
              </div>
              <blockquote className="quote mt-4">
                "Coming from an Assamese medium school, I never imagined I'd have these amenities. Now, I'm focused on my dream of becoming a pilot."
              </blockquote>
              <p className="text-body mt-4 text-sm">
                One of 5 scholars selected via our scholarship test. Son of an electrical construction worker. Raktim has shown immense academic growth since joining the Trust.
              </p>
            </div>

            <div className="card story-card">
              <div className="story-header">
                <div>
                  <h3 className="h3">Himangshu Nath</h3>
                  <span className="location"><MapPin size={14} /> Boko, Assam</span>
                </div>
                <span className="badge badge-primary story-tag">Class VI Scholar</span>
              </div>
              <blockquote className="quote mt-4">
                "My English has improved a lot here. I am working hard to become a doctor in the future."
              </blockquote>
              <p className="text-body mt-4 text-sm">
                Son of a hardworking farmer, Himangshu's transformation in language skills and academic confidence is a source of pride for the Trust.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/work" className="btn btn-outline">See More of Our Work <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
