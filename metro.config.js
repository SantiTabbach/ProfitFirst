// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.watchFolders = [];
config.resolver.blacklistRE = /node_modules\/.*\/node_modules\/react-native\/.*/;

module.exports = config;
