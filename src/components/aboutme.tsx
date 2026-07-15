"use client"

import { Card } from "@/components/ui/card"

export default function AboutMe() {
    return (
        <div className="flex flex-col items-center justify-center mt-10 mb-10">
            <Card className="w-200 p-8">
                <div className="space-y-6 text-white/80 leading-8 text-lg">
                    <p>
                        Hello! I'm <span className="font-semibold text-white">Pluem</span>, a
                        second-year <span className="text-white">Software and Knowledge Engineering</span>
                        student at <span className="text-white">Kasetsart University</span> with a
                        strong passion for robotics, artificial intelligence, machine learning,
                        electronics, hardware, and software development.
                    </p>

                    <p>
                        Over the past several years, I have continuously expanded my skills in
                        CAD design, hardware development, and electronics while contributing to
                        numerous robotics and innovation projects. These experiences have helped
                        me strengthen my technical expertise, problem-solving ability, teamwork,
                        and communication skills.
                    </p>

                    <p>
                        I was also a co-founder and member of my high school's robotics club,
                        <span className="text-white font-medium"> Return to Monkey</span>, where I
                        worked as part of the Hardware and Technical team. Together, we designed,
                        built, and competed with robots in various competitions while developing
                        practical engineering solutions.
                    </p>

                    <p>
                        Currently, I am focusing on advancing my software engineering skills,
                        particularly in <span className="text-white">ROS 2</span>,
                        <span className="text-white"> Computer Vision</span>,
                        <span className="text-white"> AI & Machine Learning</span>,
                        <span className="text-white"> Data Science</span>, and
                        <span className="text-white"> Full-Stack Development</span>.
                    </p>

                    <p>
                        Outside of academics, I enjoy building personal projects, experimenting
                        with new technologies, and continuously learning to broaden my knowledge
                        and stay up to date with the latest trends in technology.
                    </p>
                </div>
            </Card>
        </div>
    )
}