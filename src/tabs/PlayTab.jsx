import {Play} from "../Components/Play.jsx";
import {Form} from "react-bootstrap";

export function PlayTab(props){
    const {selectedInstrument, updateInstrument} = props

    return (
        <>
            <Form className="d-flex justify-content-evenly my-2">
                <Form.Group>
                    <Form.Label>Instrument:</Form.Label>
                    <Form.Control type="text" readOnly value={selectedInstrument.name}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Instrument ID:</Form.Label>
                    <Form.Control type="text" readOnly value={selectedInstrument.id}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Music:</Form.Label>
                    <Form.Control type="text"></Form.Control>
                </Form.Group>
            </Form>

            <Play instrument={selectedInstrument} updateInstrument={updateInstrument}/>
        </>
    )
}