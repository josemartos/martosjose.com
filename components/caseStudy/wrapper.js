import { BasePage, CaseStudyNavbar } from 'components';

// Styles
import caseStudy from 'styles/modules/caseStudy.module.scss';

const Wrapper = ({ children, title }) => {
  return (
    <BasePage title={title}>
      <div className={caseStudy.wrapper} id="caseStudyWrapper">
        <CaseStudyNavbar />
        {children}
      </div>
    </BasePage>
  );
};

export default Wrapper;
