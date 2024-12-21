"use client"

import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from '@/libs/store/provider'
import ThemeToggle from '@/components/themeToggle'
import MenuItem from '@/components/common/menuItem'
import { BrowserOpenURL, Quit } from '@/wailsjs/runtime/runtime'
import { MenuItemType } from '@/libs/types/types'

const jetBrains_Mono = JetBrains_Mono({ subsets: ['latin'] })

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const menuItems: MenuItemType[] = [
		{
			title: "Window",
			options: [
				{
					title: "Quit",
					onClick: () => Quit()
				}
			]
		},
		{
			title: "Help",
			options: [
				{
					title: "Visit repo",
					onClick: () => BrowserOpenURL("https://github.com/Yash890-star/metro")
				}
			]
		}
	]
	return (
		<html lang="en">
			<body className={`${jetBrains_Mono.className} theme`}>
				<Providers>
					<div className="border-b flex justify-between items-center">
						<div className="text-xs ml-1 flex">
							<MenuItem items={menuItems}/>
						</div>
						<ThemeToggle />
					</div>
					{children}
				</Providers>
			</body>
		</html>
	)
}
