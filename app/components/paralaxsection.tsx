'use client';
import React from 'react';
import { HeroParallax } from '../components/ui/hero-parallax';

export function HeroParallaxDemo() {
	return <HeroParallax products={products} />;
}
export const products = [
	{
		title: 'Moonbeam',
		link: 'https://gomoonbeam.com',
		thumbnail:
			'/drone2.png',
	},
	{
		title: 'Cursor',
		link: 'https://cursor.so',
		thumbnail:
			'/drone2.webp',
	},
	{
		title: 'Rogue',
		link: 'https://userogue.com',
		thumbnail:
			'/drone3.webp',
	},

	{
		title: 'Editorially',
		link: 'https://editorially.org',
		thumbnail:
			'/drone4.webp',
	},
	{
		title: 'Editrix AI',
		link: 'https://editrix.ai',
		thumbnail:
			'/drone1.jpeg',
	},
	// {
	// 	title: 'Pixel Perfect',
	// 	link: 'https://app.pixelperfect.quest',
	// 	thumbnail:
	// 		'https://aceternity.com/images/products/thumbnails/new/pixelperfect.png',
	// },

	// {
	// 	title: 'Algochurn',
	// 	link: 'https://algochurn.com',
	// 	thumbnail:
	// 		'https://aceternity.com/images/products/thumbnails/new/algochurn.png',
	// },
	// {
	// 	title: 'Aceternity UI',
	// 	link: 'https://ui.aceternity.com',
	// 	thumbnail:
	// 		'https://aceternity.com/images/products/thumbnails/new/aceternityui.png',
	// },
	// {
	// 	title: 'Tailwind Master Kit',
	// 	link: 'https://tailwindmasterkit.com',
	// 	thumbnail:
	// 		'https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png',
	// },
	// {
	// 	title: 'SmartBridge',
	// 	link: 'https://smartbridgetech.com',
	// 	thumbnail:
	// 		'https://aceternity.com/images/products/thumbnails/new/smartbridge.png',
	// },
	// {
	// 	title: 'Renderwork Studio',
	// 	link: 'https://renderwork.studio',
	// 	thumbnail:
	// 		'https://aceternity.com/images/products/thumbnails/new/renderwork.png',
	// },

	// {
	// 	title: 'Creme Digital',
	// 	link: 'https://cremedigital.com',
	// 	thumbnail:
	// 		'https://aceternity.com/images/products/thumbnails/new/cremedigital.png',
	// },
	// {
	// 	title: 'Golden Bells Academy',
	// 	link: 'https://goldenbellsacademy.com',
	// 	thumbnail:
	// 		'https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png',
	// },
	// {
	// 	title: 'Invoker Labs',
	// 	link: 'https://invoker.lol',
	// 	thumbnail:
	// 		'https://aceternity.com/images/products/thumbnails/new/invoker.png',
	// },
	// {
	// 	title: 'E Free Invoice',
	// 	link: 'https://efreeinvoice.com',
	// 	thumbnail:
	// 		'https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png',
	// },
];
