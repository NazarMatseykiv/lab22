import React, { Component } from 'react';

class Task7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: [
        {
            question: 'Яка столиця Польші?',
            answers: [
              'Київ',
              'Рим',
              'Варшава',
              'Львів',
              'Жешув',
            ],
          right: 3, //номер правильної відповіді
          selected: null, //вибрана відповідь
        },
        {
            question: 'Скільки буде 2+3?',
            answers: [
              '5',
              '3',
              '4',
              '11',
              '1',
          ],
          right: 1, //номер правильної відповіді
          selected: null, //вибрана відповідь
        },
        {
          question: 'Що таке КПП?',
          answers: [
            'Контрольно Пропускний Пункт',
            'Крос Платформа Програмування',
            'Країна Повних Подарунків',
            'Кролик Попригунчик Полетів',
            'Кіно Повного Пунктуальності',
          ],
          right: 2, //номер правильної відповіді
          selected: null, //вибрана відповідь
        },
      ],
    };
  }

  handleAnswerChange = (index, answerIndex) => {
    const test = [...this.state.test];
    test[index].selected = answerIndex;
    this.setState({ test });
  };

  render() {
    const { test } = this.state;

    return (
      <div>
        {test.map((question, index) => (
          <div
            key={index}
            style={{
              backgroundColor:
                question.selected === question.right ? 'green' : 'red',
            }}
          >
            <p>{question.question}</p>
            {question.answers.map((answer, answerIndex) => (
              <label key={answerIndex}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={answerIndex}
                  checked={question.selected === answerIndex}
                  onChange={() => this.handleAnswerChange(index, answerIndex)}
                />
                {answer}
              </label>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Task7;
