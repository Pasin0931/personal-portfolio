
"use client"

import { Card } from "@/components/ui/card"

import Image from "next/image"

// const border_ = 5;

export default function LandingPage() {
    return (
        <div className="flex flex-col items-center justify-center pt-10">
            <Card className="flex flex-row justify-center items-center w-auto p-6 px-12 rounded-4xl">
                <div className="w-43 h-43 rounded-full overflow-hidden border border-black mr-5">
                    <Image
                        src="/ite_x/itex.jpg"
                        alt="my icon"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col justify-center items-start">
                    <h1 className="text-5xl font-bold pb-2">Pasin Makcharoen</h1>
                    <h2 className="text-[20px]">Software and Knowledge Engineering</h2>
                    <h2 className="text-[20px]">Kasetsart University</h2>
                </div>
            </Card>
        </div>
    )
}