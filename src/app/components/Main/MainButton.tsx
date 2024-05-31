import { Button } from "@/components/ui/button"

export default function MainButton({children}:{children: JSX.Element}) {
    return(
        <Button className="">
            {children}
        </Button>
    )
}