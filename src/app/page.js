import { PrincipalCard } from './components/card/card'
import { Header } from './components/header'
import { MatchCard } from './components/card/matchCard'

export default function Home() {
  return (
    <main>
      <Header />
      <PrincipalCard />
      <MatchCard />
    </main>
  )
}
