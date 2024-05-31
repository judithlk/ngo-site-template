import Link from "next/link";
import Image from "next/image";
import FooterLink from "./FooterLink";

export default function Footer() {
    return(
        <div className="flex flex-col md:flex-row items-start md:items-center p-10 bg-midblue justify-center space-x-8">
            <div className="flex flex-col md:flex-row items-start md:items-center space-x-3 pb-8 mb-8 md:pb-0 md:mb-0 border-b-2 border-white md:border-0">
                <div className="bg-white p-2 pr-0 m-3">
                    <Image 
                        src={"/logo.png"}
                        alt="logo"
                        layout="relative"
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                <h3 className="font-semibold text-white">FULL ORGANIZATION NAME</h3>
                <p className="text-sm text-white italic">&copy; Copyright Organization Name 2024. All rights reserved.</p>
                </div>
            </div>
            <div className="hidden md:block h-[120px] border border-white"></div>
            <div className="flex-col space-y-1">
            <h1 className="text-base font-semibold text-white mb-2">CONTACT US</h1>
            <Link href="mailto:email@ngosite.com"><FooterLink>{"email@ngosite.com"}</FooterLink></Link>
            <FooterLink>{"+11 123 456 7890"}</FooterLink>
            <FooterLink>{"Office Address, Street, City, State, PO Box"}</FooterLink>
            </div>
        </div>
    )
}