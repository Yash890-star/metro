"use client"

import { useEffect, useState } from "react";
import Toggle from "./common/toggle";

type theme = "light" | "dark"

const ThemeToggle = () => {

	const [theme, setTheme] = useState<theme>("light");

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") as theme;
		if (savedTheme) {
			setTheme(savedTheme);
			document.documentElement.classList.add(savedTheme);
		} else {
			document.documentElement.classList.add("dark")
		}
	}, [])

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		console.log(newTheme)
		setTheme(newTheme);
		document.documentElement.classList.remove(theme);
		document.documentElement.classList.add(newTheme);
		localStorage.setItem('theme', newTheme);
	}

	return (<>
	<div className="mt-1 mr-1">
		<Toggle onClickCallback={toggleTheme}/>
	</div>
	</>);
}

export default ThemeToggle;