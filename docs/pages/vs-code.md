# 💻 VS Code

[VS Code](https://code.visualstudio.com/) is a free code editor developed by Microsoft. It is available for Windows, macOS, and Linux. It includes support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.

## 📍 .vscode/extensions.json

This file is used to define the recommended extensions for a project. It is a JSON file that contains an array of extension identifiers. When a user opens the project in VS Code, they will be prompted to install the recommended extensions if they are not already installed.

First create `.vscode/extensions.json` file in the root of your project. Then add the following content to it:

```json
{
  "recommendations": [
    "yzhang.markdown-all-in-one",
    "davidanson.vscode-markdownlint",
    "fabiospampinato.vscode-terminals"
  ]
}
```
