"use client";

import { motion } from "framer-motion";
import { Heart, Users, AlertCircle, Calendar, Activity, TrendingUp, Bell, Menu, Search, Filter, Phone, Video, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState } from "react";

export default function DoctorDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const patients = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 28,
      week: 24,
      status: "stable",
      lastCheckup: "2 days ago",
      nextAppointment: "Jan 25, 2024",
      riskLevel: "low",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Emily Chen",
      age: 32,
      week: 16,
      status: "attention",
      lastCheckup: "1 week ago",
      nextAppointment: "Jan 28, 2024",
      riskLevel: "medium",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Maria Garcia",
      age: 35,
      week: 32,
      status: "stable",
      lastCheckup: "3 days ago",
      nextAppointment: "Feb 02, 2024",
      riskLevel: "low",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      id: 4,
      name: "Jessica Williams",
      age: 29,
      week: 20,
      status: "critical",
      lastCheckup: "Today",
      nextAppointment: "Tomorrow",
      riskLevel: "high",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
    }
  ];

  const alerts = [
    { id: 1, patient: "Sarah Johnson", type: "SOS", time: "5 min ago", severity: "high" },
    { id: 2, patient: "Emily Chen", type: "Abnormal Vitals", time: "2 hours ago", severity: "medium" },
    { id: 3, patient: "Maria Garcia", type: "Missed Medication", time: "5 hours ago", severity: "low" }
  ];

  const stats = [
    { label: "Total Patients", value: "48", change: "+3", icon: Users, color: "text-pink-500" },
    { label: "Active Alerts", value: "7", change: "-2", icon: AlertCircle, color: "text-red-500" },
    { label: "Appointments Today", value: "12", change: "+5", icon: Calendar, color: "text-blue-500" },
    { label: "High Risk Cases", value: "5", change: "0", icon: Activity, color: "text-orange-500" }
  ];

  const filteredPatients = selectedFilter === "all" 
    ? patients 
    : patients.filter(p => p.riskLevel === selectedFilter);

  return (
    <div className="min-h-screen gradient-multi">
      {/* Header */}
      <header className="glass-pink border-b border-pink-200/50 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Heart className="w-8 h-8 text-pink-500 fill-pink-500 animate-heartbeat" />
            <div>
              <h1 className="text-xl font-bold">Doctor Dashboard</h1>
              <p className="text-sm text-gray-600">Dr. Sarah Johnson</p>
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
        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass border-0 rounded-3xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <stat.icon className={`w-10 h-10 ${stat.color}`} />
                  <span className={`text-sm font-semibold ${
                    stat.change.startsWith('+') ? 'text-green-500' : 
                    stat.change.startsWith('-') ? 'text-red-500' : 'text-gray-500'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Active Alerts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="glass-pink border-0 rounded-3xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                  Active Alerts
                </h3>
                <Badge className="bg-red-500">{alerts.length}</Badge>
              </div>
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div key={alert.id} className="glass rounded-2xl p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold">{alert.patient}</p>
                        <p className="text-sm text-gray-600">{alert.type}</p>
                      </div>
                      <Badge className={
                        alert.severity === 'high' ? 'bg-red-500' :
                        alert.severity === 'medium' ? 'bg-orange-500' : 'bg-yellow-500'
                      }>
                        {alert.severity}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{alert.time}</span>
                      <Button size="sm" className="bg-pink-500 hover:bg-pink-600 rounded-full">
                        Respond
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Today's Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="glass border-0 rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-blue-500" />
                Today's Schedule
              </h3>
              <div className="space-y-4">
                {[
                  { time: "09:00 AM", patient: "Sarah Johnson", type: "Regular Checkup", duration: "30 min" },
                  { time: "10:00 AM", patient: "Emily Chen", type: "Ultrasound Review", duration: "45 min" },
                  { time: "11:30 AM", patient: "Maria Garcia", type: "Consultation", duration: "30 min" },
                  { time: "02:00 PM", patient: "Jessica Williams", type: "Emergency Followup", duration: "60 min" }
                ].map((apt, index) => (
                  <div key={index} className="glass-lavender rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <p className="text-sm font-semibold text-pink-500">{apt.time}</p>
                          <p className="text-xs text-gray-500">{apt.duration}</p>
                        </div>
                        <div>
                          <p className="font-semibold">{apt.patient}</p>
                          <p className="text-sm text-gray-600">{apt.type}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="rounded-full">
                          <Video className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="rounded-full">
                          <Phone className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Patient List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="glass border-0 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Users className="w-6 h-6 text-pink-500" />
                Patient Management
              </h3>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search patients..."
                    className="pl-10 rounded-full border-pink-200"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant={selectedFilter === "all" ? "default" : "outline"}
                    onClick={() => setSelectedFilter("all")}
                    className="rounded-full"
                  >
                    All
                  </Button>
                  <Button
                    size="sm"
                    variant={selectedFilter === "high" ? "default" : "outline"}
                    onClick={() => setSelectedFilter("high")}
                    className="rounded-full"
                  >
                    High Risk
                  </Button>
                  <Button
                    size="sm"
                    variant={selectedFilter === "medium" ? "default" : "outline"}
                    onClick={() => setSelectedFilter("medium")}
                    className="rounded-full"
                  >
                    Medium
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {filteredPatients.map((patient) => (
                <div key={patient.id} className="glass-lavender rounded-2xl p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={patient.avatar}
                      alt={patient.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-lg">{patient.name}</h4>
                          <p className="text-sm text-gray-600">{patient.age} years • Week {patient.week}</p>
                        </div>
                        <Badge className={
                          patient.riskLevel === 'high' ? 'bg-red-500' :
                          patient.riskLevel === 'medium' ? 'bg-orange-500' : 'bg-green-500'
                        }>
                          {patient.riskLevel}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div>
                      <p className="text-gray-600">Last Checkup</p>
                      <p className="font-semibold">{patient.lastCheckup}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Next Appointment</p>
                      <p className="font-semibold">{patient.nextAppointment}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-pink-500 hover:bg-pink-600 rounded-full">
                      <Activity className="w-4 h-4 mr-2" />
                      View Records
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-full">
                      <MessageSquare className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-full">
                      <Phone className="w-4 h-4" />
                    </Button>
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
            <Link href="/dashboard/doctor" className="block">
              <Button variant="ghost" className="w-full justify-start">
                <Users className="w-5 h-5 mr-3" />
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
