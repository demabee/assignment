### Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your machine.
- [Expo CLI](https://docs.expo.dev/get-started/installation/) installed globally.

### Installation

1. Clone the repository:

```bash
  git clone https://github.com/demabee/assignment.git
```

2. Navigate to the project directory

```bash
  cd assignment
```

3. Install dependencies

```bash
  npm i
```

### Usage

1. Start the development server

```bash
  npx expo start
```

### Building with EAS Build

When you are ready to build your project for production or deployment using EAS Build, ensure that you have Expo Application Services (EAS) set up and configured.

Run the following command to build your project using EAS Build:

```bash
  eas build --platform [ios/android]
```

Reminder: Update Build Number and Version Code
Before creating a new build, always remember to update the build number for iOS (ios/buildNumber) and version code for Android (android/versionCode) in your project configuration files. This ensures proper versioning and helps with tracking releases.

### Linting

1. Run ESLint

```bash
  npm run lint
```

2. Run ESLint with auto fix

```bash
  npm run lint:fix
```

3. Run code formatting with Prettier

```bash
  npm run format
```

4. Format the code with Prettier

```bash
 npm run write
```

### Built with

- React Native
- Expo
