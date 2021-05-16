# Redux DevTools

install chrome extension:
`https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=en`

# set up:

`https://github.com/zalmoxisus/redux-devtools-extension#usage`

add second parameter in createStore function. Now inspect and go to Redux tab and relaod.

```
 const store = createStore(
   reducer, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
```

# Enable trace

```
npm i redux-devtools-extension
```

Now update createStore function

```
import { devToolsEnhancer } from "redux-devtools-extension";

const store = createStore(reducer, devToolsEnhancer({ trace: true }));
```

Now open wbpack.config.js and add this under ` mode: "development",`

```
devtool: "source-map",
```

Now open the settings of redux tool in browser and add external editor like vscode and paste project folder path.

Done !

# import and export

Click export all in redux tools in the browser. Now if you changed
you action or state in the code, you can import it again to use previous
actions.
