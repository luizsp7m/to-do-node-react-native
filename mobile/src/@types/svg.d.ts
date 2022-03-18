declare module "*.svg"  {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>
  export default content;
}

// Sobrescrevemos a tipagem do TS para parar de dar erro na importação de SVGs