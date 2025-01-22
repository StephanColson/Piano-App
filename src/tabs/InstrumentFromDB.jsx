import {firestoreDB} from "../services/firebase.js";
import {collection} from "firebase/firestore";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Instrument} from "../Components/Instrument.jsx";

const instrumentConverter = {
    toFirestore: undefined,
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id}
    }
}

export function InstrumentFromDB(props){
    const {searchQuery, setSearchQuery, onDataFetched} = props;
    const collectionRef = collection(firestoreDB, 'Instruments').withConverter(instrumentConverter);
    const [values, loading, error] = useCollectionData(collectionRef);
    console.log({values, loading, error});

    if (values && onDataFetched) {
        onDataFetched(values);
    }

    return(
        <Instrument instruments={values}/>
    )
}