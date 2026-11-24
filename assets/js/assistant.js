/* ==============================================
   PORTFOLIO ASSISTANT — hardcoded Q&A bot
   It ONLY answers what you add to FAQ below.
   No API, no server, no cost.
   ============================================== */

/* ─────────────────────────────────────────────
   1. EDIT THIS PART — add your own questions
   ─────────────────────────────────────────────
   q        : the main question (shown as a clickable chip if chip:true)
   keywords : words/phrases a visitor might type (lowercase). More = better matching.
   a        : the answer. You can use <a href="..."> links and <br> line breaks.
   chip     : true = show as a suggested button
*/
const ASSISTANT_NAME = 'Ask about Akshita';
const GREETING = "Hi! I can answer a few questions about Akshita's work, education and experience. Tap a question or type your own.";
const FALLBACK = "I can only answer questions about Akshita's portfolio. Try one of the suggestions, or reach her at <a href='mailto:akshitasomani188@gmail.com'>akshitasomani188@gmail.com</a>.";

const FAQ = [
  {
    q: 'Who is Akshita?',
    keywords: ['who is akshita', 'about akshita', 'who is she', 'akshita somani', 'introduce', 'yourself', 'akshu', 'bio'],
    a: "Akshita Somani is an Interior Design student at UPES, Dehradun. She explores how materials, textures, lighting and spatial planning come together to create meaningful environments.",
    chip: true
  },
  {
    q: 'What is her education?',
    keywords: ['education', 'study', 'studying', 'studied', 'college', 'university', 'degree', 'upes', 'school', 'qualification', 'qualifications', 'academic', 'b.des', 'bdes', 'dps', 'delhi public school', 'humanities', 'class 12'],
    a: "B.Des Interior Design at UPES, Dehradun (2023–2027). Before that, CBSE Class 12 (Humanities) at Delhi Public School, Ajmer (2022–2023).",
    chip: true
  },
  {
    q: 'Does she have work experience?',
    keywords: ['experience', 'intern', 'internship', 'internships', 'work experience', 'job', 'worked', 'snazzy', 'snazzy bee', 'studio', 'training'],
    a: "Yes. She interned at Snazzy Bee The Design Studio in Ajmer from June to July 2025.",
    chip: true
  },
  {
    q: 'What projects has she done?',
    keywords: ['projects', 'her work', 'portfolio', 'designs', 'what has she designed', 'has she done', 'work done', 'featured projects', 'selected work', 'show me her work', 'how many projects'],
    a: "Four featured projects:<br>1. <b>Dharohar</b> – residential interior and landscape<br>2. <b>Redesigning for Resilience</b> – accessible home design<br>3. <b>BuildSpace</b> – commercial office<br>4. <b>INC.5</b> – retail store and visual merchandising",
    chip: true
  },
  {
    q: 'Tell me about Dharohar',
    keywords: ['dharohar', 'rajasthani', 'residential', 'family of four', 'landscape', 'landscaping', 'domestic', 'first project', 'project 1', 'project 01'],
    a: "Dharohar is a 2,700 sq. ft residential interior and landscape project in Dehradun. It blends traditional Rajasthani aesthetics with modern family living, creating a 'home away from home' for a family originally from Rajasthan."
  },
  {
    q: 'What was the inspiration behind the Dharohar project?',
    keywords: ['inspiration', 'inspired', 'inspire', 'inspired dharohar', 'inspiration behind', 'concept of dharohar', 'concept behind dharohar', 'dharohar concept', 'roots', 'belonging', 'idea behind', 'concept', 'why dharohar', 'motivation', 'craftsmanship', 'home away from home'],
    a: "The project was inspired by the family's Rajasthani roots and the idea of creating a familiar sense of belonging in Dehradun. Traditional Rajasthani architecture, craftsmanship, materials and cultural elements influenced the overall design direction.",
    chip: true
  },
  {
    q: 'How have you incorporated Rajasthani heritage into a contemporary residence?',
    keywords: ['heritage', 'incorporated', 'incorporate', 'jaali', 'jharokha', 'jharokhas', 'arches', 'arch', 'carved', 'wooden', 'stone', 'earthy', 'rajasthani elements', 'rajasthani heritage', 'architectural elements', 'materials in dharohar', 'dharohar materials', 'materials did she', 'materials are used', 'materials she used', 'finishes', 'traditional', 'contemporary', 'haveli'],
    a: "Selected elements such as carved wooden detailing, jaali patterns, jharokhas, arches, earthy colours and natural stone finishes have been incorporated. Rather than recreating a traditional haveli, these elements are adapted to suit modern residential requirements.",
    chip: true
  },
  {
    q: 'Why did you choose the Aangan (courtyard) as a design element?',
    keywords: ['aangan', 'angan', 'courtyard', 'courtyard in dharohar', 'why courtyard', 'why aangan', 'open space', 'connect with nature', 'connection with nature', 'shared space', 'family interaction', 'indoor outdoor'],
    a: "The Aangan represents an important part of traditional Rajasthani living. It encourages family interaction, creates a connection with nature and provides a shared space. Including it brings traditional lifestyle elements into contemporary residential planning.",
    chip: true
  },
  {
    q: 'How does your design respond to the needs of the family?',
    keywords: ['family needs', 'needs of the family', 'family', 'client', 'clients', 'father', 'mother', 'daughter', 'son', 'functional', 'functionality', 'privacy', 'comfort', 'bedrooms', 'living', 'dining', 'lifestyle', 'requirements', 'four members'],
    a: "The design accommodates four family members with different lifestyles and requirements. It balances shared spaces such as the living and dining areas with individual bedrooms, ensuring privacy, comfort and functionality.",
    chip: true
  },
  {
    q: 'What makes Dharohar different from a conventional Rajasthani-inspired interior?',
    keywords: ['different from', 'dharohar different', 'how is dharohar', 'rajasthani interior', 'rajasthani interiors', 'unique', 'conventional', 'typical', 'special about dharohar', 'reinterpretation', 'replication', 'stands out', 'stand out', 'subtle', 'identity', 'cohesive'],
    a: "Dharohar focuses on reinterpretation rather than replication. Instead of filling the residence with traditional decorative elements, the project uses selected architectural details, materials, textures and spatial concepts to establish a subtle yet cohesive Rajasthani identity.",
    chip: true
  },
  {
    q: 'Tell me about Redesigning for Resilience',
    keywords: ['resilience', 'redesigning for resilience', 'accessible', 'accessibility', 'universal', 'universal design', 'special interiors', 'multi-generational', 'multigenerational', 'disability', 'wheelchair', 'barrier free', 'elderly', 'grandfather', 'second project', 'project 2', 'project 02'],
    a: "A 2,700 sq. ft home in Dehradun designed to be safe, accessible and emotionally supportive for a multi-generational family with diverse physical and cognitive needs."
  },
  {
    q: 'Tell me about BuildSpace',
    keywords: ['buildspace', 'build space', 'office', 'office design', 'office project', 'commercial', 'commercial space', 'commercial spaces', 'workspace', 'real estate', 'third project', 'project 3', 'project 03'],
    a: "BuildSpace is a 3,000 sq. ft contemporary minimalist office in Dehradun for a real estate development company, balancing efficiency, client interaction and employee comfort."
  },
  {
    q: 'Tell me about INC.5',
    keywords: ['inc5', 'inc.5', 'inc 5', 'retail', 'retail store', 'retail space', 'store', 'shop', 'footwear', 'shoes', 'visual merchandising', 'rajpur', 'rajpur road', 'fourth project', 'project 4', 'project 04'],
    a: "INC.5 is a 1,200–1,400 sq. ft footwear retail store on Rajpur Road, Dehradun. It focuses on spatial planning, visual merchandising and an immersive brand experience."
  },
  {
    q: 'Which software does she use?',
    keywords: ['software', 'software skills', 'tools', 'skills', 'autocad', 'cad', 'sketchup', 'enscape', 'render', 'rendering', '3d', 'modelling', 'modeling', 'drafting', 'technical skills'],
    a: "AutoCAD for drawings, SketchUp for 3D modelling and Enscape for rendering.",
    chip: true
  },
  {
    q: 'How can I contact her?',
    keywords: ['contact', 'email', 'mail', 'gmail', 'reach', 'reach out', 'hire', 'linkedin', 'connect', 'get in touch', 'phone', 'message', 'collaborate', 'available'],
    a: "Email: <a href='mailto:akshitasomani188@gmail.com'>akshitasomani188@gmail.com</a><br>Or find her on <a href='https://www.linkedin.com/in/akshita-somani-a91630291' target='_blank' rel='noopener'>LinkedIn</a>.",
    chip: true
  },
  {
    q: 'What is her design philosophy?',
    keywords: ['philosophy', 'design philosophy', 'approach', 'design approach', 'believe', 'belief', 'beliefs', 'design style', 'process', 'design process', 'values', 'principles', 'intention', 'storytelling'],
    a: "She believes design is not just about how a space looks, but how it feels and functions for the people who use it, balancing creativity with practical solutions."
  },
  {
    q: 'Where is she based?',
    keywords: ['where is she', 'where does she', 'where is akshita', 'location', 'her location', 'based', 'based in', 'hometown', 'home city', 'which city', 'live in', 'lives in', 'where she lives', 'dehradun', 'ajmer'],
    a: "She studies in Dehradun, India, and her home city is Ajmer, Rajasthan."
  }
];

