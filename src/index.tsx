import React from 'react';
import { Button, initializePlugin, View, type ActualPlugin, type ActualPluginEntry } from "plugins-shared";
import manifest from "./manifest";
import { GeneratePluggyAiModal } from "./PluggyAiModal";

const pluginEntry: ActualPluginEntry = ({ toolKit }) => {
  const PluggyAiModal = GeneratePluggyAiModal(toolKit);

  const plugin: ActualPlugin = {
    name: manifest.name,
    version: manifest.version,
    uninstall: (db: IDBDatabase) => {},
    hooks: {
      onMethod: {
        ConnectorsNames: () => ["Pluggy.AI"],
        ConnectorOnSetup: () => {
          toolKit.functions.pushModal("pluggyai-init");
        },
        ModalList: () => new Map([["pluggyai-init", <PluggyAiModal />]]),
      },
      components: {
        ComponentTest: () => <View>test</View>
      }
    },
  };

  return initializePlugin(plugin);
};
export default pluginEntry;
