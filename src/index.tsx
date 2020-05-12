import React, { useState, useEffect } from 'react';
import GridLayout from 'react-grid-layout';
import Modal from 'react-modal';
import { renderToStaticMarkup } from 'react-dom/server';

import SlideListComponent from './slide-list';
import { stripSpanTags } from './utils';
import { MatchWidget } from './widgets/matchWidget';

export const widgetMap = {
  1: 'paragraphComponent',
  2: 'textareaComponent',
  3: 'inputComponent',
  4: 'imageComponent',
  5: 'backgroundColorComponent',
  6: 'matchComponent',
};

interface Props {
  dbqSelected: any;
  showPreview: any;
  handleClose: any;
}

const Preview = (props: Props) => {
  const { dbqSelected, showPreview, handleClose } = props;
  const [previewDbqs, setPreviewDbqs] = useState([
    {
      id: '1',
      widgets: [],
      style: { backgroundColor: '' },
      pageInHtml: '',
    },
  ]);
  const [pageId, setPageId] = useState(1);
  const pageRefs: any[] = [];

  useEffect(() => {
    if (dbqSelected) {
      const { studentContent } = dbqSelected;
      const previewHtml = studentContent.dbq.map((page: { widgets: any }) => {
        let pageInHtml = stripSpanTags(getGridLayoutInHtmlString(page.widgets));
        pageInHtml + '<br /><br />';
        return { ...page, pageInHtml };
      });
      setPreviewDbqs(previewHtml);
    }
  }, [dbqSelected]);

  const renderPreviewMatchWidget = (matchWidget: any) => {
    return <MatchWidget widget={matchWidget} />;
  };
  const getGridLayoutInHtmlString = (widgets: any[]) =>
    renderToStaticMarkup(
      <GridLayout cols={12} rowHeight={30} width={1200}>
        {widgets.map(
          (widget: {
            type: string;
            value: any;
            i: string | number | undefined;
            x: any;
            y: any;
            w: any;
            h: number;
          }) => {
            const widgetHTML =
              widget.type !== widgetMap[6] ? (
                <div dangerouslySetInnerHTML={{ __html: widget.value }} />
              ) : (
                renderPreviewMatchWidget(widget)
              );
            const widgetDataGrid = {
              i: widget.i,
              x: widget.x,
              y: widget.y,
              w: widget.w,
              h: widget.h + 1,
            };
            return (
              <div key={widget.i} data-grid={widgetDataGrid}>
                {widgetHTML}
              </div>
            );
          }
        )}
      </GridLayout>
    );

  const onClose = () => {
    if (handleClose) {
      handleClose(false);
    } else {
      window.close();
    }
  };

  const openPage = (id: number) => {
    setPageId(id + 1);
    pageRefs[id].scrollIntoView();
  };

  const setRef = (listRef: any) => {
    pageRefs.push(listRef);
  };

  return (
    <Modal
      isOpen={showPreview}
      onRequestClose={() => onClose()}
      className='m-auto scroll-bar-hide h100v fullheight mHeight-100vh'
      overlayClassName='popup-overlay'
    >
      <div className='popup fullheight mx-80p' style={{ position: 'relative' }}>
        <div className='pophead f18 fw-b serif p25'>
          {dbqSelected?.title}
          <svg
            className='is-24 rightmiddle mr25 cursor'
            onClick={() => onClose()}
          >
            <use xlinkHref={'/images/sprite.svg#icon-close'} />
          </svg>
        </div>
        <div className='popcontent p25'>
          <div className='preview-wrapper'>
            <SlideListComponent
              pagesArray={previewDbqs}
              pageId={pageId}
              openPage={openPage}
            />
            <div className='slide-viewer'>
              {previewDbqs.map((previewPage) => (
                <div
                  className='preview-slide'
                  ref={setRef}
                  key={previewPage.id}
                  style={previewPage.style}
                  dangerouslySetInnerHTML={{ __html: previewPage.pageInHtml }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Preview;
