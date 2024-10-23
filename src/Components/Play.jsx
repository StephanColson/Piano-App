import { useEffect, useState } from 'react';
import {Piano, MidiNumbers, KeyboardShortcuts} from "react-piano";
import "react-piano/dist/styles.css";
import Soundfont from 'soundfont-player';

export function Play() {
    const [audioContext, setAudioContext] = useState(null);
    const [soundfont, setSoundfont] = useState(null);

    // Initialize audio context and load piano sounds when component mounts
    useEffect(() => {
        const context = new (window.AudioContext || window.webkitAudioContext)();
        setAudioContext(context);

        Soundfont.instrument(context, 'acoustic_grand_piano').then((instrument) => {
            setSoundfont(instrument);
        });
    }, []);

    const firstNote = MidiNumbers.fromNote('c3'); // Lowest note
    const lastNote = MidiNumbers.fromNote('f5');  // Highest note
    const keyboardShortcuts = KeyboardShortcuts.create(
        {
            firstNote: firstNote,
            lastNote: lastNote,
            keyboardConfig: KeyboardShortcuts.HOME_ROW,
        }
    );

    const playNote = (midiNumber) => {
        if (soundfont) {
            soundfont.play(midiNumber);
        }
    };

    const stopNote = (midiNumber) => {
        if (soundfont) {
            soundfont.stop(midiNumber);
        }
    };

    return (
        <Piano
            noteRange={{ first: firstNote, last: lastNote }}
            playNote={playNote}
            stopNote={stopNote}
            width={1000}
            keyboardShortcuts={keyboardShortcuts}
        />
    );
}
