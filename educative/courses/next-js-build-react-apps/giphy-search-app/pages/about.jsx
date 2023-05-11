import Head from 'next/head'
import Footer from '../components/Footer'

export default function About() {

    return (
        <>
            <div className="container">
                <Head>
                    <title>About</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="/styles.css" />
                </Head>
                <h1>About</h1>
                <p>Love giphys? So do we. use our app <b>giphy search</b> to find the perfect giphy for any occasion.</p>

                <h2>Why do people love giphys?</h2>

                <p>Some people may work better with words, others with numbers, but everyone gets pictures. 90% of information transmitted to the human brain is visual.</p>

                <p>The old saying "a picture is worth a thousand words" is quite cliche. But that doesn't make it any less true, especially in marketing and particularly in the instant-gratification, short attention span world we live in today. Getting folks to retain (or even register) your messages and content or take action is harder than ever, especially if all you are giving them is words.</p>

                <p>Images are stronger than words. However, the fast-moving nature of GIFs make them stronger than images and their shorter length make them more digestible than video. That's the short answer.</p>
            </div>
            <Footer />
        </>
    )
}