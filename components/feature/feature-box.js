function FeatureBox(props) {
	return (
		<>
			<div className="feature-content">
				<figure
					className="feature-image"
				>
					{props.image}
				</figure>
				<div
					className="feature-group-texts"
				>
					<h3
						className="feature-title"
					>
						{props.title}
					</h3>
					<p
						className="feature-description"
					>
						{props.body}
					</p>
				</div>
			</div>
		</>
	)
}

export default FeatureBox
