"use client";
import { useState, useEffect } from "react";
import "@/app/globals.css";
import { completetablegenerator, completetableoonecolumngenerator } from "../lib";
import { apihelper } from "../api/nextapi";

export default function Home() {
  // ===== TOP TABLE: static (data2) =====
  const [data2, setData2] = useState([
    ["No", '2vw', "Kegiatan", '24vw', "Tanggal Mulai", '12vw', "Tanggal Akhir", '12vw', "Tipe", '3vw', "Tipe Kegiatan", '8vw', "Aksi", '12vw'],
    ["1", "Tech Gen Level Up Productivity & Creation", "Senin, 27 April 2026 09:00:00", "Senin, 27 April 2026 17:00:00", "1", "Offline", "QR Code Kegiatan Tipe 1"],
    ["2", "Workshop AI & Data Science", "Selasa, 28 April 2026 09:00:00", "Selasa, 28 April 2026 16:00:00", "2", "Online", "QR Code Kegiatan Tipe 2"]
  ]);

  // ===== BOTTOM TABLE: fetch from API (data1) =====
  const [data1Rows, setData1Rows] = useState([
    [
      "1",
      "Seminar Nasional Inovasi dan Teknologi Komputer 2024 \"Urban, Culture and Sustainable Technology\"",
      "Kegiatan ini membutuhkan 1 kode",
      "Download",
      "211.1.a38409e9e61c5da1ec8a99b91f759c0d0adf3ebb",
      "Kamis, 28 November 2024 08:00:00",
      "Kamis, 28 November 2024 16:33:59",
    ],
    [
      "2",
      "The Future of AI",
      "Kegiatan ini membutuhkan 1 kode",
      "Download",
      "181.1.0f9bfa9d877a4cc79e40e55441478903fb064bd0",
      "Selasa, 17 September 2024 08:00:00",
      "Rabu, 18 September 2024 17:26:06",
    ]
  ]);

  const [searchCode, setSearchCode] = useState("");

  // ===== FETCH FUNCTION FOR BOTTOM TABLE =====
  const fetchBottomTable = () => {
    apihelper('get', 'kegiatanmahasiswa')
      .then(res => res.json())
      .then(data => {
        const rows = data.data.map((item, index) => [
          String(index + 1),
          item.kegiatan || "",
          item.keterangan || "Kegiatan membutuhkan 1 kode",
          item.sertifikat || "-",
          item.token || "",
          item.waktu_kegiatan || "",
          item.waktupengisian || ""
        ]);
        setData1Rows(rows);
      })
      .catch(() => {
        // keep fallback (do nothing, or set fallback)
      });
  };

  // ===== FETCH ON MOUNT =====
  useEffect(() => {
    fetchBottomTable();
  }, []);

  // ===== SEARCH (POST) =====
  const handleSearch = () => {
    apihelper('post', 'kegiatanmahasiswa', { token: searchCode })
      .then(res => {
        if (!res.ok) throw new Error('POST failed');
        return res.json();
      })
      .then(data => {
        console.log('POST response:', data);
        // ✅ After successful POST, refresh the bottom table
        setSearchCode('') 
        fetchBottomTable();
      })
      .catch(err => {
        console.error('Search error:', err);
        // Optionally show an error message to the user
        alert('Search failed. Please try again.');
      });
  };

  // ===== RENDER BOTTOM TABLE (manual JSX) =====
  let u = [];
  let a = 0;
  for (let i = 0; i < data1Rows.length; i++) {
    let temp1 = [];
    for (let j = 0; j < 4; j++) {
      let c = 1;
      let r = 1;
      if (j == 0 || j == 3) { r = 2; }
      if (j == 2) { c = 2; }
      temp1.push(<td rowSpan={r} colSpan={c} key={a}>{data1Rows[i][j]}</td>);
      a = a + 1;
    }
    u.push(<tr style={{ height: '40px' }} key={a}>{temp1}</tr>);
    a = a + 1;
    temp1 = [];
    for (let j = 4; j < 7; j++) {
      temp1.push(<td key={a}>{data1Rows[i][j]}</td>);
      a = a + 1;
    }
    u.push(<tr key={a}>{temp1}</tr>);
    a = a + 1;
  }

  // ===== RENDER TOP TABLE (completetablegenerator) =====
  let u0 = [];
  if (data2.length > 0) {
    u0 = completetablegenerator(data2);
  }

  return (
    <main>
      {/* TOP: static */}
      <p className='header' style={{ marginTop: '1vh' }}>KEGIATAN MAHASISWA YANG SEDANG BERLANGSUNG</p>
      {u0}

      {/* BOTTOM: fetched */}
      <p className='header' style={{ marginTop: '1vh' }}>KEGIATAN MAHASISWA</p>
      <br />
      <div style={{ alignItems: 'center', display: 'flex', height: '8vh', width: '74vw', background: '#cccccc', borderRadius: '4px', border: '1px solid #777777' }}>
        <span style={{ padding: '0 1vw 0 2vw', fontWeight: 'bold' }}>Kode Kegiatan</span>
        <input
          style={{ width: '35vw', padding: '3px', background: '#ffffff', border: '1px solid black', borderRadius: '3px' }}
          placeholder="Masukkan kode lengkap"
          value={searchCode}
          onChange={(e) => setSearchCode(e.target.value)}
        />
        <button onClick={handleSearch}>input token</button>
      </div>
      <br />
      <table>
        <tbody>
          <tr>
            <th rowSpan={2} style={{ width: '4vw' }}>No.</th>
            <th style={{ width: '40vw', height: '6vh' }}>Kegiatan</th>
            <th colSpan={2}>Keterangan</th>
            <th rowSpan={2} style={{ width: '8vw' }}>Sertifikat</th>
          </tr>
          <tr>
            <th>Token</th>
            <th style={{ width: '10vw' }}>Waktu Kegiatan</th>
            <th style={{ width: '10vw' }}>Waktu Pengisian</th>
          </tr>
          {u}
        </tbody>
      </table>
    </main>
  );
}