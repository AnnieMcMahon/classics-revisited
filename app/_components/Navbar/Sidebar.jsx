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
} from '@/components/ui/sidebar';
import { X } from 'lucide-react';
import Link from 'next/link';
import { navigationData } from '../../data/navbarData';

export function AppSidebar() {
  const { toggleSidebar, openMobile } = useSidebar();

  return (
    <Sidebar>
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupLabel className="relative mb-5 w-full p-1">
            <Link href="/" className="absolute -top-2 left-3 flex">
              <img
                alt="company logo"
                src="/images/logos/FullLogo_Transparent.png"
                width={100}
                height={100}
                className="object-cover"
                onClick={toggleSidebar}
              />
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationData.map((item) => (
                <SidebarMenuItem key={item.name} className="ml-5 p-1">
                  <SidebarMenuButton className="pb-7 pt-7" asChild>
                    <Link href={item.path} className="text-[17px] md:text-[15px]" onClick={toggleSidebar}>
                      {item.name}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {openMobile != false && (
          <button
            onClick={() => {
              toggleSidebar();
            }}
            className="fixed right-3 top-3 animate-bounce cursor-pointer rounded-full bg-red-100 bg-opacity-25 p-1 transition-all animate-in"
            style={{ color: '#bd8181' }}
          >
            <X />
          </button>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
