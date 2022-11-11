import './testImonial.scss'
import { SelfCard } from "./components/SelfCard/SelfCard";
import { img01, img02, img03, designElement } from "./assets";

export default function () {
  return (
    <section className='testImonial'>
      <div className="container">
        <div className="heading">
          <h2 className='title'>Thanks for your nice words to us</h2>
          <p>Si sine causa, nollem me tamen laudandis maioribus meis corrupisti nec voluptas</p>
        </div>
        <div className="content">
          <SelfCard>
            <img src={img02} alt="img01" />
            <div className="cardContent">
              <p className='text'>"Omne animal, simul atque integre iudicante itaque earum motus et."</p>
              <h3>Arend Pellewever</h3>
              <p className="country">Baltimore</p>
            </div>
          </SelfCard>
          <SelfCard>
            <img src={img03} alt="img01" />
            <div className="cardContent">
              <p className='text'>"Omne animal, simul atque integre iudicante itaque earum motus et."</p>
              <h3>Leo Knight</h3>
              <p className="country">Cleveland</p>
            </div>
          </SelfCard>
          <SelfCard>
            <img src={img01} alt="img01" />
            <div className="cardContent">
              <p className='text'>"Omne animal, simul atque integre iudicante itaque earum motus et."</p>
              <h3>Lisanne Viscaal</h3>
              <p className="country">Lyon</p>
            </div>
          </SelfCard>
          <img className='designElement' src={designElement} alt="designElement" />
        </div>
      </div>
    </section>
  )
}
