import Hero from '@/components/sections/Hero'
import Capabilities from '@/components/sections/Capabilities'
import Work from '@/components/sections/Work'
import Process from '@/components/sections/Process'
import Manifesto from '@/components/sections/Manifesto'
import CTAStrip from '@/components/sections/CTAStrip'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Work />
      <Process />
      <Manifesto />
      <CTAStrip />
    </>
  )
}
