import './tema.estilos.css'
import icon5 from "./icone cinema.svg";

export function Tema ({ tema }){
    return (
        <div>
             
             <h3 className="titulos-tema"> <img className="icon" alt="Icon" src={icon5} /> {tema.nome} </h3>
        </div>
        
    )
}