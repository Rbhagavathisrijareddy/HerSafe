"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Users, Activity, Baby, Phone, Calendar, Bell, Star, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: Heart,
      title: "Health Tracking",
      description: "Monitor your health vitals, symptoms, and baby's development throughout pregnancy",
      color: "text-pink-500"
    },
    {
      icon: Shield,
      title: "SOS Emergency",
      description: "Instant emergency alerts to doctors and family with one-tap activation",
      color: "text-red-500"
    },
    {
      icon: Users,
      title: "Family Support",
      description: "Keep your loved ones informed and connected throughout your journey",
      color: "text-purple-500"
    },
    {
      icon: Activity,
      title: "Doctor Connect",
      description: "Direct consultation with healthcare professionals and specialists",
      color: "text-blue-500"
    },
    {
      icon: Baby,
      title: "Weekly Progress",
      description: "Track your baby's growth and development week by week",
      color: "text-pink-400"
    },
    {
      icon: Calendar,
      title: "Appointments",
      description: "Never miss a checkup with smart appointment reminders",
      color: "text-indigo-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "First-time Mother",
      content: "This app gave me peace of mind throughout my pregnancy. The SOS feature especially made me feel safe.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    {
      name: "Dr. Emily Chen",
      role: "OB-GYN Specialist",
      content: "An excellent tool for monitoring patients remotely. The emergency alerts have helped us respond faster.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop"
    },
    {
      name: "Maria Garcia",
      role: "Mother of Two",
      content: "The family dashboard kept my husband and parents informed. We felt connected throughout the journey.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop"
    }
  ];

  const plans = [
    {
      name: "Basic",
      price: "$0",
      period: "Free Forever",
      features: [
        "Health tracking",
        "Weekly progress updates",
        "Basic appointment reminders",
        "Community access"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "per month",
      features: [
        "Everything in Basic",
        "SOS Emergency alerts",
        "Doctor consultations",
        "Family dashboard access",
        "24/7 Support",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Family",
      price: "$14.99",
      period: "per month",
      features: [
        "Everything in Premium",
        "Unlimited family members",
        "Priority doctor response",
        "Personalized care plans",
        "Video consultations"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen gradient-multi">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 glass-pink border-b border-pink-200/50"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Heart className="w-9 h-9 text-pink-400 fill-pink-400 animate-heartbeat" />
              <Sparkles className="w-4 h-4 text-lavender-500 absolute -top-1 -right-1" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-pink-400 via-purple-400 to-lavender-400 bg-clip-text text-transparent" style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.02em' }}>
                HerSafe
              </span>
              <span className="text-[10px] text-pink-400/70 font-light tracking-wider pl-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                PREGNANCY CARE
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-pink-500 transition">Features</a>
            <a href="#testimonials" className="text-gray-700 hover:text-pink-500 transition">Testimonials</a>
            <a href="#pricing" className="text-gray-700 hover:text-pink-500 transition">Pricing</a>
            <Link href="/auth/login">
              <Button variant="outline" className="rounded-full border-pink-300 hover:bg-pink-50">
                Login
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with Prominent Title */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          {/* Centered Prominent Title */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="relative">
                <Heart className="w-16 h-16 text-pink-300 fill-pink-300 opacity-60" />
                <Baby className="w-8 h-8 text-pink-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <h1 className="text-7xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-pink-300 via-purple-300 to-lavender-300 bg-clip-text text-transparent" style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.03em' }}>
                HerSafe
              </h1>
              <Shield className="w-16 h-16 text-lavender-300 opacity-60" />
            </div>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
              <p className="text-lg text-pink-400/80 font-light tracking-[0.3em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                Premium Pregnancy Care
              </p>
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
            </div>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
              Nurturing mothers with elegant care, protection, and support throughout every precious moment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Your Trusted
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"> Pregnancy </span>
                Companion
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Complete care platform with health tracking, emergency SOS, doctor consultations, and family support. 
                Experience a safe and beautiful pregnancy journey.
              </p>
              <div className="flex gap-4">
                <Link href="/auth/register">
                  <Button size="lg" className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 px-8">
                    Start Your Journey
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="rounded-full border-pink-300 hover:bg-pink-50">
                  Learn More
                </Button>
              </div>
              <div className="flex items-center gap-6 mt-8">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-pink-300 to-purple-300" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">10,000+ Happy Mothers</p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">(4.9/5)</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=600&h=600&fit=crop"
                  alt="Pregnant woman"
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-gradient-to-br from-blue-300 to-pink-300 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need for a{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Safe Pregnancy
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive features designed with love and care for expecting mothers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 glass hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 rounded-3xl">
                  <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
                  <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Loved by{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Thousands
              </span>
            </h2>
            <p className="text-xl text-gray-600">Real stories from real mothers</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 glass-lavender border-0 rounded-3xl h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h2>
            <p className="text-xl text-gray-600">Affordable care for every stage of your journey</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`p-8 rounded-3xl border-0 h-full relative ${
                  plan.popular 
                    ? 'glass-pink shadow-2xl scale-105' 
                    : 'glass'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-gray-600">{plan.period}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/auth/register" className="block">
                    <Button 
                      className={`w-full rounded-full ${
                        plan.popular
                          ? 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600'
                          : 'bg-white border border-pink-300 text-pink-500 hover:bg-pink-50'
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      Get Started
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-12 md:p-16 glass-pink border-0 rounded-3xl text-center relative overflow-hidden">
              <div className="relative z-10">
                <Heart className="w-16 h-16 text-pink-500 fill-pink-500 mx-auto mb-6 animate-heartbeat" />
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Start Your Safe Pregnancy Journey?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Join thousands of mothers who trust us for their pregnancy care
                </p>
                <Link href="/auth/register">
                  <Button size="lg" className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 px-12">
                    Start Free Trial
                  </Button>
                </Link>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-3xl opacity-20" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-300 to-pink-300 rounded-full blur-3xl opacity-20" />
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white/70 backdrop-blur-lg">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-pink-400 fill-pink-400" />
                <div className="flex flex-col -space-y-1">
                  <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">HerSafe</span>
                  <span className="text-[8px] text-pink-400/60 tracking-wider">PREGNANCY CARE</span>
                </div>
              </div>
              <p className="text-gray-600">Your trusted companion for a safe pregnancy journey</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#features" className="hover:text-pink-500">Features</a></li>
                <li><a href="#pricing" className="hover:text-pink-500">Pricing</a></li>
                <li><a href="#" className="hover:text-pink-500">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-pink-500">About Us</a></li>
                <li><a href="#" className="hover:text-pink-500">Contact</a></li>
                <li><a href="#" className="hover:text-pink-500">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-pink-500">Support</a></li>
                <li><a href="#" className="hover:text-pink-500">Community</a></li>
                <li><a href="#" className="hover:text-pink-500">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-pink-200 pt-8 text-center text-gray-600">
            <p>&copy; 2024 HerSafe. Made with love for expecting mothers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}