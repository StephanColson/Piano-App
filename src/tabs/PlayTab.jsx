import {Play} from "../Components/Play.jsx";
import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import {Section} from "../Components/Section.jsx";

export function PlayTab(props){
    const {instruments, selectedInstrument, updateInstrument, songs} = props

    const [currentNotes, setCurrentNotes] = useState([]);

    const [selectedSong, setSelectedSong] = useState(null);
    const [songInput, setSongInput] = useState("");

    const handleIdChange = (e) => {
        const newId = Number(e.target.value.trim());

        const newInstrument = instruments.find(inst => inst.id === newId);

        if (newInstrument) {
            updateInstrument(newInstrument);
        } else {
            console.log("Invalid ID");
        }
    };

    const handleSongInputChange = (e) => {
        setSongInput(e.target.value); // Update the input field value
    };

    // Find the song based on the user input and log the sequence
    const handleStartSong = () => {
        // Find the song based on the user input
        const song = songs.find((s) => s.title.toLowerCase() === songInput.trim().toLowerCase());

        if (song) {
            setSelectedSong(song);
            console.log(`Song selected: ${song.title}`);
            console.log(`Song sequence: ${song.sequence}`);
        } else {
            console.log("Song not found");
        }
    };

    const handleNotesChange = (notes) => {
        setCurrentNotes(notes);
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
                    <Form.Control type="text" defaultValue={songInput}
                                  onChange={handleSongInputChange}
                                  placeholder="Type the song name"></Form.Control>
                    <Button className="mt-1" onClick={handleStartSong}>Play</Button>
                </Form.Group>
            </Form>

            <Play instrument={selectedInstrument} updateInstrument={updateInstrument} onNoteChange={handleNotesChange}/>

            <Section className="d-flex mt-2">
                <h3>Recorded Notes:</h3>
                <div>
                    {currentNotes.length > 0
                        ? currentNotes.map((note, index) => <span key={index}>{`Note: ${note} `}</span>)
                        : <span>No notes pressed</span>
                    }
                </div>
            </Section>
        </>
    )
}