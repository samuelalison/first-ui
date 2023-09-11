import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider>
    <main>
        <Navbar />
        <Hero />
    </main>
    </ChakraProvider>
  )
}
