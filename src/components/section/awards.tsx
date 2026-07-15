"use client"

import { useState, useEffect } from "react"

import { Card } from "@/components/ui/card"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const awards_ = [
    {
        id: "1",
        project_name: "Smart Medicine Box (ITEX Version)",
        awa: "Gold Medal",
        competition: "ITEX 2024 - 35th International Invention, Innovation & Technology Exhibition (WYIE)",
        level: "International",
        location: "Kuala Lumpur Convention Centre, Malaysia",
        date: "May 16-17, 2024",
        content: "Received the Gold Award at ITEX 2024 in the World Young Inventors Exhibition (WYIE) for the Smart Medicine Box project.",
        pic1: "/ite_x/1.jpg",
        pic2: "/ite_x/2.jpg",
        pic3: "/ite_x/3.png",
    },
    {
        id: "2",
        project_name: "Smart Medicine Box (I-NEW GEN Version)",
        awa: "Silver Medal",
        competition: "Thailand New Gen Inventors Award 2024 (I-NEW GEN)",
        level: "National",
        location: "BITEC Bangna, Thailand",
        date: "February 2-6, 2024",
        content: "Received the Silver Award at Thailand New Gen Inventors Award 2024 for the Smart Medicine Box project.",
        pic1: "/inew/1.jpg",
        pic2: "/inew/2.jpg",
        pic3: "/inew/3.png",
    },
    {
        id: "3",
        project_name: "Semi-Automatic Confection Depositor (WRG version)",
        awa: "Gold Medal",
        competition: "WRG Thailand Championship 2024",
        level: "National",
        location: "The Hub - Zeer Rangsit",
        date: "August 3-4, 2024",
        content: "Developed a semi-automatic confection depositor and received the Gold Award in the Innovative Robot category.",
        pic1: "/wrg/1.png",
        pic2: "/wrg/2.jpg",
        pic3: "/wrg/3.png",
    },
    {
        id: "4",
        project_name: "Semi-Automatic Confection Depositor with Moisture Removal System (I-NEW GEN version)",
        awa: "1st place Trophy, and Gold Medal",
        competition: "Thailand New Gen Inventors Award 2025 (I-NEW GEN)",
        level: "National",
        location: "BITEC Bangna, Thailand",
        date: "Feburary 2-6, 2025 ",
        content: "An upgraded version of the previous project featuring an integrated moisture removal system to improve the quality and consistency of the confection production process.",
        pic1: "/voc/1.jpg",
        pic2: "/voc/2.jpg",
        pic3: "/voc/3.jpg",
    },
    {
        id: "5",
        project_name: "หุ่นยนตร์ระดับกลาง สพฐ.",
        awa: "Gold Award (1st Runner-up)",
        competition: "Student Arts and Crafts Competition No.71",
        level: "District",
        location: "Suankularb Wittayalai Rangsit School",
        date: "November 21-22, 2023",
        content: "Designed and programmed an autonomous robot for a randomized challenge, achieving 1st Runner-up.",
        pic1: "/class-r/1.jpg",
        pic2: "/class-r/2.jpg",
        pic3: "/class-r/3.png",
    },
    {
        id: "6",
        project_name: "Object Sorting Robot",
        awa: "Bronze Medal (2nd Runner-up)",
        competition: "INNODEX Robotics Competition Thailand 2024",
        level: "National",
        location: "Thai-Nichi Institute of Technology",
        date: "August 30 - September 1, 2024",
        content: "Developed a ROS-based robot capable of separating three types of objects, earning the Bronze Award.",
        pic1: "/sorting/1.jpg",
        pic2: "/sorting/2.jpg",
        pic3: "/sorting/3.png",
    },
    {
        id: "7",
        project_name: "Smart Medicine Box (MRC Version)",
        awa: "Award Plaque (2nd Runner-up)",
        competition: "Maker Robotics Charity (MRC) 2024",
        level: "National",
        location: "The Hub - Zeer Rangsit",
        date: "November 29 - December 1, 2024",
        content: "Presented the latest version of the Smart Medicine Box with enhanced functionality and received 2nd Runner-up.",
        pic1: "/mrc/a.png",
        pic2: "/mrc/b.jpg",
        pic3: "/mrc/c.png",
    },
    {
        id: "8",
        project_name: "AGV maze robot",
        awa: "2nd Runner-up Trophy",
        competition: "Thailand Robot & Coding Challenge 2025",
        level: "National",
        location: "Kasetsart University",
        date: "May 11, 2025",
        content: "Assemble the robot given by the contest, then program the robot to solve the romdom maze pattern.",
        pic1: "/agv/1.jpg",
        pic2: "/agv/2.jpg",
        pic3: "/agv/3.jpg",
    },
]

export default function AwardsSection() {
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setLightboxSrc(null)
        }
        window.addEventListener("keydown", handleKey)
        return () => window.removeEventListener("keydown", handleKey)
    }, [])

    return (
        <div>
            <div className="flex flex-col items-center justify-center gap-8 mt-8 mb-8">
                <h1 className="text-white font-bold text-3xl pt-3">Awards</h1>
                <div className="bg-[#262626] h-1 w-420 rounded rounded-lg"></div>
                {awards_.map((this_award) => (
                    <Card key={this_award.id} className="flex flex-row justify-between items-center p-6 px-8 w-400 overflow-hidden h-50">
                        <div>
                            <h2 className="text-2xl font-bold text-white">
                                {this_award.project_name}
                            </h2>

                            <div className="mt-2 mb-2">
                                <span className="font-semibold text-white">
                                    {this_award.awa}
                                </span>
                                <p className="text-white">{this_award.competition}</p>
                            </div>

                            <p className=" text-white">
                                {this_award.level} • {this_award.location} • {this_award.date}
                            </p>

                            <p className="mt-4 text-white">
                                {this_award.content}
                            </p>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-4">
                            {[this_award.pic1, this_award.pic2, this_award.pic3].map((pic, idx) => (
                                <motion.button
                                    key={idx}
                                    className="w-40 h-50 mt-30 cursor-pointer"
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                    onClick={() => setLightboxSrc(pic)}
                                >
                                    <Image
                                        src={pic}
                                        alt="pic"
                                        width={500}
                                        height={500}
                                        className="w-full h-full object-cover rounded rounded-lg"
                                        loading="eager"
                                    />
                                </motion.button>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>

            <AnimatePresence>
                {lightboxSrc && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 cursor-pointer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setLightboxSrc(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 260, damping: 22 }}
                            className="relative max-w-[90vw] max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={lightboxSrc}
                                alt="full size"
                                width={1200}
                                height={1200}
                                className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            />
                            <button
                                onClick={() => setLightboxSrc(null)}
                                className="absolute top-3 right-3 text-white bg-black/50 hover:bg-black/80 rounded-full w-8 h-8 flex items-center justify-center text-lg leading-none"
                            >
                                ×
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}