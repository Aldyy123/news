import { IArticle } from "@/domain/entities/news.entity";
import { articleState } from "@/reducers/slices/news.slice";
import { Avatar, Card, CardProps } from "antd";
import Meta from "antd/es/card/Meta";
import Link from "next/link";
import { useRecoilState } from "recoil";

interface Props {
    data: IArticle
    cardProps?: CardProps
}

export default function CardUI(props: Props) {
    const uniqueUrl = props.data.url.split('/')[5]
    const [article, setArticle] = useRecoilState(articleState);

    return (
        <Link href={`/detail/${uniqueUrl}`} onClick={() => setArticle(props.data)}>
            <Card>
                <Meta
                    title={props.data.author}
                    description={props.data.title}
                />
            </Card>
        </Link>
    )
}