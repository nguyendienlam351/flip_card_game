import Home from "../screens/Home";
import PlayOnePlayer from "../screens/PlayOnePlayer";
import PlayTwoPlayers from "../screens/PlayTwoPlayers";

export const Routes = [
    {
        name: 'Home',
        component: Home,
        options: { headerShown: false }
    },
    {
        name: 'PlayOnePlayer',
        component: PlayOnePlayer,
        options: { headerShown: false }
    },
    {
        name: 'PlayTwoPlayers',
        component: PlayTwoPlayers,
        options: { headerShown: false }
    }
]