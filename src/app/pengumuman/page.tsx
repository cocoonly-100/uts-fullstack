import "@/app/globals.css";
import { metadatagenerator } from "../metadata";
export const metadata=metadatagenerator('pengumuman')
export default function Home() {

    let proc=[]
    let head=['PENGUMUMAN UNIVERSITAS','PENGUMUMAN PROGRAM STUDI','BERITA SAINS DAN TEKNOLOGI']
    let top=[
        [
            'SURVEY LAYANAN PERPUSTAKAAN','Staff Ticketing & Visa Department','Kick-Off Altissia Program for New Students 2025',
            'Program Kompetensi Baru: Quest Leadership Development!','PENDAFTARAN PLATFORM ALTISSIA','Announcement about Resuming verification service from CSCSE',
            'Komisi Etik Penelitian Kesehatan (KEPK)','TATA CARA PENGIRIMAN EMAIL KE contact@unprimdn.ac.id'
        ],
        [
            'Surat Edaran Libur Hari Raya Idul Fitri 1447 Hijriah','PENGUMUMAN LIBUR IMLEK 2026','PENGUMUMAN SESI WISUDA UNPRI PERIODE FEBRUARI',
            'Pengumuman Pembayaran Uang Kuliah FAST TERBARU','PENGUMUMAN PEMBAYARAN UANG KULIAH','PENGUMUMAN UJIAN AKHIR SEMESTER FAST'
        ],
        [
            'Piagam Penghargaan RISTEK-BRIN #InovasiIndonesia','Fakultas Kedokteran Universitas Prima Indonesia Raih Akreditasi A',
            'FAKULTAS KEDOKTERAN UNPRI Lantik Mahasiswa Prodi Profesi Dokter','FK UNPRI Lantik dan Sumpah Dokter Baru',
            'FK UNPRI MERAIH AKREDITASI B','UNPRI BAKSOS','FK UNPRI YUDISIUM','FK UNPRI TUAN RUMAH RAKORWIL AIPKI WILAYAH I',
            'DPRD MEDAN TERIMA KUNJUNGAN KELUARGA BESAR UNPRI DAN MANAJEMEN RS ROYAL PRIMA','RS ROYAL PRIMA',
            'DOKTER GATHERING ROYAL PRIMA HOSPITAL','SEMINAR KANKER PAYUDARA','RS ROYAL PRIMA - KADINKES MEDAN',
            'FK UNPRI KERJASAMA PENELITIAN DENGAN C-TECH LABS EDWAR TECHNOLOGY','LULUS 100 PERSEN',
            'FK UNPRI GELAR SEMINAR CHALLENGING IN ARTHROPLASTY REVISION','FK UNPRI GELAR SEMINAR LOW BACK PAIN & INTERVENTIONAL PAIN MANAGEMENT'
        ]
    ]
    let bot=[
        [
            'Selasa, 07 April 2026 11:10:39','Rabu, 04 Februari 2026 12:11:25','Senin, 01 Desember 2025 09:59:12',
            'Senin, 30 Juni 2025 12:25:20','Rabu, 27 November 2024 14:37:42','Kamis, 04 Mei 2023 17:47:55',
            'Kamis, 29 November 2018 09:27:38','Sabtu, 05 Maret 2016 06:19:36'
        ],
        [
            'Rabu, 11 Maret 2026 11:00:55','Senin, 09 Februari 2026 09:42:19',"Jum'at, 06 Februari 2026 13:09:45",
            'Senin, 26 Januari 2026 09:52:37','Selasa, 06 Januari 2026 15:37:26','Selasa, 06 Januari 2026 15:31:14'
        ],[
            'Diberikan kepada Dr. dr. I. Nyoman Ehrich Lister, M.Kes., AIFM','Program Studi Sarjana Pendidikan Dokter dan Profesi Dokter',
            '','Pendiri UNPRI Dr dr I Nyoman Ehrich Lister MKes AIFM mengatakan, setelah lulus, para dokter baru akan menghadapi tugas baru yaitu tugas profesi dalam rangka mengamalkan ilmu, serta mengabdikan diri pada masyarakat, bangsa dan negara.',
            'Memudahkan Dokter Lulusan UNPRI Melanjutkan Pendidikan Spesialis','Kerjasama Bidang Kesehatan Antara RS Royal Prima- Kecamatan Medan Petisah Akan Terus Ditingkatkan',
            'Sebanyak 98 Sarjana Kedokteran Unpri Diyudisium','Gubsu: Banyak Dokter Tak Mau Berpraktek Di Daerah Terpencil',
            'Fakultas Kedokteran Dituntut Cetak Dokter Berkualitas','RS Royal Prima Telah Menerima Pasien BPJS Kesehatan Mulai 1 Februari 2015',
            'Pasien Tak Perlu Lagi Berobat ke Luar Negeri','Kanker Payudara Penyakit yang Paling Menghantui Bagi Wanita Diatas 30 Tahun',
            'Kadis Kesehatan Kota Medan : Sangat Penting Untuk Melakukan Tes HIV Pada Wanita Hamil','Rumah Sakit Royal Prima Segera Miliki Pengobatan Kanker ECCT',
            'Mahasiswa Angkatan Pertama Fakultas Kedokteran Unpri Berhasil Dilantik Menjadi Dokter','Dari Tiga Dokter Spesialis Bedah Tulang dan Sendi Satu Diantaranya Dari Jerman',
            'Banyak Pasien Nyeri Punggung Tak Ingin Jalani Operasi Invasif Bedah Terbuka','Satu-satunya Fakultas Kedokteran Swasta Di Sumut Yang Memiliki Rumah Sakit Pendidikan Sendiri',
            'Wakil Gubernur Sumatera Utara, Ir. H. Tengku Erry Nuradi, M.Si., resmikan Rumah Sakit Royal Prima Medan, dan mengharapkan Royal Prima Mendukung Terwujudnya Pelayanan Rumah Sakit Berstandar Internasional',
            'Tertinggi di Sumatera Utara, 94% Alumni Fakultas Kedokteran Universitas Prima Indonesia Lulus Ujian Kompetensi OSCE Nasional',
            'Koordinator Kopertis Wil I NAD - Sumut: FK Unpri, Swasta Satu - Satunya di Sumut yang Memiliki Rumah Sakit Pendidikan Milik Sendiri'
        ]
    ]
    let a=0
    for (let i=0;i<head.length;i++){
        proc.push(<p key={a}className='bold' style={{fontSize:'36px',margin:'2vh 0 3vh 0'}}>{head[i]}</p>)
        a=a+1
        if (i<2){
            for(let j=0;j<top[i].length;j++){
                proc.push(<p key={a}style={{borderTop:'1px solid black',width:'74vw',padding:'1vh 0 1vh 0'}}>
                    <span className='bold' style={{margin:'0 2vw 0 2vw'}}>{j+1}</span>
                    {top[i][j]}
                    </p>)
                    a=a+1
                proc.push(<p key={a}style={{borderTop:'1px solid black',width:'69.5vw',marginLeft:'4.5vw',padding:'1vh 0 1vh 0'}}>
                    <span className='bold' style={{marginLeft:'0.5vw',padding:'3px',background:'#aa6644',color:'#ffffff',borderRadius:'3px'}}>{bot[i][j]}</span>
                    <button style={{marginLeft:'1vw',background:'#999999',border:'1px solid black'}}>Dummy..</button></p>)
                    a=a+1
            }
        }else{
            for(let j=0;j<top[i].length;j++){
                proc.push(<p key={a}style={{borderTop:'1px solid black',width:'74vw',padding:'1vh 0 0.5vh 0',color:'#4477bb'}}>
                    <span className='bold' style={{margin:'0 2vw 0 0.5vw'}}>{top[i][j]}</span>
                    </p>)
                    a=a+1
                if (bot[i][j]!=''){
                    proc.push(<p key={a}style={{width:'auto',padding:'0.5vh 0 1vh 0',marginLeft:'0.5vw',borderRadius:'3px'}}>{bot[i][j]}
                        </p>)
                        a=a+1
                }
            }
        }
    }
    return (
        <main >
        <div style={{width:'74vw',background:'#99ccff',padding:'2vh 0 2vh 1vw',borderRadius:'4px'}}>
            <p style={{color:'#4466ff',fontWeight:'bold',fontSize:'34px'}}>"Invest Before You Receive"</p>
            <p style={{fontSize:'12px',color:'#4466ff',marginTop:'2vh'}}>Abdi Dharma</p>
        </div>
        {proc}
        </main>
    );
}
