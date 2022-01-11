import Head from 'next/head'
import { useRouter } from 'next/router';
import React, {useEffect} from 'react';

export default function Home() {
  const router = useRouter();
  useEffect( async() => {
    router.push('/biblioteca')
  }, []);
  
  return (
    <div className="container">
      <Head>
        <title>Prueba FrontEnd</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </div>
  )
}
