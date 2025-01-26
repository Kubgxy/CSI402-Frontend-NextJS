"use client"
import { useState } from "react"
import EmailAuth from '../../component/EmailAuth'
import { useRouter } from "next/navigation"

export default function Home() {
   const [email, setEmail] = useState("")
   const [alertAuth,setAlertAuth] = useState(false)
  const router = useRouter()

   const submitAuth = (e: any) => {
     e.preventDefault()
     setAlertAuth(true)
     console.log(email)
     router.push("../page/user")
   }
   
   return (
     <main className="min-h-screen bg-gray-100 p-8">
       <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
         <h1 className="text-2xl font-bold mb-6 text-center text-blue-500">ระบบลงทะเบียนชั่วคราว</h1>
         <form onSubmit={submitAuth}>
           <EmailAuth 
             email={email}
             onChange={(e) => setEmail(e.target.value)}
           />
           <button
             type="submit"
             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 mt-4"
           >
             ลงทะเบียนใช้งาน 30 นาที
           </button>

           {alertAuth && (
             <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">ยืนยันสิทธิ์สำเร็จ</div>
           )}
         </form>
       </div>
     </main>
   )
}