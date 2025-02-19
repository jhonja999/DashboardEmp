// app/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1c1c1c]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#1c1c1c]/90 backdrop-blur-sm z-50 border-b border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Logo/>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle/>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <Button
                    variant="outline"
                    className="text-[#d4af37] border-[#d4af37] hover:bg-[#d4af37]/20"
                  >
                    Sign In
                  </Button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c1c1c]/90 to-[#1c1c1c]/70" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#f4f4f4] mb-6">
              MASTERING THE
              <br />
              ART OF
              <br />
              EXPLORATION
            </h1>
            <p className="text-lg tracking-widest text-[#d4af37] mb-4">
              TRADITION • INNOVATION • EXCELLENCE
            </p>

            <div className="flex justify-center gap-4 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="px-8 bg-[#d4af37] text-[#1c1c1c] hover:bg-[#cd7f32] transition-colors"
                >
                  DISCOVER MORE
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 text-[#d4af37] border-[#d4af37] hover:bg-[#d4af37]/20"
                >
                  CONTACT US
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#d4af37]/60"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1c1c1c] text-center mb-16">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Exploration",
                description:
                  "Pioneering advanced geological exploration techniques with precision and expertise.",
              },
              {
                title: "Innovation",
                description:
                  "Implementing cutting-edge technologies to optimize resource discovery and extraction.",
              },
              {
                title: "Excellence",
                description:
                  "Maintaining the highest standards of quality and professionalism in all operations.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 shadow-lg rounded-lg hover:shadow-xl transition-shadow border border-[#d4af37]/20"
              >
                <h3 className="text-xl font-bold text-[#cd7f32] mb-4">
                  {item.title}
                </h3>
                <p className="text-[#1c1c1c]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
