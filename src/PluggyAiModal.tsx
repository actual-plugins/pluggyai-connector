import React from 'react';
import { ActualPluginToolkit, Button, View } from "plugins-shared";

export const GeneratePluggyAiModal = (toolKit: ActualPluginToolkit) => {
  const PluggyAiModal = () => (
    <toolKit.commonComponents.Modal
      name='pluggyai-init'
    >
      <View>Test</View>
      <Button variant="primary">
        Testing
      </Button>
    </toolKit.commonComponents.Modal>
  );

  return PluggyAiModal;
};
