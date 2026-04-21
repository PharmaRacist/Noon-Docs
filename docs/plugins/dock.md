# Dock Plugins
check Avilable Plugins at [Plugins Repo](https://github.com/pharmaracist/Noon-plugins)
## Manifest
You dont need to fill all default are fine.
The uncommented example is at [Plugins Examples](/examples)
### Example:
``` json
{
  "name": "",          // Plugin Name Called By IPC
  "pluginGroup": "dock"  // NEEDED for plugin archive installation 
  "enabled": true,     // Changed by the plugins_manager
  "mentainer": "",
  "entry": "@plugins/Entry.qml",
  "direction": "right" // Direction according to dock apps
  "singletons": []     // if needed
}
```
## Qml
Example
``` qml
import QtQuick              // You can import basic Qt imports
import QtQuick.Layouts
import qs.common.widgets    // Also custom components 
import qs.services          // Builtin Services

StyledRect {
    color: Colors.colPrimary
    radius: Rounding.large
    Layout.preferredWidth: 500
    Layout.fillHeight: true
    Layout.margins: Padding.small
    
    StyledText {
        anchors.centerIn: parent
        text: "Hello World!"
    }
}
```
