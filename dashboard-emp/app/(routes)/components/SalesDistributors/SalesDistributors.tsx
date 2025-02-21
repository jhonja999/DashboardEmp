import { CustomIcon } from "@/components/CustomIcon";
import { BarChart } from "lucide-react";
import GraphicSuscribers from "../GraphicSuscribers/GraphicSuscribers";


export default function SalesDistributors() {
  return (
    
    <div className="p-5 rounded-lg shadow-sm bg-background">
      <div className="flex items-center gap-x-2">
        <CustomIcon icon={BarChart} />
        <p className="text-xl">Sales Distributors</p>
      </div>
      <div>
        <GraphicSuscribers />
      </div>
    </div>
  )
}
