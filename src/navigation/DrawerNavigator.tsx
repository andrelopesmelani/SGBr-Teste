import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import styled from 'styled-components/native';
import { useAuth } from '../context/authentication';
import MainStack from './MainStack';
import { colors } from '../themes/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = () => {
  const { logout, user } = useAuth();
  const navigation = useNavigation()

  const handleNavigation = () => {
    navigation.navigate('MainStack', { screen: 'Home' }); 
  };

  return (
    <DrawerContainer>
      <DrawerHeader>
        <HeaderTitle>Welcome, {user.name}!</HeaderTitle>
      </DrawerHeader>

      <MenuContainer>
        <MenuItem onPress={handleNavigation}>
          <MenuIcon name="home" size={20} />
          <MenuText>Home</MenuText>
        </MenuItem>
        <MenuDivider />
        <LogoutItem onPress={logout}>
          <LogoutIcon name="sign-out" size={20} />
          <LogoutText>Logout</LogoutText>
        </LogoutItem>
      </MenuContainer>

    </DrawerContainer>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent />}
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <Icon
            name="bars"
            size={24}
            style={{ marginLeft: 15, color: colors.white }}
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
         headerTitle: ''
      })}
    >
      <Drawer.Screen name="MainStack" component={MainStack} options={{ headerShown: true }} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;


const DrawerContainer = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

const DrawerHeader = styled.View`
  padding: 50px 20px;
  background-color: ${colors.primary};
  align-items: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  elevation: 5;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
`;

const HeaderTitle = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const MenuContainer = styled.View`
  flex: 1;
  padding: 20px 20px;
`;

const MenuItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 15px 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: ${colors.white};
  elevation: 3;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 3px;
`;

const LogoutItem = styled(MenuItem)`
  background-color: ${colors.danger};
  border-width: 1px;
  border-style: solid;
  border-color: ${colors.danger};
`;

const LogoutIcon = styled(Icon)`
  margin-right: 10px;
  color: ${colors.white};
`;

const LogoutText = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  font-weight: 500;
`;

const MenuIcon = styled(Icon)`
  margin-right: 10px;
  color: ${colors.primary};
`;

const MenuText = styled.Text`
  font-size: 16px;
  color: ${colors.text};
`;

const MenuDivider = styled.View`
  height: 1px;
  background-color: ${colors.gray100};
  margin: 5px 0;
`;
