import React from 'react'
import { SheetContent,Sheet, SheetDescription, SheetHeader,SheetTitle,SheetTrigger } from './ui/sheet'

const MobileNav = ({user}: MobileNavProps) => {
  return (
    <section>
        <Sheet>
            <SheetTrigger>Open</SheetTrigger>
            <SheetContent>
                <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    </section>
  )
}

export default MobileNav
