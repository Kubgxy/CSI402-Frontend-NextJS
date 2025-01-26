"use client"

const EmailAuth = ({email, onChange}: {email: string, onChange: (event: any) => void}) => {
   return (
       <div className="flex flex-col gap-4">
           <label className="text-lg font-medium text-blue-500">กรุณากรอกอีเมล</label>
           <input
               type="email"
               value={email}
               onChange={onChange}
               required
               className="w-full px-3 py-2 border rounded-lg text-gray-700"
               placeholder="กรอกอีเมลของคุณ"
           />
       </div>
   )
}

export default EmailAuth