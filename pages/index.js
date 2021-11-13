import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore
          magna aliqua. Facilisi morbi tempus iaculis urna id volutpat lacus. Commodo ullamcorper a lacus vestibulum sed
          arcu non odio.</p>
        <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
      </div>
    </>
  );
}
