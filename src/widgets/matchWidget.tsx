import React from 'react';

// import { getNextRowKey } from '../utils';
import './match-widget.scss';
// import { MATCH_WIDGET } from '../constants';

interface Props {
  widget: { props: { questions: never[]; answers: never[] } };
}

export function MatchWidget(props: Props) {
  // const [$widget, set$Widget] = useState(props.widget);

  // const onMatchTextChange = (
  //   entity: { text?: {} | null | undefined; id?: any },
  //   value: string,
  //   type: any
  // ) => {
  //   if (type === MATCH_WIDGET.QUESTION) {
  //     let allQuestions = $widget.props.questions;
  //     allQuestions.find(
  //       (question: { id: any }) => question.id == entity.id
  //     ).text = value;
  //     let newProps = { ...$widget.props, questions: allQuestions };
  //     props.onChange(newProps);
  //     set$Widget({ ...$widget, props: newProps });
  //   } else {
  //     let allAnswers = $widget.props.answers;
  //     allAnswers.find(
  //       (answer: { id: any }) => answer.id == entity.id
  //     ).text = value;
  //     let newProps = { ...$widget.props, answers: allAnswers };
  //     props.onChange(newProps);
  //     set$Widget({ ...$widget, props: newProps });
  //   }
  // };

  const previewWidget = () => (
    <>
      <div className='left-half'>
        {questions.map((question: any, index: number) => {
          return (
            <div className='match-left-view'>
              <>{index + 1}.</>
              <div className='match-left-view-option'>{question.text}</div>
              <div className='match-left-view-delete'>
                <div className='input-width'>
                  <input type='text' />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className='right-half'>
        {answers.map((answer: any, index: number) => {
          return (
            <div className='match-right-view'>
              <>{index + 1}.</>
              <div>{answer.text}</div>
            </div>
          );
        })}
      </div>
    </>
  );

  // const onAddNewRow = () => {
  //   let newId = getNextRowKey($widget.props.questions);
  //   let newQuestion = { id: newId, text: 'Edit this question...' };
  //   let newAnswer = { id: newId, text: 'Edit this option...' };
  //   let newProps = {
  //     questions: [...$widget.props.questions, newQuestion],
  //     answers: [...$widget.props.answers, newAnswer],
  //   };
  //   props.onChange(newProps);
  //   set$Widget({ ...$widget, props: newProps });
  // };

  // const onRemoveRow = (question: {
  //   text?: {} | null | undefined;
  //   id?: any;
  // }) => {
  //   let newProps = {
  //     questions: $widget.props.questions.filter(
  //       (questionItem: { id: any }) => questionItem.id != question.id
  //     ),
  //     answers: $widget.props.answers.filter(
  //       (answerItem: { id: any }) => answerItem.id != question.id
  //     ),
  //   };
  //   props.onChange(newProps);
  //   set$Widget({ ...$widget, props: newProps });
  // };

  // const editWidget = () => (
  //   <>
  //     <div className='left-half'>
  //       {questions.map((question: { text: '' }, index: number) => {
  //         return (
  //           <div className='match-left-view'>
  //             <>{index + 1}.</>
  //             <div className='match-left-view-option'>{question.text}</div>
  //             <div className='match-left-view-delete'>
  //               <button
  //                 className='btn primary'
  //                 onClick={() => onRemoveRow(question)}
  //               >
  //                 {' '}
  //                 -{' '}
  //               </button>
  //             </div>
  //           </div>
  //         );
  //       })}
  //       <button className='btn primary' onClick={() => onAddNewRow()}>
  //         {' '}
  //         Add row{' '}
  //       </button>
  //     </div>

  //     <div className='right-half'>
  //       {answers.map((answer: { text: '' }, index: number) => {
  //         if (props.isEdit)
  //           return (
  //             <textarea
  //               defaultValue={answer.text}
  //               onChange={(e) =>
  //                 onMatchTextChange(answer, e.target.value, MATCH_WIDGET.ANSWER)
  //               }
  //             />
  //           );
  //         return (
  //           <div className='match-right-view'>
  //             <>{index + 1}.</>
  //             <div>{answer.text}</div>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </>
  // );

  const questions = props.widget.props.questions || [];
  const answers = props.widget.props.answers || [];
  return <div className='container'>{previewWidget()}</div>;
}
