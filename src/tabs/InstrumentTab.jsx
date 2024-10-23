import { Container, Row } from "react-bootstrap";
import { Section } from "../Components/Section.jsx";
import { SectionCards } from "../Components/SectionCards.jsx";
import { Instrument } from "../Components/Instrument.jsx";

export function InstrumentTab({ instruments }) {
    // Group instruments by their type
    const groupedInstruments = instruments.reduce((acc, instrument) => {
        const { type } = instrument;
        if (!acc[type]) {
            acc[type] = [];
        }
        acc[type].push(instrument);
        return acc;
    }, {});

    return (
        <Container>
            <h1>List of Instruments</h1>
            {Object.keys(groupedInstruments).map((type) => (
                <Section key={type} type={type}>
                    <Row className="justify-content-start"> {/* Flexbox for aligning cards */}
                        {groupedInstruments[type].map(instrument => (
                            <SectionCards key={instrument.id}> {/* Render each instrument as a SectionCard */}
                                <Instrument instruments={[instrument]} />
                            </SectionCards>
                        ))}
                    </Row>
                </Section>
            ))}
        </Container>
    );
}
