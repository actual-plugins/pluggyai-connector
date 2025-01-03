import { ActualPluginToolkit } from "plugins-shared";

export const GeneratePluggyAiModal = (React, toolKit: ActualPluginToolkit) => {
  const PluggyAiModal = () => (
    <toolKit.commonComponents.Modal
      name='pluggyai-init'
    >
      <div>Hello World</div>
      <toolKit.commonComponents.Button variant="primary">
        Testing
      </toolKit.commonComponents.Button>
    </toolKit.commonComponents.Modal>
  );

  return PluggyAiModal;
};
