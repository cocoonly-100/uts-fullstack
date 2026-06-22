// app/components/UserDisplay.tsx
'use client'
import { useState, useEffect } from 'react'

export default function UserDisplay() {
  const [user, setUser] = useState({ name: 'Loading...', nim: '...', semester: '...' })
  const [refreshTrigger, setRefreshTrigger] = useState(0)  // ← Add this
  
  useEffect(() => {
    // ✅ Runs on mount AND when refreshTrigger changes
    setUser({
      name: localStorage.getItem('name') || 'Guest',
      nim: localStorage.getItem('nim') || '???',
      semester: localStorage.getItem('semester') || '???'
    })
  }, [refreshTrigger])  // ← Re-run when this changes
  
  // ✅ Expose refresh function globally
  useEffect(() => {
    window.refreshUserDisplay = () => setRefreshTrigger(prev => prev + 1)
    return () => { delete window.refreshUserDisplay }
  }, [])
  
  return (
    <div>
      {user.name} <br />
      {user.nim} <br />
      SARJANA TEKNIK INFORMATIKA <br />
      {user.semester}
    </div>
  )
}