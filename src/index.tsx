import type { ActualPlugin, ActualPluginEntry } from 'plugins-shared';
import manifest from './manifest';
import { GeneratePluggyAiModal } from './PluggyAiModal';

const pluginEntry: ActualPluginEntry = ({React, toolKit}) => {
    const PluggyAiModal = GeneratePluggyAiModal(React);
    const dispatch = toolKit.useDispatch();

    const plugin: ActualPlugin = {
        name: manifest.name,
        version: manifest.version,
        uninstall: (db: IDBDatabase) => {
        },
        hooks: {
            onMethod: {
                ConnectorsNames: () => ['Pluggy.AI'],
                ConnectorOnSetup: () => { 
                    dispatch(
                        toolKit.pushModal('plugin-pluggyai-init', {
                          onSuccess: () => {},
                        }),
                      )
                },
                ModalList: () => new Map([['plugin-pluggyai-init', <PluggyAiModal />]])
            },
        }
    }

    return plugin;
}
export default pluginEntry;