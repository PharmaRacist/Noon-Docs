# Sidebar Plugins
check Avilable Plugins at [Plugins Repo](https://github.com/pharmaracist/Noon-plugins)
## Manifest
You dont need to fill all default are fine.
The uncommented example is at [Plugins Examples](/examples)
### Example:
``` json
{
  "name": "",          // Plugin Name Called By IPC
  "enabled": true,     // Changed by the plugins_manager
  "mentainer": "",
  "detachable":false,  // To be dragged outside the sidebar as APP
  "incubatable":false, // Incubation ability with Right mouse click 
  "expandable": false, // Expandtion ability With CTRL + 0
  "stealth":false,     // Doesnt appear in sidebar but appears on IPC call
  "searchable": false, // Builtin searchbar (NEEDS property called searchQuery)
  "icon": "", 
  "activeIcon": "",
  "baseSize": -1,
  "expandSize":-1,
  "shell": "Noon",     // The shell which it appears exclusively in
  "entry": "@plugins/Entry.qml",
  "shape": "Cookie12Sided"
  "singletons": [],
}
```
## Qml
Example
``` qml
import QtQuick              // You can import basic Qt imports
import qs.common.widgets    // Also custom components 
import qs.services          // Builtin Services

Item {
    property string searchQuery: ""     // Evaluated automatically from builtin sidebar if searchable is enabled 
    property bool expanded              // Holds the current expanded state
    property bool detached
    // Signals
    signal dismiss                      // Closes Sidebar 
    signal searchFocusRequested         // Move focus to search bar
    signal contentFocusRequested        // Moves focus to content
}
```
