"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Please enter your name",
  }),
  age: z
    .number({
      message: "Please enter your age",
    })
    .min(18, {
      message: "You must be at least 18 to volunteer with us",
    }),
  email: z.string().email({
    message: "Please enter your email address",
  }),
  statement: z.string().min(100, {
    message: "Must be at least 100 characters",
  }),
});

export default function VolunteerModal({
  setModalState,
}: {
  setModalState: Function;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      age: 18,
      email: "",
      statement: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setModalState(false);
  }

  return (
    <div className="w-[80%] h-[80%] m-auto md:w-[60%]">
      <ScrollArea className="h-[100%] w-[100%] bg-white rounded-sm border p-4">
        <h1 className="text-xl font-bold mb-4">
          Fill in the form below and we&apos;ll be in touch with you soon!
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
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
                  <FormLabel>Your email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="statement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Why do you want to volunteer with us?</FormLabel>
                  <FormDescription>
                    In 100 words or more, tell us why you want to volunteer with
                    NGO name
                  </FormDescription>
                  <FormControl>
                    <Textarea placeholder="Your statement" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </ScrollArea>
    </div>
  );
}
