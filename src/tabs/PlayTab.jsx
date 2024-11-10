import {Play} from "../Components/Play.jsx";
import {Form} from "react-bootstrap";

export function PlayTab(props){
    const {instruments, selectedInstrument, updateInstrument} = props

    const handleIdChange = (e) => {
        const newId = Number(e.target.value.trim());  // Convert the input value to a number

        // Find the instrument that matches the numeric ID
        const newInstrument = instruments.find(inst => inst.id === newId);

        if (newInstrument) {
            updateInstrument(newInstrument);
        } else {
            console.log("Invalid ID");
        }
    };

    return (
        <>
            <Form className="d-flex justify-content-evenly my-2">
                <Form.Group>
                    <Form.Label>Instrument:</Form.Label>
                    <Form.Control type="text" readOnly value={selectedInstrument.name}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Instrument ID:</Form.Label>
                    <Form.Control
                        type="text"
                        defaultValue={selectedInstrument.id}
                        onChange={handleIdChange}
                    />
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