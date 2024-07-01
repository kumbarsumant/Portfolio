import './Experience.scss';
import Card from '../../components/Card/Card';
import Chip from '../../components/Chip/Chip';

const Experience = ({ experiences }) => {
  const expList = [...experiences]
    .reverse()
    .map(({ startYear, endYear, role, skills, id, description, company }) => {
      return (
        <Card key={id} className="mg-b--sm">
          <div className="experience">
            <div className="experience__timeline">
              <p className="experience__timeline__text">
                {startYear} - {endYear}
              </p>
            </div>
            <div className="experience__body">
              <h4 className="experience__body__title mg-b--xs">{`${role}, ${company}`}</h4>
              <p className="experience__body__desc mg-b--sm">{description}</p>
              <div className="experience__skill-container">
                {skills.map((skill) => (
                  <Chip key={skill} name={skill}></Chip>
                ))}
              </div>
            </div>
          </div>
        </Card>
      );
    });
  return (
    <section id="experience" className="section section--experience">
      <h2 className="heading heading--secondary mg-b--sm">Work Experience</h2>
      <p className="text mg-b--md">
        Throughout my career, I have had the privilege of working on diverse
        projects in various industries. I have contributed to the development
        and enhancement of applications, ensuring they meet user needs and
        business goals. Below is a detailed account of my professional journey.
      </p>
      {expList}
    </section>
  );
};

export default Experience;
