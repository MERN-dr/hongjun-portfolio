import React, { useEffect, useState } from 'react'
import { activeTabText, inactiveTabText } from '../content/tabText/static';
import Head from "next/head";

type ISEO = {
    description?: string;
}
function SEO({description}:ISEO) {
    const [isActive, setIsActive] = useState(true);
	const tabChanged = () => {
		setIsActive(!document.hidden);
	};
	useEffect(() => {
		document.addEventListener("visibilitychange", tabChanged);
		return () => {
			document.removeEventListener("visibilitychange", tabChanged);
		};
	}, []);

	useEffect(() => {
		let titlePosition = -1;
		const title = document.querySelectorAll("title")[0];
		const handleTitle = {
			active() {
				title.innerHTML = activeTabText[(titlePosition += 1) % activeTabText.length];
			},
			inActive() {
				title.innerHTML = inactiveTabText[(titlePosition += 1) % inactiveTabText.length];
			},
		};
		const nameLoop = setInterval(isActive ? handleTitle.active : handleTitle.inActive, isActive ? 400 : 1000);
		return () => {
			clearInterval(nameLoop);
		};
	}, [isActive]);
    return (
        <Head>
            <title>My Name is Hongjun kim</title>
            <meta charSet="UTF-8" />
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />
			<meta name="description" content={description} />
            <meta name="keywords" content="concern, concernteam" />
			<meta name="author" content="concernteam" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
    )
};

SEO.defaultProps = {
    description : 'Homepage of concernteam'
}

export default SEO;