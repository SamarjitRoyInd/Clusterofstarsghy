import './VerticalMarquee.css';

const images = [
  '/hero-students.jpg',
  '/hostel.jpg',
  '/volunteer.jpg',
  '/success-student.jpg'
];

const VerticalMarquee = () => {
  return (
    <div className="vertical-marquee-container">
      <div className="vertical-marquee-column mask-fade-y">
        <div className="marquee-vertical">
          {/* Scroll Up */}
          {[...images, ...images, ...images].map((src, i) => (
            <div key={`col1-${i}`} className="marquee-card">
              <img src={src} alt="Student" className="marquee-img" />
            </div>
          ))}
        </div>
      </div>
      <div className="vertical-marquee-column mask-fade-y">
        <div className="marquee-vertical-reverse">
          {/* Scroll Down */}
          {[...images, ...images, ...images].reverse().map((src, i) => (
            <div key={`col2-${i}`} className="marquee-card">
              <img src={src} alt="Student" className="marquee-img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalMarquee;
