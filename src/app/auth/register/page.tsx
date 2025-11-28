"use client";

import { motion } from "framer-motion";
import { Heart, Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const router = useRouter();

  const roles = [
    {
      id: "mother",
      title: "Expecting Mother",
      description: "Track your pregnancy journey",
      icon: "👶",
      route: "/dashboard/mother"
    },
    {
      id: "doctor",
      title: "Healthcare Provider",
      description: "Monitor and care for patients",
      icon: "👨‍⚕️",
      route: "/dashboard/doctor"
    },
    {
      id: "family",
      title: "Family Member",
      description: "Support your loved one",
      icon: "👨‍👩‍👧",
      route: "/dashboard/family"
    },
    {
      id: "admin",
      title: "Administrator",
      description: "Manage platform operations",
      icon: "⚙️",
      route: "/dashboard/admin"
    }
  ];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRole && formData.password === formData.confirmPassword) {
      const role = roles.find(r => r.id === selectedRole);
      if (role) {
        router.push(role.route);
      }
    }
  };

  return (
    <div className="min-h-screen gradient-multi px-6 py-12">
      <div className="absolute top-6 left-6">
        <Link href="/" className="flex items-center gap-2">
          <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
          <span className="text-xl font-bold">Pregnant Women SOS</span>
        </Link>
      </div>

      <div className="container mx-auto max-w-6xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Heart className="w-16 h-16 text-pink-500 fill-pink-500 mx-auto mb-4 animate-heartbeat" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Community</h1>
          <p className="text-xl text-gray-600">Choose your role to get started</p>
        </motion.div>

        {!selectedRole ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {roles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  onClick={() => setSelectedRole(role.id)}
                  className="glass border-0 rounded-3xl p-6 cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
                >
                  <div className="text-5xl mb-4">{role.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                  <p className="text-gray-600 text-sm">{role.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto"
          >
            <Card className="glass border-0 rounded-3xl p-8 md:p-10 shadow-2xl">
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">
                  {roles.find(r => r.id === selectedRole)?.icon}
                </div>
                <h2 className="text-2xl font-bold mb-1">
                  {roles.find(r => r.id === selectedRole)?.title}
                </h2>
                <button
                  onClick={() => setSelectedRole("")}
                  className="text-sm text-pink-500 hover:text-pink-600"
                >
                  Change role
                </button>
              </div>

              <form onSubmit={handleRegister} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="pl-10 rounded-xl border-pink-200 focus:border-pink-400"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
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
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
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

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                      className="pl-10 rounded-xl border-pink-200 focus:border-pink-400"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 h-12"
                >
                  Create Account
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600 text-sm">
                  Already have an account?{" "}
                  <Link href="/auth/login" className="text-pink-500 hover:text-pink-600 font-semibold">
                    Sign in
                  </Link>
                </p>
              </div>
            </Card>
          </motion.div>
        )}
      </div>

      {/* Background decorations */}
      <div className="fixed top-20 right-20 w-64 h-64 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
      <div className="fixed bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-300 to-pink-300 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
    </div>
  );
}