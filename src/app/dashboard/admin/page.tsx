"use client";

import { motion } from "framer-motion";
import { Heart, Users, AlertCircle, Activity, TrendingUp, TrendingDown, Menu, Bell, BarChart3, UserCheck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState } from "react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function AdminDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  const userGrowth = [
    { month: "Jan", mothers: 120, doctors: 25, family: 180 },
    { month: "Feb", mothers: 150, doctors: 28, family: 220 },
    { month: "Mar", mothers: 180, doctors: 32, family: 260 },
    { month: "Apr", mothers: 220, doctors: 35, family: 310 },
    { month: "May", mothers: 270, doctors: 40, family: 380 },
    { month: "Jun", mothers: 320, doctors: 45, family: 450 }
  ];

  const sosData = [
    { name: "Resolved", value: 145, color: "#10B981" },
    { name: "In Progress", value: 23, color: "#F59E0B" },
    { name: "Critical", value: 5, color: "#EF4444" }
  ];

  const platformStats = [
    { label: "Total Users", value: "1,247", change: "+12.5%", trend: "up", icon: Users, color: "text-pink-500" },
    { label: "Active Mothers", value: "856", change: "+8.3%", trend: "up", icon: Heart, color: "text-purple-500" },
    { label: "Healthcare Providers", value: "124", change: "+15.2%", trend: "up", icon: UserCheck, color: "text-blue-500" },
    { label: "SOS Alerts (30d)", value: "173", change: "-5.4%", trend: "down", icon: AlertCircle, color: "text-orange-500" }
  ];

  const recentActivity = [
    { id: 1, type: "user", message: "New mother registered: Emily Johnson", time: "5 min ago", icon: Users },
    { id: 2, type: "sos", message: "SOS Alert resolved for Sarah Chen", time: "15 min ago", icon: Shield },
    { id: 3, type: "doctor", message: "New healthcare provider: Dr. Michael Lee", time: "1 hour ago", icon: UserCheck },
    { id: 4, type: "milestone", message: "Platform reached 1,000 active users", time: "2 hours ago", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen gradient-multi">
      {/* Header */}
      <header className="glass-pink border-b border-pink-200/50 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Heart className="w-8 h-8 text-pink-500 fill-pink-500 animate-heartbeat" />
            <div>
              <h1 className="text-xl font-bold">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Platform Overview</p>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {platformStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass border-0 rounded-3xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <stat.icon className={`w-10 h-10 ${stat.color}`} />
                  <div className={`flex items-center gap-1 text-sm font-semibold ${
                    stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {stat.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    {stat.change}
                  </div>
                </div>
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* User Growth Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="glass border-0 rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-pink-500" />
                User Growth Trends
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={userGrowth}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="mothers" fill="#FF69B4" name="Mothers" radius={[10, 10, 0, 0]} />
                  <Bar dataKey="doctors" fill="#9370DB" name="Doctors" radius={[10, 10, 0, 0]} />
                  <Bar dataKey="family" fill="#B0E0E6" name="Family" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>

          {/* SOS Alert Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="glass border-0 rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6 text-red-500" />
                SOS Alerts
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={sosData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {sosData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-3 mt-4">
                {sosData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-sm text-gray-600">{item.name}</span>
                    </div>
                    <span className="font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="glass border-0 rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Activity className="w-6 h-6 text-blue-500" />
                Recent Activity
              </h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="glass-lavender rounded-2xl p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                        <activity.icon className="w-5 h-5 text-pink-500" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold mb-1">{activity.message}</p>
                        <p className="text-sm text-gray-600">{activity.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* System Health */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Card className="glass border-0 rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Activity className="w-6 h-6 text-green-500" />
                System Health
              </h3>
              <div className="space-y-4">
                {[
                  { service: "API Server", status: "Operational", uptime: "99.99%", color: "bg-green-500" },
                  { service: "Database", status: "Operational", uptime: "99.98%", color: "bg-green-500" },
                  { service: "SOS Service", status: "Operational", uptime: "100%", color: "bg-green-500" },
                  { service: "Notification System", status: "Operational", uptime: "99.95%", color: "bg-green-500" }
                ].map((service, index) => (
                  <div key={index} className="glass-blue rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${service.color}`} />
                        <span className="font-semibold">{service.service}</span>
                      </div>
                      <Badge className="bg-green-500">{service.status}</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>Uptime: {service.uptime}</span>
                      <span className="text-green-600">Healthy</span>
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
            <Link href="/dashboard/admin" className="block">
              <Button variant="ghost" className="w-full justify-start">
                <BarChart3 className="w-5 h-5 mr-3" />
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
