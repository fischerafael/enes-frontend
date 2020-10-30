import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {

        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {

            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />)
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }

        } finally {

            sheet.seal()

        }       
    }

    render() {
        return (
            <Html>
                <Head>                    
                    <meta />
                    <link 
                        href="https://fonts.googleapis.com/css2?family=Anton&display=swap" 
                        rel="stylesheet"
                    />
                    <link 
                        href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto+Slab&display=swap" 
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }    
}
