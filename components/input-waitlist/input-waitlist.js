import { useState } from "react"
import { useSupabaseClient } from "@supabase/auth-helpers-react"

const InputWaitlist = () => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const supabase = useSupabaseClient()

    const handleSignup = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            const { data, error } = await supabase.auth.signUp({
                email,
                password: '123456' // Por defecto para que Supabase lo almacene.
            })
            if (error) throw error
        } catch (error) {
            console.log(error.error_description || error.message)
        } finally {
            setLoading(false)
            alert('Gracias por tu interés en Ginvo.')
        }
    }

    return (
        <>
            <div className="contain">
                <form
                    className="waitlist"
                    onSubmit={handleSignup}
                >
                    <div>
                        <input
                            className="input"
                            name="email"
                            type="email"
                            value={email}
                            placeholder="Escríbeme tu email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button
                        className="button button-cta"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? 'Enviando...' : 'Avísame cuando estés listo'}
                    </button>
                    {/* {hintError && <p>{hintError}</p>} */}
                </form>
            </div>
        </>
    )
}

export default InputWaitlist