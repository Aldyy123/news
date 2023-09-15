"use client";
import { getArticle } from "@/reducers/slices/news.slice";
import { Button, Card } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import Head from "next/head";
import { redirect, useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";



export default function Detail() {
    const router = useRouter();
    const article = useRecoilValue(getArticle);
    if (!article) redirect('/')
    const goBackToList = () => {
        router.push('/');
    };

    const time = new Date(article.publishedAt).toDateString()

    return (
        <>
            <Head>
                <title>{article.title}</title>
            </Head>
            <div className="container" style={{ marginTop: 20 }}>
                <Button type="primary" onClick={goBackToList}>
                    Back to List
                </Button>
                <Card
                    style={{ width: '600px', margin: '0 auto' }}
                >
                    <Title level={2}>{article.author}</Title>
                    <Paragraph>{article.title}</Paragraph>
                    <Paragraph>{article.description}</Paragraph>
                    <Paragraph>{article.content}</Paragraph>
                    <Paragraph>{article.urlToImage}</Paragraph>
                    <Paragraph>Sumber : {article.source.name}</Paragraph>
                    <Paragraph>{time}</Paragraph>
                    <a href={article.url} target="_blank">Pergi ke sumber halaman berita?</a>
                </Card>
            </div>

        </>
    )
}