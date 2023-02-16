import React from 'react';
import PropTypes from 'prop-types';
import { Button, OptionsContainer } from './FeedbackOption.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsContainer>
      {options.map(a => {
        return (
          <Button
            key={a}
            type="button"
            name={a}
            onClick={() => onLeaveFeedback(a)}
          >
            {a}
          </Button>
        );
      })}
    </OptionsContainer>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
