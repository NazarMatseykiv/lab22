import React, { Component } from 'react';

class Task6 extends Component {
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
          right: 3, // номер правильної відповіді
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
          right: 5, // номер правильної відповіді
        },
      ],
      checked: new Array(5).fill(false), // масив стану чекбоксів за замовчуванням
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCheckboxChange(event, index) {
    const checked = [...this.state.checked]; // створюємо копію масиву стану
    checked[index] = event.target.checked; // оновлюємо значення чекбоксу за індексом
    this.setState({ checked }); // оновлюємо стан
  }

  handleSubmit(event) {
    event.preventDefault();
    const { test, checked } = this.state;
    let score = 0;
    for (let i = 0; i < test.length; i++) {
      if (checked[i] && i === test[i].right - 1) {
        score++;
      }
    }
    alert(`Ваш бал: ${score}/${test.length}`);
  }

  render() {
    const { test, checked } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {test.map((question, index) => (
          <div key={index}>
            <h3>{question.question}</h3>
            {question.answers.map((answer, i) => (
              <div key={i}>
                <label>
                  <input
                    type="checkbox"
                    checked={checked[index]}
                    onChange={(event) => this.handleCheckboxChange(event, index)}
                  />
                  {answer}
                </label>
              </div>
            ))}
          </div>
        ))}
        <button type="submit">Перевірити</button>
      </form>
    );
  }
}

export default Task6;
