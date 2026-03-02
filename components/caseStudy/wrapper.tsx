import { ReactNode } from 'react';
import { BasePage, CaseStudyNavbar } from 'components';

// Styles
import caseStudy from 'styles/modules/caseStudy.module.scss';

interface WrapperProps {
  children: ReactNode;
  title: string;
}

const Wrapper = ({ children, title }: WrapperProps) => {
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
