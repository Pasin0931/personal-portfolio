"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { motion } from "framer-motion"

const hardware_ = [
    {
        id: "1",
        title: "Rescue Robot",
        icon_ref: "/pojeks/rescue.jpg",
        github: "https://github.com/Pasin0931/ROS-Joystick-control",
    },
    {
        id: "2",
        title: "@home Robot",
        icon_ref: "/pojeks/athome.jpg",
        github: "https://github.com/Pasin0931/ROS-Joystick-control",
    },
    {
        id: "3",
        title: "หุ่นยนตร์ระดับกลาง สพฐ.",
        icon_ref: "/pojeks/midum.jpg",
        github: "https://github.com/Pasin0931/robot-code",
    },
    {
        id: "4",
        title: "Line Following robot",
        icon_ref: "/pojeks/line.jpg",
        github: "https://github.com/Pasin0931/robot-code",
    },
    {
        id: "5",
        title: "Semi Automatic Confectionary Depositor with Moisture Removal System",
        icon_ref: "/pojeks/smb.png",
        github: "https://github.com/Pasin0931/Semi-Automatic-Confectionary-Depositor-System",
    },
    {
        id: "6",
        title: "Smart Medicine Box",
        icon_ref: "/pojeks/med.jpg",
        github: "https://github.com/Pasin0931/Smart-Medicine-Box-ITEX",
    },
    {
        id: "7",
        title: "Sorting Robot",
        icon_ref: "/pojeks/sorting.jpg",
        github: "https://github.com/Combine1234/Sorting-Robot",
    },
]

const software_ = [
    {
        id: "1",
        title: "Vetscanner",
        icon_ref: "/pojeks_sw/vetsc.png",
        github: "https://github.com/Pasin0931/vetscanner",
        hreff: "",
    },
    {
        id: "2",
        title: "ECO Reward",
        icon_ref: "/pojeks_sw/eco.png",
        github: "https://github.com/Pasin0931/EEC-Hackathon-Demo",
        hreff: "",
    },
    {
        id: "3",
        title: "SOS15 camp website (problems page)",
        icon_ref: "/pojeks_sw/sos.png",
        github: "https://github.com/PathadonAougsk/sos15-website",
        hreff: "https://sos15.vercel.app/",
    },
    {
        id: "4",
        title: "Book List",
        icon_ref: "/pojeks_sw/bl.png",
        github: "https://github.com/Pasin0931/Book-list",
        hreff: "",
    },
    {
        id: "5",
        title: "Year 1 Final project (Dark Impact)",
        icon_ref: "/pojeks_sw/di.png",
        github: "https://github.com/Pasin0931/Final_Project_y1sem2",
        hreff: "",
    },
    {
        id: "6",
        title: "Crypto Dashboard (Crypto Dashboard)",
        icon_ref: "/pojeks_sw/crypto.png",
        github: "https://github.com/Pasin0931/crypto_dashboard",
        hreff: "",
    },
]

