import Head from 'next/head'
import Header from '@includes/header'
import Footer from '@includes/footer'
import styles from '../styles/layout.module.scss'

export default function DefaultLayout(props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Head>
          <title>{props.title}</title>
          <meta name='description' content={props.description}/>
        </Head>
        <Header/>
        {props.children}
        <Footer/>
      </main>
    </div>
  )
}
