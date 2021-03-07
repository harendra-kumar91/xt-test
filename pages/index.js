import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SpaceLaunch from '../component/spaceLaunch';




const Home = (prop) => {
  // console.log(prop);
  
  return(
    <div className={styles.customContainerFluid}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SpaceLaunch {...prop} />

    </div> 
  )

}




export async function getStaticProps() {
  const resp = await fetch('https://api.spaceXdata.com/v3/launches?limit=100');
  const data = await resp.json();
  console.log("call API: ");

  return {
    props: {data: data}
  }
}



export default Home;