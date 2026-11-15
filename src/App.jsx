import './App.css'
import ChromaGrid from './component/ChromaGrid'

const items = [
  {
    image: 'gym.jpg',
    title: 'Gym',
    subtitle: 'Fitness',
    accent: '#ffd23f'
  },
  {
    image: 'london.jpg',
    title: 'London',
    subtitle: 'City of Dreams',
    accent: '#3fb8ff',
  },
  {
    image: 'nature.jpg',
    title: 'nature',
    subtitle: 'beauty',
    accent: '#3fb8ff',
  },
  {
    image: 'sea.jpg',
    title: 'Sea',
    subtitle: 'Serenity',
    accent: '#3fb8ff',
  },
  {
    image: 'starfish.jpg',
    title: 'Starfish',
    subtitle: 'Ocean Wonders',
    accent: '#3fb8ff',
  },
  {
    image: 'tiger.jpg',
    title: 'White Tiger',
    subtitle: 'Majestic Predator',
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