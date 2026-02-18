"use client";

import React from "react";
import Image from "next/image";
import { User, Lock, Gamepad2 } from "lucide-react";

export default function LoginPage() {
  return (
    // Container หลัก ใส่พื้นหลังสีมืดและ Gradient
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden font-sans text-slate-200 selection:bg-cyan-500 selection:text-white">

      {/* Background Decor (แสงนีออนพื้นหลัง) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px]" />

      {/* Grid Pattern Overlay (ลายตารางสไตล์เกม) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md p-8 bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl shadow-cyan-500/10">

        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-40 h-40 mb-4 hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
            {/* เปลี่ยน path รูปภาพตรงนี้ให้ตรงกับไฟล์ของคุณ */}
            <Image
              src="/game.png"
              alt="Game Center Logo"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            WELCOME BACK
          </h1>
          <p className="text-slate-400 text-sm">พร้อมลุยในโลกเกมหรือยัง?</p>
        </div>

        {/* Form Section */}
        <form className="space-y-5">
          {/* Username Input */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-300 uppercase tracking-wider ml-1">Username</label>
            <div className="relative group">ืยท
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-cyan-400 transition-colors">
                <User size={20} />
              </div>
              <input
                type="text"
                placeholder="กรอกชื่อผู้ใช้"
                className="w-full pl-10 pr-4 py-3 bg-slate-950/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-slate-200 placeholder:text-slate-600 transition-all"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-300 uppercase tracking-wider ml-1">Password</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-purple-400 transition-colors">
                <Lock size={20} />
              </div>
              <input
                type="password"
                placeholder="กรอกรหัสผ่าน"
                className="w-full pl-10 pr-4 py-3 bg-slate-950/50 border border-slate-700 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-slate-200 placeholder:text-slate-600 transition-all"
              />
            </div>
            <div className="text-right">
              <a href="#" className="text-xs text-cyan-400 hover:text-cyan-300 hover:underline">ลืมรหัสผ่าน?</a>
            </div>
          </div>

          {/* Login Button */}
          <button className="w-full py-3.5 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-lg shadow-lg shadow-cyan-500/20 transform active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2">
            <Gamepad2 size={20} />
            <span>เข้าสู่ระบบ (START GAME)</span>
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-[#0F1218] text-slate-500 rounded text-xs uppercase">Or Login With</span>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1877F2] hover:bg-[#166fe5] text-white rounded-lg transition-colors font-medium text-sm">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 2.848-6.326 5.862-6.326 1.494 0 3.018.25 3.018.25v3.132h-1.707c-2.261 0-2.581 1.695-2.581 3.253v1.27h3.52l-.427 3.667h-3.093v7.98c-1.449.17-2.92.17-4.391 0z" />
            </svg>
            Facebook
          </button>

          <button className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#06C755] hover:bg-[#05b34c] text-white rounded-lg transition-colors font-medium text-sm">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M22 10.6C22 5.9 17.5 2 12 2S2 5.9 2 10.6c0 4.2 3.5 7.7 8.5 8.4-.3.9-.7 2.3-1 2.8-.4.7-1.8 2.8 1.6 1.5 4.3-1.6 10.9-6.4 10.9-12.7zM12 16c-4.4 0-8-3-8-6.8S7.6 2.5 12 2.5s8 3 8 6.8-3.6 6.7-8 6.7zM8.2 8.3h.8c.2 0 .4.2.4.4v2.7h1.7c.2 0 .4.2.4.4s-.2.4-.4.4h-2.1c-.2 0-.4-.2-.4-.4V8.7c0-.2.2-.4.4-.4zm3.9 0h.8c.2 0 .4.2.4.4v3.5c0 .2-.2.4-.4.4h-.8c-.2 0-.4-.2-.4-.4V8.7c0-.2.2-.4.4-.4zm3.1 0h.8c.2 0 .4.2.4.4v2.3l1.8-2.6h1l-2.1 2.8 2.2 3h-1l-1.8-2.5v2.2c0 .2-.2.4-.4.4h-.8c-.2 0-.4-.2-.4-.4V8.7c0-.2.2-.4.4-.4zm3.2 0h.8c.2 0 .4.2.4.4v.9h1.7c.2 0 .4.2.4.4s-.2.4-.4.4h-1.7v1h1.7c.2 0 .4.2.4.4s-.2.4-.4.4h-2.1c-.2 0-.4-.2-.4-.4V8.7c0-.2.2-.4.4-.4z" />
            </svg>
            Line
          </button>
        </div>

      </div>
    </div>
  );
}