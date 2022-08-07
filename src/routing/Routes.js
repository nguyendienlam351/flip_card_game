import Home from "../screens/Home";
import PlayOnePlayer from "../screens/PlayOnePlayer";

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
]