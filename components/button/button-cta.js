function ButtonCta(props) {
	const handleClick = (e) => {
		e.preventDefault()
	}

	return (
		<>
			<button
				type="button"
				className="button button-cta"
				onClick={handleClick}
			>
				<span
					className="button-cta-text"
				>
					{props.text}
				</span>
			</button>
		</>
	)
}

export default ButtonCta