import icon from "./image.svg";
import icon2 from "./icon.svg";
import image from "./icon-2.svg";
import "./content.css";

export const Content = () => {
    return (
        <div className="content">
            <div className="overlay-border">
                <div className="container">
                    <img className="icon" alt="Icon" src={icon} />
                </div>
                <div className="text-wrapper">PRÉ-ESTREIA EXCLUSIVA</div>
            </div>
            <div className="heading">
                <div className="div">DUNA: PARTE 2</div>
            </div>
            <div className="shadow">
                <p className="o-pico-continua">
                    O épico continua. Acompanhe a jornada mítica de Paul Atreides enquanto
                    <br />
                    ele se une a Chani e aos Fremen em uma guerra de vingança contra os
                    <br />
                    conspiradores que destruíram sua família.
                </p>
            </div>
            <div className="margin">
                <div className="container-2">
                    <button className="button">
                        <div className="icon-wrapper">
                            <img className="img" alt="Icon" src={image} />
                        </div>
                        <div className="text-wrapper-2">COMPRAR INGRESSO</div>
                    </button>
                    <button className="button-2">
                        <div className="icon-wrapper">
                            <img className="icon-2" alt="Icon" src={icon2} />
                        </div>
                        <div className="text-wrapper-3">VER TRAILER</div>
                    </button>
                </div>
            </div>
        </div>
    );
};
