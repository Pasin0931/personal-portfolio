"use client"

import { useState, useEffect } from "react"

import LandingPage from "@/components/landing"
import FooterSection from "@/components/section/footer"
import AwardsSection from "@/components/section/awards"

export default function Home() {
  return (
    <div>
      <LandingPage />
      <AwardsSection />
      <FooterSection />
    </div>
  )
}