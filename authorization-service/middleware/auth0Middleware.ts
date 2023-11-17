import { auth } from 'express-oauth2-jwt-bearer';
import * as dotenv from 'dotenv';

dotenv.config();

export const validateAccessToken = auth({
  issuerBaseURL: `https://${process.env.VITE_AUTH0_DOMAIN}/`,
  audience: process.env.VITE_AUTH0_AUDIENCE,
  tokenSigningAlg: 'RS256',
});
