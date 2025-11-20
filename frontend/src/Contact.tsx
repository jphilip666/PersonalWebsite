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
  return <div className="grid grid-col content-center h-160">
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
  </div>;
}