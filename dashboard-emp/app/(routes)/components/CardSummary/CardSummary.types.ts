import { LucideIcon } from "lucide-react"

// CardSummary.types.ts
export interface CardSummaryProps {
    icon: LucideIcon;
    total: string;
    average: number;
    title: string;
    tooltipText: string;
    isDraggable?: boolean;
  }