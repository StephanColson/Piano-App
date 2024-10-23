//List All the instrument
export function Instrument(props){
    const {instruments} = props;

    return (
        <>
            {instruments.map(instru => <div key={instru.id}>
                <p>Name: {instru.name} - Type: {instru.type}</p>
            </div>)}
        </>
    )
}