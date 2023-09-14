"use client";
import styles from './page.module.css'
import { useGetNews } from '@/hooks/useNews';
import LoadingList from './components/LoadingList';
import ListNews from './components/ListNews';

export default function Home() {
  const { data, isError, error, isLoading } = useGetNews()

  return (
    <main className={styles.main}>
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
