const fs = require('fs');
let content = fs.readFileSync('scraped_projects.json', 'utf8');
content = content.replace(/^\uFEFF/, '');
const data = JSON.parse(content);

const meta = {
  'spa-ceylon': { folder: '1.Spa Ceylon', title: 'Spa Ceylon', category: 'Social Media', year: '2025', role: 'Designer', client: 'Spa Ceylon', description: 'Wellness and social media interactive digital design focusing on natural beauty.' },
  'tech-ts': { folder: '2.Tech TS', title: 'Tech TS', category: 'Branding', year: '2023', role: 'Brand Designer', client: 'Tech TS', description: 'Modern identity and marketing graphics design for a tech company, balancing professional trust with innovative visuals.' },
  'food': { folder: '3.Food', title: 'Food Menu', category: 'Digital Design', year: '2024', role: 'Designer', client: 'Food Menu', description: 'Vibrant set of food menu designs outlining weekly specials for a local restaurant, utilizing warm tones to induce appetite.' },
  'beauty-leaf': { folder: '4.Beauty Leaf', title: 'Beauty Leaf', category: 'Print Design', year: '2023', role: 'Print Designer', client: 'Beauty Leaf', description: 'Medical and healthcare brochure designs that prioritize clear communication, professional typography, and a calming visual aesthetic.' },
  'youtube-thumbnails': { folder: '5.Youtube Thumbnails', title: 'Youtube Thumbnails', category: 'Digital Art', year: '2025', role: 'Thumbnail Designer', client: 'Various Creators', description: 'High-conversion YouTube thumbnails for trading and finance channels, optimized for click-through rate (CTR) with high contrast visuals.' },
  'rota-times': { folder: '6.Rota Times Newsletters', title: 'Rota Times', category: 'Editorial', year: '2024', role: 'Editorial Designer', client: 'Rotaract', description: 'Monthly editorial magazine designs featuring creative typographic covers and vibrant layouts that engage the youthful audience.' },
  'yeh-jawaani-concert': { folder: '7.Yeh Jawaani Concert', title: 'Yeh Jawaani Concert', category: 'Event Design', year: '2025', role: 'Event Designer', client: 'Yeh Jawaani', description: 'Dynamic event design and promotional materials including ticketing and dynamic social media artwork for a high-energy concert.' },
  'university-projects': { folder: '8.University Projects', title: 'University Projects', category: 'Miscellaneous', year: '2024', role: 'Designer', client: 'University', description: 'A collection of varied creative works developed for university events, highlighting versatility across print, social media, and event branding.' },
  'mg-sl': { folder: '9.MG SL', title: 'MG SL', category: 'Automotive', year: '2025', role: 'Designer', client: 'MG SL', description: 'Digital and social media design for MG Sri Lanka focusing on the latest models, prioritizing a sleek, premium, and bold visual language.' },
  'beauty-bay': { folder: '10.Beauty Bay', title: 'Beauty Bay', category: 'Social Media', year: '2025', role: 'Social Media Designer', client: 'Beauty Bay', description: 'A vibrant social media and digital campaign designed to highlight skincare and cosmetic products with an elegant, modern aesthetic.' },
  'apex': { folder: '11.Apex', title: 'Apex', category: 'Branding', year: '2024', role: 'Lead Designer', client: 'Apex', description: 'Complete brand identity and social media design strategy for Apex, focusing on a clean, professional, and impactful digital presence.' }
};

const rotaLinks = {
  '1.july.jpg': 'https://online.fliphtml5.com/zhboa/fdhg/#p=1',
  '2.August.jpg': 'https://online.fliphtml5.com/zhboa/qnyt/#p=1',
  '3.September.jpg': 'https://online.fliphtml5.com/zhboa/uzrk/#p=1',
  '4.October.jpg': 'https://online.fliphtml5.com/zhboa/plvx/#p=1',
  '5.November.jpg': 'https://online.fliphtml5.com/zhboa/vefa/#p=1',
  '6.December.jpg': 'https://online.fliphtml5.com/zhboa/wifm/#p=1',
  '7.January.jpg': 'https://online.fliphtml5.com/zhboa/frgl/#p=1',
  '8.February.jpg': 'https://online.fliphtml5.com/zhboa/vxem/#p=1',
  '8.March.jpg': 'https://online.fliphtml5.com/zhboa/wvve/#p=1',
  '9.April.jpg': 'https://online.fliphtml5.com/zhboa/wmps/#p=1',
  '10.Final Magazine.jpg': 'https://jeethent.my.canva.site/the-rotaractor-4th-edition'
};

let js = "const projectData = {\n";
for (const [key, m] of Object.entries(meta)) {
  js += `  '${key}': {\n`;
  js += `    title: '${m.title}',\n`;
  js += `    category: '${m.category}',\n`;
  js += `    year: '${m.year}',\n`;
  js += `    role: '${m.role}',\n`;
  js += `    client: '${m.client}',\n`;
  js += `    description: '${m.description.replace(/'/g, "\\'")}',\n`;
  js += `    gallery: [\n`;
  
  const d = data.find(x => x.folder === m.folder) || { files: [] };
  
  d.files.forEach((f, i) => {
    if (key === 'rota-times') {
      const link = rotaLinks[f] || '#';
      js += `      { url: '/projects/${m.folder}/${f}', link: '${link}' }`;
    } else {
      js += `      '/projects/${m.folder}/${f}'`;
    }
    js += i < d.files.length - 1 ? ",\n" : "\n";
  });
  
  js += `    ]\n  },\n`;
}
js += "};\n";

fs.writeFileSync('data_tmp.js', js, 'utf8');
