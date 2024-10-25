import React from "react";
import { Button, View } from "react-native";
import useStore from "../store";

const MyButton = () => {
  const { inc, dec } = useStore();
  return (
    <View>
        <Button title="-" onPress={dec} />
      <Button title="+" onPress={inc} />
    </View>
  );
};

export default MyButton;
