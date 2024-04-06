// import * as React from "react";

// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";
// import { useRouter } from "next/navigation";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "../ui/accordion";

// export function DrawerBar() {
//   const router = useRouter();
//   return (
//     <Drawer>
//       <DrawerTrigger className=" flex items-center">
//         <svg
//           width="22"
//           height="22"
//           viewBox="0 0 15 15"
//           fill="none"
//           className="  font-bold stroke-1 stroke-white"
//         >
//           <path
//             d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
//             fill="currentColor"
//             fill-rule="evenodd"
//             clip-rule="evenodd"
//           ></path>
//         </svg>
//       </DrawerTrigger>
//       <DrawerContent>
//         <div className="mx-auto w-full max-w-sm">
//           <DrawerHeader className=" flex flex-col items-center justify-center">
//             <DrawerTitle>
//               Welcome to <span className=" text-[#f44336]">AWL India</span>
//             </DrawerTitle>
//             <DrawerDescription>
//               Unlock the Power of Beauty with AWL India
//             </DrawerDescription>
//           </DrawerHeader>
//           <div className=" my-4">
//             <DrawerClose
//               onClick={() => router.push("/")}
//               className=" py-2 w-full hover:bg-gray-900 rounded-[7px] text-white"
//             >
//               Home
//             </DrawerClose>

//             <DrawerClose
//               onClick={() => router.push("/services")}
//               className=" py-2 w-full hover:bg-gray-900 rounded-[7px] text-white"
//             >
//               Servies
//             </DrawerClose>
//             <DrawerClose
//               onClick={() => router.push("/case-studies")}
//               className=" py-2 w-full hover:bg-gray-900 rounded-[7px] text-white"
//             >
//               Case Studies
//             </DrawerClose>
//             <DrawerClose
//               onClick={() => router.push("/contact-us")}
//               className=" py-2 w-full bg-white rounded-[7px] active:bg-gray-200  text-black"
//             >
//               Contact us
//             </DrawerClose>
//           </div>
//         </div>
//       </DrawerContent>
//     </Drawer>
//   );
// }

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export function DrawerBar() {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <svg
          width="22"
          height="22"
          viewBox="0 0 15 15"
          fill="none"
          className="  font-bold stroke-1 stroke-white"
        >
          <path
            d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 rounded-[7px]">
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => router.push("/")}>
            Home
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>About us</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className=" mr-1 rounded-[7px]">
                <DropdownMenuItem
                  onClick={() => router.push("/about-us/overview")}
                >
                  Overview
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => router.push("/about-us/our-team")}
                >
                  Our Team
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => router.push("/about-us/rewards")}
                >
                  Reward & Recognition
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => router.push("/about-us/mission")}
                >
                  Misson
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem onClick={() => router.push("/services")}>
            Services
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/case-studies")}>
            Case Studies
          </DropdownMenuItem>
          <DropdownMenuItem
            className=" text-black bg-white rounded-[2px]"
            onClick={() => router.push("/contact-us")}
          >
            Contact Us
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
