import type { Category } from "@/types";

export type Theme = {
  text: string;
  muted: string;
  background: string;
  card: string;
  border: string;
  primary: string;
  onPrimary: string;
  onPrimaryMuted: string;
  category: Record<Category, string>;
};

export const Colors: { light: Theme; dark: Theme } = {
  light: {
    text: "#0F1B2D",
    muted: "#55627A",
    background: "#F3F4F6",
    card: "#FFFFFF",
    border: "#DCE2EA",
    primary: "#0F6B55",
    onPrimary: "#FFFFFF",
    onPrimaryMuted: "#D5EEE4",
    category: {
      food: "#34D399",
      bills: "#F5B93A",
      transport: "#A78BFA",
      shopping: "#F472B6",
      other: "#60A5FA",
    },
  },
  dark: {
    text: "#F2F4F7",
    muted: "#9AA6B5",
    background: "#0B1220",
    card: "#182132",
    border: "#2A3446",
    primary: "#4FD1A5",
    onPrimary: "#0B1220",
    onPrimaryMuted: "#12403A",
    category: {
      food: "#34D399",
      bills: "#F5B93A",
      transport: "#A78BFA",
      shopping: "#F472B6",
      other: "#60A5FA",
    },
  },
};

export const Spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 } as const;

export const FontSize = {
  caption: 12,
  small: 13,
  body: 16,
  title: 20,
  hero: 28,
  display: 32,
} as const;

export const Radius = { sm: 8, md: 12, lg: 16, pill: 999 } as const;
