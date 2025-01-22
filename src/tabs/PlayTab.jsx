import { Play } from "../Components/Play.jsx";
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Section } from "../Components/Section.jsx";

export function PlayTab(props) {
    const { musicData, instrumentData } = props;

    // Default instrument setup
    const [selectedInstrument, setSelectedInstrument] = useState(
        instrumentData?.find((inst) => inst.id === 1) || {}
    );
    const [currentNotes, setCurrentNotes] = useState([]);
    const [isRecording, setIsRecording] = useState(false);
    const [recordedNotes, setRecordedNotes] = useState([]);
    const [songInput, setSongInput] = useState("");
    const [selectedMusic, setSelectedMusic] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const noteToMidi = {
        c: 60, "c#": 61, d: 62, "d#": 63, e: 64, f: 65, "f#": 66, g: 67, "g#": 68, a: 69, "a#": 70, b: 71,
        c5: 72, "c#5": 73, d5: 74, "d#5": 75, e5: 76, f5: 77, "f#5": 78, g5: 79, "g#5": 80, a5: 81, "a#5": 82, b5: 83,
        c6: 84, "c#6": 85, d6: 86, "d#6": 87, e6: 88, f6: 89, "f#6": 90, g6: 91, "g#6": 92, a6: 93, "a#6": 94, b6: 95,
    };

    const toggleRecording = () => {
        setIsRecording(!isRecording);
    };

    const handleIdChange = (e) => {
        const newId = Number(e.target.value.trim());
        const newInstrument = instrumentData.find((inst) => inst.id === newId);

        if (newInstrument) {
            setSelectedInstrument(newInstrument);
        } else {
            console.log("Invalid ID");
        }
    };

    const handleSongInputChange = (e) => {
        setSongInput(e.target.value);
    };

    const handleStartSong = () => {
        const song = musicData.find(
            (s) => s.title.toLowerCase() === songInput.trim().toLowerCase()
        );

        if (song) {
            setSelectedMusic(song);
            console.log(`Song selected: ${song.title}`);
            console.log(`Song sequence: ${song.sequence}`);
            playSongSequence(song.sequence);
        } else {
            console.log("Song not found");
        }
    };

    const playSongSequence = (sequence) => {
        const notes = sequence.split(",");
        setIsPlaying(true);
        let delay = 0;

        notes.forEach((note, index) => {
            const midiNote = noteToMidi[note.toLowerCase()];
            if (midiNote) {
                setTimeout(() => {
                    handleNotesChange([note]);

                    console.log(`Playing note: ${note} (MIDI: ${midiNote})`);

                    setTimeout(() => {
                        // Simulate stopping the note
                    }, 500);
                }, delay);

                delay += 500;
            }
        });
        setTimeout(() => setIsPlaying(false), delay);
    };

    const handleNotesChange = (notes) => {
        setCurrentNotes(notes);

        if (isRecording && notes.length > 0) {
            setRecordedNotes((prevNotes) => [...prevNotes, ...notes]);
        }
    };

    const handleClearNotes = () => {
        setRecordedNotes([]);
    };

    const handlePlayRecord = () => {
        if (recordedNotes.length === 0) {
            return;
        }

        setIsPlaying(true);
        let delay = 0;

        recordedNotes.forEach((note, index) => {
            setTimeout(() => {
                handleNotesChange([note]);

                if (index === recordedNotes.length - 1) {
                    setIsPlaying(false);
                }
            }, delay);
            delay += 500;
        });
    };

    return (
        <>
            <Form className="d-flex justify-content-evenly my-2">
                <Form.Group>
                    <Form.Label>Instrument:</Form.Label>
                    <Form.Control
                        type="text"
                        readOnly
                        value={selectedInstrument?.name || "Unknown"}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Instrument ID:</Form.Label>
                    <Form.Control
                        type="text"
                        defaultValue={selectedInstrument?.id || ""}
                        onChange={handleIdChange}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Music:</Form.Label>
                    <Form.Control
                        type="text"
                        value={songInput}
                        onChange={handleSongInputChange}
                        placeholder="Type the song name"
                    />
                    <Button className="mt-1" onClick={handleStartSong}>
                        Play
                    </Button>
                </Form.Group>
            </Form>

            <Play
                instrument={selectedInstrument}
                updateInstrument={setSelectedInstrument}
                onNoteChange={handleNotesChange}
            />

            <Section className="d-flex mt-2">
                <h3>Note:</h3>
                <div>
                    {currentNotes.length > 0
                        ? currentNotes.map((note, index) => (
                            <span key={index}>{`Note: ${note} `}</span>
                        ))
                        : "No notes pressed"}
                </div>
            </Section>

            <Section>
                <Button
                    onClick={toggleRecording}
                    disabled={isPlaying}
                    className="mb-2"
                >
                    {isRecording ? "Stop Recording" : "Record"}
                </Button>

                <Button
                    onClick={handleClearNotes}
                    disabled={isPlaying}
                    className="mb-2"
                >
                    Clear
                </Button>

                <Button
                    onClick={handlePlayRecord}
                    disabled={isRecording || isPlaying}
                    className="mb-2"
                >
                    Play
                </Button>
                <div className="my-2">
                    <h3>Recorded Notes:</h3>
                    <div>
                        {recordedNotes.length > 0
                            ? recordedNotes.map((note, index) => (
                                <span key={index}>{`Note: ${note} `}</span>
                            ))
                            : "No recorded notes"}
                    </div>
                </div>
            </Section>
        </>
    );
}
