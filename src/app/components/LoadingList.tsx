import { Col, Row } from "antd";
import Skeleton from "react-loading-skeleton";

export default function LoadingList() {
    return (
        <>
            <div>
                <Row gutter={16}>
                    <Col span={8}>
                        <Skeleton count={1} height={250} />
                    </Col>
                    <Col span={8}>
                        <Skeleton count={1} height={250} />
                    </Col>
                    <Col span={8}>
                        <Skeleton count={1} height={250} />
                    </Col>
                </Row>
            </div>
        </>
    )
}