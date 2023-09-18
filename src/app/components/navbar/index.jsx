"use client";

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem
} from "@nextui-org/react";
import { ChevronDown } from "@/app/utils/ChevronDownLogo";

import NextLink from "next/link";
import { MainLogo } from "../../utils/pageLogo";
import { SearchLogo } from "../../utils/searchLogo";

export const NavBarComponent = () => {
  return (
    <Navbar isBordered isBlurred={false} maxWidth="full" height="5rem">
      <NavbarContent justify="start">
        <MainLogo className="cursor-pointer w-20 h-20" href="home" />
        <p className="font-bold text-black ml-2 cursor-default text-lg">
          HARDCORE LEAGUE
        </p>
        <Dropdown>
          <NavbarItem className="pl-2 font-semibold text-sm">
            <DropdownTrigger>
              <Button
                disableRipple
                className="font-semibold text-sm p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
                endContent={<ChevronDown fill='currentColor' size={16} />}
              >
                Competiciones
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            className=""
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem key="autoscaling" className="text-black">
              <Link className="font-semibold text-sm" color="foreground" href="major-league" as={NextLink}>
              Liga Mayores
              </Link>
            </DropdownItem>
            <DropdownItem key="usage_metrics" className="text-black">
              <Link className="font-semibold text-sm" color="foreground" href="sub21-league" as={NextLink}>
                Liga Sub-21
              </Link>
            </DropdownItem>
            <DropdownItem key="production_ready" className="text-black">
              <Link className="font-semibold text-sm" color="foreground" href="/sub21-cup" as={NextLink}>
                Copa Sub-21
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link className="font-semibold text-sm" color="foreground" href="players" as={NextLink}>
            Jugadores
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-semibold text-sm" color="foreground" href="transfers" as={NextLink}>
            Transferencias
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="mr-20">
        <NavbarItem>
          <Input
            className="text-black"
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchLogo />}
            type="search"
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
