// app/api/login/route.ts
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { generatejwt, verifyjwt } from '@/app/lib/jwt'
import { postr } from '../railsapi'
function cookiepropgen(time){
  return {
    httpOnly: true,
    secure: false,
    sameSite: 'lax' ,
    maxAge: time
  }
}
const sessionprop=cookiepropgen(3600*24*30)
const jwtprop=cookiepropgen(3600)

async function reallogin(nim,password){
  console.log('manual')
  const res = await postr('sessions',{nim:nim,password:password})
  const data = await res.json()
  //data contain nim , passwd, semester , token
  if (res.ok) {
    const cookiess= await cookies()
    const jwt= generatejwt(data)
    cookiess.set('sessiontoken', data.token,sessionprop )
    cookiess.set('jwt', jwt, jwtprop)
    return NextResponse.json({ data: data })
  }else{
    return NextResponse.json({ error: 'Login failed' }, { status: 401 })
  }
}

export async function autologin(cookie){
  console.log('autoooooooooooooooooooooooooooooooooooooooooooooo')
  const existingJWT = cookie.get('jwt')?.value
  const sessiontoken = cookie.get('sessiontoken')?.value
  if (existingJWT) {
    const verified = verifyjwt(existingJWT)
    if (verified) {
      console.log('jwtok',verified)
      return {
        success: true, 
        semester:verified.semester,
        nim: verified.nim,
        name: verified.name
      }
    }
  }
  if (sessiontoken){
    const validate=await postr('sessions',{sessiontoken:sessiontoken})
    if (validate){
      console.log('session')
      const data=await validate.json()
      console.log('rails data response for jwt',data)
      const jwt= generatejwt(data)
      return { 
        success: true, 
        user: data.name,
        nim:data.nim,
        semester:data.semester,
        setjwt:true,
        jwt:jwt,
        jwtprop:jwtprop
      }
    }
  }
  return { error: 'session ended' }
}

export async function POST(request: Request) {  
  const req=await request.json()
  const { nim, password } = req
  if (nim && password){
    const response=await reallogin(nim,password)
    return response
   }//else{
  //   const cookie=await cookies()
  //   const response=await autologin(cookie)
  //   return NextResponse.json(response)
  // }
}