import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Sticker Smash",
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          headerTitle: "About",
          headerLeft:() =><></>
        }} />
      <Stack.Screen
        name="not-found"
        options={{
          headerShown: false,
          headerTitle: "Oops! 404 - Page not found",
        }} />
    </Stack>
  );
}
