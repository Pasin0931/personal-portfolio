
"use client"

import { Card } from "@/components/ui/card"

import Image from "next/image"

// const border_ = 5;

export default function LandingPage() {
    return (
        <div className="flex flex-col items-center justify-center pt-8">

            <div className="flex flex-col items-center justify-center w-281">
                <div className="flex flex-rows items-center justify-center h-100 gap-5">
                    <Image
                        alt="me"
                        src="/ite_x/itex.jpg"
                        width={100}
                        height={100}
                        className="h-full w-auto border border-5 border-black rounded-xl"
                    />
                    <Card className="flex flex-cols justify-center items-center p-10 h-full border-black border-5 w-200">
                        Hello world
                    </Card>
                </div>

                <Card className="flex flex-col items-center justify-center p-10 w-full h-34 border-black border-5 mt-5">
                    Hello world
                </Card>
            </div>

        </div>
    )
}