import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormField,
    FormControl,
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { newsletterSchema } from "@/utils/validations/newsletter";
import { useForm } from "react-hook-form";

type FormSchema = z.infer<typeof newsletterSchema>;

const NewsletterForm = () => {
    const form = useForm<FormSchema>({
        resolver: zodResolver(newsletterSchema),
        defaultValues: {
            name: "",
            email: "",
        },
    });

    const onSubmit = (data: FormSchema) => {
        console.log(data);
    };

    return (
        <Form {...form}>
            <form method="POST" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Nom" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
};

export default NewsletterForm;
