import './App.css'
import ChromaGrid from './component/ChromaGrid'

const items = [
  {
    image: 'Doremon.jpg',
    title: 'Doremon',
    subtitle: 'Robotic Cat',
    accent: '#ffd23f'
  },
  {
    image: 'sunset.jpg',
    title: 'sunset',
    subtitle: 'Evening',
    accent: '#3fb8ff',
  },
  {
    image: 'Rose.jpg',
    title: 'Rose',
    subtitle: 'Velvet Blooms',
    accent: '#3fb8ff',
  },
  {
    image: 'rainbow.jpg',
    title: 'Rainbow',
    subtitle: 'Happy Colors',
    accent: '#3fb8ff',
  },
  {
    image: 'waterfalls.jpg',
    title: 'waterfalls',
    subtitle: 'beauty ',
    accent: '#3fb8ff',
  },
  {
    image: 'dubai.jpg',
    title: 'Dubai',
    subtitle: 'City of Dreams',
    accent: '#3fb8ff',
  }
];

function App() {

  return (
    <>
      
<ChromaGrid items={items} columns={3} radius={260}
    reveal="spotlight"
    minCardWidth={180}
    gap={12}
    aspectRatio="3 / 2"
    cardRadius={22}
    showInfo
    frame={false}
    softness={0.6}
    damping={0.45}
    fadeOut={0.6}
    grayscale={1}
    dim={0.12}
    glow={0.5}
    borderGlow={1}
/>
    </>
  )
}

export default App