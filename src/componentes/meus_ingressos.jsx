import styles from './meus_ingressos.module.css'
import icon from "./image.svg";
import icon2 from "./icon.svg";
import image from "./icon-2.svg";
import "./content.css";

export function Ingresso (){

const ingressosComprados = 0;

    return (
        <div className={styles.voce_tem}>
            <div className={styles.texto_um}>
            <h1 >Você tem <span className={styles.numero}> {ingressosComprados}</span> ingressos disponíveis</h1>
            <h1>no momento.</h1>

            </div>

            <div className={styles.texto_dois}>
            <h1>Garanta sua proxima sessão no</h1>
            <h1>botão abaixo.</h1>

        <div className={styles.botaoDeComprar}>
                    
                    
                    
            <div>
                <div className="content">
                    <button className="button">
                        <div className="icon-wrapper">
                        <img className="img" alt="Icon" src={image} />
                        </div>
                        <div className="text-wrapper-2">COMPRAR INGRESSO</div>
                     </button>
                            
                </div>
            </div>
        </div>

            </div>
        </div>
    )
}