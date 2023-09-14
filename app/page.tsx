import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { ChakraProvider } from '@chakra-ui/react'
import { Footer } from '@/components/Footer';


export default function Home() {
  return (
    <ChakraProvider>
    <main>
        <Navbar />
        <Hero />
        <Footer />
    </main>
    </ChakraProvider>
  )
}
