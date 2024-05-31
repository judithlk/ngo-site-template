"use client";

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
import Link from "next/link";

const formSchema = z.object({
  search: z.string(),
});

export default function Aside() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-[80%] m-auto mt-16 md:mt-0 md:w-[30%] h-fit shadow-md p-5 border border-gray-200 space-y-8">
      <div className="">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex relative ">
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem className="w-[80%]">
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Search here"
                      className="rounded-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-midblue "
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="rounded-none bg-midblue">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </form>
        </Form>
      </div>
      <div className="w-[100%] py-3 space-y-3">
        <h1 className="text-black font-semibold text-2xl">UPDATES</h1>
        <div>
        <Link href="#"><h1 className="text-darkblue text-base uppercase">Project save the earth kicks off</h1></Link>
        </div>
        <hr />
        <div>
        <Link href="#"><h1 className="text-darkblue text-base uppercase">Meeting with organisation on May 30th, 2024</h1></Link>
        </div>
        <hr />
        <div>
        <Link href="#"><h1 className="text-darkblue text-base uppercase">An interview with the founder on the education of the girl child</h1></Link>
        </div>
        <hr />
        <div>
        <Link href="#"><h1 className="text-darkblue text-base uppercase">Project save the earth</h1></Link>
        </div>
      </div>
      <div className="w-[100%] py-3 space-y-3">
        <h1 className="text-black font-semibold text-2xl">UPCOMING EVENTS</h1>
        <div>
        <Link href="#"><h1 className="text-darkblue text-base uppercase">Children&apos;s day program - sign up now!</h1></Link>
        </div>
        <hr />
        <div>
        <Link href="#"><h1 className="text-darkblue text-base uppercase">General townhall with donors and sponsors</h1></Link>
        </div>
        <hr />
        <div>
        <Link href="#"><h1 className="text-darkblue text-base uppercase">Christmas Eve gala</h1></Link>
        </div>
      </div>
    </div>
  );
}
