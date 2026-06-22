// app/sistempelayananmahasiswa/[slug]/page.tsx
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter, useParams } from 'next/navigation'
import { apihelper } from '@/app/api/nextapi'
export default function SistemPermohonanSlug() {
  const params = useParams()
  const slug = params.slug as string
  // Different content based on slug
  if (slug === 'tambah') {
    return <TambahContent />
  } else if (slug === 'panduan') {
    return <PanduanContent />
  } else {
    return <NotFoundContent />
  }
}
// Tambah Content
function TambahContent() {
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMsg('')
    
    const res = await apihelper('post', 'sistempelayananmahasiswa', { data: description })
    const data = await res.json()
    
    setLoading(false)
    
    if (data.success) {
      setMsg('✅ Berhasil!')
    } else {
      setMsg('❌ Gagal')
    }
  }

  return (
    <>
      <Link href="/sistempelayananmahasiswa" style={{ display: 'inline-block', marginBottom: 16, color: '#2563eb' }}>
        ← Kembali
      </Link>
      <h4>PERMOHONAN BARU</h4>
      {msg && <p style={{ color: msg.includes('Berhasil') ? 'green' : 'red' }}>{msg}</p>}
      <form onSubmit={handleSubmit} style={{ background: '#f5f5f5', padding: 24, borderRadius: 8 }}>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Tuliskan permohonan Anda disini..."
          rows={5}
          style={{ background:'white',width: '70vw', padding: 12, fontSize: 16, borderRadius: 6, border: '1px solid #ccc' }}
          required
        />
        <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
          <button type="submit" disabled={loading} style={{ background: '#2563eb', color: 'white', padding: '10px 24px', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
            {loading ? '...' : 'Simpan'}
          </button>
          <Link href="/sistempelayananmahasiswa" style={{ background: '#6c757d', color: 'white', padding: '10px 20px', borderRadius: 6, textDecoration: 'none' }}>
            Back
          </Link>
        </div>
      </form>
    </>
  )
}

function PanduanContent() {
  return (
    <main style={{ padding: 20 }}>
      <Link href="/sistempelayananmahasiswa">← Kembali</Link>
      <h4>PANDUAN</h4>
      <ol>
        <li>
          <b>Panduan Sistem Informasi Akademik</b> (rev. 17 Mei 2013)
          <br />📥 <Link href="/frieren.jpeg">View</Link>
        </li>
        <li>
          <b>Panduan Sistem Pelayanan Mahasiswa</b> (rev. 03 September 2014)
          <br />📥 <Link href="/frieren.jpeg">View</Link>
        </li>
        <li>
          <b>Panduan Sistem Informasi Akademik</b> (rev. 27 Mei 2016)
          <br />📥 <Link href="/frieren.jpeg">View</Link>
        </li>
      </ol>
    </main>
  )
}
function NotFoundContent() {
  return (
    <>
      <h4>Halaman Tidak Ditemukan</h4>
      <Link href="/sistempelayananmahasiswa">Kembali ke Daftar</Link>
    </>
  )
}