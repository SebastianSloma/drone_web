'use client';

import React from 'react';
import {
	Navbar,
	NavbarBrand,
	NavbarMenuToggle,
	NavbarMenuItem,
	NavbarMenu,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
	Input,
	Image,
} from '@nextui-org/react';
import { ThemeSwitcher } from './ThemeSwitcher';

export default function App() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	interface MenuItem {
		label: string;
		href: string;
	}

	const menuItems: MenuItem[] = [
		{ label: 'Home', href: '/' },
		{ label: 'Portfolio', href: '#portfolio' },
		{ label: 'Offers', href: '#offers' },
		{ label: 'Testimonials', href: '#testimonials' },
		{ label: 'Contact', href: '#contact' },
	];

	return (
		<Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent className='sm:hidden' justify='start'>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				/>
			</NavbarContent>

			<NavbarContent className='sm:hidden pr-3 ' justify='center'>
				<NavbarBrand>
					<Image src='/logo.jpeg' alt='logo' width={50} height={50} />
					<p className='text-lg  '>
						Drone
						<span className='class="font-extrabold text-transparent text-lg bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600'>
							Filming
						</span>
					</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className='hidden sm:flex gap-4' justify='center'>
				<NavbarItem>
				<Image src='/logo.jpeg' alt='logo' width={50} height={50} />
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='#' className='font-semibold'>
						Home
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='#products' className='font-semibold'>
						Portfolio
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='#newoffer' className='font-semibold'>
						Offers
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						color='foreground'
						href='#testimonials'
						className='font-semibold'>
						Clients
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='#contact' className='font-semibold'>
						About
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='#contact' className='font-semibold'>
						Contact
					</Link>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent justify='end'>
				<NavbarItem className='hidden lg:flex'>
					<ThemeSwitcher />
				</NavbarItem>
			</NavbarContent>

			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							className='w-full'
							color={'foreground'}
							href={item.href}
							size='lg'>
							{item.label}
						</Link>
					</NavbarMenuItem>
				))}
				<NavbarItem>
					<Input
						classNames={{
							base: 'max-w-full sm:max-w-[10rem] h-10',
							mainWrapper: 'h-full',
							input: 'text-small',
							inputWrapper:
								'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
						}}
						placeholder='Type to search...'
						size='sm'
						type='search'
					/>
				</NavbarItem>

				<NavbarItem className='sm:flex mt-3'>
					<Button
						as={Link}
						color='warning'
						href='#'
						variant='faded'
						className='mr-5'>
						Log in
					</Button>
					<Button as={Link} color='warning' href='#' variant='ghost'>
						Sign Up
					</Button>
				</NavbarItem>
				<NavbarItem className='sm:flex mt-5'>
					<ThemeSwitcher />
				</NavbarItem>
			</NavbarMenu>
		</Navbar>
	);
}
