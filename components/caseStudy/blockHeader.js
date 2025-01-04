import cn from 'classnames';

// Styles
import layoutStyles from 'styles/components/layout.module.scss';
import caseStudy from 'styles/components/caseStudy.module.scss';

const BlockHeader = ({ title, children }) => {
  return (
    <header className={caseStudy.blockHeader}>
      <div className={caseStudy.bgLeft}></div>
      <div className={caseStudy.bgRight}></div>
      <div className={layoutStyles.contentWrapper}>
        <div className={'flexGrid'}>
          <div className={'col--md-1'}></div>
          <div className={cn('col--md-1', caseStudy.scrollLineWrapper)}>
            <div className={caseStudy.scrollLine}></div>
          </div>
          <div className={cn('col--md-3', caseStudy.blockTitle)}>
            <h2>{title}</h2>
          </div>
          <div className={'col--md-3'}></div>
          <div className={cn('col--md-4', caseStudy.blockIndex)}>
            {children}
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlockHeader;
