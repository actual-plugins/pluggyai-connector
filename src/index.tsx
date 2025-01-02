import type { ActualPlugin, ActualPluginEntry } from 'plugins-shared';
import manifest from './manifest';
import { GeneratePluggyAiModal } from './PluggyAiModal';

const pluginEntry: ActualPluginEntry = ({React}) => {
    const PluggyAiModal = GeneratePluggyAiModal(React);

    const plugin: ActualPlugin = {
        name: manifest.name,
        version: manifest.version,
        uninstall: (db: IDBDatabase) => {
        },
        hooks: {
            onMethod: {
                ConnectorsNames: () => ['Pluggy.AI'],
                ConnectorOnSetup: () => { 
                },
                ModalList: () => new Map([['plugin-pluggyai-init', <PluggyAiModal />]])
            },
        }
    }

    return plugin;
}
export default pluginEntry;