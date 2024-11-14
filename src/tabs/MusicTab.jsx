import { Music } from "../Components/Music.jsx";
import { Form } from "react-bootstrap";

export function MusicTab(props) {
    const { songs, searchQuery, setSearchQuery } = props;

    const searchFilter = songs.filter(song =>
        song.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <Form className="mb-3">
                <Form.Label htmlFor="find">Search for a Song:</Form.Label>
                <Form.Control
                    id="find"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Type song name here..."
                />
            </Form>

            <Music songs={searchFilter} />
        </>
    );
}
