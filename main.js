//make sure node is installed
>npm i -g expo-cli
>expo init ProjectName
>cd ProjectName
>code .
>expo start

//snippets for react native @ Vcode
#React Native Tools
#React-native/React/Redux
#Prettier code-formattter
#material icon theme

//IOS Simulator
Xocde -> Development Tool -> Simulator

//for mac users got to https://docs.expo.io/workflow/android-studio-emulator/
>code ~/.bash_profile
>code ~/.zshrc
and add to both file the following: 
export ANDROID_SDK=/Users/junglesoft/Library/Android/sdk
export PATH=/Users/junglesoft/Library/Android/sdk/platform-tools:$PATH
//make sure to have your own directory above 
//HINT: you can find your directory at Android studio/config/SDK manager 

//Android Emulator 
Open Android Studio -> config -> AVD manager -> Create virtual device...
//open the emiulator device then got to Metro Bundler and 
//press on 'Run on android simulator' (or Press a in the Terminal'

