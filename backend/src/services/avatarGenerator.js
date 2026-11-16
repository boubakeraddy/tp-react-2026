/**
 * Dynamic SVG Avatar Generator
 * 100% offline, lightweight, deterministic vector avatar generator.
 */

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function createRng(seed) {
  let s = typeof seed === 'number' ? Math.floor(Math.abs(seed)) : hashString(String(seed));
  if (s === 0) s = 12345;
  return function() {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function generateAvatarSVG(seed = Math.random().toString(), options = {}) {
  const rand = createRng(seed);
  const pick = (arr) => arr[Math.floor(rand() * arr.length)];
  const size = parseInt(options.size, 10) || 128;
  const gender = options.gender ? String(options.gender).toLowerCase() : null;

  // Curated modern gradient backgrounds
  const gradients = [
    ['#4f46e5', '#7c3aed'], // Indigo - Violet
    ['#0284c7', '#2563eb'], // Sky - Blue
    ['#059669', '#10b981'], // Emerald - Mint
    ['#d97706', '#f59e0b'], // Amber - Yellow
    ['#e11d48', '#f43f5e'], // Rose - Pink
    ['#7c3aed', '#ec4899'], // Purple - Fuchsia
    ['#0891b2', '#06b6d4'], // Cyan - Teal
    ['#334155', '#1e293b'], // Slate - Charcoal
    ['#0d9488', '#14b8a6'], // Teal - Aquamarine
    ['#f97316', '#fb923c'], // Warm Orange
    ['#6366f1', '#a855f7'], // Periwinkle - Orchid
  ];
  const bg = pick(gradients);

  // Diverse natural skin tones
  const skinTones = [
    '#ffd1b3', '#fcd34d', '#fed7aa', '#fdba74',
    '#f5cba7', '#e0a96d', '#c48b71', '#925841', '#6b3a2a'
  ];
  const skin = pick(skinTones);

  // Hair colors
  const hairColors = [
    '#1e293b', '#334155', '#475569', '#78350f',
    '#b45309', '#d97706', '#f59e0b', '#e11d48',
    '#6366f1', '#059669', '#2563eb', '#a855f7'
  ];
  const hairColor = pick(hairColors);

  // Clothes colors
  const clothesColors = [
    '#f8fafc', '#f1f5f9', '#ef4444', '#f97316',
    '#84cc16', '#06b6d4', '#6366f1', '#a855f7',
    '#ec4899', '#3b82f6', '#10b981', '#334155'
  ];
  const clothesColor = pick(clothesColors);

  // Determine hair styles based on optional gender preference
  let allowedHairStyles = [0, 1, 2, 3, 4, 5, 6];
  if (gender === 'boy' || gender === 'male') {
    allowedHairStyles = [0, 1, 3, 4, 6]; // crop, afro, spiky, buzz, beanie
  } else if (gender === 'girl' || gender === 'female') {
    allowedHairStyles = [1, 2, 5, 6]; // afro, bob, ponytail/long, beanie
  }
  const hairStyle = pick(allowedHairStyles);

  const eyeStyle = Math.floor(rand() * 4);
  const mouthStyle = Math.floor(rand() * 4);
  const hasGlasses = rand() < 0.35;
  const hasBlush = rand() < 0.45;
  const hasEarrings = (gender === 'girl' || rand() < 0.25);

  // Hair rendering
  let hairBackSvg = '';
  let hairFrontSvg = '';

  switch (hairStyle) {
    case 0: // Short Crop / Side Part
      hairFrontSvg = `
        <path d="M40 52 C39 28, 89 28, 88 52 C88 38, 76 31, 64 31 C49 31, 41 39, 40 52 Z" fill="${hairColor}"/>
        <path d="M42 45 C48 37, 62 37, 68 42 C74 37, 82 39, 86 45 C80 42, 72 42, 66 46 C60 41, 50 41, 42 45 Z" fill="${hairColor}"/>
      `;
      break;

    case 1: // Curly Afro Puff
      hairFrontSvg = `
        <circle cx="44" cy="42" r="14" fill="${hairColor}"/>
        <circle cx="64" cy="34" r="16" fill="${hairColor}"/>
        <circle cx="84" cy="42" r="14" fill="${hairColor}"/>
        <circle cx="52" cy="36" r="14" fill="${hairColor}"/>
        <circle cx="76" cy="36" r="14" fill="${hairColor}"/>
      `;
      break;

    case 2: // Long Wavy / Bob
      hairBackSvg = `
        <path d="M35 52 C34 32, 94 32, 93 52 C97 72, 94 92, 88 96 C82 96, 85 72, 85 52 C76 36, 52 36, 43 52 C43 72, 46 96, 40 96 C34 92, 31 72, 35 52 Z" fill="${hairColor}"/>
      `;
      hairFrontSvg = `
        <path d="M40 48 C44 38, 54 36, 64 36 C74 36, 84 38, 88 48 C84 41, 74 38, 64 38 C54 38, 44 41, 40 48 Z" fill="${hairColor}"/>
      `;
      break;

    case 3: // Spiky / Modern Fade
      hairFrontSvg = `
        <path d="M40 48 L46 32 L54 42 L64 28 L74 42 L82 32 L88 48 C86 35, 78 33, 64 33 C50 33, 42 35, 40 48 Z" fill="${hairColor}"/>
      `;
      break;

    case 4: // Buzz cut / Minimalist
      hairFrontSvg = `
        <path d="M42 48 C42 34, 86 34, 86 48 C84 40, 76 36, 64 36 C52 36, 44 40, 42 48 Z" fill="${hairColor}" opacity="0.85"/>
      `;
      break;

    case 5: // High Bun / Top Knot
      hairBackSvg = `
        <circle cx="64" cy="24" r="12" fill="${hairColor}"/>
      `;
      hairFrontSvg = `
        <path d="M40 50 C40 34, 88 34, 88 50 C86 40, 76 36, 64 36 C52 36, 42 40, 40 50 Z" fill="${hairColor}"/>
        <path d="M41 47 C48 42, 60 42, 64 45 C68 42, 80 42, 87 47 Z" fill="${hairColor}"/>
      `;
      break;

    case 6: // Beanie Hat
    default:
      hairFrontSvg = `
        <path d="M41 49 C41 30, 87 30, 87 49 Z" fill="${clothesColor}"/>
        <rect x="37" y="46" width="54" height="8" rx="4" fill="${hairColor}"/>
        <circle cx="64" cy="29" r="5" fill="${clothesColor}"/>
      `;
      break;
  }

  // Eyes rendering
  let eyesSvg = '';
  switch (eyeStyle) {
    case 0: // Happy curved eyes
      eyesSvg = `
        <path d="M50 62 C52 58, 56 58, 58 62" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <path d="M70 62 C72 58, 76 58, 78 62" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 1: // Cute pupils with light reflection
      eyesSvg = `
        <circle cx="54" cy="62" r="3.2" fill="#1e293b"/>
        <circle cx="55.2" cy="60.8" r="1.1" fill="#ffffff"/>
        <circle cx="74" cy="62" r="3.2" fill="#1e293b"/>
        <circle cx="75.2" cy="60.8" r="1.1" fill="#ffffff"/>
      `;
      break;

    case 2: // Winking face
      eyesSvg = `
        <circle cx="54" cy="62" r="3.2" fill="#1e293b"/>
        <circle cx="55.2" cy="60.8" r="1.1" fill="#ffffff"/>
        <path d="M70 62 C72 58, 76 58, 78 62" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 3: // Big open anime eyes
    default:
      eyesSvg = `
        <ellipse cx="54" cy="61.5" rx="4" ry="4.5" fill="#1e293b"/>
        <circle cx="55.5" cy="59.8" r="1.5" fill="#ffffff"/>
        <circle cx="53" cy="63" r="0.8" fill="#ffffff"/>
        <ellipse cx="74" cy="61.5" rx="4" ry="4.5" fill="#1e293b"/>
        <circle cx="75.5" cy="59.8" r="1.5" fill="#ffffff"/>
        <circle cx="73" cy="63" r="0.8" fill="#ffffff"/>
      `;
      break;
  }

  // Mouth rendering
  let mouthSvg = '';
  switch (mouthStyle) {
    case 0: // Cheerful open smile
      mouthSvg = `<path d="M57 73 Q64 82, 71 73" stroke="#1e293b" stroke-width="2.4" stroke-linecap="round" fill="none"/>`;
      break;

    case 1: // Joyful grin with teeth
      mouthSvg = `
        <path d="M56 73 Q64 84, 72 73 Z" fill="#e11d48" stroke="#1e293b" stroke-width="1.8"/>
        <path d="M58 74 Q64 77, 70 74" fill="#ffffff" stroke="#ffffff" stroke-width="1.5"/>
      `;
      break;

    case 2: // Cute smirk
      mouthSvg = `<path d="M59 74 Q66 78, 72 73" stroke="#1e293b" stroke-width="2.2" stroke-linecap="round" fill="none"/>`;
      break;

    case 3: // Surprised small 'o'
    default:
      mouthSvg = `<ellipse cx="64" cy="74.5" rx="3.2" ry="3.8" fill="#e11d48" stroke="#1e293b" stroke-width="1.6"/>`;
      break;
  }

  const blushSvg = hasBlush ? `
    <circle cx="47" cy="67.5" r="4.5" fill="#f43f5e" opacity="0.45"/>
    <circle cx="81" cy="67.5" r="4.5" fill="#f43f5e" opacity="0.45"/>
  ` : '';

  const glassesSvg = hasGlasses ? `
    <circle cx="54" cy="61" r="9.5" stroke="#0f172a" stroke-width="2.4" fill="rgba(255,255,255,0.2)"/>
    <circle cx="74" cy="61" r="9.5" stroke="#0f172a" stroke-width="2.4" fill="rgba(255,255,255,0.2)"/>
    <path d="M63.5 61 L64.5 61" stroke="#0f172a" stroke-width="2.4"/>
    <path d="M44.5 61 L39 59" stroke="#0f172a" stroke-width="2"/>
    <path d="M83.5 61 L89 59" stroke="#0f172a" stroke-width="2"/>
  ` : '';

  const earringsSvg = hasEarrings ? `
    <circle cx="39.5" cy="65.5" r="2" fill="#fbbf24"/>
    <circle cx="88.5" cy="65.5" r="2" fill="#fbbf24"/>
  ` : '';

  const uid = hashString(String(seed));

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="${size}" height="${size}">
  <defs>
    <linearGradient id="avatar-bg-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bg[0]}"/>
      <stop offset="100%" stop-color="${bg[1]}"/>
    </linearGradient>
    <clipPath id="avatar-clip-${uid}">
      <circle cx="64" cy="64" r="60"/>
    </clipPath>
  </defs>

  <!-- Background Circle -->
  <circle cx="64" cy="64" r="60" fill="url(#avatar-bg-${uid})"/>

  <!-- Character Content (Clipped to Circle) -->
  <g clip-path="url(#avatar-clip-${uid})">
    <!-- Back Hair (if applicable) -->
    ${hairBackSvg}

    <!-- Clothes / Body -->
    <path d="M24 128 C24 96, 44 92, 64 92 C84 92, 104 96, 104 128 Z" fill="${clothesColor}"/>
    <path d="M53 92 C53 101, 75 101, 75 92 Z" fill="${skin}"/>

    <!-- Head & Neck -->
    <rect x="57" y="76" width="14" height="20" rx="7" fill="${skin}"/>
    <circle cx="64" cy="62" r="23" fill="${skin}"/>

    <!-- Ears -->
    <circle cx="41" cy="63" r="4.5" fill="${skin}"/>
    <circle cx="87" cy="63" r="4.5" fill="${skin}"/>
    ${earringsSvg}

    <!-- Facial Features -->
    ${blushSvg}
    ${eyesSvg}
    ${glassesSvg}
    ${mouthSvg}

    <!-- Front Hair / Cap -->
    ${hairFrontSvg}
  </g>
</svg>`.trim();
}

module.exports = {
  generateAvatarSVG,
  hashString
};
