import { postr,get1r,deleter } from "../railsapi";
import { NextResponse } from "next/server"
const route='usersertifikats'
export async function POST(request: Request) {  
  const req=await request.json()
  const res=await postr(route,req)
  if (res.ok){
    return NextResponse.json({success:true})
  }
  return NextResponse.json({ status:'fail'}, { status: 401 })
}
export async function GET(request:Request){
  const res=await get1r(route)
  if (res.ok){
    const data=await res.json()
    return NextResponse.json(data)
  }
  return NextResponse.json({ status:'fail'}, { status: 401 })
}
export async function DELETE(request: Request) {  
  const req=await request.json()
  console.log('thisisreq',req)
  const res=await deleter(route,req)
  if (res.ok){
    return NextResponse.json({success:true})
  }
  return NextResponse.json({ status:'fail'}, { status: 401 })
}