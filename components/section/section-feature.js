import FeatureBox from "../feature/feature-box"
import ButtonCta from "../button/button-cta"
// import IconLineMagic from "../../public/img/icon/line/magic.svg"
// import IconSolidBolt from "../../public/img/icon/solid/bolt.svg"
// import IconLineCode from "../../public/img/icon/line/code.svg"
// import IconLineSearch from "../../public/img/icon/line/search.svg"
// import IconLineUserPin from "../../public/img/icon/line/user-pin.svg"
// import IconLineTarget from "../../public/img/icon/line/target.svg"

function SectionFeature(props) {
	return (
		<>
			<section
				id='Discover'
				className='section-container'
			>
				<div
					className='section-group-texts'
				>
					<h2
						className='section-title'
					>
						<span
							className='section-title-gradient'
						>
							{props.title1}
						</span>
						<br />
						{props.title2}
					</h2>
				</div>
				<div
					className='features-group'
				>
					{/* <FeatureBox
						icon={<IconLineMagic
							viewBox="0 0 24 24"
						/>}
						title='Mejor interfaz'
						body='Una plataforma más cómoda e inteligente. Mejores botones, mejores campos de texto y más.'
					/>
					<FeatureBox
						icon={<IconSolidBolt
							viewBox="0 0 24 24"
						/>}
						title='Desde cualquier lugar'
						body='Un servicio en línea. Solo necesitas internet y tus credenciales para acceder y firmar.'
					/>
					<FeatureBox
						icon={<IconLineCode
							viewBox="0 0 24 24"
						/>}
						title='Configuración simple y rápida'
						body='Comienza a crear facturas e ingresa tus credenciales para firmar'
					/> */}
				</div>
				<ButtonCta
					text='Know more about ultra powers'
				/>
			</section>
		</>
	)
}

export default SectionFeature
