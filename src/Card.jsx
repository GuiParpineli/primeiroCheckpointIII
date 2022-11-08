//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card(props) {
    return (

        <div className="cardItem" style={{backgroundColor: props.values.codigo}} >
            <p>{props.values.color}</p>
            <h2>{props.values.codigo}</h2>
        </div>
    )
}