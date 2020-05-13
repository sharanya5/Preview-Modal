import * as React from 'react';
// import {
//   PageSideBarContainer,
//   PageSideBarItemContainer,
//   PageSideBarItemSpan,
// } from '../editor/editor.styled';

const SlideListComponent = (props: {
  pagesArray: any;
  pageId: any;
  openPage: any;
}) => {
  const { pagesArray, pageId, openPage } = props;
  return (
    <div className='sidebar-ul'>
      {pagesArray.map(
        (page: { id: string | number | undefined }, index: number) => (
          <div
            className='sidebar-item-container cursor'
            style={index + 1 === pageId ? { backgroundColor: '#ccc' } : {}}
            key={page.id}
          >
            <div className='sidebar-item' onClick={() => openPage(index)}>
              <span>{index + 1}</span>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default SlideListComponent;
