// Styles
import caseStudy from 'styles/modules/caseStudy.module.scss';

interface TagProps {
  label: string;
  text: string;
}

const Tag = ({ label, text }: TagProps) => (
  <div className={caseStudy.tag}>
    <small>{label}</small>
    <p>{text}</p>
  </div>
);

export default Tag;
