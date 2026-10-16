/**
 * Backend API Server for Universe Explorer
 * Express REST API providing astronomical catalogue endpoints, search, hierarchy, and quizzes.
 */

import express from 'express';
import cors from 'cors';
import { db } from '../database/db.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Request logger
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[API] ${req.method} ${req.originalUrl} -> ${res.statusCode} (${duration}ms)`);
  });
  next();
});

// 1. Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'Universe Explorer Astronomical API v2.0',
    objectsLoaded: db.objectsById.size
  });
});

// 2. Categories & counts
app.get('/api/categories', (req, res) => {
  try {
    const data = db.getCategories();
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 3. Search query
app.get('/api/search', (req, res) => {
  try {
    const q = req.query.q || '';
    const limit = parseInt(req.query.limit, 10) || 10;
    const results = db.search(q, limit);
    res.json({
      success: true,
      query: q,
      count: results.length,
      results
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 4. Object listing with filtering and pagination
app.get('/api/objects', (req, res) => {
  try {
    const category = req.query.category || 'all';
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 50;
    const search = req.query.search || '';

    const data = db.getAllObjects({ category, page, limit, search });
    res.json({ success: true, ...data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5. Single object details
app.get('/api/objects/:id', (req, res) => {
  try {
    const { id } = req.params;
    const object = db.getObjectById(id);

    if (!object) {
      return res.status(404).json({
        success: false,
        error: `Astronomical object "${id}" not found in catalogue.`
      });
    }

    res.json({ success: true, object });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 6. System relationships (Parent star/planet, moons/children, siblings)
app.get('/api/systems/:id', (req, res) => {
  try {
    const { id } = req.params;
    const relationships = db.getRelatedObjects(id);
    res.json({ success: true, id, ...relationships });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 7. Quiz questions for an object
app.get('/api/quiz/:id', (req, res) => {
  try {
    const { id } = req.params;
    const quiz = db.getQuiz(id);
    res.json({
      success: true,
      id,
      count: quiz.length,
      questions: quiz
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 8. Check quiz answer endpoint
app.post('/api/quiz/check', (req, res) => {
  try {
    const { objectId, questionIndex, selectedOption } = req.body;
    const quiz = db.getQuiz(objectId);

    if (!quiz || !quiz[questionIndex]) {
      return res.status(404).json({ success: false, error: 'Question not found' });
    }

    const q = quiz[questionIndex];
    const isCorrect = q.correct.toUpperCase() === (selectedOption || '').toUpperCase();

    res.json({
      success: true,
      isCorrect,
      correctOption: q.correct,
      explanation: q.explanation
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'API endpoint not found' });
});

// Start listening
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`🌌 [Backend API] Universe Explorer server running on http://localhost:${PORT}`);
  });
}

export default app;
