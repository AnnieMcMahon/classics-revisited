"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/app/actions/sendEmail"; 
import { useState } from "react";

const formSchema = z
  .object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }).optional().or(z.literal("")), 
    phone: z.string()
      .regex(/^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/, {
        message: "Please enter a valid phone number (e.g., 123-456-7890).",
      })
      .optional()
      .or(z.literal("")), 
    message: z.string().min(10, {
      message: "Message must be at least 10 characters.",
    }),
  })
  .refine((data) => data.email || data.phone, {
    message: "Either email or phone number must be provided.",
    path: ["email"], 
  });



export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setStatus("Sending...");
    const response = await sendEmail(values.name, values.email || "", values.phone || "", values.message);
    
    if (response.success) {
      setStatus("Message sent successfully!");
      form.reset();
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  }

  return (
    <div className="px-8 py-10 bg-gray-100"
    id="contact">
    <h2 className="text-2xl font-bold">Contact Us</h2>
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-white px-4 rounded-md space-y-8 py-4 my-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Name</FormLabel>
              <FormControl>
                <Input className="w-96 border-black" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-wrap flex-row justify-between gap-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Email</FormLabel>
              <FormControl>
                <Input className="w-96 border-black" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Phone</FormLabel>
              <FormControl>
                <Input className="w-96 border-black" type="tel" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Message</FormLabel>
              <FormControl>
                <Textarea className="h-24 border-black" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {status && <p className="text-center text-sm text-gray-600">{status}</p>}

          <Button
            type="submit"
            className="px-4 py-4 bg-black text-white font-bold text-sm rounded-lg hover:bg-gray-600 transition"
          >
            Submit
          </Button>
      </form>
    </Form>
    </div>
  );
}