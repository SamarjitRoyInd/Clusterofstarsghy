
import { Helmet } from 'react-helmet-async';
import { BookOpen, Utensils, Compass, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Work.css';


const programs = [
  {
    icon: <BookOpen className="text-primary" size={32} />,
    title: 'Education Sponsorship',
    body: 'Beyond enrolment, we cover 100% of educational costs — school fees, textbooks, and uniforms — ensuring no child ever drops out due to financial hardship.',
  },
  {
    icon: <Utensils className="text-primary" size={32} />,
    title: 'Food & Essentials',
    body: 'Nutrition is the foundation of learning. We provide regular meals, clothing, and daily necessities to our students and their families.',
  },
  {
    icon: <Compass className="text-primary" size={32} />,
    title: 'Mentorship & Career Guidance',
    body: 'We guide students through the complexities of career choices, providing emotional and professional support until they are fully established in their fields.',
  },
  {
    icon: <Lightbulb className="text-primary" size={32} />,
    title: 'Skill Development',
    body: 'Vocational skills and digital literacy prepare underprivileged youth from Assam for the modern job market — ensuring lasting self-sufficiency for every scholar.',
  }
];


const projects = [
  {
    title: 'Project 1: Scholarship & Residential Support',
    description: [
      'Many talented children from underprivileged families are forced to drop out early due to financial pressures, despite receiving occasional support. To address this, Cluster of Stars launched a long-term scholarship program.',
    ],
    points: [
      'Started in 2018-19 with 5 students from Class VII (BPL or annual income ≤ Rs 60,000)',
      'Covers complete support: education, accommodation, food, and essentials',
      'Scholarship continues till higher education (Engineering, Medical, MBA, CA, etc.) based on merit',
      'Selection through entrance exams across Assam',
    ],
    highlightTitle: 'Growth so far',
    highlightPoints: [
      '45 students supported to date',
      'Expanded intake over the years',
      'Hostel facilities upgraded with power backup, RO water, computers, and library',
    ],
    impact: 'Students receive uninterrupted education and growth opportunities, while families benefit financially as major expenses are taken care of.',
    wayForward: 'Expand scholarships and make them inclusive across all genders.',
  },
  {
    title: 'Project 2: Building Our Own School & Campus',
    description: [
      'Currently, the hostel runs in rented spaces and students attend external schools. This limits the ability to deliver a truly holistic education.',
      'Cluster of Stars aims to build its own school and residential campus to provide:',
    ],
    points: [
      'Holistic education (academics + sports + arts)',
      'Strong values: discipline, empathy, and responsibility',
      'Modern infrastructure with hostel, library, sports, and medical facilities',
    ],
    vision: 'A fully equipped campus for around 1500 students, focused on nurturing well-rounded individuals who grow with purpose and give back to society.',
  },
  {
    title: 'Project 3: District Education Centres',
    description: [
      'To reach more children, Cluster of Stars plans to establish:',
    ],
    points: [
      'Education centres in every district of North-East India',
      'Classes from primary to Class X',
      'Focused on children not covered under Projects 1 and 2',
    ],
    goal: 'Ensure that no underprivileged child is left behind due to lack of access to quality education.',
  },
];

const galleryItems = [
  { img: '/gallery-1.jpg', caption: 'Dhoni receiving award for his outstanding class 12 result' },
  { img: '/gallery-2.jpg', caption: 'Youbaraj and his friend won 2nd prize in interschool maths model competition' },
  { img: '/gallery-3.jpg', caption: 'Our student won prize in Mathopedia 2.0 at Sarla Birla School' },
  { img: '/gallery-4.jpg', caption: 'Welcoming students with all essential supplies like book, uniform, bag, shoes, etc.' },
  { img: '/gallery-5.jpg', caption: 'Students going to school' },
  { img: '/gallery-6.jpg', caption: 'Admission Test - Students from different parts of Assam participated' },
  { img: '/gallery-7.jpg', caption: 'Press Conference - Announcement of 100% Scholarship' },
  { img: '/gallery-8.jpg', caption: 'Gifts in recognition of their hard work and outstanding academic achievements' },
];

const Work = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;

    const visibleCards = window.innerWidth < 768 ? 1 : 3;
    const cardWidth = sliderRef.current.offsetWidth / visibleCards;

    sliderRef.current.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (!sliderRef.current) return;

      const maxScroll =
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

      if (sliderRef.current.scrollLeft >= maxScroll) {
        sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scroll('right');
      }
    }, 10000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Work | Cluster of Stars</title>
        <meta name="description" content="Four pillars that carry every scholar from enrolment to career." />
      </Helmet>

      {/* Header */}
      <section className="section bg-blue-grad text-left about-header">
        <div className="container">
          <motion.h1
            className="h1 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            What We Do
          </motion.h1>
          <motion.p
            className="about-subtitle mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Four pillars that carry every scholar from enrolment to career.
          </motion.p>
        </div>
      </section>

      {/* Four Program Cards */}
      <section className="section section-light">
        <div className="container">
          <div className="programs-grid">
            {programs.map((prog, index) => (
              <motion.div
                className="card program-card"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="program-icon-wrapper">
                  {prog.icon}
                </div>
                <h3 className="h3 mt-6 mb-4">{prog.title}</h3>
                <p className="text-body">{prog.body}</p>
              </motion.div>
            ))}
          </div>



          {/* Gallery Section */}
          <section className="section section-light pattern-bg">
            <div className="container">

              <div className="section-header text-center mb-10">
                <span className="small-caps">Gallery</span>
                <h2 className="h2 mt-2">Life at Cluster of Stars</h2>
                <p className="text-body mt-4" style={{ maxWidth: '650px', margin: '0 auto' }}>
                  From classrooms to celebrations, these moments reflect growth, discipline, and the transformative journey of students supported through education, care, and opportunity.
                </p>
              </div>

              <div className="gallery-wrapper">
                <button className="gallery-arrow left" onClick={() => scroll('left')}>
                  <ChevronLeft size={20} />
                </button>

                <div className="gallery-slider" ref={sliderRef}>
                  {galleryItems.map((item, index) => (
                    <div className="gallery-slide" key={index}>
                      <div className="card gallery-card">
                        <div
                          className="carousel-img gallery-img"
                          style={{ backgroundImage: `url(${item.img})` }}
                        ></div>
                        <div className="gallery-caption">
                          <p>{item.caption}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="gallery-arrow right" onClick={() => scroll('right')}>
                  <ChevronRight size={20} />
                </button>
              </div>

            </div>
          </section>

          <div className="projects-section">
            <div className="section-intro">
              <span className="small-caps">Key Projects</span>
              <h2 className="h2 mt-2">Where Our Work Is Growing</h2>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.article
                  className="card project-card"
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                >
                  <h3 className="h3">{project.title}</h3>

                  {project.description.map((paragraph) => (
                    <p className="text-body mt-4" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}

                  <ul className="project-points">
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  {project.highlightTitle && project.highlightPoints ? (
                    <div className="project-callout">
                      <h4 className="project-subtitle">{project.highlightTitle}</h4>
                      <ul className="project-points compact">
                        {project.highlightPoints.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {project.impact ? (
                    <div className="project-callout">
                      <h4 className="project-subtitle">Impact</h4>
                      <p className="text-body">{project.impact}</p>
                    </div>
                  ) : null}

                  {project.wayForward ? (
                    <div className="project-callout">
                      <h4 className="project-subtitle">Way forward</h4>
                      <p className="text-body">{project.wayForward}</p>
                    </div>
                  ) : null}

                  {project.vision ? (
                    <div className="project-callout">
                      <h4 className="project-subtitle">Vision (Phase 1)</h4>
                      <p className="text-body">{project.vision}</p>
                    </div>
                  ) : null}

                  {project.goal ? (
                    <div className="project-callout">
                      <h4 className="project-subtitle">Goal</h4>
                      <p className="text-body">{project.goal}</p>
                    </div>
                  ) : null}
                </motion.article>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <div className="milestone-banner milestone-large">
              <div className="milestone-icon">🎓</div>
              <p className="text-lg">
                <strong>A Cluster of Stars scholar has secured admission to the prestigious Tezpur Medical College</strong> — a landmark moment in our journey toward "Education for All."
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
