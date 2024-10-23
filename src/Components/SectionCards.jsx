import {Card, Col} from "react-bootstrap";

export function SectionCards({children, className}) {
    return (
        <Col sm={12} md={6} lg={4} xl={4}> {/* Responsive column sizes */}
            <Card className="mb-4">
                <Card.Body>{children}</Card.Body>
            </Card>
        </Col>
    );
}
