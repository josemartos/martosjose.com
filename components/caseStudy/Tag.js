// Styles
import caseStudy from 'styles/modules/caseStudy.module.scss';

const Tag = ({ label, text }) => (
  <div className={caseStudy.tag}>
    <small>{label}</small>
    <p>{text}</p>
  </div>
);

export default Tag;
