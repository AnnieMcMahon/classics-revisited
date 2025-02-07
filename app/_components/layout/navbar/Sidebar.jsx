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
    const {toggleSidebar, open, openMobile} = useSidebar()
    console.log(open, " How open works")


  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="p-3 mb-5">
            <Link href="/" className="flex m">
              <img alt="company logo" src="/images/logos/logo1.webp" width={40} height={40} />
            </Link>
            
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationData.map((item) => (
                <SidebarMenuItem key={item.name} className="p-1">
                  <SidebarMenuButton asChild>
                    <a href={item.path} className="text-[15px]">
                      <item.icon />
                      <span>{item.name}</span>
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
