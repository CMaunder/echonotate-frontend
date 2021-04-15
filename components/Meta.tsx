import Head from 'next/head'

const Meta = ({title, keywords, description}:{title: string, keywords: string, description: string}) => {
    return <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/echoicon_nb.png'/>
      <title>{title}</title>
    </Head>
   
}
Meta.defaultProps = {
    title: 'echonotate',
    keywords: 'guitar, tab, notes, transcription, transcribe',
    description: 'Generate guitar tabs from the notes you play'
}    

export default Meta