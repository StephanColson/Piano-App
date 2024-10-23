import {Instrument} from "../Components/Instrument.jsx";

export function InformationTab(props){
    const {instruments} = props;
    return (
        <>
            <div>
                <h1>List of Music & Instruments</h1>
                <Instrument instruments={instruments}/>
            </div>
        </>
    )
}