import { Card } from "@/components/ui/card"

const awards_ = [
    {
        id: "1",
        project_name: "Smart Medicine Box (ITEX Version)",
        awa: "Gold Medal",
        competition: "ITEX 2024 - 35th International Invention, Innovation & Technology Exhibition (WYIE)",
        level: "International",
        location: "Kuala Lumpur Convention Centre, Malaysia",
        date: "May 16-17, 2024",
        content: "Received the Gold Award at ITEX 2024 in the World Young Inventors Exhibition (WYIE) for the Smart Medicine Box project."
    },
    {
        id: "2",
        project_name: "Smart Medicine Box (I-NEW GEN Version)",
        awa: "Silver Medal",
        competition: "Thailand New Gen Inventors Award 2024 (I-NEW GEN)",
        level: "National",
        location: "BITEC Bangna, Thailand",
        date: "February 2-6, 2024",
        content: "Received the Silver Award at Thailand New Gen Inventors Award 2024 for the Smart Medicine Box project."
    },
    {
        id: "3",
        project_name: "Semi-Automatic Confection Depositor (WRG version)",
        awa: "Gold Medal",
        competition: "WRG Thailand Championship 2024",
        level: "National",
        location: "The Hub - Zeer Rangsit",
        date: "August 3-4, 2024",
        content: "Developed a semi-automatic confection depositor and received the Gold Award in the Innovative Robot category."
    },
    {
        id: "4",
        project_name: "Semi-Automatic Confection Depositor and Moisture Removal System (I-NEW GEN version)",
        awa: "1st place Trophy, and Gold Medal",
        competition: "Thailand New Gen Inventors Award 2025 (I-NEW GEN)",
        level: "National",
        location: "BITEC Bangna, Thailand",
        date: "Feburary 2-6, 2025 ",
        content: "An upgraded version of the previous project featuring an integrated moisture removal system to improve the quality and consistency of the confection production process.",
    },
    {
        id: "5",
        project_name: "Intermediate Robot",
        awa: "Gold Award (1st Runner-up)",
        competition: "Student Arts and Crafts Competition No.71",
        level: "District",
        location: "Suankularb Wittayalai Rangsit School",
        date: "November 21-22, 2023",
        content: "Designed and programmed an autonomous robot for a randomized challenge, achieving 1st Runner-up."
    },
    {
        id: "6",
        project_name: "Object Sorting Robot",
        awa: "Bronze Medal (2nd Runner-up)",
        competition: "INNODEX Robotics Competition Thailand 2024",
        level: "National",
        location: "Thai-Nichi Institute of Technology",
        date: "August 30 - September 1, 2024",
        content: "Developed a ROS-based robot capable of separating three types of objects, earning the Bronze Award."
    },
    {
        id: "7",
        project_name: "Smart Medicine Box (MRC Version)",
        awa: "Award Plaque (2nd Runner-up)",
        competition: "Maker Robotics Charity (MRC) 2024",
        level: "National",
        location: "The Hub - Zeer Rangsit",
        date: "November 29 - December 1, 2024",
        content: "Presented the latest version of the Smart Medicine Box with enhanced functionality and received 2nd Runner-up."
    },
]

export default function AwardsSection() {
    return (
        <div className="flex flex-col items-center justify-center gap-8 mt-8 mb-8">
            <h1 className="text-white font-bold text-3xl pt-3">Awards</h1>
            <div className="bg-[#212121] h-1 w-420 rounded rounded-lg"></div>
            {awards_.map((this_award) => (
                <Card key={this_award.id} className="flex flex-row justify-between items-center p-6 w-400">
                    <div>
                        <h2 className="text-2xl font-bold text-white">
                            {this_award.project_name}
                        </h2>

                        <p className="mt-2 mb-2">
                            <span className="font-semibold text-white">
                                {this_award.awa}
                            </span>
                            <p className="text-white">{this_award.competition}</p>
                        </p>

                        <p className="text-gray-500 text-white">
                            {this_award.level} • {this_award.location} • {this_award.date}
                        </p>

                        <p className="mt-4 text-white">
                            {this_award.content}
                        </p>
                    </div>
                    <div>Hello</div>
                </Card>
            ))}
        </div>
    );
}