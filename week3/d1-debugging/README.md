```js
{
  "files.autoSave": "afterDelay",
  "jest.debugMode": true,
  "liveshare.allowGuestDebugControl": true,
  "workbench.sideBar.location": "left",
  "atomKeymap.promptV3Features": true,
  "workbench.panel.defaultLocation": "right",
  "editor.multiCursorModifier": "ctrlCmd",
  "launch": {
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch",
            "console": "integratedTerminal",
            "program": "${file}"
        },
        {
            "type": "node",
            "request": "launch",
            "name": "Mocha Tests",
            "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
            "args": [
                "-u",
                "bdd",
                "--timeout",
                "999999",
                "--colors",
                "${workspaceFolder}/test"
            ],
            "internalConsoleOptions": "openOnSessionStart",
            "skipFiles": [
                "<node_internals>/**"
            ]
        }
    ]
}
}
```