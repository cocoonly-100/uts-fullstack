"use client";
import { useEffect, useState } from "react";
import { completetablegenerator } from "../lib";
import { apihelper } from "../api/nextapi";
const url='sertifikasimahasiswa'
export default function Home() {
  const [sertifikats, setSertifikats] = useState<any[]>([]);
  const [userSertifikats, setUserSertifikats] = useState<any[]>([]);

  const fetchData = async () => {
    const s = await apihelper("get", 'sertifikat');
    const u = await apihelper("get", url);
    const ss= await s.json()
    const uu=await u.json()
    console.log('track this',ss.data,uu)
    setSertifikats(Array.isArray(ss.data) ? ss.data : []);
  setUserSertifikats(Array.isArray(uu) ? uu : (uu.data || []));
  };

  useEffect(() => { fetchData(); }, []);

  const enroll = async (id) => {
    await apihelper("post", url, { kode: id });
    fetchData();
  };

  // Table1 rows
  console.log('sertif',sertifikats)
  const rows1 = sertifikats.map((s, i) => [
    i+1, s.kode, s.jenis, s.judul, s.nomor, s.tanggal_buka, s.tanggal_tutup, s.status, s.kuota,
    <button onClick={() => enroll(s.id)} >
      {userSertifikats.some(u => u.sertifikat_id === s.id) ? "Terdaftar" : "Daftar"}
    </button>
  ]);
  const table1 = [["No.","3vw","#.","3vw","Jenis","12vw","Judul","12vw","Nomor","12vw","Pembukaan","8vw","Penutupan Akhir","8vw","Status","6vw","Kuota Daftar","4vw","Aksi","6vw"], ...rows1];

  const cancelEnrollment = async (id: number) => {
    await apihelper("delete", url, {'sertifikat_id':id }); 
  fetchData(); // refresh
};
  // Table2 rows
  const rows2 = userSertifikats.map((u, i) => {
    const s = u.sertifikat;
    console.log('trackthis',u,s)
    return [i+1, s.kode, s.jenis, s.judul, s.nomor, u.status, u.status_program || "-", 
    <button
      key={i}
      onClick={() => cancelEnrollment(u.sertifikat_id)}
      style={{
        background: '#dc3545',
        color: 'white',
        border: 'none',
        padding: '4px 12px',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
      Batalkan
    </button>];
  });
  const table2 = [["No.","4vw","#","4vw","Jenis","14vw","Judul","14vw","Nomor","12vw","Status","10vw","Status Program","10vw","Aksi","6vw"], ...rows2];

  return (
    <main>
      <p className='header'>SERTIFIKASI KOMPETENSI</p>
      {completetablegenerator(table1)}
      <p className='header'>DAFTAR PROGRAM SERTIFIKASI YANG TELAH DI AMBIL</p>
      {completetablegenerator(table2)}
    </main>
  );
}