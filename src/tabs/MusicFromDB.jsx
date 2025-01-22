import {Music} from "../Components/Music.jsx";
import {collection, addDoc, deleteDoc, doc} from "firebase/firestore";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {firestoreDB} from "../services/firebase.js";
import {useState} from "react";
import {Section} from "../Components/Section.jsx";
import {Button, Form} from "react-bootstrap"; // Import PlayTab component

const musicConverter = {
    toFirestore: function (dataInApp) {
        return {
            title: dataInApp.title,
            sequence: dataInApp.sequence,
        };
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id, ref: snapshot.ref};
    }
};

export function MusicFromDB(props) {
    const {searchQuery, setSearchQuery, onDataFetched} = props;
    const [title, setTitle] = useState('');
    const [sequence, setSequence] = useState('');

    const collectionRef = collection(firestoreDB, 'Songs').withConverter(musicConverter);
    const [values, loading, error] = useCollectionData(collectionRef);

    if (values && onDataFetched) {
        onDataFetched(values);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newSong = {
            title: title,
            sequence: sequence,
        };

        try {
            await addDoc(collectionRef, newSong);
            setTitle("");
            setSequence("");
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    const handleDelete = async (songId) => {
        const songDocRef = doc(firestoreDB, "Songs", songId);

        try {
            await deleteDoc(songDocRef);
            console.log("Song deleted successfully!");
        } catch (error) {
            console.error("Error deleting document: ", error);
        }
    };

    return (
        <Section>
            <h2>Add a New Song</h2>
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
            {loading && <p>Loading songs...</p>}
            {error && <p>Error: {error.message}</p>}

            <Music songs={values} onDelete={handleDelete} />
        </Section>
    );
}
