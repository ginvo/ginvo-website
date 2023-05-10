function FeatureLite(props) {
	return (
		<>
			<div className="feature-content-lite">
				<figure
					className="feature-image-lite"
				>
					{props.icon}
				</figure>
				<h3
					className="feature-title-lite"
				>
					{props.title}
				</h3>
			</div>
		</>
	)
}

export default FeatureLite
