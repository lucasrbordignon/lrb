import { Header } from './components/Header';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import './styles/global.css';

export function App() {
  return (
      <div className='w-screen h-screen bg-gray-900 flex flex-col justify-between items-center'>
        <Header>
          <Heading size='lg'>
            <h1 className='text-yellow-500'>LRB</h1>
          </Heading>

          {/* <nav className='flex items-center justify-around h-4'> */}
            <Heading size='sm'><a href="">CONTACT</a></Heading>
            <Heading size='sm'><a href="https://www.linkedin.com/in/lucasrbordignon/">LINKEDIN</a></Heading>
            <Heading size='sm'><a href="https://www.instagram.com/lucasrbordignon/">INSTAGRAM</a></Heading>
            <Heading size='sm'><a href="https://github.com/lucasrbordignon">GITHUB</a></Heading>          
          {/* </nav> */}

        </Header>        

        <main className='flex flex-col items-center'>
          <div className='flex items-center gap-16 mb-16'>
            {/* <img className="h-40 w-40 border-t-2 border-l-2 border-l-yellow-500 border-b-2 border-b-yellow-500 rounded-full" src="https://media.licdn.com/dms/image/C4E03AQEH-yDRhYFSrw/profile-displayphoto-shrink_200_200/0/1640865016001?e=1678924800&v=beta&t=VI6ixd1Je4hfsFRX77wLay_Q2DjEjYGIfmZ-DzbY7LU" alt="" /> */}
            <img typeof="image/svg+xml" src="./public/logo.svg" alt="" />
            <div className='flex-col justify-start'>
              <Heading><h1 className='text-gray-100 font-semibold'>LUCAS RODRIGUES BORDIGNON</h1></Heading>
              <Text size='sm'>LARANJAL PAULISTA - SÃO PAULO, BRAZIL</Text>
              <br />
              <br />
              <Heading size='md'><h3 className='text-gray-200 font-light'>FRONT-END DEVELOPER</h3></Heading>
              <div className='flex gap-1'>

                <img typeof="image/svg+xml" src="/react.svg" alt="" />
                <img typeof="image/svg+xml" src="./public/javascript.svg" alt="" />
                <img typeof="image/svg+xml" src="./public/html.svg" alt="" />
                <img typeof="image/svg+xml" src="./public/css.svg" alt="" />
                <img typeof="image/svg+xml" src="./public/tailwind.svg" alt="" />
                <img typeof="image/svg+xml" src="./public/github.svg" alt="" />
                <img typeof="image/svg+xml" src="./public/git.svg" alt="" />
                
              </div>
              

            </div>
          </div>
            
          <div>
            <Text size='sm'>
              <p >
                I was born in a small town in São Paulo, in the Campinas region. <br />
                Since I was a child, I have been interested in computing, even though my family was not able to give me a PC, but I was able to study. <br />
                That's when I passed a small entrance exam and started my studies in basic computing. That's where it all started. <br />
                Today, I'm Software Developer at UmPontoDois with 7 months of experience working with GeneXus, SQL Server and MySQL. <br />
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

        <footer className='max-w-max h-16 border-t-[1px] border-t-gray-800 flex items-center justify-around gap-[128px] pr-16 pl-16'>
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
