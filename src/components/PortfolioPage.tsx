import { Navbar } from './Navbar';
import { Heading } from './Heading';
import { Text } from './Text';

export function PortfolioPage() {
  return (
      <div className='w-screen h-screen flex flex-col justify-between items-center'>
        <Navbar/> 
        <main className='flex flex-col items-center'>
          <div className='flex flex-col items-center gap-16 mb-16 lg:flex-row'>
            <img typeof="image/svg+xml" src="/logo.svg" alt="" />
            <div className='flex-col justify-start'>

              <Heading><h1 className='text-gray-100 font-semibold'>LUCAS RODRIGUES BORDIGNON</h1></Heading>
              <Text size='sm'>LARANJAL PAULISTA - SÃO PAULO, BRAZIL</Text>

              <br />
              <br />

              <Heading size='md'><h3 className='text-gray-200 font-light'>FRONT-END DEVELOPER</h3></Heading>

              <div className='flex gap-1'>
                <img typeof="image/svg+xml" src="/react.svg" alt="" />
                <img typeof="image/svg+xml" src="/javascript.svg" alt="" />
                <img typeof="image/svg+xml" src="/html.svg" alt="" />
                <img typeof="image/svg+xml" src="/css.svg" alt="" />
                <img typeof="image/svg+xml" src="/tailwind.svg" alt="" />
                <img typeof="image/svg+xml" src="/github.svg" alt="" />
                <img typeof="image/svg+xml" src="/git.svg" alt="" />                
              </div>
            </div>
          </div>
            
          <div>
            <Text size='sm'>
              <p className='block px-8'>
                I was born in a small town in São Paulo, in the Campinas region. <br />
                Since I was a child, I have been interested in computing, even though my family was not able to give me a PC, but I was able to study. <br />
                That's when I passed a small entrance exam and started my studies in basic computing. That's where it all started. <br />
                Today, I'm Software Developer at UmPontoDois with 10 months of experience working with GeneXus, SQL Server and MySQL. <br />
                I started learning web development at university, I know we were meant to be together hahaha. <br />
                I'm looking to become a top front-end developer. <br />
                Between my studies, I felt the need to know a little about UX/UI and design system, now all my projects start in Figma. <br />
                I invite you to get to know me through my social networks. <br />
                Leave me a message!
              </p>
            </Text>
          </div>

          <Heading><h3 className='text-gray-200 text-2xl mt-16'>NEVER STOP LEARNING!</h3></Heading>

        </main>

        <footer className='w-full h-16 border-t-[1px] border-t-gray-800 flex items-center justify-around gap-4 px-16'>
          <div className='flex items-center justify-around gap-2'>
            <Heading size='md'><p className='text-yellow-500'>LRB</p></Heading>
            <Text size='sm'><p className='text-gray-400'>© 2022 LRB</p></Text>
          </div>
          <Text size='sm'><a href="" className='text-gray-400'>DOCUMENT</a></Text>
          <Text size='sm'><a href="" className='text-gray-400'>GITHUB PROJECT</a></Text>
          <Text size='sm'><a href="" className='text-gray-400'>STACK</a></Text>
        </footer>
      </div>
  )
}
