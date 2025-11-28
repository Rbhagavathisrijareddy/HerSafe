"use client";

import { motion } from "framer-motion";
import { Heart, Activity, Baby, Calendar, Pill, AlertCircle, Bell, TrendingUp, LogOut, User, Menu, Phone, Video, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

export default function MotherDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const healthData = [
    { day: "Mon", weight: 65, bp: 120 },
    { day: "Tue", weight: 65.2, bp: 118 },
    { day: "Wed", weight: 65.5, bp: 122 },
    { day: "Thu", weight: 65.8, bp: 119 },
    { day: "Fri", weight: 66, bp: 121 },
    { day: "Sat", weight: 66.2, bp: 120 },
    { day: "Sun", weight: 66.5, bp: 118 }
  ];

  const appointments = [
    { id: 1, doctor: "Dr. Sarah Johnson", specialty: "OB-GYN", date: "2024-01-25", time: "10:00 AM", type: "Checkup" },
    { id: 2, doctor: "Dr. Michael Chen", specialty: "Ultrasound", date: "2024-02-01", time: "2:30 PM", type: "Ultrasound" },
    { id: 3, doctor: "Dr. Emily Davis", specialty: "Nutritionist", date: "2024-02-08", time: "11:00 AM", type: "Consultation" }
  ];

  const medications = [
    { id: 1, name: "Prenatal Vitamins", dosage: "1 tablet daily", time: "Morning", taken: true },
    { id: 2, name: "Iron Supplement", dosage: "1 tablet", time: "Afternoon", taken: true },
    { id: 3, name: "Folic Acid", dosage: "400mcg", time: "Morning", taken: false },
    { id: 4, name: "Calcium", dosage: "500mg", time: "Evening", taken: false }
  ];

  const symptoms = [
    { symptom: "Morning Sickness", severity: "Mild", date: "Today" },
    { symptom: "Back Pain", severity: "Moderate", date: "Yesterday" },
    { symptom: "Fatigue", severity: "Mild", date: "2 days ago" }
  ];

  return (
    <div className="min-h-screen gradient-multi">
      {/* Header */}
      <header className="glass-pink border-b border-pink-200/50 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Heart className="w-8 h-8 text-pink-500 fill-pink-500 animate-heartbeat" />
            <div>
              <h1 className="text-xl font-bold">Pregnant Women SOS</h1>
              <p className="text-sm text-gray-600">Welcome back, Sarah</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dashboard/mother/sos">
              <Button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 rounded-full animate-pulse">
                <AlertCircle className="w-5 h-5 mr-2" />
                SOS Emergency
              </Button>
            </Link>
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
        {/* Pregnancy Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card className="glass-pink border-0 rounded-3xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Week 24 of 40</h2>
                  <p className="text-gray-600">Your baby is the size of a cantaloupe 🍈</p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold text-pink-500">60%</p>
                  <p className="text-sm text-gray-600">Complete</p>
                </div>
              </div>
              <Progress value={60} className="h-3 mb-4" />
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="glass rounded-2xl p-4">
                  <Baby className="w-8 h-8 text-pink-500 mb-2" />
                  <p className="text-sm text-gray-600">Baby's Length</p>
                  <p className="text-xl font-bold">30 cm</p>
                </div>
                <div className="glass rounded-2xl p-4">
                  <Activity className="w-8 h-8 text-purple-500 mb-2" />
                  <p className="text-sm text-gray-600">Baby's Weight</p>
                  <p className="text-xl font-bold">600g</p>
                </div>
                <div className="glass rounded-2xl p-4">
                  <Calendar className="w-8 h-8 text-blue-500 mb-2" />
                  <p className="text-sm text-gray-600">Due Date</p>
                  <p className="text-xl font-bold">Jun 15, 2024</p>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-3xl opacity-20" />
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Health Vitals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="glass border-0 rounded-3xl p-6 h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Health Vitals</h3>
                <Button variant="ghost" size="sm" className="text-pink-500">
                  View All
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="glass-lavender rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Weight</span>
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                  <p className="text-3xl font-bold">66.5 kg</p>
                  <p className="text-xs text-green-600 mt-1">+1.5kg this week</p>
                </div>
                <div className="glass-lavender rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Blood Pressure</span>
                    <Activity className="w-4 h-4 text-blue-500" />
                  </div>
                  <p className="text-3xl font-bold">118/78</p>
                  <p className="text-xs text-green-600 mt-1">Normal</p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={healthData}>
                  <defs>
                    <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF69B4" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#FF69B4" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="day" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip />
                  <Area type="monotone" dataKey="weight" stroke="#FF69B4" fillOpacity={1} fill="url(#colorWeight)" />
                </AreaChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass border-0 rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button 
                  className="w-full justify-start glass-pink border-0 hover:shadow-lg transition-all cursor-pointer" 
                  variant="outline"
                  onClick={() => setActiveTab(activeTab === 'symptoms' ? null : 'symptoms')}
                >
                  <Activity className="w-5 h-5 mr-3 text-pink-500" />
                  Log Symptoms
                </Button>
                <Button 
                  className="w-full justify-start glass-lavender border-0 hover:shadow-lg transition-all cursor-pointer" 
                  variant="outline"
                  onClick={() => setActiveTab(activeTab === 'kicks' ? null : 'kicks')}
                >
                  <Baby className="w-5 h-5 mr-3 text-purple-500" />
                  Track Kicks
                </Button>
                <Button 
                  className="w-full justify-start glass-blue border-0 hover:shadow-lg transition-all cursor-pointer" 
                  variant="outline"
                  onClick={() => setActiveTab(activeTab === 'appointment' ? null : 'appointment')}
                >
                  <Calendar className="w-5 h-5 mr-3 text-blue-500" />
                  Book Appointment
                </Button>
                <Button 
                  className="w-full justify-start glass border-0 hover:shadow-lg transition-all cursor-pointer" 
                  variant="outline"
                  onClick={() => setActiveTab(activeTab === 'doctor' ? null : 'doctor')}
                >
                  <User className="w-5 h-5 mr-3 text-green-500" />
                  Contact Doctor
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Interactive Tab Content */}
        {activeTab && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-8"
          >
            <Card className="glass-pink border-0 rounded-3xl p-6 relative">
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-4 right-4 z-10"
                onClick={() => setActiveTab(null)}
              >
                ✕
              </Button>

              {/* Log Symptoms Tab */}
              {activeTab === 'symptoms' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Log Your Symptoms</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Symptom Type</label>
                      <select className="w-full p-3 rounded-xl glass border-0">
                        <option>Morning Sickness</option>
                        <option>Back Pain</option>
                        <option>Fatigue</option>
                        <option>Headache</option>
                        <option>Swelling</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Severity</label>
                      <div className="flex gap-3">
                        {['Mild', 'Moderate', 'Severe'].map((level) => (
                          <Button 
                            key={level}
                            variant="outline" 
                            className="flex-1 glass-lavender border-0"
                          >
                            {level}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Notes</label>
                      <textarea 
                        className="w-full p-3 rounded-xl glass border-0 min-h-[100px]"
                        placeholder="Describe your symptoms..."
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-xl">
                      Save Symptom Log
                    </Button>
                  </div>
                </div>
              )}

              {/* Track Kicks Tab */}
              {activeTab === 'kicks' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Track Baby Kicks</h3>
                  <div className="text-center mb-6">
                    <div className="inline-block p-8 glass-lavender rounded-full mb-4">
                      <p className="text-6xl font-bold text-purple-500">0</p>
                    </div>
                    <p className="text-gray-600">Kicks counted today</p>
                  </div>
                  <div className="space-y-4">
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl text-lg py-6">
                      <Baby className="w-6 h-6 mr-3" />
                      Count a Kick
                    </Button>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="glass-lavender rounded-xl p-4 text-center">
                        <p className="text-sm text-gray-600">Last Hour</p>
                        <p className="text-2xl font-bold">0</p>
                      </div>
                      <div className="glass-lavender rounded-xl p-4 text-center">
                        <p className="text-sm text-gray-600">Average/Day</p>
                        <p className="text-2xl font-bold">15</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 text-center">
                      💡 Healthy babies typically kick 10-12 times per hour
                    </p>
                  </div>
                </div>
              )}

              {/* Book Appointment Tab */}
              {activeTab === 'appointment' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Book an Appointment</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Select Doctor</label>
                      <select className="w-full p-3 rounded-xl glass border-0">
                        <option>Dr. Sarah Johnson - OB-GYN</option>
                        <option>Dr. Michael Chen - Ultrasound</option>
                        <option>Dr. Emily Davis - Nutritionist</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Appointment Type</label>
                      <select className="w-full p-3 rounded-xl glass border-0">
                        <option>Regular Checkup</option>
                        <option>Ultrasound</option>
                        <option>Consultation</option>
                        <option>Emergency</option>
                      </select>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Preferred Date</label>
                        <input 
                          type="date" 
                          className="w-full p-3 rounded-xl glass border-0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Preferred Time</label>
                        <select className="w-full p-3 rounded-xl glass border-0">
                          <option>Morning (9:00 AM - 12:00 PM)</option>
                          <option>Afternoon (12:00 PM - 5:00 PM)</option>
                          <option>Evening (5:00 PM - 8:00 PM)</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Reason for Visit</label>
                      <textarea 
                        className="w-full p-3 rounded-xl glass border-0 min-h-[100px]"
                        placeholder="Brief description..."
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl">
                      Book Appointment
                    </Button>
                  </div>
                </div>
              )}

              {/* Contact Doctor Tab */}
              {activeTab === 'doctor' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Contact Your Doctor</h3>
                  <div className="space-y-4">
                    <div className="glass-lavender rounded-xl p-4">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                          <User className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-lg">Dr. Sarah Johnson</p>
                          <p className="text-sm text-gray-600">OB-GYN Specialist</p>
                          <p className="text-xs text-green-600">● Available Now</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Button className="glass-blue border-0 hover:shadow-lg py-6">
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now
                      </Button>
                      <Button className="glass-lavender border-0 hover:shadow-lg py-6">
                        <Video className="w-5 h-5 mr-2" />
                        Video Call
                      </Button>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Send a Message</label>
                      <textarea 
                        className="w-full p-3 rounded-xl glass border-0 min-h-[120px]"
                        placeholder="Type your message or questions here..."
                      />
                    </div>

                    <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-xl">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>

                    <div className="glass rounded-xl p-4 text-center">
                      <p className="text-sm text-gray-600">Emergency? Call immediately</p>
                      <p className="text-xl font-bold text-pink-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Upcoming Appointments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="glass border-0 rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-4">Upcoming Appointments</h3>
              <div className="space-y-4">
                {appointments.map((apt, index) => (
                  <div key={apt.id} className="glass-lavender rounded-2xl p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold">{apt.doctor}</p>
                        <p className="text-sm text-gray-600">{apt.specialty}</p>
                      </div>
                      <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full">
                        {apt.type}
                      </span>
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

          {/* Medications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="glass border-0 rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-4">Today's Medications</h3>
              <div className="space-y-3">
                {medications.map((med) => (
                  <div key={med.id} className={`rounded-2xl p-4 ${med.taken ? 'glass-blue' : 'glass-pink'}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-semibold">{med.name}</p>
                        <p className="text-sm text-gray-600">{med.dosage} • {med.time}</p>
                      </div>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        med.taken ? 'bg-green-500' : 'bg-gray-300'
                      }`}>
                        {med.taken && <span className="text-white text-xs">✓</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Recent Symptoms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="glass border-0 rounded-3xl p-6">
            <h3 className="text-xl font-bold mb-4">Recent Symptoms</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {symptoms.map((symptom, index) => (
                <div key={index} className="glass-lavender rounded-2xl p-4">
                  <p className="font-semibold mb-2">{symptom.symptom}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className={`px-2 py-1 rounded-full ${
                      symptom.severity === 'Mild' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {symptom.severity}
                    </span>
                    <span className="text-gray-600">{symptom.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
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
            <Link href="/dashboard/mother" className="block">
              <Button variant="ghost" className="w-full justify-start">
                <Heart className="w-5 h-5 mr-3" />
                Dashboard
              </Button>
            </Link>
            <Link href="/dashboard/mother/sos" className="block">
              <Button variant="ghost" className="w-full justify-start">
                <AlertCircle className="w-5 h-5 mr-3" />
                SOS Emergency
              </Button>
            </Link>
            <Link href="/" className="block">
              <Button variant="ghost" className="w-full justify-start">
                <LogOut className="w-5 h-5 mr-3" />
                Logout
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}