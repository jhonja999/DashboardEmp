import { UserButton } from "@clerk/nextjs";


export default function Dashboard(){
    return(
        <div>
            <UserButton/>
            <h2 className="text-2xl mb-4">Dashboard   </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
                <div>Card Summary</div>
                <div>Card Summary</div>
                <div>Card Summary</div>

            </div>
        </div>
    )
}