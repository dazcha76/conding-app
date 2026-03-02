export interface Requirements {}

export const REQUIREMENTS = {
  chrome: {
    flutter: '',
  },
  sdk: {
    flutter: {
      install: 'https://docs.flutter.dev/install/quick',
    },
  },
  simulators: {
    flutter: {
      android: {
        name: 'Android Studio',
        download: 'https://developer.android.com/studio',
        steps: 'https://docs.flutter.dev/platform-integration/android/setup',
      },
      ios: {
        name: 'Xcode',
        download: 'https://developer.apple.com/xcode/ ',
        steps: 'https://docs.flutter.dev/platform-integration/ios/setup',
      },
    },
  },
  vsc: {
    extensions: {
      flutter: {
        name: 'Flutter by Dart Code',
        link: 'https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter',
      },
    },
    lint: {
      flutter: {
        file: 'analysis_options.yaml',
        catergory: {
          linter: {
            placement: 'rules',
            text: [
              'prefer_const_constructors: true',
              'prefer_const_literals_to_create_immutables: true',
            ],
            details:
              "Suggest where to put \'const\' in widgets and collections for cleaner, faster code.",
          },
          formatter: {
            placement: '',
            text: ['trailing_commas: preserve'],
            details:
              'Automatically formats widgets into multiple lines, making the code easier to read',
          },
        },
      },
    },
  },
};
