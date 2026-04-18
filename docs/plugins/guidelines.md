# Guidelines

An overview of how to structure and organize your plugins for the Noon.

::: info Core Principle
Plugins are organized by **Group** (the target system) and **Name** (the specific extension).
:::

## Directory Structure
I would prefere not to use many sub directories in your plugin to avoid qmldir hickups

**Root Path:** `~/.noon_plugins/`

::: code-group
```text [Structure]
~/.noon_plugins/
├── sidebar/          <-- Group
│   └── sokoun/       <-- Name
│       ├── manifest.json
│       └── main.qml
├── palettes/
│   └── nord-dark/
└── beam/
