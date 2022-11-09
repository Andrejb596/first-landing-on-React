import './firstSection.scss'
import firstImg from "./assets/01.svg";
import secontImg from "./assets/02.svg";
import thirdImg from "./assets/03.svg";
import fourthImg from "./assets/04.svg";
import cardSecond from './assets/cards/01.jpg'
import cardFirst from './assets/cards/02.jpg'
import buildingIcon from './assets/bilding.svg'
import { LinkA } from "../../../components/LinkA/LinkA"

export const FirstSection = () => {
    return (
        <div className="firstSection">
            <div className="row">
                <img src={firstImg} alt="firstImg" />
                <img src={secontImg} alt="secontImg" />
                <img src={thirdImg} alt="thirdImg" />
                <img src={fourthImg} alt="fourthImg" />
            </div>
            <div className="objectsRow">
                <div className="objectsImg">
                    <img className='cardFirst' src={cardFirst} alt="cardFirst" />
                    <img className='cardSecond' src={cardSecond} alt="secondFirst" />
                    <div className="imgInfo">
                        <img src={buildingIcon} alt="buildingIcon" />
                        <div className="infoText">
                            <h3>Twelve West Lake</h3>
                            <p>Space for up to 150 people</p>
                        </div>
                    </div>
                </div>
                <div className="objectsText">
                    <div className="textContainer">
                        <h2 className='title'>
                            We provide best space for you!
                        </h2>
                        <p>
                            Quid ex eo ortum, tam inportuno tamque crudeli; sin, ut aliquid ex ea quid est et via procedat oratio quaerimus.
                        </p>
                        <p>
                            quid aut ad id omnia referri oporteat, ipsum autem nusquam hoc epicurus in ea commodi consequatur?
                        </p>
                    </div>
                    <LinkA link='#!' className='link one' title='Learn More' />
                </div>
            </div>
        </div>
    )
}
