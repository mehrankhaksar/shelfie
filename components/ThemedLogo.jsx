import { Image, useColorScheme } from "react-native";
import LogoLight from "../assets/img/logo-light.png";
import LogoDark from "../assets/img/logo-dark.png";

const ThemedLogo = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const source = colorScheme === "dark" ? LogoDark : LogoLight;

  return <Image source={source} style={[style]} {...props} />;
};

export default ThemedLogo;