/* ─────────────────────────────────────────────
   2. MATCHING ENGINE (no need to edit)
   ───────────────────────────────────────────── */
const STOP = new Set(['the','a','an','is','are','what','who','how','can','do','does','did','to','of','in','on','and','for','me','you','her','she','about','tell','please','i','it','be','with','your','his']);

const norm = s => s.toLowerCase().replace(/[^a-z0-9.\s]/g, ' ').replace(/\s+/g, ' ').trim();

function findAnswer(input) {
  const text = norm(input);
  if (!text) return null;
  const words = text.split(' ').filter(w => w && !STOP.has(w));
  let best = null, bestScore = 0;

  for (const item of FAQ) {
    let score = 0;
    if (norm(item.q) === text) score += 100;
    for (const kw of item.keywords) {
      const k = norm(kw);
      if (k.includes(' ') || k.includes('.')) {
        if (text.includes(k)) score += 3;           // phrase match
      } else if (words.includes(k)) {
        score += 2;                                  // exact word
      } else if (k.length > 4 && words.some(w => w.length > 4 && (w.startsWith(k) || k.startsWith(w)))) {
        score += 1;                                  // loose match (plurals etc.)
      }
    }
    if (score > bestScore) { bestScore = score; best = item; }
  }
  return bestScore >= 2 ? best : null;
}

