import ButtonCta from "../button/button-cta"
import FeatureLite from "../feature/feature-lite"
import IconLineDocuments from "../../public/img/icons/documents.svg"
import IconLinePlug from "../../public/img/icons/plug.svg"
import IconLineMagicwand from "../../public/img/icons/magicwand.svg"

const Hero = (props) => {
	return (
		<>
			<main className='hero-content'>
				<div className='hero-group-texts'>
					<h1 className='hero-title'>
						<span className='hero-title-color'>
							{props.title1}
						</span>
						<br />
						{props.title2}
					</h1>
					<p className='hero-description'>
						{props.body}
					</p>
				</div>
				<div className='hero-group-buttons'>
					<ButtonCta
						text='Avísame cuando estés listo'
					/>
				</div>
				<div className="feature-group-lite">
					<FeatureLite
						icon={<IconLineDocuments/>}
						title='Facturas ilimitadas'
					/>
					<FeatureLite
						icon={<IconLinePlug/>}
						title='Integrado a SII'
					/>
					<FeatureLite
						icon={<IconLineMagicwand/>}
						title='Fácil de usar'
					/>
				</div>
			</main>
		</>
	)
}

export default Hero
