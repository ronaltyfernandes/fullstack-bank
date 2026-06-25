function AuthBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full z-0"
      viewBox="0 0 600 900"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#001B5A" />
          <stop offset="50%" stopColor="#002D8A" />
          <stop offset="100%" stopColor="#001347" />
        </linearGradient>

        <radialGradient id="glowTop">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="glowBottom">
          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="100%" height="100%" fill="url(#bgGradient)" />

      <ellipse
        cx="120"
        cy="120"
        rx="220"
        ry="180"
        fill="url(#glowTop)"
      />

      <path
        d="M520 0
           C620 150, 620 300, 520 450
           C470 520, 470 620, 530 720
           L600 900
           L600 0
           Z"
        fill="rgba(255,255,255,0.04)"
      />

      <ellipse
        cx="450"
        cy="820"
        rx="260"
        ry="180"
        fill="url(#glowBottom)"
      />

      <g opacity="0.15" fill="none" stroke="#60A5FA">
        <path d="M250 900 C350 780 450 780 600 840" strokeWidth="1" />
        <path d="M220 900 C340 740 470 740 600 810" strokeWidth="1" />
        <path d="M190 900 C330 700 490 700 600 780" strokeWidth="1" />
        <path d="M160 900 C320 660 500 660 600 750" strokeWidth="1" />
        <path d="M130 900 C310 620 520 620 600 720" strokeWidth="1" />
      </g>
    </svg>
  );
}

export default AuthBackground;