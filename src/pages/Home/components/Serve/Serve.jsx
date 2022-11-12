import './serve.scss'
import BuyersIcon from "./assets/BuyersIcon";
import SellerIcon from "./assets/SellerIcon";

export default function Serve() {
  return (
    <section className="serve">
      <div className="container">
        <div className='heading'>
          <h2 className='title'>Who do we serve?</h2>
          <p>Every buyer and seller of tech and services in the world.</p>
        </div>
        <div className='content'>

          <div className="card buyers">
            <BuyersIcon />
            <h3 className='title'>Buyers</h3>
            <p>Torquem detraxit hosti et quidem se texit, ne ad eam.</p>
            <a href="#/Home" className='bigButton'>Get Started</a>
          </div>

          <div className="card seller">
          <SellerIcon />
            <h3 className='title'>Seller</h3>
            <p>Torquem detraxit hosti et quidem se texit, ne ad eam.</p>
            <a href="#/Home" className='bigButton'>Get Started</a>
          </div>
        </div>
      </div>
    </section>
  )
}
