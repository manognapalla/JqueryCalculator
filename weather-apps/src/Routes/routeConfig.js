import { WeatherCard } from "../components";
import WeatherDetails from "../components/WeatherDetails";

export default [{
        path: '/',
        Component: WeatherCard
    },
    {
        path: '/weather/:day',
        Component: WeatherDetails
    }
];