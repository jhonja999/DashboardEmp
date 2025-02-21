import { CustomIcon } from "@/components/CustomIcon";
import { CardSummaryProps } from "./CardSummary.types";
import { CustomTooltip } from "@/components/CustomTooltip";
import { MoveDownRight, MoveUpRight, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function CardSummary(props: CardSummaryProps) {
  const { icon: Icon, total, average, title, tooltipText, isDraggable } = props;

  return (
    <div
      className={cn(
        "bg-background rounded-lg p-3 transition-all duration-200", // Reduced padding
        isDraggable ? "cursor-move shadow-lg ring-2 ring-blue-200" : "shadow-sm hover:shadow-md"
      )}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <CustomIcon icon={Icon} />
          <span className="text-sm font-medium">{title}</span>
        </div>
        <CustomTooltip content={tooltipText} />
      </div>

      <div className="flex items-center gap-3 mt-3">
        <p className="text-xl font-semibold">{total}</p>
        <div
          className={cn(
            "flex items-center gap-1 px-2 py-0.5 text-xs text-white rounded-md",
            "bg-black dark:bg-secondary"
          )}
        >
          {average}%
          {average < 20 && <MoveDownRight className="h-3 w-3" />}
          {average > 20 && average < 70 && <MoveUpRight className="h-3 w-3" />}
          {average > 70 && <TrendingUp className="h-3 w-3" />}
        </div>
      </div>
    </div>
  );
}