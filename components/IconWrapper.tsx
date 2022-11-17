"use client"
import { Icon as BaseIcon, IconProps } from "@iconify/react";

import React from 'react';


const Icon:React.FunctionComponent<IconProps> = (props) => {
  console.log(Object.keys(React));
  return <BaseIcon {...props} />
}
export default Icon