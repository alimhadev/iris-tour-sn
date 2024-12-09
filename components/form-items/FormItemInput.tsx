import React from "react";
import { FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { FormControl, FormMessage } from "../ui/form";
import { FormItem } from "../ui/form";
import { FieldValues } from "react-hook-form";

interface FormItemInputProps {
    type?: string;
    label: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    field: FieldValues;
}

const FormItemInput = ({
    type,
    label,
    placeholder,
    value,
    onChange,
    field,
}: FormItemInputProps) => {
    return (
        <FormItem className="bg-gray-100 w-full pt-20 pb-4 px-5 rounded-[20px]">
            <div className="flex items-end border-b border-secondary-default  gap-2">
                <FormLabel className="text-[32px] leading-tight text-primary-default whitespace-nowrap">
                    {label}
                </FormLabel>
                <FormControl>
                    <Input
                        type={type}
                        placeholder={placeholder}
                        className="text-[32px] border-none mb-[1px]"
                        {...field}
                    />
                </FormControl>
            </div>
            <FormMessage />
        </FormItem>
    );
};

export default FormItemInput;
