import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet } from 'react-native'
import {
  NativeBaseProvider,
  View,
  HStack,
  Button,
  Text,
  Input,
} from 'native-base'

export default function App() {
  const [formValues, setFormValues] = React.useState([{ name: '', email: '' }])

  let addFormFields = () => {
    setFormValues([...formValues, { name: '', email: '' }])
  }

  let removeFormFields = (i) => {
    let newFormValues = [...formValues]
    newFormValues.splice(i, 1)
    setFormValues(newFormValues)
  }

  let handleChange = (i, e) => {
    console.log(i, e.target.placeholder)
    let newFormValues = [...formValues]
    // newFormValues[i].name = e.target.value
    newFormValues[i][e.target.placeholder] = e.target.value
    setFormValues(newFormValues)
  }

  let handleSubmit = () => {
    alert(JSON.stringify(formValues))
  }

  return (
    <NativeBaseProvider>
      <View p="10%">
        {formValues.map((element, index) => (
          <View key={index}>
            <Text>Name</Text>
            <Input
              placeholder="name"
              value={element.name || ''}
              onChange={(e) => handleChange(index, e)}
            />
            <Text>Email</Text>
            <Input
              placeholder="email"
              value={element.email || ''}
              onChange={(e) => handleChange(index, e)}
            />
            {index ? (
              <Button onPress={() => removeFormFields(index)}>Remove</Button>
            ) : null}
          </View>
        ))}
        <HStack space={3}>
          <Button onPress={() => addFormFields()}>Add</Button>
          <Button onPress={() => handleSubmit()}>Submit</Button>
        </HStack>
      </View>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
