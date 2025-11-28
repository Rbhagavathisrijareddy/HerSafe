"use client";

import { motion } from "framer-motion";
import { Heart, Activity, MapPin, Bell, Calendar, Phone, Video, MessageSquare, AlertCircle, TrendingUp, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function FamilyDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  const healthData = [
    { day: "Mon", mood: 8, activity: 6 },
    { day: "Tue", mood: 7, activity: 7 },
    { day: "Wed", mood: 9, activity: 5 },
    { day: "Thu", mood: 8, activity: 8 },
    { day: "Fri", mood: 9, activity: 7 },
    { day: "Sat", mood: 8, activity: 6 },
    { day: "Sun", mood: 9, activity: 8 }
  ];

  const updates = [
    { id: 1, type: "checkup", message: "Sarah completed her checkup today. All vitals normal!", time: "2 hours ago", icon: Activity, color: "text-green-500" },
    { id: 2, type: "medication", message: "Prenatal vitamins taken on time", time: "5 hours ago", icon: Heart, color: "text-pink-500" },
    { id: 3, type: "appointment", message: "Next appointment scheduled for Jan 25", time: "1 day ago", icon: Calendar, color: "text-blue-500" },
    { id: 4, type: "milestone", message: "Baby is now the size of a cantaloupe!", time: "2 days ago", icon: Heart, color: "text-purple-500" }
  ];

  return (
    <div className="min-h-screen gradient-multi">
      {/* Header */}
      <header className="glass-pink border-b border-pink-200/50 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Heart className="w-8 h-8 text-pink-500 fill-pink-500 animate-heartbeat" />
            <div>
              <h1 className="text-xl font-bold">Family Dashboard</h1>
              <p className="text-sm text-gray-600">Monitoring: Sarah Johnson</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Status Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card className="glass-pink border-0 rounded-3xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Sarah is doing great!</h2>
                  <p className="text-gray-600">Week 24 of 40 • All vitals normal</p>
                </div>
                <div className="flex gap-3">
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                  <Button variant="outline" className="rounded-full border-pink-300">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                <div className="glass rounded-2xl p-4 text-center">
                  <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Heart Rate</p>
                  <p className="text-2xl font-bold">72 bpm</p>
                  <p className="text-xs text-green-600">Normal</p>
                </div>
                <div className="glass rounded-2xl p-4 text-center">
                  <Activity className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Blood Pressure</p>
                  <p className="text-2xl font-bold">118/78</p>
                  <p className="text-xs text-green-600">Normal</p>
                </div>
                <div className="glass rounded-2xl p-4 text-center">
                  <TrendingUp className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Weight</p>
                  <p className="text-2xl font-bold">66.5 kg</p>
                  <p className="text-xs text-green-600">On Track</p>
                </div>
                <div className="glass rounded-2xl p-4 text-center">
                  <MapPin className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="text-2xl font-bold">🏠 Home</p>
                  <p className="text-xs text-gray-600">Safe</p>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-3xl opacity-20" />
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Recent Updates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="glass border-0 rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-6">Recent Updates</h3>
              <div className="space-y-4">
                {updates.map((update) => (
                  <div key={update.id} className="glass-lavender rounded-2xl p-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-full glass flex items-center justify-center ${update.color}`}>
                        <update.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold mb-1">{update.message}</p>
                        <p className="text-sm text-gray-600">{update.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass border-0 rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full justify-start glass-pink border-0 hover:shadow-lg" variant="outline">
                  <Phone className="w-5 h-5 mr-3 text-green-500" />
                  Voice Call
                </Button>
                <Button className="w-full justify-start glass-lavender border-0 hover:shadow-lg" variant="outline">
                  <Video className="w-5 h-5 mr-3 text-blue-500" />
                  Video Call
                </Button>
                <Button className="w-full justify-start glass-blue border-0 hover:shadow-lg" variant="outline">
                  <MessageSquare className="w-5 h-5 mr-3 text-purple-500" />
                  Send Message
                </Button>
                <Button className="w-full justify-start glass border-0 hover:shadow-lg" variant="outline">
                  <MapPin className="w-5 h-5 mr-3 text-pink-500" />
                  View Location
                </Button>
              </div>

              <div className="mt-6 p-4 glass-pink rounded-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <AlertCircle className="w-5 h-5 text-orange-500" />
                  <p className="font-semibold">Emergency Contact</p>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  You'll be notified instantly if Sarah activates SOS
                </p>
                <Badge className="bg-green-500">Active Monitoring</Badge>
              </div>
            </Card>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Mood & Activity Tracking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="glass border-0 rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-6">Weekly Wellness</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={healthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="day" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip />
                  <Line type="monotone" dataKey="mood" stroke="#FF69B4" strokeWidth={3} name="Mood Score" />
                  <Line type="monotone" dataKey="activity" stroke="#9370DB" strokeWidth={3} name="Activity Level" />
                </LineChart>
              </ResponsiveContainer>
              <div className="flex items-center justify-center gap-8 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-pink-500" />
                  <span className="text-sm text-gray-600">Mood Score</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500" />
                  <span className="text-sm text-gray-600">Activity Level</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Upcoming Appointments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="glass border-0 rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-6">Upcoming Appointments</h3>
              <div className="space-y-4">
                {[
                  { doctor: "Dr. Sarah Johnson", specialty: "OB-GYN", date: "Jan 25, 2024", time: "10:00 AM" },
                  { doctor: "Dr. Michael Chen", specialty: "Ultrasound", date: "Feb 01, 2024", time: "2:30 PM" },
                  { doctor: "Dr. Emily Davis", specialty: "Nutritionist", date: "Feb 08, 2024", time: "11:00 AM" }
                ].map((apt, index) => (
                  <div key={index} className="glass-lavender rounded-2xl p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold">{apt.doctor}</p>
                        <p className="text-sm text-gray-600">{apt.specialty}</p>
                      </div>
                      <Calendar className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>📅 {apt.date}</span>
                      <span>⏰ {apt.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </main>

      {/* Side Menu */}
      {menuOpen && (
        <motion.div
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          className="fixed top-0 right-0 h-full w-80 glass-pink shadow-2xl z-50 p-6"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold">Menu</h3>
            <Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)}>
              ✕
            </Button>
          </div>
          <div className="space-y-4">
            <Link href="/dashboard/family" className="block">
              <Button variant="ghost" className="w-full justify-start">
                <Heart className="w-5 h-5 mr-3" />
                Dashboard
              </Button>
            </Link>
            <Link href="/" className="block">
              <Button variant="ghost" className="w-full justify-start">
                Logout
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}
