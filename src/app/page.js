import Image from 'next/image'
import Nav from "./components/navbar"
import Hero from "@/app/components/heropage"
import Contact from '@/app/components/contact'
import Project from '@/app/components/project'
import Techstack from '@/app/components/techstack'
import Search from './components/searchbar'
import ProjectsSection from './components/projectsection'


export default function Home() {
  return (
    <div className="">
      <>
        <Nav />
        <Hero />
        <ProjectsSection />
        <Techstack />
        <Contact />
      </>
    </div>
  )
}
