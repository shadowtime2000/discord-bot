import * as fs from "fs";
import * as path from "path";

const getFilenames = (filePath: string) =>
  fs
    .readdirSync(path.resolve(__dirname, filePath))
    .map((filename) => filename.replace(/\.[^/.]+$/, ""));

const getHandlerFilePath = (widgetName: string) => `../widgets/${widgetName}/handlers`;

const getHandlers = (handlerFilePath: string) =>
  getFilenames(handlerFilePath).map((handlerName) => ({
    handlerName,
    handler: require(`${handlerFilePath}/${handlerName}`),
  }));

const groupByHandlerName = (handlerMap, { handlerName, handler }) => {
  (handlerMap[handlerName] = handlerMap[handlerName] || []).push(handler);

  return handlerMap;
};

export default () =>
  getFilenames("../widgets")
    .map(getHandlerFilePath)
    .flatMap(getHandlers)
    .reduce(groupByHandlerName, { ready: [] });
