import "@/app/globals.css";

export default function Home() {
  let u=['Surat Keterangan Aktif Kuliah','Surat Keterangan Bebas Pustaka','Bebas Keuangan','Bebas Kesehatan','Bebas Akademik']
  let main=[]
  let a=0
  for (let i=0;i<5;i++){
    main.push(<p key={a}>{i+1}.<span style={{color:'#4477bb',cursor:'pointer'}}>{u[i]}</span></p>)
    a=a+1
  }
  return (
    <main>
      <p className='header' style={{marginTop:'1vh'}}>PERMOHONAN</p>
      {main}
    </main>
  );
}

