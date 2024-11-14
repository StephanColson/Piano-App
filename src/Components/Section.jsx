import {Col,Row} from "react-bootstrap";

export function Section(props) {
    const {type, children} = props;
    return (
        <div className="mb-4">
            <Row>
                <Col>
                    <h2>{type}</h2>
                </Col>
            </Row>
            <Row className="justify-content-start">
                {children}
            </Row>
        </div>
    )
}