"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const certificates = [
    {
        id: "1",
        src: "/certi/1.png",
        caption: 'Participate and Receive Gold Medal in "World Young Inventors Exhibition"',
    },
    {
        id: "2",
        src: "/certi/2.png",
        caption: "Received certificate by Citizen Innovation from Singapore.",
    },
    {
        id: "3",
        src: "/certi/3.png",
        caption: 'Participate and receive silver medal in "I-New Gen Award 2024"',
    },
    {
        id: "4",
        src: "/certi/4.png",
        caption: 'Participate and Receive Gold Medal in "WRG Thailand Championship 2024" in Innovative Robot',
    },
    {
        id: "5",
        src: "/certi/5.png",
        caption: 'Participate and Receive Gold award 1st Runner-up in "Student Arts and Crafts 2023" in Intermediate robot',
    },
    {
        id: "6",
        src: "/certi/6.png",
        caption: 'Participate and Receive Gold award 2nd Runner-up in "Maker Robotics Charity (MRC) 2024" in "Innovation Charity"',
    },
    {
        id: "7",
        src: "/certi/7.png",
        caption: 'Receive Certificate Of Accomplishment "Thymio R2T2 Mission to Mars (ASIA)"',
    },
    {
        id: "8",
        src: "/certi/8.png",
        caption: 'Receive Certificate Of Achievement "WRG Thailand Championship 2022"',
    },
    {
        id: "9",
        src: "/certi/9.png",
        caption: 'Participate in "Arduino Education Day Thailand 2023"',
    },
    {
        id: "10",
        src: "/certi/10.png",
        caption: 'Participate in "WRG Championship 2024" (International Round)',
    },
    {
        id: "11",
        src: "/certi/11.png",
        caption: 'Participate in "Arduino Education Day Thailand 2024" in "Beginner RMRC"',
    },
    {
        id: "12",
        src: "/certi/12.png",
        caption: 'Participate in "Arduino Education Day Thailand 2024"',
    },
]

export default function CertificatesPage() {
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
            <div className="flex flex-col items-center justify-center mt-10 mb-10 gap-8">
                <h1 className="text-white font-bold text-3xl pt-3">Certificates</h1>
                <div className="bg-[#262626] h-1 w-420 rounded-lg" />

                <div className="grid grid-cols-4 gap-6 w-400">
                    {certificates.map((cert) => (
                        <motion.button
                            key={cert.id}
                            className="flex flex-col items-center gap-3 cursor-pointer text-left"
                            whileHover={{ y: -4 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                            onClick={() => setLightboxSrc(cert.src)}
                        >
                            <div className="w-full aspect-[3/4] relative rounded-lg overflow-hidden border border-white/10">
                                <Image
                                    src={cert.src}
                                    alt={cert.caption}
                                    fill
                                    className="object-cover"
                                    loading="eager"
                                />
                            </div>
                            <p className="text-white text-sm text-center leading-snug">
                                {cert.caption}
                            </p>
                        </motion.button>
                    ))}
                </div>
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
                                alt="certificate full size"
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