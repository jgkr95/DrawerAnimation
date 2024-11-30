module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"], // If you're using Expo, this is enough
    plugins: ["react-native-reanimated/plugin"], // Add this line for Reanimated
  };
};
