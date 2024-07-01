import './Navigation.scss';
import Resume from '../../assets/sumant_kumbar_resume.pdf';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__container">
        <li className="nav__item">
          <a href="#about" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#experience" className="nav__link">
            Work
          </a>
        </li>
        <li className="nav__item">
          <a href="#projects" className="nav__link">
            Projects
          </a>
        </li>
        <li className="nav__item">
          <a
            href={Resume}
            target="_blank"
            className="nav__link"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
