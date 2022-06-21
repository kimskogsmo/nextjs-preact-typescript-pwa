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
                    <meta name="Description" content={`
                        Your meta description goes here, it should probably be around two lines long,
                        maybe somewhere around this length or just a little longer...
                    `} />

                    <meta name="theme-color" content="#000"/>
                    <meta name="referrer" content={'strict-origin'} />
                    <meta httpEquiv="Content-Security-Policy" content={getCsp(NextScript.getInlineScriptSource(this.props))} />

                    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
                    <link rel="manifest" href="/manifest.json" />
                    <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
                    <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
                    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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