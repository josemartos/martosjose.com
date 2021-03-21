// Styles
import caseStudy from 'styles/components/caseStudy.module.scss';

const CaseStudyTag = ({ label, text }) => (
  <div className={caseStudy.tag}>
    <small>{label}</small>
    <p>{text}</p>
  </div>
);

export default CaseStudyTag;
