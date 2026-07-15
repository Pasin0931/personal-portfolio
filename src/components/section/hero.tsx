
"use client"

import { Card } from "@/components/ui/card"

import Image from "next/image"

// const border_ = 5;

export default function HeroSection() {
    return (
        <div className="flex flex-col items-center justify-center pt-10">
            <Card className="flex flex-row justify-center items-center w-auto p-8 rounded-xl pr-80">
                <div className="w-32 h-32 rounded-full overflow-hidden border border-black mr-5">
                    <Image
                        src="/ite_x/itex.jpg"
                        alt="my icon"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col justify-center items-start">
                    <h1 className="text-4xl font-bold pb-2 text-white">Pasin Makcharoen</h1>
                    <h2 className="text-[20px] text-white">Software and Knowledge Engineering, Kasetsart University</h2>
                </div>
            </Card>
        </div>
    )
}