import { useTheme } from 'next-themes'

const ToggleDarkmode = ({ iconToDark, iconToLight }) => {
    const { setTheme, resolvedTheme } = useTheme()

    const handleDarkMode = () => {
        setTheme(resolvedTheme == 'dark' ? 'light' : 'dark')
    }

    return (
        <>
            <figure className='button-icon-box'>
                <a
                    onClick={handleDarkMode}
                >
                    {resolvedTheme == 'dark' ? iconToLight : iconToDark}
                </a>
            </figure>
        </>
    )
}

export default ToggleDarkmode