/*import icon from "./reloginho.svg";
import icon2 from "./reloginho.svg";
import icon3 from "./reloginho.svg";
import icon4 from "./reloginho.svg";
import icon5 from "./icone cinema.svg";
import icon6 from "./reloginho.svg";
import icon7 from "./reloginho.svg";
/*import image from "./michael.png";*/
/*import image1 from "./titanic.png";
import moviePoster from "./interestelar.png";
import moviePoster2 from "./the batman.png";
import moviePoster3 from "./toy story.png";
import moviePoster4 from "./devorador.png";
import "./em_cartaz.css";*/

export const EmCartazSection = () => {
    return (
        <div className="em-cartaz-section">
            <div className="container">
                <div className="heading">
                    <div className="icon-wrapper">
                        <img className="icon" alt="Icon" src={icon5} />
                    </div>
                    <div className="text-wrapper">Em Cartaz</div>
                </div>
            </div>
            <div className="div">
                <div className="movie-card">
                    <div className="overlay-border">
                        <img
                            className="movie-poster"
                            alt="Movie poster"
                            src={moviePoster3}
                        />
                        <div className="gradient" />
                        <div className="container-2">
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">Devorador de Estrelas</div>
                            </div>
                            <div className="container-3">
                                <div className="icon-wrapper">
                                    <img className="img" alt="Icon" src={icon4} />
                                </div>
                                <div className="text-wrapper-3">171 min</div>
                            </div>
                        </div>
                        <div className="overlay-overlayblur">
                            <button className="button">
                                <div className="text">Comprar</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="overlay-border-wrapper">
                    <div className="overlay-border">
                        <img
                            className="movie-poster"
                            alt="Movie poster"
                            src={moviePoster2}
                        />
                        <div className="gradient" />
                        <div className="container-2">
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">Toy Story</div>
                            </div>
                            <div className="container-3">
                                <div className="icon-wrapper">
                                    <img className="img" alt="Icon" src={icon3} />
                                </div>
                                <div className="text-wrapper-3">160 min</div>
                            </div>
                        </div>
                        <div className="overlay-overlayblur">
                            <button className="button">
                                <div className="text">Comprar</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="movie-card-2">
                    <div className="overlay-border">
                        <img className="movie-poster" alt="Movie poster" src={image} />
                        <div className="gradient" />
                        <div className="container-2">
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">Titanic</div>
                            </div>
                            <div className="container-3">
                                <div className="icon-wrapper">
                                    <img className="img" alt="Icon" src={icon2} />
                                </div>
                                <div className="text-wrapper-3">171 min</div>
                            </div>
                        </div>
                        <div className="overlay-overlayblur">
                            <button className="button">
                                <div className="text">Comprar</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="movie-card-3">
                    <div className="overlay-border-2">
                        <div className="gradient" />
                        <img className="image" alt="Image" src={image1} />
                        <div className="container-2">
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">Interestelar</div>
                            </div>
                            <div className="container-3">
                                <div className="icon-wrapper">
                                    <img className="img" alt="Icon" src={icon7} />
                                </div>
                                <div className="text-wrapper-3">169 min</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="movie-card-4">
                    <div className="overlay-border">
                        <img
                            className="movie-poster"
                            alt="Movie poster"
                            src={moviePoster}
                        />
                        <div className="gradient" />
                        <div className="container-2">
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">The Batman</div>
                            </div>
                            <div className="container-3">
                                <div className="icon-wrapper">
                                    <img className="img" alt="Icon" src={icon} />
                                </div>
                                <div className="text-wrapper-3">177 min</div>
                            </div>
                        </div>
                        <div className="overlay-overlayblur">
                            <button className="button">
                                <div className="text">Comprar</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="movie-card-5">
                    <div className="overlay-border">
                        <img
                            className="movie-poster"
                            alt="Movie poster"
                            src={moviePoster4}
                        />
                        <div className="gradient" />
                        <div className="container-2">
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">Michael</div>
                            </div>
                            <div className="container-3">
                                <div className="icon-wrapper">
                                    <img className="img" alt="Icon" src={icon6} />
                                </div>
                                <div className="text-wrapper-3">164 min</div>
                            </div>
                        </div>
                        <div className="overlay-overlayblur">
                            <button className="button">
                                <div className="text">Comprar</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
