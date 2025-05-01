"use client";

import { useState } from "react";
import { Download, Link, Mail, Share2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  return (
    <div className="relative h-screen flex items-center justify-center">
      <TooltipProvider>
        <DropdownMenu
          onOpenChange={(open) => {
            setIsDropdownOpen(open);
            if (open) {
              setIsTooltipOpen(false); 
            }
          }}
        >
          <Tooltip open={isDropdownOpen ? false : isTooltipOpen}>
            <TooltipTrigger
              asChild
              onMouseEnter={() => !isDropdownOpen && setIsTooltipOpen(true)}
              onMouseLeave={() => setIsTooltipOpen(false)}
            >
              <DropdownMenuTrigger asChild>
                <button className="p-2 cursor-pointer rounded focus:outline-none">
                  <Share2 className="h-7 w-7 text-gray-600 hover:text-gray-950" />
                </button>
              </DropdownMenuTrigger>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Share</p>
            </TooltipContent>
          </Tooltip>

          <DropdownMenuContent className="w-56 mt-1">
            <DropdownMenuItem className="cursor-pointer flex gap-2">
              <Link size={20} className="text-gray-600" />
              <span>Share on Twitter</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer flex gap-2">
              <Mail size={20} className="text-gray-600" />
              <span>Share on Mail</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer flex gap-2">
              <Download size={20} className="text-gray-600" />
              <span>Download</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TooltipProvider>
    </div>
  );
}
