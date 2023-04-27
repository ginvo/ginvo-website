import { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

function ButtonSide(props) {
	useEffect(() => {
		(async function () {
			const cal = await getCalApi()
			cal("ui", {
				"styles":
					{ "branding":
						{ "brandColor": "#19192E" }
					},
					"hideEventTypeDetails": false
				})
		})()
	},
	[])

	return (
		<>
			<button
				type="button"
				className="button button-side"
				data-cal-link="galarce/30min"
			>
				{props.text}
			</button>
		</>
	)
}

export default ButtonSide