import { Separator } from "@/components/ui/separator"

export default function SupportContact() {
    return (
        <div> 
            <h1 className="text-3xl font-light mb-3">Support Contact: Calculator Professor</h1>
            <Separator className="my-4" />
            <p className="my-3">
                Please email any queries or issues regarding the Calculator Professor app to:               
            </p>
            <p className="my-3">
                <a href="mailto:jestin.philip@icloud.com">jestin.philip@icloud.com</a>                
            </p>
        </div>
    );
}