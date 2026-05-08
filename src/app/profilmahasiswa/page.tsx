import "@/app/globals.css";
import { metadatagenerator } from "../metadata";
export const metadata=metadatagenerator('profilmahasiswa')


export default function Home() {
  const data=[
    ['INFORMASI PENDAFTARAN',
        ['Status Pendaftaran','Peserta didik baru (mahasiswa baru)',
        'Kelas yang dipilih','Sarjana reguler ganjil malam',
        'Fakultas','Sains dan teknologi',
        'Program studi','Sarjana Teknik informatika',
        'Nomor induk mahasiswa ( NIM )','27182837378',
        'Nomor induk sistem','27283',
        'Status mahasiswa','aktif',
        'Terdaftar mulai T.A.','2024/1'
        ]
    ],
    ['DATA DASAR',
        ['Nama lengkap','Beryl',
        'Tempat lahir','Binjai',
        'Tanggal lahir','senin, 9 april 2000',
        'Jenis kelamin','laki-laki',
        'Golongan darah','O',
        'Agama','Hindu',
        'Hobi','tidur',
        'Gambar Pasfoto','/frieren.jpeg',
        ]
    ],
    ['DATA IDENTITAS',
        ['Email','aaaaa@gmail.com',
        'Kewarganegaraan','Indonesia',
        'Negara','Indonesia',
        'NIK','1999999999',
        'Nomor induk siswa nasional','00496544666',
        'Alamat domisili','jln ini',
        'Alamat sesuai NIK','jln itu',
        'Dusun','ya','RT','001','RW','001','Kelurahan','Manila',
        'Kecamatan - Kabupaten/Kota - Provinsi - Negara','Kec. Medan Kota - Kota Medan - Prov. Sumatera Utara - Indonesia',
        'Kode pos','99999','Jenis tinggal','Bersama orang tua','Telepon','1236885333',
        'Nomor telepon yang bisa dihubungi','1236885333','Pekerjaan','Belum/Tidak Bekerja',
        'Gambar KTP','/frieren.jpeg'
        ]
    ],
    ['DATA PENDIDIKAN TERAKHIR',
        ['Institusi Asal','SMAN',
        'Pendidikan Terakhir','SMA',
        'Gambar Ijazah','/frieren.jpeg'
        ]
    ],
    ['DATA ORANG TUA / WALI',
        ['Gambar Kartu Keluarga','/frieren.jpeg','Nomor Kartu Keluarga (NKK)','65656646',
        'Nomor Induk Kependudukan (NIK) Ayah','5545654654','Nama Ayah','Budi',
        'Tanggal Lahir Ayah','senin, 9 juni 1922','Pendidikan Ayah','s2','Pekerjaan Ayah','Gatau','Penghasilan Ayah',
        'adadeh','Nomor Induk Kependudukan (NIK) Ibu','6646644646','Nama Ibu','fern','Tanggal Lahir Ibu','senin, 9 juni 1922',
        'Pendidikan Ibu','s1','Pekerjaan ibu','gatau','penghasilan ibu','adadeh','Nama Wali','?',
        'Tanggal Lahir Wali','?','Pendidikan Wali','?','Pekerjaan Wali','?','Penghasilan Wali','?',
        'Alamat Lengkap Terakhir Orang Tua / Wali','jln ini','Nomor handphone / telepon Ayah / Ibu / Wali yang bisa dihubungi',
        '656656569'
        ]
    ],
    ['INFORMASI ASURANSI KESEHATAN',
        ['Status Asuransi Kesehatan','BPJS Kesehatan','Nomor Asuransi Kesehatan','595999756','Kelas Kesehatan',
        'Kelas 3'
        ]
    ],
  ]
  let wall=[]
  let a=1
  for (let i=0;i<data.length;i++){
    let temp=[]
    for (let j=0;j<data[i][1].length;j+=2){
        if (data[i][1][j].toLowerCase().includes('gambar')){
            temp.push(<tr key={a}>
                <td className='bold'>{data[i][1][j]}</td>
                <td><img src={data[i][1][j+1]}></img></td>
            </tr>)
        }else{
            temp.push(<tr key={a}>
                <td className='bold'>{data[i][1][j]}</td>
                <td>{data[i][1][j+1]}</td>
            </tr>)
        }
        a=a+1
    }
    wall.push(<p key={a} className='bold' style={{fontSize:'24px',margin:'2vh 1vw 2vh 1vw'}}>{data[i][0]}</p>)
    a=a+1
    wall.push(<table key={a}>
        <thead>
            <tr style={{fontWeight:'bold',margin:'0',padding:'0'}}>
                <th style={{width:'18vw',margin:'0',padding:'0'}}></th>
                <th style={{width:'48vw',margin:'0',padding:'0'}}></th>
            </tr>
        </thead>
        <tbody>
        {temp}
        </tbody>
        </table>)
    a=a+1
  }
  
  return (
    <main>
      <p className='header' style={{marginTop:'1vh'}}>PROFIL MAHASISWA</p>
        {wall}
      <p style={{height:'5vh'}}></p>
    </main>
  );
}
