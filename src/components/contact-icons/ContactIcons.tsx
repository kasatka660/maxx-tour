import React from "react";

// Single source of truth for the outline contact icons (phone, address, hours,
// email) that appear in the Topbar, MobileNav and Contacts section. They stroke
// with `currentColor`, so colour is controlled by the parent's CSS; pass
// `color` to override (e.g. the red icons in the Contacts section).

interface IconProps {
  size?: number;
  color?: string;
}

const iconProps = (size: number, color?: string) => ({
  viewBox: "0 0 24 24",
  width: size,
  height: size,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  style: color ? { color } : undefined,
});

export const PhoneIcon: React.FC<IconProps> = ({ size = 18, color }) => (
  <svg {...iconProps(size, color)}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11L8.09 9.41a16 16 0 0 0 6 6l1.24-1.24a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68a2 2 0 0 1 1.72 2.02z" />
  </svg>
);

export const LocationIcon: React.FC<IconProps> = ({ size = 18, color }) => (
  <svg {...iconProps(size, color)}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const ClockIcon: React.FC<IconProps> = ({ size = 18, color }) => (
  <svg {...iconProps(size, color)}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const EmailIcon: React.FC<IconProps> = ({ size = 18, color }) => (
  <svg {...iconProps(size, color)}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
