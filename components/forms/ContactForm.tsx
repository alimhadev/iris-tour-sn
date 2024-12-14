"use client";

import { useTranslations } from "next-intl";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField } from "../ui/form";
import { newsletterSchema } from "@/utils/validations/newsletter";
import { useForm } from "react-hook-form";
import FormItemInput from "../form-items/FormItemInput";
import RightCircleLinkBtn from "../buttons/RightCircleLinkBtn";
import { contactSchema } from "@/utils/validations/contact";

type FormSchema = z.infer<typeof contactSchema>;

const ContactForm = () => {
    const t = useTranslations("ContactPage.InformationSection");

    const form = useForm<FormSchema>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        },
    });

    const onSubmit = (data: FormSchema) => {
        console.log(data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col justify-between items-center bg-white w-full h-full gap-20 p-5 md:p-10 rounded-[35px] shadow-[0_0_20px_10px_rgba(0,0,0,0.1)]">
                    <div className="flex flex-col justify-between w-full gap-10">
                        <div className="grid sm:grid-cols-2 gap-5">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItemInput
                                        className="pt-14"
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
                                        className="pt-14"
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
                        <div className="grid sm:grid-cols-2 gap-5">
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItemInput
                                        className="pt-14"
                                        label="Téléphone :"
                                        field={{
                                            ...field,
                                            error: form.formState.errors.phone,
                                        }}
                                    />
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItemInput
                                        className="pt-14"
                                        type="text"
                                        label="Sujet :"
                                        field={{
                                            ...field,
                                            error: form.formState.errors
                                                .subject,
                                        }}
                                    />
                                )}
                            />
                        </div>
                        <div className="w-full">
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItemInput
                                        className="pt-40"
                                        label="Message :"
                                        field={{ ...field }}
                                    />
                                )}
                            />
                        </div>
                    </div>
                    <RightCircleLinkBtn
                        tag="Button"
                        text={t("sendMessage")}
                        className="w-full min-w-[200px] max-w-[390px]"
                        textClassName="pl-4"
                    />
                </div>
            </form>
        </Form>
    );
};

export default ContactForm;
