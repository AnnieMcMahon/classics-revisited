import { X } from "lucide-react"
import { navigationData } from "./navbarData"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import Link from "next/link"

export function AppSidebar() {
    const {toggleSidebar, openMobile} = useSidebar()

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="p-1 mb-5 relatvie w-full">
            <Link href="/" className="flex absolute -top-2 left-3">
              <img alt="company logo" src="/images/logos/FullLogo_Transparent.png" width={100} height={100}
              className="object-cover"
              />
            </Link>
            
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationData.map((item) => (
                <SidebarMenuItem key={item.name} className="p-1 ml-5">
                  <SidebarMenuButton className="pb-7 pt-7" asChild>
                    <a href={item.path} className="text-[17px] md:text-[15px]">
                      {item.name}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {
            openMobile != false && 
            <button onClick={(event) => {
              toggleSidebar()
            }} className="fixed animate-in animate-bounce transition-all right-3 cursor-pointer
             top-3 bg-red-100 bg-opacity-25 p-1 rounded-full" style={{color:'#bd8181'}}>
              <X />
            </button>
        }
      </SidebarContent>
    </Sidebar>
  )
}
