import {Dropdown, Form} from "react-bootstrap";

export function ContactTab(){
    return (
        <>
            <h1>Sending Sounds</h1>
            <Form>
                <Form.Group className="my-3">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email"/>
                </Form.Group>

                <Dropdown>
                    <Dropdown.Toggle>
                        Nothing Selected
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>Piano keys</Dropdown.Item>
                        <Dropdown.Item>Instruments</Dropdown.Item>
                        <Dropdown.Item>Information page empty</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Form.Group className="my-3">
                    <Form.Label>Details</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

                <Form.Group className="my-3">
                    <Form.Label>Image/Video</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>

                <Form.Group className="my-3">
                    <Form.Control type="submit"/>
                </Form.Group>
            </Form>
        </>
    )
}