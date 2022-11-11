import './contactUs.scss'
import Person from "./assets/person.png";
import { Button } from '../../../../components/Button/Button';

export default function ContactUs() {
  return (
    <section className='contactUs'>
      <div className="container">
        <div className="wrapper">
          <div className="content">
            <h1 className='title'>Get experience from the expert</h1>
            <p>Quid ex eo ortum, tam inportuno tamque crudeli; sin, ut aliquid ex</p>
            <Button className='button thirdAccentColor'>Contact us</Button>
          </div>
          <div className="imgPerson">
            <img src={Person} alt="Person" />
          </div>
        </div>
      </div>
    </section>
  )
}
