'use client'
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  
  const submitAuth = () => {  
    alert("คุณไม่มีสิทธิ์การใช้งาน กรุณาลงทะเบียนเพื่อรับสิทธิ์ชั่วคราว")
    router.push("./page/auth")
  }
  
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-6 text-blue-500">กรุณาตรวจสอบสิทธิ์</h1>
        <button
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 font-medium"
          onClick={submitAuth}
        >
          ตรวจสอบสิทธิ์
        </button>
      </div>
    </main>
  )
}