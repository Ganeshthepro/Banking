'use client';

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {z} from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  usename: z.string().min(2,{
    message:"Username must be at least 2 characters."
  }),
})

const AuthForm = ({type}:{type:String}) => {
  const [user, setUser] = useState(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <section className='auth-form'>
      <header className='flex flex-col gsp-5 mf:gap-8'>
        <Link href='/' className='cursor-pointer flex items-center gap-1'>
           <Image 
             src="/icons/logo.svg"
             width={34}
             height={34}
             alt='Logo'
           />
           <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>
            FinManager
           </h1>
        </Link>
        <div className='flex flex-col gap-1 md:gap-3'>
          <h1 className='text-24 lg:text-36 font-semibold text-grey-900'>
            {user
             ? 'Link Account'
             :type === 'sign-in'
              ?'Sign-in'
              :'Sign-Up'
             }
             <p className='text-16 font-normal text-grey-600'>
                {user
                 ? 'Link Your Bank Account'
                 :'Please enter your details'
                }
             </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className='flex flex-colgap-4'>
          {/* PlaidLink */}
        </div>
      ) :
      <>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
      </>
      }
    </section>
  )
}

export default AuthForm