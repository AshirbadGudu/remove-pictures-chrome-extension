# Basic Chrome Extension

## Steps for creating a `Chrome Extension`

### Create a `manifest.json` file

```sh
touch manifest.json
```

### Add Following Content into it

```json
{
  "manifest_version": 2,
  "name": "demo-ext",
  "version": "1.0.0",
  "content_scripts": [
    {
      "matches": ["http://*/*", "https://*/*"],
      "js": ["scripts/content.js"]
    }
  ]
}
```

### Create a `scripts` folder and add `content.js` file inside it

```sh
mkdir scripts && touch scripts/content.js
```

### Write down your code inside the `content.js` file

```js
console.log("Hello world From Chrome Extension at ", new Date().toString());
```
