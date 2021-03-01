import jwt from 'express-jwt';
import jwks from 'jwks-rsa';

export const jwtCheck = jwt({
  secret: getSecret,
  audience: process.env.JWT_AUDIENCE,
  issuer: process.env.JWT_ISSUER,
  algorithms: process.env.JWT_ALGORITHMS.split(';'),
});

function getSecret() {
  return () =>
    jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: process.env.JWT_JWKS,
    });
}
