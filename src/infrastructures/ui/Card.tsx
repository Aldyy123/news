import { IArticle } from "@/domain/entities/news.entity";
import { Avatar, Card, CardProps } from "antd";
import Meta from "antd/es/card/Meta";
import Link from "next/link";

interface Props{
    data: IArticle
    cardProps?: CardProps
}

export default function CardUI(props: Props) {
    return (
     <Link href={props.data.url}>
        <Card
            style={{ width: 300 }}
        >
            <Meta
                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                title={props.data.author}
                description={props.data.title}
            />
        </Card>
     </Link>
    )
}