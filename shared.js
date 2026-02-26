// ===== SHARED DATA & UTILITIES =====

const COURSES = [
  { id:1,  title:'Quantum Physics Fundamentals', cat:'Science',    icon:'⚛️', color:'linear-gradient(135deg,#1e3a5f,#0d2137)', desc:'Explore the bizarre world of quantum mechanics, wave-particle duality, entanglement, and the foundations of modern physics.', duration:'12 weeks', level:'Advanced',     credits:4, students:342,  rating:4.9, price:'$89',  badge:'pop'  },
  { id:2,  title:'Full-Stack Web Development',   cat:'Technology', icon:'🌐', color:'linear-gradient(135deg,#1a1a3e,#2d1b69)', desc:'Master HTML, CSS, JavaScript, React, Node.js, and databases to build complete modern web applications from scratch.',   duration:'16 weeks', level:'Intermediate', credits:5, students:891,  rating:4.8, price:'$129', badge:'pop'  },
  { id:3,  title:'Molecular Biology',            cat:'Science',    icon:'🧬', color:'linear-gradient(135deg,#0d3d2b,#0a4a1f)', desc:'Dive into the molecules of life—DNA, proteins, cellular processes, and the mechanisms that drive living organisms.',      duration:'10 weeks', level:'Intermediate', credits:3, students:218,  rating:4.7, price:'$75',  badge:null   },
  { id:4,  title:'Machine Learning & AI',        cat:'Technology', icon:'🤖', color:'linear-gradient(135deg,#2d1f3d,#1a0f2e)', desc:'Learn neural networks, regression, classification, deep learning, and build real-world ML models from scratch.',          duration:'14 weeks', level:'Advanced',     credits:5, students:654,  rating:4.9, price:'$149', badge:'pop'  },
  { id:5,  title:'Introduction to Python',       cat:'Technology', icon:'🐍', color:'linear-gradient(135deg,#1e2d0e,#2a3d14)', desc:'Perfect for beginners. Learn Python syntax, data structures, functions, and automate real-world tasks efficiently.',      duration:'8 weeks',  level:'Beginner',     credits:3, students:1203, rating:4.6, price:'Free', badge:'free' },
  { id:6,  title:'Digital Illustration',         cat:'Arts',       icon:'🎨', color:'linear-gradient(135deg,#3d1a2d,#2d0f1f)', desc:'Create stunning digital artwork using industry-standard tools. Covers composition, color theory, and character design.',   duration:'10 weeks', level:'Beginner',     credits:3, students:376,  rating:4.8, price:'$65',  badge:'new'  },
  { id:7,  title:'Entrepreneurship & Startups',  cat:'Business',   icon:'🚀', color:'linear-gradient(135deg,#2d1e00,#3d2900)', desc:'Learn to build and scale a business from idea to launch. Covers lean startup methodology, funding, and go-to-market.',    duration:'12 weeks', level:'All Levels',   credits:4, students:487,  rating:4.7, price:'$99',  badge:null   },
  { id:8,  title:'Astrophysics: Cosmos & Beyond',cat:'Science',    icon:'🌌', color:'linear-gradient(135deg,#0a0a2e,#1a1050)', desc:'Explore galaxies, black holes, dark matter, and the large-scale structure of the universe in this awe-inspiring course.',  duration:'10 weeks', level:'Intermediate', credits:4, students:299,  rating:4.9, price:'$79',  badge:'new'  },
  { id:9,  title:'UI/UX Design Principles',      cat:'Arts',       icon:'🖌️', color:'linear-gradient(135deg,#2e1a3d,#1f0f2d)', desc:'Learn user-centered design, wireframing, prototyping, and usability testing to craft intuitive digital products.',         duration:'9 weeks',  level:'Beginner',     credits:3, students:534,  rating:4.8, price:'$85',  badge:null   },
  { id:10, title:'Financial Markets & Investing', cat:'Business',   icon:'📈', color:'linear-gradient(135deg,#0d2e1a,#1a3d2b)', desc:'Understand stocks, bonds, derivatives, portfolio theory, and how to invest wisely with a long-term mindset.',             duration:'8 weeks',  level:'Intermediate', credits:3, students:612,  rating:4.6, price:'$89',  badge:null   },
  { id:11, title:'Creative Writing & Storytelling',cat:'Arts',     icon:'✍️', color:'linear-gradient(135deg,#2e0d0d,#3d1414)', desc:'Develop your unique voice, master narrative structures, and write compelling fiction and non-fiction that resonates.',    duration:'8 weeks',  level:'All Levels',   credits:3, students:281,  rating:4.7, price:'Free', badge:'free' },
  { id:12, title:'Cybersecurity Essentials',     cat:'Technology', icon:'🔐', color:'linear-gradient(135deg,#0a1a0a,#0d2e0d)', desc:'Learn to identify threats, secure systems, and protect data. Covers ethical hacking, cryptography, and best practices.',  duration:'11 weeks', level:'Intermediate', credits:4, students:445,  rating:4.8, price:'$109', badge:'new'  },
];

