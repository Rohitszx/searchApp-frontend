import React, { useState, useEffect } from 'react';
import { Container, Box, Grid, Typography, CircularProgress } from '@mui/material';
import SearchBox from '../components/SearchBox';
import QuestionCard from '../components/QuestionCard';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';
import { searchQuestions } from '../services/questionService';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const { questions, total } = await searchQuestions({
          query,
          type: filterType,
          page: currentPage,
          limit: 10,
        });
        setQuestions(questions);
        setTotalPages(Math.ceil(total / 10));
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchQuestions();
  }, [query, filterType, currentPage]);

  return (
    <Container>
      <Box sx={{ marginTop: 4, marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
          Search Questions
        </Typography>

        <SearchBox onSearch={setQuery} />
        <Filters filterType={filterType} setFilterType={setFilterType} />

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Grid container spacing={2}>
              {questions.map((question, index) => (
                <Grid item xs={12} sm={6} md={4} key={question._id || `question-${index}`}> {/* Use _id, fallback to index */}
                  <QuestionCard question={question} />
                </Grid>
              ))}
            </Grid>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </Box>
    </Container>
  );
};

export default SearchPage;
