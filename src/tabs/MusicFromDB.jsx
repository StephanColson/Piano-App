import {Music} from "../Components/Music.jsx";
import {collection} from "firebase/firestore";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {firestoreDB} from "../services/firebase.js";

const musicConverter = {
    toFirestore: undefined,
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id}
    }
}

export function MusicFromDB(){
    const collectionRef = collection(firestoreDB, 'songs').withConverter(musicConverter);
    const [values, loading, error] = useCollectionData(collectionRef);
    console.log({values, loading, error});
    return(
        <Music songs={values}/>
    )
}