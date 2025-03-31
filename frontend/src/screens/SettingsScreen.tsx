import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  const [notificationEnabled, setNotificationEnabled] = useState(true);
  const [accountDetails, setAccountDetails] = useState('');

  const handleSaveSettings = () => {
    // Logic to save settings goes here
    console.log('Settings saved:', { notificationEnabled, accountDetails });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.settingItem}>
        <Text>Enable Notifications</Text>
        <Switch
          value={notificationEnabled}
          onValueChange={setNotificationEnabled}
        />
      </View>
      <View style={styles.settingItem}>
        <Text>Account Details</Text>
        <TextInput
          style={styles.input}
          value={accountDetails}
          onChangeText={setAccountDetails}
          placeholder="Enter your account details"
        />
      </View>
      <Button title="Save Settings" onPress={handleSaveSettings} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  settingItem: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
});

export default SettingsScreen;