# a-emory-survey


## `Android Release`
Update 'build.gradle' 
signingConfigs.release.storePassword 
signingConfigs.release.keyPassword 
with keystore password

Update 'build.gradle' 
defaultConfig.versionCode 
to latest app version
cd to react native folder /android
### `./gradlew bundleRelease`

release bundle (AAB file) is located under 'android\app\build\outputs\bundle\release'