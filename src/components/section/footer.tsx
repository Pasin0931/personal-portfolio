import { Mail, Phone } from "lucide-react";

import Image from "next/image"

export default function FooterSection() {
    return (
        <footer className="w-full flex flex-col items-center justify-center bg-[#262626] h-20">
            <p className="text-white">
                © 2026 Pasin Makcharoen. All Rights Reserved.
            </p>

            <div className="flex items-center gap-8 text-white mt-2">
                <div className="flex items-center gap-2">
                    <Mail size={18} />
                    <p>pasin0931@gmail.com</p>
                </div>

                <div className="flex items-center gap-2">
                    <Phone size={18} />
                    <p>0948631386</p>
                </div>

                <div className="flex items-center gap-2">
                    <Image
                        src="/ig.png"
                        alt="Instagram"
                        width={18}
                        height={18}
                    />
                    <button onClick={() => window.open("https://instagram.com/pasin.mck", "_blank")}  className="hover:underline cursor-pointer">pasin.mck</button>
            </div>
        </div>
        </footer >
    )
}