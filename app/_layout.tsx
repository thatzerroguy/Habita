import { SplashScreen, Stack } from "expo-router";
import '@/constants/global.css';
import { useFonts, Manrope_400Regular, Manrope_700Bold, Manrope_600SemiBold, Manrope_500Medium } from '@expo-google-fonts/manrope';
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
	const [loaded, error] = useFonts({
		Manrope_400Regular,
		Manrope_700Bold,
		Manrope_600SemiBold,
		Manrope_500Medium,
	});

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}
	return (
		<Stack>
			<Stack.Screen name="index" options={{headerShown: false}}/>
		</Stack>
	);
}
