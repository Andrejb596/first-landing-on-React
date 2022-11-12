import './benefits.scss'
import { Ability } from "./components/Ability/Ability";
import { IconAuthenticity, IconEntrepreneurship, IconPerformance, IconKindness } from "./assets/icons";

export default function () {
    return (
        <section className='benefits'>
            <div className="container">
                <h1 className='title'>Why choose us?</h1>
                <div className="content">
                    <Ability>
                        <IconAuthenticity />
                        <h3>Performance</h3>
                        <p>Torquem detraxit hosti et quidem se texit, ne ad.</p>
                    </Ability>
                    <Ability>
                        <IconEntrepreneurship />
                        <h3>Entrepreneurship</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </Ability>
                    <Ability>
                        <IconPerformance />
                        <h3>Authenticity</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                    </Ability>
                    <Ability>
                        <IconKindness />
                        <h3>Kindness</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit.</p>
                    </Ability>
                </div>
            </div>
        </section>
    )
}
