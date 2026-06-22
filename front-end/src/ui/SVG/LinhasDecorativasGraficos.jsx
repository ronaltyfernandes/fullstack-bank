import React from 'react'

function LinhasDecorativasGraficos() {
  return (
<svg
  className="absolute bottom-0 left-0 w-full opacity-50 pointer-events-none"
  viewBox="0 0 400 100"
  preserveAspectRatio="none"
  aria-hidden="true"
>
  <defs>
    <linearGradient id="areaGrad" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stopColor="#f4f4f5" stopOpacity="0.22" />
      <stop offset="50%" stopColor="#e4e4e7" stopOpacity="0.10" />
      <stop offset="100%" stopColor="#e4e4e7" stopOpacity="0.00" />
    </linearGradient>

    <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0%" stopColor="#d4d4d8" stopOpacity="0.55" />
      <stop offset="50%" stopColor="#ffffff" stopOpacity="0.85" />
      <stop offset="100%" stopColor="#d4d4d8" stopOpacity="0.45" />
    </linearGradient>

    <filter id="lineGlow">
      <feGaussianBlur stdDeviation="1.5" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  {/* Grid */}
  <g stroke="#ffffff" strokeOpacity="0.08" strokeWidth="0.6">
    <line x1="0" y1="20" x2="400" y2="20" />
    <line x1="0" y1="40" x2="400" y2="40" />
    <line x1="0" y1="60" x2="400" y2="60" />
    <line x1="0" y1="80" x2="400" y2="80" />
  </g>

  {/* Área */}
  <path
    d="M0,80 L80,80 C120,80 140,25 180,30 C220,35 250,65 290,40 C330,15 360,45 400,50 L400,100 L0,100 Z"
    fill="url(#areaGrad)"
  />

  {/* Curva */}
  <path
    d="M0,80 L80,80 C120,80 140,25 180,30 C220,35 250,65 290,40 C330,15 360,45 400,50"
    stroke="url(#lineGrad)"
    strokeWidth="1.8"
    fill="none"
    filter="url(#lineGlow)"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
  )
}

export default LinhasDecorativasGraficos