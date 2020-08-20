import React from "react";
import { StyleSheet, Text, View, TextInput, Alert, Button } from "react-native";
import { Card } from "react-native-elements";

import { useForm, Controller } from "react-hook-form";

const UpdateCount = ({ navigation }) => {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    Alert.alert("Update Successful");
    navigation.goBack();
    //push data by api here
  };

  return (
    <View>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Card>
            <Text>Bed Count</Text>

            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          </Card>
        )}
        name="BedCount"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.BedCount && <Text>This is required.</Text>}
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Card>
            <Text>Ventilator Count</Text>
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          </Card>
        )}
        name="VentilatorCount"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.VentilatorCount && <Text>This is required.</Text>}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
  },
});

export default UpdateCount;
