import { IResponseArticles } from "@/domain/entities/news.entity";
import CardUI from "@/infrastructures/ui/Card";
import { Col, Row } from "antd";
import Link from "next/link";

interface Props {
    data: IResponseArticles | undefined
}

export default function ListNews({
    data
}: Props) {
    
    return (
        <>
            <div>
                <Row gutter={16}>
                    {data?.articles.map((item, index) => (
                        <Col style={{
                            marginTop: 16
                        }} key={index} span={8}>
                            <CardUI data={item} />
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}