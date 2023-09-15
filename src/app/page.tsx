"use client";
import styles from './page.module.css'
import { useGetNews } from '@/hooks/useNews';
import LoadingList from './components/LoadingList';
import ListNews from './components/ListNews';
import Error from 'next/error';

export default function Home() {
  const { data, isError, isLoading } = useGetNews()
  if (isError) {
    return <Error statusCode={404} />
  }

  return (
    <main className='container'>
      <h2 className={styles.h2}>
        List of all the posts
      </h2>
      {isLoading ? (
        <LoadingList />
      ) : (
        <ListNews data={data} />
      )}
    </main>
  )
}
