import { NavBarComponent } from "./components/navbar";
import { PrincipalCard } from "./components/card/card";

export default function Home() {
  return (
    <main>
      <NavBarComponent />
      <PrincipalCard />
    </main>
  );
}
