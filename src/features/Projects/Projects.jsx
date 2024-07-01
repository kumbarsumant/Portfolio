import './Projects.scss';
import Card from '../../components/Card/Card';
import Chip from '../../components/Chip/Chip';

const Projects = ({ projects }) => {
  const projectsList = projects.map(
    ({ id, image, title, link, description, skills = [] }) => {
      return (
        <a target="_blank" className="project-card-link" href={link} key={id}>
          <Card className="mg-b--sm">
            <div className="project">
              <div className="project__image__container">
                <img className="project__image" src={image} alt="title" />
              </div>
              <div className="project__body">
                <h4 className="project__body__title mg-b--xs">{title}</h4>
                <p className="project__body__desc mg-b--sm">{description}</p>
                <div className="project__skill-container">
                  {skills.map((skill) => (
                    <Chip key={skill} name={skill}></Chip>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </a>
      );
    }
  );

  return (
    <section id="projects" className="section section--projects">
      <h2 className="heading heading--secondary mg-b--sm">Projects</h2>
      <p className="text mg-b--md">
        Here, you'll find a showcase of the various endeavors I've passionately
        undertaken, allowing me to translate the knowledge acquired through my
        learning journey into practical applications. My portfolio comprises a
        collection of significant projects that not only demonstrate my skillset
        but also exemplify my problem-solving skills. Each project represents an
        opportunity where I've effectively harnessed my understanding to address
        distinct challenges. Explore the following section to delve into the
        details of these remarkable undertakings.
      </p>
      {projectsList}
    </section>
  );
};

export default Projects;
