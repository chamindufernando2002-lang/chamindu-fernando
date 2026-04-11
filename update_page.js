const fs = require('fs');
let page = fs.readFileSync('src/app/project/[id]/page.jsx', 'utf8');
const dataTmp = fs.readFileSync('data_tmp.js', 'utf8');

// 1. Replace projectData block
page = page.replace(/const projectData = \{[\s\S]*?\};\n/g, dataTmp + "\n");

// 2. Replace GalleryItem definition
const newGalleryItem = `// ─── Gallery Item ─────────────────────────────────────────────────────────────
const GalleryItem = ({ src, alt, index, onClick }) => {
  const [hovered, setHovered] = useState(false);

  const isObj = typeof src === 'object' && src !== null;
  const imageSrc = isObj ? src.url : src;
  const outboundLink = isObj ? src.link : null;

  const handleClick = (e) => {
    if (outboundLink) {
      window.open(outboundLink, '_blank', 'noopener,noreferrer');
    } else {
      onClick(index);
    }
  };

  return (
    <motion.div
      className="cs-gallery-item"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.76, 0, 0.24, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      <div className="cs-gallery-img-wrap">
        <motion.img
          src={imageSrc}
          alt={alt}
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          draggable={false}
          loading="lazy"
          decoding="async"
        />
        <motion.div
          className="cs-gallery-overlay"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {outboundLink ? (
             <div style={{ background: '#36153E', color: '#fff', padding: '12px 24px', borderRadius: '30px', fontWeight: 'bold', fontSize: '1.1rem', letterSpacing: '0.5px' }}>Read Now &gt;</div>
          ) : (
             <ZoomIn size={32} color="#fff" strokeWidth={1.5} />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};`;

page = page.replace(/\/\/ ─── Gallery Item ─────────[\s\S]*?const GalleryItem = \(\{ src, alt, index, onClick \}\) => \{[\s\S]*?return \([\s\S]*?\);\n\};\n/m, newGalleryItem + '\n');

// 3. Fix flatGallery map to handle objects (to avoid crashing Lightbox)
page = page.replace(
  /flatGallery\.slice\(0, visibleImages\)\.map\(\(src, index\) => \(/g,
  "flatGallery.slice(0, visibleImages).map((src, index) => ("
);

// We must also fix the Lightbox to render imageSrc
// Find: src={flatGallery[lightboxIndex]}
page = page.replace(
  /src=\{flatGallery\[lightboxIndex\]\}/g,
  "src={typeof flatGallery[lightboxIndex] === 'object' ? flatGallery[lightboxIndex].url : flatGallery[lightboxIndex]}"
);

// 4. Back Arrow link
page = page.replace(
  /<Link href="\/#portfolio" className="cs-back cursor-hover">/g,
  '<Link href="/work" className="cs-back cursor-hover">'
);

fs.writeFileSync('src/app/project/[id]/page.jsx', page, 'utf8');
