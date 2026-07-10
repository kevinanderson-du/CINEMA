import './tema.estilos.css'


export function Tema ({ tema }){
    return (
        <div>
             
             <h3 className="titulos-tema"> <img className="icon" alt="Icon" src={tema.icone} />{tema.nome} </h3>
        </div>
        
    )
}