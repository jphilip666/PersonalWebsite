import { FaEnvelope } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return <div className="grid grid-col content-between h-160">
    <div>
        <form>
            <FieldGroup>
                <FieldSet>
                    <FieldLegend>Contact</FieldLegend>
                    <FieldDescription>
                        Please use the form below to get in touch.
                    </FieldDescription>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="checkout-7j9-optional-comments">
                                Details
                            </FieldLabel>
                            <Textarea
                                id="checkout-7j9-optional-comments"
                                placeholder="Add details here..."
                                className="resize-none"
                                rows={6}
                            />
                        </Field>
                        <Field orientation="horizontal" className="justify-end">
                            <Button type="submit" className="w-36">Submit</Button>
                        </Field>
                    </FieldGroup>
                </FieldSet>
            </FieldGroup>
        </form>
    </div>
    
    <div>        
        <Separator className="my-4" />
        <table className="mx-auto text-xs">
            <tbody>
                <tr>
                    <td><FaEnvelope className="pe-3 size-8 text-yellow-500" /></td>
                    <td className="text-left">
                        <a href="mailto:jestin.philip@icloud.com">jestin.philip@icloud.com</a>
                    </td>
                </tr>
                <tr>
                    <td><FaLinkedin className="pe-3 size-8 text-blue-500" /></td>
                    <td className="text-left">
                        <a href="https://www.linkedin.com/in/jestin-philip/">https://www.linkedin.com/in/jestin-philip/</a>                    
                    </td>
                </tr>
                <tr>
                    <td><FaXTwitter className="pe-3 size-8 text-white" /></td>
                    <td className="text-left">
                        <a href="https://twitter.com/jphilip777">https://twitter.com/jphilip777</a>                    
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>;
}