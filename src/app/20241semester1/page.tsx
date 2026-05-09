import "@/app/globals.css";
import {databawahkrs} from "../data";
import { completekrsgeneration} from "../lib";
import { metadatagenerator } from "../metadata";
export const metadata=metadatagenerator("20241semester1")

export default function Home() {
const datadirikrs=[
  ['','20vw','','54vw'],
  ["Status", "Disetujui"],
  ["Perubahan terakhir", "Selasa, 07 Januari 2025 12:54:30"],
  ["Nomor Kartu Studi", "#306443"],
  ["Program Studi", "Sarjana Teknik Informatika - Fakultas Sains dan Teknologi"],
  ["Nomor Induk Mahasiswa", "27182837378"],
  ["Nama Mahasiswa", "Beryl"],
  ["Tahun Ajaran / Tahapan", "2024 / 1"],
  ["Semester", "1"],
  ["Dosen Pembimbing Akademik", "Dr. Yennimar, S.Pd., M. Kom."],
  ["Jumlah Kredit", "20"],
  ["Jumlah Mutu", "80.0"],
  ["Indeks Prestasi Semester (IPS)", "4.0"]
];
const tabledata = [
  ["No", "3vw", "Mata Kuliah", "21vw", "Spada", "5vw", "(30%) UTS", "4vw", "(10%) Presensi", "5vw", "(20%) Tugas", "4vw", "(40%) UAS", "4vw", "N", "4vw", "NH", "2vw", "R", "2vw", "RH", "3vw", "I", "1vw", "IH", "2vw", "H", "2vw", "A", "2vw", "K", "1vw", "M", "2vw", "S", "1vw"],
  ["1", "TIF1203 - Praktikum Algoritma Pemrograman", "-", "100", "100", "100", "100", "100.0", "A", "-", "-", "-", "-", "-", "A", "4.0", "1", "4.0", "-"],
  ["2", "TIF1202 - Algoritma Pemrograman", "-", "100", "100", "100", "100", "100.0", "A", "-", "-", "-", "-", "-", "A", "4.0", "2", "8.0", "-"],
  ["3", "TIF1207 - Aplikasi Komputer", "-", "100", "100", "80", "85", "90.0", "A", "-", "-", "-", "-", "-", "A", "4.0", "2", "8.0", "-"],
  ["4", "TIF1201 - Pengantar Teknologi Informasi", "-", "80", "100", "78", "80", "81.6", "A", "-", "-", "-", "-", "-", "A", "4.0", "2", "8.0", "-"],
  ["5", "TIF1206 - Organisasi dan Arsitektur Komputer", "-", "95", "100", "100", "70", "86.5", "A", "-", "-", "-", "-", "-", "A", "4.0", "2", "8.0", "-"],
  ["6", "TIF1205 - Sistem Digital", "-", "90", "100", "50", "90", "83.0", "A", "-", "-", "-", "-", "-", "A", "4.0", "2", "8.0", "-"],
  ["7", "TIF1409 - Jaringan Komputer", "-", "92", "100", "80", "100", "93.6", "A", "-", "-", "-", "-", "-", "A", "4.0", "2", "8.0", "-"],
  ["8", "TIF1410 - Praktikum Jaringan Komputer", "-", "94", "100", "83", "98", "94.0", "A", "-", "-", "-", "-", "-", "A", "4.0", "1", "4.0", "-"],
  ["9", "TIF1107 - Pengantar Statistika", "-", "90", "100", "80", "80", "85.0", "A", "-", "-", "-", "-", "-", "A", "4.0", "2", "8.0", "-"],
  ["10", "TIF1104 - Kalkulus", "-", "79", "100", "83", "89", "85.9", "A", "-", "-", "-", "-", "-", "A", "4.0", "2", "8.0", "-"],
  ["11", "TIF1111 - Fisika Instrumensi", "-", "76", "100", "74", "88", "82.8", "A", "-", "-", "-", "-", "-", "A", "4.0", "2", "8.0", "-"]
];
let tabledata2=[['',[
  ["Anda SUDAH terdaftar untuk mengikuti Ujian Tengah Semester;"],
  ["Anda SUDAH terdaftar untuk mengikuti Ujian Akhir Semester;"],
  ["Mulai T.A. 2019/1 proses status kartu studi cukup sampai Disetujui saja, kartu studi tidak perlu lagi diubah statusnya menjadi Ditutup, dan proses pembuatan Kartu Studi baru cukup dengan syarat semua kartu studi harus berstatus Disetujui / Cuti / Non Aktif."]
]]];

let u=completekrsgeneration(datadirikrs,tabledata,tabledata2,databawahkrs)

return (
    <main>
      <p className='header' style={{marginTop:'1vh'}}>KARTU STUDI SEMESTER 1</p>
      {u}
    </main>
  );
}

