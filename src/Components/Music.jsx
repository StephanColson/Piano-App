import {SectionCards} from "./SectionCards.jsx";
import {Container} from "react-bootstrap";

export function Music(props){
    const {songs = [], onDelete, showDelete = true} = props;
    return(
        <>
            <Container>
                {songs.map(s => <SectionCards key={s.id}>
                    <p>{s.title}</p>
                    {showDelete && (
                        <button onClick={() => onDelete(s.id)}>Delete</button>
                    )}
                </SectionCards>)}
            </Container>
        </>
    )
}