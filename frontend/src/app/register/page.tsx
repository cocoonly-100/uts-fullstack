'use client'
import { useState } from 'react'
import Link from 'next/link'
import { apihelper } from '../api/nextapi'
export default function RegisterPage() {
  const [form, setForm] = useState({ nim: '', name: '', password: ''})
  const [error, setError] = useState('')
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    {
        try {
        const res=await apihelper('post','register',form)
        if (res.ok) {
            window.location.href = '/login?registered=true'
        } else {
            const data = await res.json()
            setError(data.error || 'Registration failed')
        }
        } catch (err) {
        setError('Something went wrong')
        }
    }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="p-6 border rounded-lg w-96">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          type="text"
          placeholder="NIM"
          value={form.nim}
          onChange={(e) => setForm({ ...form, nim: e.target.value })}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <button  className="w-full bg-green-500 text-white p-2 rounded" onClick={handleSubmit}>
          Register
        </button>
        <p className="mt-4 text-center">
          Already have an account? <Link href="/login" className="text-blue-500">Login</Link>
        </p>
      </form>
    </div>
  )
}