"use client"

import { useState, useEffect } from "react"

import HeroSection from "@/components/section/hero"
import AwardsSection from "@/components/section/awards"

import SkillsSection from "@/components/section/skills"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SkillsSection />
      <AwardsSection />
    </div>
  )
}