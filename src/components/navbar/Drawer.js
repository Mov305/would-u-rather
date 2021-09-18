import React from 'react'
import {GrMenu} from 'react-icons/gr'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Flex,
  } from "@chakra-ui/react"
  import Navs from './NavCom'
  import  Logs  from './Logs'


export default function SideMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen} variant='ghost' mx={1} height='100%' size='lg'>
        <GrMenu/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Would You Rather App</DrawerHeader>
  
            <DrawerBody>
                <Flex direction='column'>
                <Navs/>
                </Flex>
                
                <Logs/>
              
            </DrawerBody>
  
          </DrawerContent>
        </Drawer>
      </>
    )
  }