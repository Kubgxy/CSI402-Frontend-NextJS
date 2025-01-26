"use client"

export default function User() {

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-500">สถานะการลงทะเบียน</h1>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p>อีเมล: Your Email</p>
          <p>สถานะ: ลงทะเบียนสำเร็จ</p>
          <p>ระยะเวลา: 30 นาที</p>
        </div>
      </div>
    </main>
  )
}