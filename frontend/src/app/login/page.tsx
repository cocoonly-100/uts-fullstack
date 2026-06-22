'use client'
import { useState } from 'react'
import Link from 'next/link'
import { apihelper } from '../api/nextapi'
export default function LoginPage() {
  const [nim, setNim] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
  try {
      console.log(nim,password)
      const res=await apihelper('post','/login',{ nim:nim, password:password })
      const data= (await res.json()).data
      console.log(data)
      if (res.ok) {
        localStorage.setItem('nim',data.nim)
        localStorage.setItem('name',data.name)
        localStorage.setItem('semester',data.semester)
         if (window.refreshUserDisplay) {
          window.refreshUserDisplay()  // ← Triggers re-render
        }
        window.location.href = '/'
      } else {
        setError(data.error || 'Login failed')
      }
    } catch (err) {
      setError('Something went wrong')
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="p-6 border rounded-lg w-96">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          type="text"
          placeholder="NIM"
          value={nim}
          onChange={(e) => setNim(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Login
        </button>
        <p className="mt-4 text-center">
          Don't have an account? <Link href="/register" className="text-blue-500">Register</Link>
        </p>
      </form>
    </div>
  )
}