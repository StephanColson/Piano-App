import {Music} from "../Components/Music.jsx";

export function MusicTab(props){
    const {songs} = props;
    return (
        <div>
            <Music songs={songs}/>
        </div>
    )
}