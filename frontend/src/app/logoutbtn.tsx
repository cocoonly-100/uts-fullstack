// app/components/LogoutButton.tsx
'use client'

import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()
  
  const handleLogout = () => {
    localStorage.clear()
    if (window.refreshUserDisplay) {
          window.refreshUserDisplay()  // ← Triggers re-render
        }
    router.push('/login')
  }
  
  return (
    <button
      onClick={handleLogout}
      style={{
        background: '#2563eb',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        padding: '6px 16px',
        fontSize: '14px',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}
    >
      Logout
    </button>
  )
}