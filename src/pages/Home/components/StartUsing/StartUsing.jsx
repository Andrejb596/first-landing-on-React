import dashboard from "./assets/dashboard.jpg";
import { Link } from "../../../../components/Link/Link";
import './startUsing.scss'

export default function () {
    return (
        <div className="container">
            <section className='startUsing'>
                <img src={dashboard} alt="dashboard" />
                <div className="text">
                    <h2 className='title'>Start using our product</h2>
                    <p>Quid ex eo ortum, tam inportuno tamque crudeli; sin, ut aliquid ex</p>
                    <div className="btnContainer">
                        <Link className='link accentColor'>Contact Us</Link>
                        <Link className='link secondAccentColor play'>Watch now</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
