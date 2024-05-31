import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProjectModule({title}:{title: string}) {
    return(
        <div className="m-auto w-[85%] border border-gray-200 shadow-md p-3 space-y-2">
            <div className="relative">
                <Image src={"/stockphoto.jpg"} alt="stock" layout="responsive" width={100} height={100} />
            </div>
            <div className="p-2">
                <h1 className="text-2xl font-semibold">{title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ea odio numquam in accusamus ratione suscipit doloribus consectetur aspernatur eos, natus adipisci, quaerat dignissimos eveniet molestiae vitae dolorem hic maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem minima sit voluptatibus alias! Repellendus ratione tempora ex vero, asperiores doloremque similique quisquam debitis quis blanditiis voluptatum nemo animi recusandae non!</p>
                <Button asChild className="mt-3">
                    <Link href="#">Read More...</Link>
                </Button>
            </div>
        </div>
    )
}