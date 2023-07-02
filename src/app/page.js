import VideoCover from '../components/VideoCover'
import Intro from '../components/Intro'
import { Youtube } from '@/components/Youtube'

export default function Home() {
  return (
    <div>
      <VideoCover />
      <Intro />
      <Youtube />
    </div>
  )
}
