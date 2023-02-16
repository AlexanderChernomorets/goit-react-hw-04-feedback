
import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onAddFeedback = options => {
    switch (options) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
          setNeutral(prevNeutral => prevNeutral + 1);
          break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }  
  

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  }

   const options = Object.keys({ good, neutral, bad });

  return (
    <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              color: '191919',
              maxWidth: '400px',
              margin: '0 auto',
              marginTop: '50px',
              border: '1px solid grey',
              borderRadius: '10px',
              textAlign: 'center',
              backgroundColor: 'whitesmoke',
            }}
          >
            <Section title={'Please leave feedback'} />
            <FeedbackOptions
              options={options}
              onLeaveFeedback={onAddFeedback}
            />
            {countTotalFeedback() === 0 ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
                good={good}
                neutral={neutral}
                bad={bad}
              />
            )}
          </div>
  )
}

export default App;



