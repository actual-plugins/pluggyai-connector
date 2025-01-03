import { ActualPluginToolkit } from "plugins-shared";

export const GeneratePluggyAiModal = (React, toolKit: ActualPluginToolkit) => {
  const PluggyAiModal = () => (
    <toolKit.commonComponents.Modal
      props={{
        name: "hi",
      }}
    >
      <div>Hello World</div>
    </toolKit.commonComponents.Modal>
  );

  return PluggyAiModal;
};
