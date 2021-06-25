import Head from 'next/head'


export default() => (
    <div>
        <Head>
            {/* <meta name="robots" content="noindex" /> */}
            <meta name="keywords" content="DataJoint, datajoint neuro, DataJoint neuro, datajoint, data pipeline, data, neuroscience, AI, machine learning" />
            <meta name="description" content="DataJoint NEURO enables research teams to design scientific 
                        databases and computational pipelines by providing support, resources, and services." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <title>DataJoint NEURO</title>

            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-162022587-2"></script>
            <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-162022587-2');`}}>
            </script>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
            <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />


            <link rel="apple-touch-icon" sizes="180x180" href="/static/images/favicons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicons/favicon-16x16.png" />
            <link rel="manifest" href="/static/images/favicons/site.webmanifest" />
            <link rel="mask-icon" href="/static/images/favicons/safari-pinned-tab.svg" color="#5bbad5" />
            <link rel="shortcut icon" href="/static/images/favicons/favicon.ico" />
            <meta name="msapplication-TileColor" content="#603cba" />
            <meta name="msapplication-config" content="/static/images/favicons/browserconfig.xml" />
            <meta name="theme-color" content="#ffffff" />
            
        </Head>
        <style jsx global>{`
            body {
                margin: 0px;
                padding: 0;
            }
        `}</style>
    </div>
)