const BADGES = [
  { id:'b1',  icon:'🚀', name:'First Launch',      desc:'Enroll in your very first course',          rarity:'common',    xp:50,   cond: (e)=>e.size>=1 },
  { id:'b2',  icon:'📚', name:'Bookworm',           desc:'Enroll in 3 or more courses',               rarity:'common',    xp:100,  cond: (e)=>e.size>=3 },
  { id:'b3',  icon:'🔥', name:'On Fire',            desc:'Enroll in 5 or more courses',               rarity:'rare',      xp:200,  cond: (e)=>e.size>=5 },
  { id:'b4',  icon:'🌟', name:'Scholar',            desc:'Enroll in 8 or more courses',               rarity:'epic',      xp:400,  cond: (e)=>e.size>=8 },
  { id:'b5',  icon:'👑', name:'Grand Master',       desc:'Enroll in all 12 available courses',        rarity:'legendary', xp:1000, cond: (e)=>e.size>=12 },
  { id:'b6',  icon:'🔬', name:'Science Buff',       desc:'Enroll in 2 Science courses',               rarity:'common',    xp:80,   cond: (e)=>[...e].filter(id=>COURSES.find(c=>c.id===id)?.cat==='Science').length>=2 },
  { id:'b7',  icon:'💻', name:'Tech Wizard',        desc:'Enroll in 2 Technology courses',            rarity:'common',    xp:80,   cond: (e)=>[...e].filter(id=>COURSES.find(c=>c.id===id)?.cat==='Technology').length>=2 },
  { id:'b8',  icon:'🎨', name:'Creative Soul',      desc:'Enroll in any Arts course',                 rarity:'common',    xp:60,   cond: (e)=>[...e].some(id=>COURSES.find(c=>c.id===id)?.cat==='Arts') },
  { id:'b9',  icon:'💼', name:'Business Mind',      desc:'Enroll in any Business course',             rarity:'common',    xp:60,   cond: (e)=>[...e].some(id=>COURSES.find(c=>c.id===id)?.cat==='Business') },
  { id:'b10', icon:'🌈', name:'Renaissance',        desc:'Enroll in all 4 categories',                rarity:'rare',      xp:250,  cond: (e)=>['Science','Technology','Arts','Business'].every(cat=>[...e].some(id=>COURSES.find(c=>c.id===id)?.cat===cat)) },
  { id:'b11', icon:'🆓', name:'Freeloader',         desc:'Enroll in a free course',                   rarity:'common',    xp:30,   cond: (e)=>[...e].some(id=>COURSES.find(c=>c.id===id)?.price==='Free') },
  { id:'b12', icon:'⭐', name:'High Standards',     desc:'Enroll in a 4.9-rated course',              rarity:'rare',      xp:150,  cond: (e)=>[...e].some(id=>COURSES.find(c=>c.id===id)?.rating===4.9) },
  { id:'b13', icon:'🧬', name:'Lab Rat',            desc:'Enroll in Molecular Biology',               rarity:'rare',      xp:120,  cond: (e)=>e.has(3) },
  { id:'b14', icon:'🤖', name:'AI Pioneer',         desc:'Enroll in Machine Learning & AI',           rarity:'epic',      xp:300,  cond: (e)=>e.has(4) },
  { id:'b15', icon:'🌌', name:'Stargazer',          desc:'Enroll in Astrophysics',                    rarity:'epic',      xp:280,  cond: (e)=>e.has(8) },
  { id:'b16', icon:'💎', name:'Diamond Learner',    desc:'Earn 500+ total XP',                        rarity:'legendary', xp:500,  cond: (e,xp)=>xp>=500 },
];

