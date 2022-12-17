export type CityWeatherData = {
  main: Record<string, number>;
  dt: number;
  dt_txt: string;
  id: number;
  weather: Array<{ icon: string; description: string; id: number; main: string }>;
  name: string;
  wind: {
    speed: number;
  };
};
