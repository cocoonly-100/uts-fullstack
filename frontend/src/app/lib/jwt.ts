// lib/jwt.ts
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// Generate JWT token
export function generatejwt(payload: { nim: string; name: string; semester?: string }) {
  return jwt.sign(
    {
      nim: payload.nim,
      name: payload.name,
      semester: payload.semester,
    },
    JWT_SECRET,
    { expiresIn: '1h' }
  )
}

// Verify JWT token
export function verifyjwt(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (error) {
    return null
  }
}

// Decode JWT without verification
export function decodejwt(token: string) {
  try {
    return jwt.decode(token)
  } catch {
    return null
  }
}