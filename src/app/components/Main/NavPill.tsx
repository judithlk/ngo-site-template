import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export default function NavPill({children}:{children:JSX.Element}) {
    return(
            <div className="p-3 font-semibold hover:bg-midblue hover:text-white">
                {children}
            </div>
    )
}