import './header.scss'
import headerImg from './assets/headerImg.jpg'
import { Form } from "../../../../components/Form/Form";

export default function () {

  return (
    <section className='header'>
      <div className="container">
        <div className="headerRow">
          <div className="rightContainer">
            <h1 className='title'>
              Find your custom matched commercial real estate space.
            </h1>
            <p>
              In oculis quidem exercitus quid ex ea consequatur? autem vel eum fugiat, quo pertineant ero tibique
            </p>
            <Form />
          </div>
          <div className="leftContainer">
            <img src={headerImg} alt="headerImg" />
          </div>
        </div>
      </div>
    </section>
  )
}

