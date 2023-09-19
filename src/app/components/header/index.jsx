import { NavBarComponent } from "../navbar";
import { ClubLogosGrid } from "../grids/clubLogosGrid";

export const Header = () => {
    return(
        <header>
            <ClubLogosGrid />
            <NavBarComponent />
        </header>
    )
}