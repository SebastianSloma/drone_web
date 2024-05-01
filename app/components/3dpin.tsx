'use client';
import React from 'react';
import { PinContainer } from '../components/ui/3d-pin';
import { Image } from '@nextui-org/react';

export function AnimatedPinDemo() {
	return (
		<div className='h-[42rem] w-full flex items-center justify-center '>
			<PinContainer
				title='Ibiza'
				href=''>
				<div className='flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[24rem] '>
					<h3 className='max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100'>
						Ibiza
					</h3>
					<div className='text-base !m-0 !p-0 font-normal'>
						<span className='text-slate-500 '>
							España
						</span>
					</div>
					<div className='flex flex-1 w-full rounded-lg mt-4 '>
						<Image src='mapa.jpeg' alt='mapa' width={400}/>
					</div>
					{/* <div className='flex flex-1 w-full rounded-lg mt-4 ' /> */}
				</div>
			</PinContainer>
		</div>
	);
}
