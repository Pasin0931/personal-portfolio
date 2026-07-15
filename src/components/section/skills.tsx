
"use client"

import { Card } from "@/components/ui/card"

import Image from "next/image"

const soft_skills = [
    "Active Learner",
    "Teamwork and Collaboration",
    "Problem Solving",
    "Adaptability and Flexibility",
    "Project Management (Leading Small-Scale Projects)",
    "Time Management",
];

const hard_skills = [
    "Arduino Programming & IoT Development",
    "Web Development",
    "Python Programming",
    "CAD Design & 3D Printing",
    "Mechanical Skills",
    "PCB Design",
    "Robotics & Automation Systems",
    "C++",
    "C",
    "Go",
    "Java",
    "JavaScript",
    "AI & Machine Learning",
    "Computer Vision",
];

export default function SkillsSection() {
    return (
        <div className="flex flex-row items-stretch justify-center mt-5 gap-5">
            <Card className="flex flex-col justify-top items-center w-122 text-white h-auto">
                <h1 className="font-bold text-2xl">Soft Skills</h1>
                <div className="bg-[#212121] h-1 w-full"></div>
                <ul>
                    {soft_skills.map((this_) => (
                        <li key={this_} className="p-5 text-white text-[18px]">●  {this_}</li>
                    ))}
                </ul>
            </Card>
            <Card className="flex flex-col justify-center items-center w-122 text-white h-auto">
                <h1 className="font-bold text-2xl">Hard Skills</h1>
                <div className="bg-[#212121] h-1 w-full"></div>
                <ul>
                    {hard_skills.map((this_) => (
                        <li key={this_} className="p-5 text-white text-[18px]">●  {this_}</li>
                    ))}
                </ul>
            </Card>
        </div>
    )
}