import {SectionCards} from "./SectionCards.jsx";
import {Container} from "react-bootstrap";

export function Music(props){
    const {songs = []} = props;
    return(
        <>
            <Container>
                {songs.map(s => <SectionCards key={s.id}>
                    <p>{s.title}</p>
                </SectionCards>)}
            </Container>
        </>
    )
}