"use client"

import {Navbar, NavbarContent, NavbarItem, Link, Input} from "@nextui-org/react"
import NextLink from "next/link";
import { MainLogo } from "../utils/pageLogo"
import { SearchLogo } from "../utils/searchLogo"

export const NavBarComponent = () => {
    return (
        <Navbar
            isBordered
            isBlurred={false}
            maxWidth="full"
            height='5rem'
        >
            <NavbarContent justify='start'>
                <MainLogo className='cursor-pointer w-20 h-20' href='home' />
                <p className="font-bold text-black ml-2 cursor-default">HARDCORE LEAGUE</p>
                <NavbarItem className='pl-2 font-semibold'>
                    <Link color="foreground" href="ligues" as={NextLink}>
                        Ligas
                    </Link>
                </NavbarItem>
                <NavbarItem className='font-semibold'>
                    <Link color="foreground" href="players" as={NextLink}>
                        Jugadores
                    </Link>
                </NavbarItem>
                <NavbarItem className='font-semibold'>
                    <Link color="foreground" href="transfers" as={NextLink}>
                        Transferencias
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end" className='mr-20'>
                <NavbarItem>
                    <Input
                        className='text-black'
                        placeholder="Type to search..."
                        size="sm"
                        startContent={<SearchLogo />}
                        type="search"
                    />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}