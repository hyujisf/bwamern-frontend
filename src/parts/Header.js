import React from "react"

import Button from "elements/Button"
import BrandIcon from "parts/IconText"

export default function Header(props) {
	const { pathname } = props.location

	return (
		<header className='spacing-sm'>
			<div className='container'>
				<nav className='navbar navbar-expand-lg navbar-light'>
					<BrandIcon />
					<div className='collapse navbar-collapse'>
						<ul className='navbar-nav ml-auto'>
							<li className={`nav-item${pathname === "/" ? "active" : ""}`}>
								<Button className='nav-link' type='link' href='/'>
									Home
								</Button>
							</li>
							<li
								className={`nav-item${
									pathname === "/browse-by" ? "active" : ""
								}`}
							>
								<Button className='nav-link' type='link' href='/browse-by'>
									Browse By
								</Button>
							</li>
							<li
								className={`nav-item${pathname === "/stories" ? "active" : ""}`}
							>
								<Button className='nav-link' type='link' href='/stories'>
									Stories
								</Button>
							</li>
							<li
								className={`nav-item${pathname === "/agents" ? "active" : ""}`}
							>
								<Button className='nav-link' type='link' href='/agents'>
									Agents
								</Button>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
	)
}
