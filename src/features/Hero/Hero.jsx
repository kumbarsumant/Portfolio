import './Hero.scss';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import profileImg from '../../assets/profile.jpg';
import Navigation from '../Navigation/Navigation';

const Hero = () => {
  return (
    <header className="header">
      <div className="hero">
        <div className="img-container mg-b--xs">
          <img className="img-profile" src={profileImg} alt="sumant profile" />
        </div>
        <h1 className="heading heading--primary">Hi, I'm Sumant.</h1>
        <h4 className="heading heading--quaternary mg-b--sm">
          A Software Developer.
        </h4>
        <p className="text hero__text mg-b--md">
          Crafting efficient and inventive software solutions with passion and
          precision.
        </p>
        <ul className="icons-container">
          <li>
            <a href="#" className="icon-link">
              <FaGithub className="icon" />
            </a>
          </li>
          <li>
            <a href="#" className="icon-link">
              <FaLinkedin className="icon" />
            </a>
          </li>
        </ul>
        <Navigation />
      </div>
    </header>
  );
};

export default Hero;