const LEVELS = [
  { level:1, title:'Freshman Explorer',   xpNeeded:0    },
  { level:2, title:'Curious Learner',     xpNeeded:150  },
  { level:3, title:'Rising Scholar',      xpNeeded:350  },
  { level:4, title:'Knowledge Seeker',    xpNeeded:600  },
  { level:5, title:'Dedicated Student',   xpNeeded:900  },
  { level:6, title:'Academic Ace',        xpNeeded:1300 },
  { level:7, title:'Master Scholar',      xpNeeded:1800 },
  { level:8, title:'Grand Sage',          xpNeeded:2500 },
];

// ---- State via localStorage ----
function getEnrolled() {
  try { return new Set(JSON.parse(localStorage.getItem('ev_enrolled') || '[]')); } catch { return new Set(); }
}
function getProgress() {
  try { return JSON.parse(localStorage.getItem('ev_progress') || '{}'); } catch { return {}; }
}
function saveEnrolled(set) { localStorage.setItem('ev_enrolled', JSON.stringify([...set])); }
function saveProgress(obj) { localStorage.setItem('ev_progress', JSON.stringify(obj)); }

function calcXP(enrolled) {
  const xp0 = BADGES.filter(b => b.cond(enrolled, 0)).reduce((s,b)=>s+b.xp,0);
  return BADGES.filter(b => b.cond(enrolled, xp0)).reduce((s,b)=>s+b.xp,0);
}
function getCurrentLevel(xp) {
  let lvl = LEVELS[0];
  for (const l of LEVELS) { if (xp >= l.xpNeeded) lvl = l; }
  return lvl;
}

// Toast
function showToast(msg, isError=false) {
  let c = document.getElementById('toast-container');
  if (!c) { c = document.createElement('div'); c.id='toast-container'; c.style.cssText='position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;flex-direction:column;gap:10px'; document.body.appendChild(c); }
  const t = document.createElement('div');
  t.style.cssText = `background:var(--surface);border:1px solid var(--border);border-left:3px solid ${isError?'var(--accent2)':'var(--accent3)'};border-radius:12px;padding:14px 18px;font-size:0.85rem;max-width:300px;box-shadow:0 10px 40px rgba(0,0,0,0.4);animation:toastIn 0.3s ease,toastOut 0.3s ease 3s forwards;font-family:'DM Sans',sans-serif;color:var(--text)`;
  t.textContent = (isError ? '❌ ' : '✅ ') + msg;
  c.appendChild(t);
  setTimeout(()=>t.remove(), 3500);
}

// Active nav highlight
function setActiveNav(page) {
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.remove('active');
    if (el.dataset.page === page) el.classList.add('active');
  });
}

// Update all nav badges
function refreshNavBadges() {
  const e = getEnrolled();
  const xp = calcXP(e);
  const earnedBadges = BADGES.filter(b=>b.cond(e,xp)).length;
  const dashBadge = document.getElementById('dash-badge');
  const achieveBadge = document.getElementById('achieve-badge');
  if (dashBadge) dashBadge.textContent = e.size;
  if (achieveBadge) achieveBadge.textContent = earnedBadges;
}
