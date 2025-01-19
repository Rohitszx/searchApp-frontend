import React from 'react';
import { Card, CardContent, Typography, Box, List, ListItem } from '@mui/material';

const QuestionCard = ({ question }) => {
  const renderQuestionDetails = () => {
    if (question.type === 'MCQ') {
      console.log('question:', question);
      return (
        <List>
          {question.options.map((option, index) => (
            <ListItem key={index}>
              {option.text} {option.isCorrectAnswer && '(Correct)'}
            </ListItem>
          ))}
        </List>
      );
    }

    if (question.type === 'ANAGRAM') {
      return (
        <Box>
          <Typography variant="body1" gutterBottom>
            Rearrange the following blocks to form a sentence:
          </Typography>
          {question.blocks.map((block, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{ margin: '5px 0', backgroundColor: block.showInOption ? '#f4f4f4' : '#e0e0e0' }}
            >
              {block.text}
            </Typography>
          ))}
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
            Solution: {question.solution}
          </Typography>
        </Box>
      );
    }

    return null;
  };

  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">{question.title}</Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          Type: {question.type}
        </Typography>
        {renderQuestionDetails()}
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
