import './footer.scss'
import SocialLink from "./components/SocialLink/SocialLink";
import { facebook, linkedin, twitter, youtube } from "./assets/socialIcons";
import { Logo } from "../Logo/Logo";

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="wrapper">
          <div className="info">
            <Logo>CutSpace</Logo>
            <p>Quae fuerit causa, nollem me ab illo inventore veritatis et.</p>
            <div className="socials">
              <SocialLink href="#/Home">
                <img src={facebook} alt="facebook" />
              </SocialLink>
              <SocialLink href="#/Home">
                <img src={linkedin} alt="linkedin" />
              </SocialLink>
              <SocialLink href="#/Home">
                <img src={twitter} alt="twitter" />
              </SocialLink>
              <SocialLink href="#/Home">
                <img src={youtube} alt="youtube" />
              </SocialLink>
            </div>
          </div>
          <div className="nav">
            <div className="blockPrivacy">
              <h4>Privacy</h4>
              <ul>
                <li>
                  <a href="#/Home">Si sine causa</a>
                </li>
                <li>
                  <a href="#/Home">Certe, inquam</a>
                </li>
                <li>
                  <a href="#/Home">Torqutos nostros? </a>
                </li>
                <li>
                  <a href="#/Home">Quae fuerit causa</a>
                </li>
              </ul>
            </div>
            <div className="blockPrivacy">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="#/Home">Ut placet, inquam </a>
                </li>
                <li>
                  <a href="#/Home">Certe, inquam</a>
                </li>
                <li>
                  <a href="#/Home">Et quidem rerum</a>
                </li>
                <li>
                  <a href="#/Home">At vero eos et</a>
                </li>
              </ul>
            </div>
            <div className="blockPrivacy">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="#/Home">Primum igitur</a>
                </li>
                <li>
                  <a href="#/Home">Certe, inquam</a>
                </li>
                <li>
                  <a href="#/Home">Quae fuerit causa</a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
