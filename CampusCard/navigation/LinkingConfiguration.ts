import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Login: {
            screens: {
              LoginScreen: 'one',
            },
          },
          Pay: {
            screens: {
              PayScreen: 'one',
            },
          },
          Load: {
            screens: {
              LoadScreen: 'one',
            },
          },
          Redeem: {
            screens: {
              RedeemScreen: 'one',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
