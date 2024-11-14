import {Container, Form, Row} from "react-bootstrap";
import { Section } from "../Components/Section.jsx";
import { SectionCards } from "../Components/SectionCards.jsx";
import { Instrument } from "../Components/Instrument.jsx";

export function InstrumentTab(props) {
    const { instruments, searchQuery, setSearchQuery } = props;

    // Filter instruments by name or type
    const filteredInstruments = instruments.filter(instrument =>
        instrument.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        instrument.type.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Group the filtered instruments by type
    const groupedInstruments = filteredInstruments.reduce((acc, instrument) => {
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

            {/* Search Input */}
            <Form className="my-2">
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Type an instrument name or genre"
                        value={searchQuery}  // Bind the input value to searchQuery
                        onChange={(e) => setSearchQuery(e.target.value)}  // Update searchQuery when input changes
                    />
                </Form.Group>
            </Form>

            {/* Render grouped instruments */}
            {Object.keys(groupedInstruments).map((type) => (
                <Section key={type} type={type}>
                    <Row className="justify-content-start">
                        {groupedInstruments[type].map(instrument => (
                            <SectionCards key={instrument.id}>
                                <Instrument instruments={[instrument]} />  {/* Pass the filtered instrument */}
                            </SectionCards>
                        ))}
                    </Row>
                </Section>
            ))}
        </Container>
    );
}
