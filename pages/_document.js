import { h } from 'preact'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getLangFromReq } from '../getLangFromRequest'
import { getCsp } from '../getContentSecurityPolicy'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        const lang = getLangFromReq(ctx.req)
        return { ...initialProps, lang }
    }

    render() {
        return (
            <Html lang={this.props.lang} data-theme={'dark'}>
                <Head>
                    <meta name="Description" content="NextJS/PWA/TypeScript/Preact."></meta>
                    <meta name="theme-color" content="#317EFB"/>
                    <meta name="referrer" content={'strict-origin'} />
                    <meta httpEquiv="Content-Security-Policy" content={getCsp(NextScript.getInlineScriptSource(this.props))} />

                    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
                    <link rel="manifest" href="/manifest.json" />
                    <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
                    <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
                    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Work+Sans:wght@300;400;700&display=swap"
                          rel="stylesheet" />

                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument