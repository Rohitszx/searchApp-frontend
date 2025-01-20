import axios from 'axios';

const searchQuestions = async ({ query, type, page, limit }) => {
  try {
    console.log('query:', query, 'type:', type, 'page:', page, 'limit:', limit);
    const response = await axios.post('https://searchapp-backend.onrender.com/api/search', {
      query,
      type,
      page,
      limit,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};

export { searchQuestions };
