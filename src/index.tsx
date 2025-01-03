import type { ActualPlugin, ActualPluginEntry } from "plugins-shared";
import manifest from "./manifest";
import { GeneratePluggyAiModal } from "./PluggyAiModal";

const pluginEntry: ActualPluginEntry = ({ React, toolKit }) => {
  const PluggyAiModal = GeneratePluggyAiModal(React, toolKit);

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
    },
  };

  return plugin;
};
export default pluginEntry;
