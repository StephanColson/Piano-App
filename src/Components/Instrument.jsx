export function Instrument(props){
    const {instruments} = props;

    return (
        <>
            {instruments.map(instru => <div key={instru.id}>
                <p>{instru.name} (code: {instru.id})</p>
            </div>)}
        </>
    )
}