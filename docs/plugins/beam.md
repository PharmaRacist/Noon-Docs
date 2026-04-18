# Dock Plugins
check Avilable Plugins at [Plugins Repo](https://github.com/pharmaracist/Noon-plugins)
## Manifest
- beam is just a textbox with a prefix assaigned functions, This means that we can implement the desired output and actions needed
- beam can make use of shell scripting evaluated in a js function through specific syntax but it's very easy to implement a new plugin through a cli tools
- unlike other plugins beam doesn't need an entry since its not loaded 
The uncommented example is at [Plugins Examples](/exmples)
### Example:
``` json
{
  "name": "",          // Plugin Name Called By IPC
  "enabled": true,     // Changed by the plugins_manager
  "mentainer": "",
  "prefix": "@",       // the needed prefix symbol for action
  "singletons": [],     // if needed
  "icon": "",
  "shape": "",
  "placeholder": "Learn More",
  "showHint": true,
  // This uses tldr (a cli tool for summarizing man pages) as an example
  "hinter": "() => { shell('tldr \"$q\"'); return activeHint; }",
  "executor": "() => exec('wl-copy \"$q\"')"

}
---
```
### Hinter & Executor
Both are **arrow function strings** evaluated at load time. They run with access to:
 
| Name | Description |
|---|---|
| `cleanQuery` | Current input without prefix |
| `activeHint` | Current hint value (readable + writable) |
| `activeState` | Current active state key |
| `exec(cmd)` | Fire and forget shell command |
| `shell(cmd, cb?)` | Run shell command, result lands in `activeHint` |
 
---
## Query Placeholders
 
| Placeholder | Resolved at | Use in |
|---|---|---|
| `%q` | Build time → `ctx.cleanQuery` | JS code position |
| `$q` | Call time inside `exec`/`shell` | Shell command strings |
 
- `shell` is debounced by query — if `cleanQuery` hasn't changed the command won't re-run
- For `executor` prefer `exec` over `shell` unless you need the output
- Plugins are merged into the registry after built-in states — they can override by using the same key
