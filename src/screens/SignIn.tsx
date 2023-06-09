import { VStack, Image, Text, Center, Heading } from "native-base";
import { Input } from "../components/Input";

import LogoSvg from "../assets/logo.svg";
import BackgroundImg from "../assets/background.png";

export const SignIn = () => {
  return (
    <VStack flex={1} bg="gray.700">
      <Image
        source={BackgroundImg}
        alt="pessoas treinando"
        resizeMode="contain"
        position="absolute"
      />

      <Center my={24}>
        <LogoSvg />
        <Text color="green.100" fontSize="sm">
          Treine sua mente e seu corpo
        </Text>
      </Center>

      <Center>
        <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
          Acesse sua conta
        </Heading>

        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />
      </Center>
    </VStack>
  );
};
