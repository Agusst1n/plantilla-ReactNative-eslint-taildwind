import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import tw from "twrnc";

export default function App() {
  return (
    <View style={tw`h-full bg-blue-100 w-full justify-center items-center`}>
      <Text style={tw`pt-6 bg-white`}>App Ready para usar :)</Text>
      <StatusBar style="light" />
    </View>
  );
}
