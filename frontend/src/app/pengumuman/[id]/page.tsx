import { data } from './data'
import Link from 'next/link'
export default async function EventPage({ params }) {
  const {id}= await params
  const i=parseInt(id.charAt(0))
  const j=parseInt(id.split('_')[1])
  const alldata = data[i][j]
  let inner=[]
  if (!alldata.html ) {
    inner.push(<p style={{fontSize:'100px'}}>Theres nothing here</p>)
}else{
    inner.push(alldata.html)
}
  return (
    <div>
      <h1 style={{fontSize:'28px'}}>{alldata.title} <span style={{fontSize:'12px',color:'grey'}}>{alldata.date}</span></h1>
      <Link href={'/pengumuman'}><button>Kembali ke Daftar Pengumuman</button></Link>
      <br/>
      <div>
        {inner}
      </div>
    </div>
  )
}