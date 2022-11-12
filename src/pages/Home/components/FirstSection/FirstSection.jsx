import './firstSection.scss'
import { img01, img02, img03, img04, cardFirst, cardSecond, buildingIcon } from "./assets";
import { Link } from "../../../../components/Link/Link"

export default function () {
  return (
    <section className="firstSection">
      <div className="container">
        <div className="row">
          <img src={img01} alt="firstImg" />
          <img src={img02} alt="secondImg" />
          <img src={img03} alt="thirdImg" />
          <img src={img04} alt="fourthImg" />
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
            <Link className='link accentColor'>Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

