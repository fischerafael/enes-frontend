import React from 'react'

import GlobalStyle from '../styles/main'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <GlobalStyle />
        </>
    )
}

