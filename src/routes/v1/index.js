import express from 'express';
import { createTweet } from '../../controllers/tweet-controller.js'; // corrected import path


const router = express.Router();

router.post('/tweets',createTweet);

export default router;

