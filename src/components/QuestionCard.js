import React from 'react';
import { Card, CardContent, Typography, Box, List, ListItem } from '@mui/material';

const questionStyle = { color: '#1976d2', fontWeight: 'bold' };

const QuestionCard = ({ question }) => {
  const renderQuestionDetails = () => {
    if (question.type === 'MCQ') {
      return (
        <List>
          {question.options.map((option, index) => (
            <ListItem key={index} sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body1">{option.text}</Typography>
              {option.isCorrectAnswer && (
                <Typography variant="body1" color="success.main" sx={{ marginLeft: 1 }}>
                  🗹
                </Typography>
              )}
            </ListItem>
          ))}
        </List>
      );
    }

    if (question.type === 'ANAGRAM') {
      return (
        <Box sx={{ padding: 2, backgroundColor: '#f9f9f9', borderRadius: 1 }}>
          <Typography variant="body1" gutterBottom>
            Rearrange the following blocks to form a sentence:
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {question.blocks.map((block, index) => (
              <Box
                key={index}
                sx={{
                  padding: '5px 10px',
                  backgroundColor: block.showInOption ? '#f4f4f4' : '#e0e0e0',
                  borderRadius: 1,
                }}
              >
                <Typography variant="body2">{block.text}</Typography>
              </Box>
            ))}
          </Box>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
            Solution: {question.solution}
          </Typography>
        </Box>
      );
    }

    return (
      <Typography variant="body2" color="textSecondary">
        Question type not supported.
      </Typography>
    );
  };

  return (
    <Card sx={{ marginBottom: 2, boxShadow: 2 }}>
      <CardContent>
        <Typography variant="h6" sx={questionStyle}>
          {question.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          Type: {question.type || 'Unknown'}
        </Typography>
        {renderQuestionDetails()}
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
