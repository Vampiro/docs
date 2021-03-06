(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{79:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var o=t(3),a=t(7),i=(t(0),t(96)),r={id:"electron",title:"Electron w/ CRA"},c={unversionedId:"electron",id:"electron",isDocsHomePage:!1,title:"Electron w/ CRA",description:"Instructions from this post as well as random GitHub/StackOverflow posts.",source:"@site/docs/electron.md",slug:"/electron",permalink:"/dev/docs/electron",editUrl:"https://github.com/vampiro/dev/edit/master/website/docs/electron.md",version:"current",sidebar:"someSidebar",previous:{title:"Create App",permalink:"/dev/docs/"}},l=[{value:"Setup",id:"setup",children:[]},{value:"Running in Dev Mode",id:"running-in-dev-mode",children:[]},{value:"Production Build",id:"production-build",children:[]},{value:"Accessing the Electron Process&#39;s Stuff",id:"accessing-the-electron-processs-stuff",children:[]},{value:"Next Steps",id:"next-steps",children:[]},{value:"Resources",id:"resources",children:[{value:"Detect if Running in Electron",id:"detect-if-running-in-electron",children:[]}]}],s={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Instructions from ",Object(i.b)("a",{parentName:"p",href:"https://dev.to/mandiwise/electron-apps-made-easy-with-create-react-app-and-electron-forge-560e"},"this post")," as well as random GitHub/StackOverflow posts."),Object(i.b)("h2",{id:"setup"},"Setup"),Object(i.b)("p",null,"Install the following packages within your React app."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"npm i electron-is-dev@2.0.0\nnpm i -D concurrently cross-env electron@12.0.0 electron-devtools-installer@3.1.1 wait-on\n")),Object(i.b)("p",null,"Add the following to ",Object(i.b)("inlineCode",{parentName:"p"},"public/electron.js")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'const path = require("path");\n\nconst { app, BrowserWindow } = require("electron");\nconst isDev = require("electron-is-dev");\n\n// Conditionally include the dev tools installer to load React Dev Tools\nlet installExtension, REACT_DEVELOPER_TOOLS;\n\nif (isDev) {\n  const devTools = require("electron-devtools-installer");\n  installExtension = devTools.default;\n  REACT_DEVELOPER_TOOLS = devTools.REACT_DEVELOPER_TOOLS;\n}\n\n// Handle creating/removing shortcuts on Windows when installing/uninstalling\nif (require("electron-squirrel-startup")) {\n  app.quit();\n}\n\nfunction createWindow() {\n  // Create the browser window.\n  const win = new BrowserWindow({\n    width: 1600,\n    height: 900,\n    webPreferences: {\n      nodeIntegration: true,\n    },\n  });\n\n  // remove top menu (File, Edit, View, etc.)\n  win.removeMenu();\n\n  // Open the DevTools.\n  if (isDev) {\n    win.webContents.openDevTools({ mode: "detach" });\n  }\n\n  // and load the index.html of the app.\n  // win.loadFile("index.html");\n  win.loadURL(\n    isDev\n      ? "http://localhost:3000"\n      : `file://${path.join(__dirname, "../build/index.html")}`\n  );\n}\n\n// This method will be called when Electron has finished\n// initialization and is ready to create browser windows.\n// Some APIs can only be used after this event occurs.\napp.whenReady().then(() => {\n  createWindow();\n\n  if (isDev) {\n    installExtension(REACT_DEVELOPER_TOOLS)\n      .then((name) => console.log(`Added Extension:  ${name}`))\n      .catch((error) => console.log(`An error occurred: , ${error}`));\n  }\n});\n\n// Quit when all windows are closed, except on macOS. There, it\'s common\n// for applications and their menu bar to stay active until the user quits\n// explicitly with Cmd + Q.\napp.on("window-all-closed", () => {\n  if (process.platform !== "darwin") {\n    app.quit();\n  }\n});\n\napp.on("activate", () => {\n  // On macOS it\'s common to re-create a window in the app when the\n  // dock icon is clicked and there are no other windows open.\n  if (BrowserWindow.getAllWindows().length === 0) {\n    createWindow();\n  }\n});\n\n// In this file you can include the rest of your app\'s specific main process\n// code. You can also put them in separate files and require them here.\n')),Object(i.b)("p",null,"Add these lines to your ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),". Fill in the ",Object(i.b)("inlineCode",{parentName:"p"},"author")," and ",Object(i.b)("inlineCode",{parentName:"p"},"description")," fields."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'"author": "",\n"description": "",\n"main": "public/electron.js",\n"homepage": "./",\n')),Object(i.b)("p",null,"Add these lines to the ",Object(i.b)("inlineCode",{parentName:"p"},"scripts")," section of your ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'"dev": "concurrently -k \\"cross-env BROWSER=none npm start\\" \\"npm:electron\\"",\n"electron": "wait-on tcp:3000 && electron-forge start",\n')),Object(i.b)("p",null,"Run the following. It will add some ",Object(i.b)("inlineCode",{parentName:"p"},"dev-dependencies")," for building, a couple of ",Object(i.b)("inlineCode",{parentName:"p"},"scripts")," in ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),", and an Electron-Forge config in ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npx @electron-forge/cli import\n")),Object(i.b)("p",null,"This changes the ",Object(i.b)("inlineCode",{parentName:"p"},"start")," script in ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),". Within the ",Object(i.b)("inlineCode",{parentName:"p"},"scripts")," in ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),", change ",Object(i.b)("inlineCode",{parentName:"p"},"start"),", ",Object(i.b)("inlineCode",{parentName:"p"},"package"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"make")," to the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'"start": "react-scripts start",\n"package": "npm run build && electron-forge package",\n"make": "npm run build && electron-forge make"\n')),Object(i.b)("p",null,"Add ",Object(i.b)("inlineCode",{parentName:"p"},"/out")," to your ",Object(i.b)("inlineCode",{parentName:"p"},".gitignore")," if it isn't already there."),Object(i.b)("p",null,"In ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," there should be a ",Object(i.b)("inlineCode",{parentName:"p"},"config.forge.packagerConfig")," object. Add the following to ",Object(i.b)("inlineCode",{parentName:"p"},"packagerConfig"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'"asar": true,\n"name": "YOUR APP NAME"\n')),Object(i.b)("h2",{id:"running-in-dev-mode"},"Running in Dev Mode"),Object(i.b)("p",null,"At this point you can run your app in Electron in dev mode with:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),Object(i.b)("p",null,"If you get an error saying ",Object(i.b)("inlineCode",{parentName:"p"},"'electron' is not recognized as an internal or external command"),", you can try re-installing your ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules"),". Unsure why this problem happens, but it may be a problem with Windows + VS Code + Git Bash."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"rm -rf node_modules\nnpm install\nnpm run dev\n")),Object(i.b)("h2",{id:"production-build"},"Production Build"),Object(i.b)("p",null,"To package your application so that it can be executed run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm run make\n")),Object(i.b)("p",null,"Your built app should be in the ",Object(i.b)("inlineCode",{parentName:"p"},"out")," directory e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"out/MY APP-win32-x64/MY APP.exe")),Object(i.b)("h2",{id:"accessing-the-electron-processs-stuff"},"Accessing the Electron Process's Stuff"),Object(i.b)("p",null,"If you want access to things like the filesystem from within your React code in CRA, you're going to have to do some extra work. Do keep in mind the security risks with this as giving the user control over the filesystem might not be as great when they're running from a web server vs. locally."),Object(i.b)("p",null,"Install the following package. This allows you to somewhat edit the webpack config without requiring you to ",Object(i.b)("inlineCode",{parentName:"p"},"eject"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm install @craco/craco\n")),Object(i.b)("p",null,"Create ",Object(i.b)("inlineCode",{parentName:"p"},"craco.config.js")," at the root of your project and fill it with:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  webpack: {\n    configure: {\n      target: "electron-renderer",\n    },\n  },\n};\n')),Object(i.b)("p",null,"Change the following scripts in your ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'"start": "craco start",\n"build": "craco build",\n"test": "craco test",\n')),Object(i.b)("p",null,"In your ",Object(i.b)("inlineCode",{parentName:"p"},"public/electron.js")," file, ensure that the ",Object(i.b)("inlineCode",{parentName:"p"},"BrowserWindow")," that gets created contains the following (specifically the ",Object(i.b)("inlineCode",{parentName:"p"},"webPreferences")," settings):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"const win = new BrowserWindow({\n  width: 1600,\n  height: 900,\n  webPreferences: {\n    nodeIntegration: true,\n    contextIsolation: false,\n    enableRemoteModule: true,\n  },\n});\n")),Object(i.b)("p",null,"You can now have a component that has access to things on the filesystem."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'const { remote } = require("electron");\n// const fs = remote.require("fs");\n// const path = remote.require("path");\nconst { app } = remote;\n\n// list of paths here: https://github.com/electron/electron/blob/v1.1.0/docs/api/app.md#appgetpathname\nexport default function DirectoryPaths() {\n  return (\n    <div>\n      <div>User Home Directory: {app.getPath("home")}</div>\n      <div>App Directory: {app.getPath("appData")}</div>\n      <div>User Data Directory: {app.getPath("userData")}</div>\n      <div>User Desktop: {app.getPath("desktop")}</div>\n    </div>\n  );\n}\n')),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Custom Icons (docs here: ",Object(i.b)("a",{parentName:"li",href:"https://dev.to/mandiwise/electron-apps-made-easy-with-create-react-app-and-electron-forge-560e"},"https://dev.to/mandiwise/electron-apps-made-easy-with-create-react-app-and-electron-forge-560e"),")")),Object(i.b)("h2",{id:"resources"},"Resources"),Object(i.b)("h3",{id:"detect-if-running-in-electron"},"Detect if Running in Electron"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/cheton/is-electron"},"https://github.com/cheton/is-electron"))))}p.isMDXComponent=!0}}]);