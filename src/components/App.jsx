// import { useState } from 'react'
import { useState } from 'react';
import { Description } from './Description/Description';
import { Options } from './Options/Options';
import { Feedback } from './Feedback/Feedback';
import './App.css';

export const App = () => {
  const [feedbackTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <>
      <ul>
        <li>
          <Description text="Sip Happens Café">
            Please leave your feedback about our service by selecting one of the options below.
          </Description>
        </li>

        <li>
          <Options />
        </li>

        <li>
          <Feedback value={feedbackTypes} />
        </li>
      </ul>
    </>
  );
};
