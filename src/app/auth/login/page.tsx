"use client";

import { motion } from "framer-motion";
import { Heart, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in production, this would be an API call
    if (email && password) {
      // For demo purposes, route based on email pattern
      if (email.includes("doctor")) {
        router.push("/dashboard/doctor");
      } else if (email.includes("family")) {
        router.push("/dashboard/family");
      } else if (email.includes("admin")) {
        router.push("/dashboard/admin");
      } else {
        router.push("/dashboard/mother");
      }
    }
  };

  return (
    <div className="min-h-screen gradient-multi flex items-center justify-center px-6 py-12">
      <div className="absolute top-6 left-6">
        <Link href="/" className="flex items-center gap-2">
          <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
          <span className="text-xl font-bold">Pregnant Women SOS</span>
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Card className="glass border-0 rounded-3xl p-8 md:p-10 shadow-2xl">
          <div className="text-center mb-8">
            <Heart className="w-16 h-16 text-pink-500 fill-pink-500 mx-auto mb-4 animate-heartbeat" />
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to continue your pregnancy journey</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 rounded-xl border-pink-200 focus:border-pink-400"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 rounded-xl border-pink-200 focus:border-pink-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-pink-300 text-pink-500 focus:ring-pink-400" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-pink-500 hover:text-pink-600 font-medium">
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 h-12"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link href="/auth/register" className="text-pink-500 hover:text-pink-600 font-semibold">
                Sign up free
              </Link>
            </p>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Demo accounts: mother@demo.com, doctor@demo.com, family@demo.com, admin@demo.com</p>
            <p className="mt-1">Password: any text</p>
          </div>
        </Card>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>By signing in, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </motion.div>

      {/* Background decorations */}
      <div className="fixed top-20 right-20 w-64 h-64 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
      <div className="fixed bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-300 to-pink-300 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
    </div>
  );
}