import { Stack } from "expo-router";
import './globals.css';

export default function RootLayout() {
  return  (
  <Stack >
    <Stack.Screen 
      name="(tabls)"
      options= {{headerShown: false}}
    />
    <Stack.Screen 
      name="movies/[id]"
      options={{headerShown: false}}
    />
  </Stack>)
}
