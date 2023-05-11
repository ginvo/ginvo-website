import '../styles/main.sass'
// Poder importar directamente sass es gracias a Next y su built-in sass que se configura en next.config
import { ThemeProvider } from 'next-themes'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <ThemeProvider>
      <SessionContextProvider
        supabaseClient={supabase}
      >

        <Component
          {...pageProps}
        />
      </SessionContextProvider>
    </ThemeProvider>
  )
}
