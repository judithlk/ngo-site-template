"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SocialBar from "../components/SocialBar";
import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Please enter your name",
  }),
  email: z.string().email({
    message: "Please enter your email address",
  }),
  message: z.string().min(1, {
    message: "Message cannot be empty",
  }),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <NavBar />
      <main className="w-[100%] pb-10 mb-0 relative">
        <div className="w-[100%] h-[100%] pt-[8%] lg:pt-0 space-y-10">
          <div className="h-52 md:h-64 lg:h-72 bg-darkblue flex items-center pt-4">
            <h1 className="text-3xl md:text-5xl text-white ml-10 font-bold italic">
              Contact Us
            </h1>
          </div>
        </div>
        <div className="w-[100%] -mt-[11%] sm:-mt-[8%] md:-mt-[7%] lg:-mt-[6%] bg-transparent sm:flex p-4 justify-evenly md:justify-around pb-5">
          <div className="bg-white p-6 m-auto w-[82%] sm:w-[60%] md:w-[50%] shadow-2xl space-y-5 mb-16">
            <h2>We would love to hear from you!</h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your name</FormLabel>
                      <FormControl>
                        <Input {...field} />
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
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="What would you like to talk about?"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </div>
          <div className="m-auto w-[100%] sm:w-[20%] flex flex-col items-center justify-center">
            <h1 className="text-xl md:text-2xl italic">
              Social Media
            </h1>
            <SocialBar />
          </div>
          {/* <div className="relative mt-[8%] w-[50%] m-auto md:w-[30%] flex items-center">
            <Image src={"/contact2.jpg"} alt="" layout="responsive" width={100} height={100} />
          </div> */}
        </div>
        <div className="w-[80%] m-auto space-y-6 text-xl md:text-2xl font-semibold italic mt-4">
          <h1>
            Email us:{" "}
            <Link href="mailto:email@ngosite.com">email@ngosite.com</Link>
          </h1>
          <h1>Call us: +11 123 456 7890</h1>
        </div>
      </main>
      <Footer />
    </>
  );
}
