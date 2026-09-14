import {
  ShieldCheck,
  GraduationCap,
  Users,
  Trophy,
  BookOpen,
  Target,
  Building2,
  Sparkles,
  Calendar,
  HeartPulse,
  Handshake,
  Dumbbell,
  Drama,
  type LucideIcon,
} from "lucide-react";

export const iconMap = {
  "shield-check": ShieldCheck,
  "graduation-cap": GraduationCap,
  users: Users,
  trophy: Trophy,
  "book-open": BookOpen,
  target: Target,
  "building-2": Building2,
  sparkles: Sparkles,
  calendar: Calendar,
  "heart-pulse": HeartPulse,
  handshake: Handshake,
  dumbbell: Dumbbell,
  drama: Drama,
} satisfies Record<string, LucideIcon>;

export type IconKey = keyof typeof iconMap;
