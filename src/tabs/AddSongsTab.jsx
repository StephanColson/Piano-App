import { useState } from "react";
import { Section } from "../Components/Section.jsx";
import { Form, Button, Container } from "react-bootstrap";
import { Music } from "../Components/Music.jsx";

export function AddSongsTab() {
    const [title, setTitle] = useState('');
    const [sequence, setSequence] = useState('');
    const [songs, setSongs] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newSong = {
            id: Date.now(),
            title: title,
            sequence: sequence,
        };

        setSongs([...songs, newSong]);
        setTitle("");
        setSequence("");
    };

    return (
        <Section>
            <h1>Ready to create or add songs?</h1>

            <Form onSubmit={handleSubmit} className="my-3">
                <Form.Group>
                    <Form.Label>Title:</Form.Label>
                    <Form.Control
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Sequence:</Form.Label>
                    <Form.Control
                        type="text"
                        value={sequence}
                        onChange={(e) => setSequence(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button type="submit" className="mt-2">Add Song</Button>
            </Form>

            <h2>Available Songs</h2>
            <Container>
                <Music songs={songs}/>
            </Container>
        </Section>
    );
}
