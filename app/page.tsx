"use client";

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

export default function ShareIconWithMenu() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <TooltipProvider>
        <DropdownMenu>
          <Tooltip>
            <TooltipTrigger asChild>
              <DropdownMenuTrigger asChild>
                <button className="p-2 cursor-pointer rounded  focus:outline-none">
                  <Share2 className="h-7 w-7 text-gray-600 hover:text-gray-950" />
                </button>
              </DropdownMenuTrigger>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>share</p>
            </TooltipContent>
          </Tooltip>

          <DropdownMenuContent className="w-full mt-1">
            <DropdownMenuItem className="cursor-pointer flex">
              <Link size={25} className="text-gray-600 hover:text-gray-950"/>
              <span className="text-gray-600 hover:text-gray-800">Share on Twitter</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer flex">
              <Mail size={25} className="text-gray-600 hover:text-gray-950"/>
              <span className="text-gray-600 hover:text-gray-800">Share on Mail</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer flex">
              <Download size={25} className="text-gray-600 hover:text-gray-950"/>
              <span className="text-gray-600 hover:text-gray-800">Download</span>
            </DropdownMenuItem>
           
          </DropdownMenuContent>
        </DropdownMenu>
      </TooltipProvider>
    </div>
  );
}
