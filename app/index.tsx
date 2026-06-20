import Container from "@/components/ui/Container";
import { Text, View } from "react-native";
import tw from "@/lib/tw";

export default function Index() {
  return (
    <Container>
      <View style={tw`flex-1`}>
      <Text style={tw`text-2xl text-primary`}>Pizza Steve 🍕</Text>
    </View>
    </Container>
  );
}