export default function Works() {
    return (
        <div className="flex flex-col items-center justify-center mt-10 mb-10">
            <h1 className="text-white font-bold text-3xl pt-3 pb-8">Work History</h1>
            <div className="bg-[#262626] h-1 w-250 rounded-lg" />

            <div className="pt-5 flex flex-col gap-4 w-200">

                <Card className="p-5">
                    <p className="text-white/60 text-sm mb-3">2023 - 2025</p>
                    <div className="flex flex-row items-center gap-3 mb-3">
                        <Image
                            src="/rtm-logo.jpg"
                            alt="rtn logo"
                            width={80}
                            height={80}
                            className="object-cover rounded-full flex-shrink-0"
                            loading="eager"
                        />
                        <h1 className="pl-2 text-white font-bold text-xl">Return to Monkey - Tech team</h1>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed mb-3">
                        I became a co-founder and member of my high school's robotics club, where I primarily
                        worked on hardware, electronics, and CAD design. Through this role, I further developed
                        my technical skills by designing and building various robots and innovation projects
                        alongside my team.
                    </p>
                    <p className="text-white/60 text-sm mb-1">Contribute in:</p>
                    <p className="text-white/80 leading-relaxed">
                        Mini Rescue robot, @home prototype robot, Sorting robot, หุ่นยนตร์ระดับกลาง (สพฐ.), Line following robot
                    </p>
                </Card>

                <Card className="p-5">
                    <p className="text-white/60 text-sm mb-3">Aug 2025 - Present</p>
                    <div className="flex flex-row items-center gap-3 mb-3">
                        <Image
                            src="/kutech-logo.jpg"
                            alt="kutech logo"
                            width={80}
                            height={80}
                            className="object-cover rounded-full flex-shrink-0"
                            loading="eager"
                        />
                        <h1 className="pl-2 text-white font-bold text-xl">KuTech - Fullstack Developper</h1>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed mb-3">
                        I joined my university's technology club as a Full-Stack Developer, where I collaborate
                        with cross-functional teams to develop web applications and software solutions.
                    </p>
                    <p className="text-white/60 text-sm mb-1">Contribute in:</p>
                    <p className="leading-relaxed text-white/80">
                        WE KU (Aomsin team) - Fullstack (On going)
                    </p>
                    <p className="leading-relaxed text-white/80">
                        KU Tech x Nisit Deden (backend team) - Backend (On going)
                    </p>
                </Card>

                <Card className="p-5">
                    <p className="text-white/60 text-sm mb-3">June 2026 - Present</p>
                    <div className="flex flex-row items-center gap-3 mb-3">
                        <Image
                            src="/idektep-logo.png"
                            alt="idt logo"
                            width={80}
                            height={80}
                            className="object-cover flex-shrink-0"
                            loading="eager"
                        />
                        <h1 className="pl-2 text-white font-bold text-xl">iDekTep - Trainer</h1>
                    </div>
                    <p className="text-white/80 text-md leading-relaxed">
                        I'm working as a trainer at iDekTep, teaching robotics and programming to students by
                        helping coach to conduct an interactive workshops and guiding them through practical
                        engineering projects.
                    </p>
                </Card>

            </div>

            <div className="mt-8 flex flex-col justify-center items-center w-200">

                {/* Hardware */}
                <h2 className="text-center text-white text-3xl font-bold">Hardware Projects</h2>
                <div className="bg-[#262626] h-1 w-250 rounded-lg mb-4 mt-7" />

                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {hardware_.map((prj) => (
                            <motion.div
                                key={prj.id}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Card className="p-6 h-full rounded rounded-lg">
                                    <Image
                                        src={prj.icon_ref}
                                        alt="projects"
                                        width={500}
                                        height={300}
                                        className="w-full h-48 object-cover pt-6"
                                    />

                                    <h3 className="text-white font-semibold text-lg mt-4">
                                        {prj.title}
                                    </h3>

                                    <Button
                                        onClick={() => window.open(prj.github, "_blank")}
                                        className="inline-block mt-3 text-blue-400 hover:text-blue-300 transition-colors cursor-pointer w-20"
                                    >
                                        GitHub
                                    </Button>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Software */}
                <h2 className="text-center text-white text-3xl font-bold mt-8">Software Projects</h2>
                <div className="bg-[#262626] h-1 w-250 rounded-lg mb-4 mt-7" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                    {software_.map((prj) => (
                        <motion.div
                            key={prj.id}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Card className="p-6 h-full rounded rounded-lg">
                                <Image
                                    src={prj.icon_ref}
                                    alt={prj.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-48 object-cover pt-6"
                                />

                                <h3 className="text-white font-semibold text-lg mt-4">
                                    {prj.title}
                                </h3>

                                <div className="flex gap-4 mt-3">
                                    <Button
                                        onClick={() => window.open(prj.github, "_blank")}
                                        className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer w-20"
                                    >
                                        GitHub
                                    </Button>

                                    {prj.hreff && (
                                        <Button
                                            onClick={() => window.open(prj.hreff, "_blank")}
                                            className="text-green-400 hover:text-green-300 transition-colors cursor-pointer w-20"
                                        >
                                            Live
                                        </Button>
                                    )}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    )
}