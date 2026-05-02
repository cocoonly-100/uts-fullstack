export function tablegenerator(data,tablehead,table){// array rule , index 0 , header
  for (let i=0;i<data[0].length/2;i++){
    tablehead.push(<th key={`table-0-${i}`} style={{width:data[0][i*2+1]}}>{data[0][i*2]} </th>)
  }
  for (let i=1;i<data.length;i++){
    let temp=[]
    for (let j=0;j<data[i].length;j++){
      temp.push(<td key={`table-${i}-${j}`} >{data[i][j]} </td>)
    }
    table.push(<tr key={`table-${i}-final`} >{temp}</tr>)
  }
}

export function completetablegenerator(data){
  let tablehead=[]
  let table=[]
  tablegenerator(data,tablehead,table)
  return(<table style={{marginTop:'1vh'}}>
        <thead>
          <tr style={{fontWeight:'bold',height:'6vh'}}>
            {tablehead}
          </tr>
        </thead>
        <tbody>
          {table}
        </tbody>
      </table>)
}
function noheadertablegenerator(data,tablehead,table){// array rule , index 0 , header
  for (let i=0;i<data[0].length/2;i++){
    tablehead.push(<th key={`table-0-${i}`} style={{width:data[0][i*2+1],height:'0',margin:'0',padding:'0'}}></th>)
  }
  for (let i=1;i<data.length;i++){
    let temp=[]
    for (let j=0;j<data[i].length;j++){
      if (j==0){
        temp.push(<td key={`table-${i}-${j}`} style={{fontWeight:'bold'}}>{data[i][j]}</td>)
      }else{
         temp.push(<td key={`table-${i}-${j}`} >{data[i][j]}</td>)
      }
    }
    table.push(<tr key={`table-${i}-final`} >{temp}</tr>)
  }
}

export function completenoheadertablegenerator(data){
  let tablehead=[]
  let table=[]
  noheadertablegenerator(data,tablehead,table)
  return(<table style={{marginTop:'1vh'}}>
        <thead style={{lineHeight:'0'}}>
          <tr style={{height:'0',padding:'0',margin:'0'}}>
            {tablehead}
          </tr>
        </thead>
        <tbody>
          {table}
        </tbody>
      </table>)
}
export function completemegatablegenerator(data){
  let u=[]
  let a=0
  for (let i=0;i<data.length;i++){
    u.push(<tr key={a} style={{border:'none'}} ><td style={{height:'8vh',fontSize:'24px',fontWeight:'bold',verticalAlign:'middle',border:'none'}}>{data[i][0]}</td></tr>)
    a+=1
    let now1=data[i][1]
    let temp1=[]
    for(let j=0;j<now1.length;j++){
        temp1.push(<tr key={a} style={{border:'none'}}><td style={{border:'none'}}>{now1[j]}</td></tr>)
        a=a+1
    }
    u.push(temp1)
  }
  return (<table style={{border:'none'}}><tbody>{u}</tbody></table>)
}

export function completetableoonecolumngenerator(data){
  let u=[]
  let a=0
  for (let i=0;i<data.length;i++){
    if(data[i][0]!=''){u.push(<tr key={a}><td style={{height:'8vh',fontSize:'24px',fontWeight:'bold',verticalAlign:'middle',border:'none',borderTop:'1px solid black',borderBottom:'1px solid black'}}>{data[i][0]}</td></tr>)
      a+=1}
    let temp=[]
    if (data[i][0].toLowerCase().includes('struktur organisasi')==false){
      for (let j=0;j<data[i][1].length;j++){
        temp.push(<li key={a}>{data[i][1][j]}</li>)
        a+=1
      }
      if(data[i][1].length>1){
        u.push(<tr key={a}><td style={{border:'none',paddingLeft:'1.5vw'}}><ol style={{listStyleType:'number'}}>{temp}</ol></td></tr>)
        a+=1
      }else{
        u.push(<tr key={a}><td style={{border:'none'}}><ol >{temp}</ol></td></tr>)
        a+=1
      }
    }else{
      for (let j=0;j<data[i][1].length;j+=2){
        u.push(<tr key={a}><td style={{border:'none',display:'flex',padding:'10px 0 10px 10px',borderTop:'1px solid black'}}>
          <img src='/frieren.jpeg' style={{display:'inline'}}></img>
          <div className='bold' style={{marginLeft:'1vw',fontSize:'20px'}}>
            {data[i][1][j]}<br/>{data[i][1][j+1]}
          </div></td></tr>)
          a+=1
      }
    }
  }
  return(
    <table style={{border:'none'}}>
        <tbody>
          {u}
        </tbody>
    </table>
  )
}

export function completekrsgeneration(data,tabledata,tabledata2,tabledata3){
    let u1=completenoheadertablegenerator(data)
    let u2=completetablegenerator(tabledata)
    let u3=completetableoonecolumngenerator(tabledata2)
    let u4=[]
    for (let x=0;x<tabledata3.length;x++){
      let tablehead=[]
      let table=[]
      let data=tabledata3[x][1]
      for (let i=0;i<data[0].length/2;i++){
          tablehead.push(<th key={`table-0-${i}`} style={{width:data[0][i*2+1],border:'0'}}></th>)
      }
      for (let i=1;i<data.length;i++){
          let temp=[]
          for (let j=0;j<data[i].length;j++){
          temp.push(<td key={`table-${i}-${j}`} style={{borderBottom:'0',borderLeft:'0',borderRight:'0',borderTop:'0.5px solid #cccccc'}}>{data[i][j]} </td>)
          }
          table.push(<tr key={`table-${i}-final`} style={{border:'0',height:'5vh'}}>{temp}</tr>)
      }
      u4.push(<p key={-x}style={{fontSize:'18px',fontWeight:'bold',margin:'2vh 0 2vh 0'}}>{tabledata3[x][0]}</p>)
      u4.push(<table key={x} style={{marginTop:'1vh',border:'0'}}>
          <thead>
            <tr style={{fontWeight:'bold'}}>
              {tablehead}
            </tr>
          </thead>
          <tbody>
            {table}
          </tbody>
        </table>)
    }
    return(<div>{u1}<br/>
      <div style={{display:'flex'}}>
        <button>Download Kartu Rencana Studi (KRS)</button>
        <button>Download Kartu Hasil Studi (KHS)</button>
      </div>
      <p className='header' style={{marginTop:'1vh'}}>MATA KULIAH YANG DIAMBIL</p>
        {u2}<br />
      <div style={{width:'74vw',background:'#ffbbcc',borderRadius:'4px',padding:'1vh 1vw 1vh 1vw'}}>
        <p>PERHATIAN :</p>
        {u3}
      </div><br/>
       <p className='header' style={{marginTop:'1vh'}}>Penjelasan Istilah</p>
       {u4}</div>)
}