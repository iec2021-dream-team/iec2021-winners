import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import LoginScreen from '../screens/LoginScreen';
import PayScreen from '../screens/PayScreen';
import LoadScreen from '../screens/LoadScreen';
import RedeemScreen from '../screens/RedeemScreen';
import { BottomTabParamList, LoginParamList, PayParamList, LoadParamList, RedeemParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Login"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
        <BottomTab.Screen
            name="Login"
            component={LoginNavigator}
            options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
            }}
        />
      <BottomTab.Screen
        name="Pay"
        component={PaymentNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Load"
        component={LoadNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
        <BottomTab.Screen
            name="Redeem"
            component={RedeemNavigator}
            options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
            }}
        />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const LoginStack = createStackNavigator<LoginParamList>();

function LoginNavigator() {
    return (
        <LoginStack.Navigator>
            <LoginStack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerTitle: 'Login' }}
            />
        </LoginStack.Navigator>
    );
}

const PaymentStack = createStackNavigator<PayParamList>();

function PaymentNavigator() {
  return (
    <PaymentStack.Navigator>
      <PaymentStack.Screen
        name="Pay"
        component={PayScreen}
        options={{ headerTitle: 'Payments' }}
      />
    </PaymentStack.Navigator>
  );
}

const LoadStack = createStackNavigator<PayParamList>();

function LoadNavigator() {
    return (
        <LoadStack.Navigator>
            <LoadStack.Screen
                name="Load"
                component={LoadScreen}
                options={{ headerTitle: 'Load' }}
            />
        </LoadStack.Navigator>
    );
}

const RedeemStack = createStackNavigator<RedeemParamList>();

function RedeemNavigator() {
    return (
        <RedeemStack.Navigator>
            <RedeemStack.Screen
                name="Redeem"
                component={RedeemScreen}
                options={{ headerTitle: 'Redeem' }}
            />
        </RedeemStack.Navigator>
    );
}