/* ─────────────────────────────────────────────
   3. UI (no need to edit)
   ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const root = document.createElement('div');
  root.className = 'ai-assistant';
  root.innerHTML = `
    <button type="button" class="ai-assistant__toggle" aria-label="Open assistant" aria-expanded="false" aria-controls="ai-assistant-panel">
      <span class="ai-assistant__toggle-open">Ask</span>
      <span class="ai-assistant__toggle-close" aria-hidden="true">✕</span>
    </button>
    <div id="ai-assistant-panel" class="ai-assistant__panel" role="dialog" aria-label="${ASSISTANT_NAME}" aria-modal="false" hidden>
      <div class="ai-assistant__header">
        <span>${ASSISTANT_NAME}</span>
        <button type="button" class="ai-assistant__x" aria-label="Close assistant">✕</button>
      </div>
      <div class="ai-assistant__messages" role="log" aria-live="polite"></div>
      <div class="ai-assistant__chips" role="region" aria-label="Suggested questions"></div>
      <form class="ai-assistant__form">
        <input type="text" placeholder="Type your question…" aria-label="Your question" autocomplete="off">
        <button type="submit" aria-label="Send question">→</button>
      </form>
    </div>`;
  document.body.appendChild(root);

  const toggle = root.querySelector('.ai-assistant__toggle');
  const panel = root.querySelector('.ai-assistant__panel');
  const messages = root.querySelector('.ai-assistant__messages');
  const chips = root.querySelector('.ai-assistant__chips');
  const form = root.querySelector('form');
  const input = form.querySelector('input');
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let greeted = false;

  function addMsg(html, who) {
    const el = document.createElement('div');
    el.className = `ai-assistant__msg ai-assistant__msg--${who}`;
    if (who === 'user') el.textContent = html; else el.innerHTML = html;
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
    return el;
  }

  function ask(question) {
    addMsg(question, 'user');
    const match = findAnswer(question);
    const reply = match ? match.a : FALLBACK;
    if (reduceMotion) {
      addMsg(reply, 'bot');
      return;
    }
    const typing = addMsg('<span class="ai-assistant__dots" aria-hidden="true"><i></i><i></i><i></i></span>', 'bot');
    setTimeout(() => {
      typing.innerHTML = reply;
      messages.scrollTop = messages.scrollHeight;
    }, 450);
  }

  FAQ.filter(f => f.chip).forEach(f => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'ai-assistant__chip';
    b.textContent = f.q;
    b.addEventListener('click', () => ask(f.q));
    chips.appendChild(b);
  });

  function setOpen(open) {
    const hadFocusInside = root.contains(document.activeElement);
    panel.hidden = !open;
    root.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close assistant' : 'Open assistant');
    if (open) {
      if (!greeted) { addMsg(GREETING, 'bot'); greeted = true; }
      setTimeout(() => input.focus(), reduceMotion ? 0 : 50);
    } else if (hadFocusInside) {
      toggle.focus();
    }
  }

  toggle.addEventListener('click', () => setOpen(panel.hidden));
  root.querySelector('.ai-assistant__x').addEventListener('click', () => setOpen(false));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !panel.hidden && !document.querySelector('.lightbox.active')) {
      setOpen(false);
    }
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const v = input.value.trim();
    if (!v) return;
    input.value = '';
    ask(v);
  });
});
