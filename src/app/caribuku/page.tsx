'use client'
import "@/app/globals.css";
export default function Home() {
  function clearInput() {
    document.getElementById('id').value = ''
    document.getElementById('judul').value = ''
  }
  const buttondata=[
    [function(){clearInput()},{},'Cari'],
    [function(){clearInput()},{},'Pencarian Lebih Lanjut'],
    [function(){clearInput()},{marginTop:'1vh'},'Panduan Penggunaan Sistem Perpustakaan'],
  ]
  let buttons=[]
  for(let i=0;i<3;i++){
    buttons.push(<button onClick={buttondata[i][0]} style={buttondata[i][1]}>{buttondata[i][2]}</button>)
  }
  return (
    <main>
      <p className='header' style={{marginTop:'1vh'}}>SMART
        <span style={{fontSize:'16px',fontWeight:'normal',color:'#cccccc'}}>  (SISTEM MANAJEMEN & ADMINISTRASI PERPUSTAKAAN)</span>
      </p>
      <br/>
      ID <br/>
      <input id='id' style={{width:'20vw',border:'1px solid black',height:'4vh',margin:'1vh 0 1vh 0'}}></input><br/>
      Judul <br/>
      <input id='judul' style={{width:'34vw',border:'1px solid black',height:'4vh',margin:'1vh 0 1vh 0'}}></input>
      <br/>
      Jenis <br/>
      <select id="type" style={{width:'25vw',height:'4vh',margin:'1vh 0 1vh 0'}} >
        <option value="">Semua</option>
        <option value="book">Buku</option>
        <option value="ebook">E-book</option>
        <option value="tugasakhir">Tugas Akhir</option>
        <option value="skripsi">Skripsi</option>
        <option value="tesis">Tesis</option>
        <option value="disertasi">Disertasi</option>
      </select><br/>
      Program Studi<br/>
      <select id="jurusan" style={{width:'25vw',height:'4vh',margin:'1vh 0 1vh 0'}} >
        <option value="">Semua Program Studi</option>
        <option value="44">Pertukaran Mahasiswa Merdeka</option>
        <option value="16">Manajemen Informatika</option>
        <option value="48">Perubatan dan Pembedahan</option>
        <option value="19">Agroteknologi</option>
        <option value="54">Manajemen (Kampus Kota Pekanbaru)</option>
        <option value="9">Manajemen</option>
        <option value="35">Pendidikan Profesi Bidan</option>
        <option value="69">Ilmu Komputer</option>
        <option value="45">Hukum</option>
        <option value="68">Fisioterapi</option>
        <option value="66">Pendidikan Profesi Psikolog</option>
        <option value="14">Sistem Informasi</option>
        <option value="24">Psikologi</option>
        <option value="51">Rekayasa Sipil</option>
        <option value="5">Ilmu Keperawatan</option>
        <option value="47">Pembelajaran Umum</option>
        <option value="34">Kebidanan</option>
        <option value="3">Pendidikan Dokter Gigi</option>
        <option value="57">Keperawatan</option>
        <option value="15">Komputerisasi Akuntansi</option>
        <option value="62">Jantung dan Pembuluh Darah</option>
        <option value="23">Ilmu Hukum</option>
        <option value="10">Akuntansi</option>
        <option value="17">Teknik Industri</option>
        <option value="58">Kesehatan Masyarakat (Kampus Kota Pekanbaru)</option>
        <option value="38">Kedokteran Tropis</option>
        <option value="61">Ilmu Kesehatan Mata</option>
        <option value="28">Kenotariatan</option>
        <option value="12">Keuangan dan Perbankan</option>
        <option value="52">Pendidikan Profesi Apoteker</option>
        <option value="40">Ilmu Kedokteran</option>
        <option value="67">Bedah</option>
        <option value="2">Profesi Dokter</option>
        <option value="59">Kedokteran (Kampus Kota Pekanbaru)</option>
        <option value="41">Manajemen</option>
        <option value="64">Anestesiologi dan Terapi Intensif</option>
        <option value="33">Farmasi Klinis</option>
        <option value="29">Hukum</option>
        <option value="37">Kedokteran Klinis</option>
        <option value="39">Bahasa Mandarin untuk Komunikasi Bisnis dan Profesional</option>
        <option value="26">Manajemen</option>
        <option value="46">Arsitektur</option>
        <option value="4">Profesi Dokter Gigi</option>
        <option value="50">Radiologi</option>
        <option value="55">Psikologi (Kampus Kota Pekanbaru)</option>
        <option value="60">Pendidikan Profesi Dokter (Kampus Kota Pekanbaru)</option>
        <option value="49">Kedokteran Keluarga Layanan Primer</option>
        <option value="20">Agribisnis</option>
        <option value="36">Ilmu Kedokteran Gigi</option>
        <option value="65">Penyakit Dalam</option>
        <option value="8">Kesehatan Masyarakat</option>
        <option value="63">Obstetri dan Ginekologi</option>
        <option value="43">Kredensial Mikro Mahasiswa Indonesia</option>
        <option value="53">Kebidanan (Kampus Kota Pekanbaru)</option>
        <option value="11">Akuntansi</option>
        <option value="56">Sistem Informasi (Kampus Kota Pekanbaru)</option>
        <option value="18">Teknik Elektro</option>
        <option value="25">Profesi Ners</option>
        <option value="22">Pendidikan Bahasa Inggris</option>
        <option value="1">Pendidikan Dokter</option>
        <option value="13">Teknik Informatika</option>
        <option value="7">Keperawatan</option>
        <option value="6">Kebidanan</option>
        <option value="27">Akuntansi</option>
        <option value="32">Kesehatan Masyarakat</option>
        <option value="42">Desain Komunikasi Visual</option>
        <option value="31">Sains Biomedis</option>
        <option value="30">Pendidikan Bahasa Indonesia</option>
        <option value="21">Pendidikan Bahasa dan Sastra Indonesia</option></select><br/>
        {buttons[0]}{buttons[1]}<br/>
        {buttons[2]}
    </main>
  );
}

