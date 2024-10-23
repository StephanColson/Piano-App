import {Col, Container, Row} from "react-bootstrap";

export function Section({type, children}) {
    return (
        <div className="mb-4">
            <Row>
                <Col>
                    <h2>{type}</h2>
                </Col>
            </Row>
            {/* This will contain all the child cards */}
            <Row className="justify-content-start">
                {children}
            </Row>
        </div>
    )
}