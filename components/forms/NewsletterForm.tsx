"use client";

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
import FormItemInput from "../form-items/FormItemInput";
import RightCircleLinkBtn from "../buttons/RightCircleLinkBtn";

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
            <form
                method="POST"
                className="w-full h-full"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <div className="flex flex-col justify-between items-center bg-white w-full h-full gap-20 p-10 rounded-[20px] border border-secondary-default">
                    <div className="flex flex-col justify-between w-full gap-10">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItemInput
                                    label="Nom :"
                                    field={{
                                        ...field,
                                        error: form.formState.errors.name,
                                    }}
                                />
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItemInput
                                    type="email"
                                    label="Email :"
                                    field={{
                                        ...field,
                                        error: form.formState.errors.email,
                                    }}
                                />
                            )}
                        />
                    </div>
                    <RightCircleLinkBtn
                        tag="Button"
                        text="Envoyer"
                        className="w-full min-w-[200px] max-w-[390px]"
                        textClassName="pl-4"
                    />
                </div>
            </form>
        </Form>
    );
};

export default NewsletterForm;
