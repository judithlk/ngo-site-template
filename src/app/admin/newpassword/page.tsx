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
import Link from "next/link";

import Wrapper from "@/app/components/Admin/Wrapper";

const formSchema = z.object({
  password: z.string().min(6, {
    message: "Password must be more than 6 characters long.",
  }),
  rptPassword: z.string().min(6, {
    message: "Incorrect password!",
  }),
});

export default function NewPassword() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      rptPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <>
      <Wrapper>
        <div className="w-[84%] sm:w-[70%] md:w-[50%] lg:w-[40%] h-fit m-auto shadow-xl p-5 sm:p-10 lg:p-16 bg-midblue space-y-8">
            <h1 className="font-semibold text-base text-white">Create a new password</h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 text-white"
            >
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter new password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rptPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Repeat password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Login</Button>
            </form>
          </Form>
        </div>
      </Wrapper>
    </>
  );
}
