import React from "react";
import { useState } from "react";
import Link from "next/link";
export default function MobileMenu(){
    const [openProfile, setOpenProfile] = useState(false);

    return(
        <div className=" flex flex-col dropdown-profile">
            <ul className="flex flex-col gap-4">
                <Link href="/board">Board</Link>
                <Link href="/events">Events</Link>
                <a href="/./#contact-uss">Contact Us</a>
            </ul>
        </div>
    )
}