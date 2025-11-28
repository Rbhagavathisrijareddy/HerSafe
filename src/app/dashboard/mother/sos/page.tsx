"use client";

import { motion } from "framer-motion";
import { Heart, AlertCircle, Phone, MapPin, Users, Clock, Activity, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";

export default function SOSPage() {
  const [sosActive, setSosActive] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  const handleSOSPress = () => {
    // Start countdown
    let count = 3;
    setCountdown(count);
    
    const timer = setInterval(() => {
      count--;
      if (count === 0) {
        clearInterval(timer);
        setCountdown(null);
        setSosActive(true);
        // In production, this would trigger actual emergency alerts
      } else {
        setCountdown(count);
      }
    }, 1000);
  };

  const cancelSOS = () => {
    setSosActive(false);
    setCountdown(null);
  };

  const emergencyContacts = [
    { name: "Dr. Sarah Johnson", role: "Primary OB-GYN", phone: "+1 (555) 123-4567", status: "Notified", time: "Just now" },
    { name: "John Smith", role: "Husband", phone: "+1 (555) 234-5678", status: "Notified", time: "Just now" },
    { name: "Emergency Services", role: "911", phone: "911", status: "Standing By", time: "Just now" },
    { name: "Mary Smith", role: "Mother", phone: "+1 (555) 345-6789", status: "Notified", time: "Just now" }
  ];

  return (
    <div className="min-h-screen gradient-multi">
      {/* Header */}
      <header className="glass-pink border-b border-pink-200/50 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/dashboard/mother" className="flex items-center gap-3">
            <ArrowLeft className="w-6 h-6" />
            <div>
              <h1 className="text-xl font-bold">SOS Emergency</h1>
              <p className="text-sm text-gray-600">Quick access to emergency help</p>
            </div>
          </Link>
          {sosActive && (
            <div className="flex items-center gap-2 text-red-500 animate-pulse">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
              <span className="font-semibold">SOS ACTIVE</span>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {!sosActive ? (
          <div className="max-w-2xl mx-auto">
            {/* SOS Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center mb-12"
            >
              <Card className="glass-pink border-0 rounded-3xl p-12 relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-4">Emergency Assistance</h2>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Press and hold the button below for 3 seconds to activate emergency alert. 
                    Your location and health data will be shared with your emergency contacts.
                  </p>
                  
                  <div className="relative inline-block">
                    <motion.button
                      onMouseDown={handleSOSPress}
                      onMouseUp={cancelSOS}
                      onTouchStart={handleSOSPress}
                      onTouchEnd={cancelSOS}
                      className="relative w-64 h-64 rounded-full bg-gradient-to-br from-red-500 to-pink-500 shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105"
                      animate={countdown !== null ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ repeat: countdown !== null ? Infinity : 0, duration: 0.5 }}
                    >
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        {countdown !== null ? (
                          <motion.span
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            className="text-8xl font-bold"
                          >
                            {countdown}
                          </motion.span>
                        ) : (
                          <>
                            <Heart className="w-20 h-20 mb-4 animate-heartbeat fill-white" />
                            <span className="text-2xl font-bold">SOS</span>
                            <span className="text-sm mt-2">Press & Hold</span>
                          </>
                        )}
                      </div>
                    </motion.button>
                    
                    {/* Pulse rings */}
                    <div className="absolute inset-0 rounded-full border-4 border-red-500 animate-ping opacity-20" />
                    <div className="absolute inset-0 rounded-full border-4 border-red-400 animate-pulse opacity-30" />
                  </div>

                  <p className="mt-8 text-sm text-gray-600">
                    Release the button to cancel
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-300 to-pink-300 rounded-full blur-3xl opacity-20" />
              </Card>
            </motion.div>

            {/* Information Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="glass border-0 rounded-3xl p-6 text-center">
                <Phone className="w-12 h-12 text-pink-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Instant Alert</h3>
                <p className="text-sm text-gray-600">Contacts notified immediately</p>
              </Card>
              <Card className="glass border-0 rounded-3xl p-6 text-center">
                <MapPin className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Live Location</h3>
                <p className="text-sm text-gray-600">Real-time GPS tracking shared</p>
              </Card>
              <Card className="glass border-0 rounded-3xl p-6 text-center">
                <Activity className="w-12 h-12 text-purple-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Health Data</h3>
                <p className="text-sm text-gray-600">Medical info sent to doctors</p>
              </Card>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto"
          >
            {/* Active SOS Alert */}
            <Card className="glass-pink border-0 rounded-3xl p-8 mb-8 relative overflow-hidden">
              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="inline-block mb-4"
                >
                  <AlertCircle className="w-24 h-24 text-red-500" />
                </motion.div>
                <h2 className="text-4xl font-bold text-red-500 mb-4">SOS ACTIVE</h2>
                <p className="text-xl text-gray-700 mb-6">
                  Emergency services and contacts have been notified
                </p>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="glass rounded-2xl px-6 py-3">
                    <MapPin className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                    <p className="text-sm font-semibold">Location Shared</p>
                  </div>
                  <div className="glass rounded-2xl px-6 py-3">
                    <Clock className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <p className="text-sm font-semibold">Help On The Way</p>
                  </div>
                </div>
                <Button
                  onClick={cancelSOS}
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-gray-400 hover:bg-gray-100"
                >
                  Cancel Emergency Alert
                </Button>
              </div>
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-red-200 to-pink-200 opacity-30 animate-pulse" />
            </Card>

            {/* Emergency Contacts Status */}
            <Card className="glass border-0 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-pink-500" />
                Notified Contacts
              </h3>
              <div className="space-y-4">
                {emergencyContacts.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-lavender rounded-2xl p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-lg">{contact.name}</p>
                        <p className="text-sm text-gray-600">{contact.role}</p>
                        <p className="text-sm text-gray-500">{contact.phone}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-1">
                          {contact.status}
                        </span>
                        <p className="text-xs text-gray-500">{contact.time}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Live Location Map Placeholder */}
            <Card className="glass border-0 rounded-3xl p-8 mt-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MapPin className="w-8 h-8 text-blue-500" />
                Live Location
              </h3>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-500 mx-auto mb-4 animate-bounce" />
                  <p className="text-lg font-semibold">Location Tracking Active</p>
                  <p className="text-sm text-gray-600 mt-2">123 Main St, City, State 12345</p>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </main>
    </div>
  );
}
