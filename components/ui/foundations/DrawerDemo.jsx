import React from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/shadcn/drawer"

import { Button } from "@/components/ui/shadcn/button"

const DrawerDemo = () => {
  return (
    <Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
       <DrawerClose asChild>
    <Button variant="outline">
      Close
    </Button>
  </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
  )
}

export default DrawerDemo
