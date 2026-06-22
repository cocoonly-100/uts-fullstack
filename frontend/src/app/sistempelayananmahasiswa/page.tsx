"use client";
import "@/app/globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { completetablegenerator } from "../lib";
import { apihelper } from "../api/nextapi";

export default function Home() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // ✅ Get filter from URL, default to 'proses'
  const filter = searchParams.get('filter') || 'proses'
  
  const [allData, setAllData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [loading, setLoading] = useState(true)

  // ✅ Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apihelper('get', 'sistempelayananmahasiswa')
        const data = await result.json()
        console.log('All data:', data.data)
        setAllData(data.data)
      } catch (error) {
        console.error('Fetch error:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // ✅ Update filteredData when allData or filter changes
  useEffect(() => {
    if (allData.length > 0) {
      const filtered = allData.filter((item: any) => item.status === filter)
      setFilteredData(filtered)
    }
  }, [allData, filter])

  const buttons = [
    { label: 'Tambah Permohonan Baru', slug: 'tambah', action: 'link' },
    { label: 'Permohonan Dalam Proses', slug: 'proses', action: 'filter' },
    { label: 'Permohonan Tutup', slug: 'tutup', action: 'filter' },
    { label: 'Panduan', slug: 'panduan', action: 'link' }
  ]

  const handleClick = (btn: any) => {
    if (btn.action === 'link') {
      router.push(`/sistempelayananmahasiswa/${btn.slug}`)
    } else {
      router.push(`/sistempelayananmahasiswa?filter=${btn.slug}`)
    }
  }

  const titles: Record<string, string> = {
    proses: 'DAFTAR PERMOHONAN YANG SEDANG DIPROSES',
    tutup: 'DAFTAR PERMOHONAN YANG SUDAH DITUTUP'
  }

  // Generate table with filtered data
  let tableData = [['Nomor', '18vw', 'Permohonan', '30vw', 'Status', '13vw', 'Aksi', '11vw']]
  filteredData.forEach((item: any, index: number) => {
    tableData.push([index + 1, item.permohonan, item.status, '-'])
  })
  let u = completetablegenerator(tableData)

  if (loading) {
    return (
      <main>
        <p className='header' style={{ marginTop: '1vh' }}>SISTEM PELAYANAN MAHASISWA</p>
        <p>Loading...</p>
      </main>
    )
  }

  return (
    <main>
      <p className='header' style={{ marginTop: '1vh' }}>SISTEM PELAYANAN MAHASISWA</p>
      
      <div style={{ display: 'flex', marginBottom: '3vh', gap: '0.6vw' }}>
        {buttons.map((btn) => (
          <button
            key={btn.slug}
            onClick={() => handleClick(btn)}
            style={{
              padding: '1vh 1vw',
              border: btn.slug === filter ? '2px solid #2563eb' : '1px solid black',
              borderRadius: '6px',
              textDecoration: 'none',
              color: btn.slug === filter ? '#2563eb' : 'black',
              background: btn.slug === filter ? '#e0edff' : '#eeeeee',
              cursor: 'pointer'
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>
      
      <p style={{ fontWeight: 'bold', fontSize: '24px' }}>{titles[filter] || 'DAFTAR PERMOHONAN'}</p>
      {u}
      <br />
    </main>
  )
}