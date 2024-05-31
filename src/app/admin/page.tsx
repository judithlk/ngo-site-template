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

import Wrapper from "../components/Admin/Wrapper";

const formSchema = z.object({
  email: z.string().email({
    message: "Email not found!",
  }),
  password: z.string().min(6, {
    message: "Incorrect password!",
  }),
});

export default function AdminLogin() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <>
      <Wrapper>
        <div className="w-[84%] sm:w-[70%] md:w-[50%] lg:w-[40%] h-fit m-auto shadow-xl p-2 sm:p-10 lg:p-16 bg-midblue space-y-8">
            <h1 className="font-semibold text-base text-white">Login below to proceed to admin dashboard</h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 text-white"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Link href="#" className="block"><h5 className="text-sm font-semibold italic">Forgot password</h5></Link>
              <Button type="submit">Login</Button>
            </form>
          </Form>
        </div>
      </Wrapper>
    </>
  );
}
