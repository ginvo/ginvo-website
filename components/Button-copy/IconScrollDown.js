import React, { Component } from "react";
import { ReactComponent as IconLineChevronDownBig } from "../../assets/Icon/Line/chevron-down-big.svg";

class IconScrollDown extends Component {
	render() {
		return (
			<div className='Icon-Scroll-Down'>
				<figure className='Molecule-Button-Icon-Box'>
					<a href={"#Discover"} rel='noopener noreferrer'>
						<IconLineChevronDownBig />
					</a>
				</figure>
			</div>
		);
	}
}

export default IconScrollDown;
