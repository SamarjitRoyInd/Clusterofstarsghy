const fs = require('fs');
const file = '/Users/samarjitroy/Downloads/Clusterofstars/Website/src/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Add import
if (!content.includes('import VerticalMarquee')) {
    content = content.replace("import './Home.css';", "import VerticalMarquee from '../components/VerticalMarquee';\nimport './Home.css';");
}

// 2. Remove garbled div
const garbledDivStart = '<div class="h-full flex gap-4" bis_skin_checked="1">';
const heroActionsStart = '<div className="hero-actions">';
if (content.includes(garbledDivStart)) {
    const startIndex = content.indexOf(garbledDivStart);
    const endIndex = content.indexOf(heroActionsStart);
    if (startIndex !== -1 && endIndex !== -1) {
        content = content.slice(0, startIndex) + content.slice(endIndex);
    }
}

// 3. Add VerticalMarquee placement
if (!content.includes('<VerticalMarquee />') && content.includes('className="hero-stats"')) {
    content = content.replace(/<\/div>\s*<\/motion\.div>\s*<\/div>\s*<\/section>/, '</div>\n          </motion.div>\n          <VerticalMarquee />\n        </div>\n      </section>');
}

fs.writeFileSync(file, content);
console.log('Fixed Home.tsx');
