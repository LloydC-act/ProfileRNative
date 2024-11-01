import React from 'react';
import { View, Text, Image, StyleSheet, Switch } from 'react-native';

const UserProfileScreen = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : null]}>
      <Image source={{ uri: 'https://scontent.fcgy3-1.fna.fbcdn.net/v/t39.30808-6/241554351_3011971469018286_1145211922460889740_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFXC0hZIxYz_TelKBCxuuIBWNnW34CJ991Y2dbfgIn33XabtMMw8_KdyH7_3SA7AblBysajch_j7QTAmClDMNku&_nc_ohc=mlUMnnivK-UQ7kNvgGc3Jap&_nc_zt=23&_nc_ht=scontent.fcgy3-1.fna&_nc_gid=A_ItGeVRB2mXPwFQ7TWnEQo&oh=00_AYCL4DtDI4utFaUUFgXmv0WZLUWCR6vJ5iexCaWMwLHsbA&oe=672AED66' }} style={styles.profileImage} />
      <Text style={[styles.name, isDarkMode ? styles.darkText : null]}>User Name</Text>
      <Text style={[styles.joinedText, isDarkMode ? styles.darkText : null]}>Joined 1 year ago</Text>

      <View style={styles.settingsContainer}>
        <Text style={[styles.settingTitle, isDarkMode ? styles.darkText : null]}>Manage user</Text>
        <Text style={[styles.settingTitle, isDarkMode ? styles.darkText : null]}>Settings</Text>
        <Text style={[styles.settingTitle, isDarkMode ? styles.darkText : null]}>Notifications</Text>

        <View style={styles.darkModeContainer}>
          <Text style={[styles.settingTitle, isDarkMode ? styles.darkText : null]}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={handleDarkModeToggle}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>

        <Text style={[styles.settingTitle, isDarkMode ? styles.darkText : null]}>Sign Out</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
    paddingVertical: 40,
  },
  darkContainer: {
    backgroundColor: '#1a1a1a',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  joinedText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  settingsContainer: {
    width: '80%',
  },
  settingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  darkText: {
    color: '#fff',
  },
  darkModeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default UserProfileScreen;