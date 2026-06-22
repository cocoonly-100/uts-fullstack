import {patchr,get1r } from "../railsapi"
import { NextResponse } from "next/server"

export async function PUT(request: Request) {  
  const req=await request.json()
  const {biodata}=req
  const res=await patchr('biodata',{biodata:biodata})
  if (res.ok){
    return NextResponse.json({success:true})
  }
  return NextResponse.json({ status:'fail'}, { status: 401 })
}
export async function GET(request:Request){
  const res=await get1r('biodata')
  if (res.ok){
    const data=await res.json()
    return NextResponse.json({success:true,biodata:data})
  }
  return NextResponse.json({ status:'fail'}, { status: 401 })
}