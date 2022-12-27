# kdux-router-sync

> Sync kdu-router's current $route as part of kdux store's state.

### Usage

``` bash
# the latest version works only with kdu-router >= 3.0
npm install kdux-router-sync
```

``` js
import { sync } from 'kdux-router-sync'
import store from './kdux/store' // kdux store instance
import router from './router' // kdu-router instance

const unsync = sync(store, router) // done. Returns an unsync callback fn

// bootstrap your app...

// During app/Kdu teardown (e.g., you only use Kdu.js in a portion of your app and you 
// navigate away from that portion and want to release/destroy Kdu components/resources)
unsync() // Unsyncs store from router
```

You can optionally set a custom kdux module name:

```js
sync(store, router, { moduleName: 'RouteModule' } )
```

### How does it work?

- It adds a `route` module into the store, which contains the state representing the current route:

  ``` js
  store.state.route.path   // current path (string)
  store.state.route.params // current params (object)
  store.state.route.query  // current query (object)
  ```

- When the router navigates to a new route, the store's state is updated.

- **`store.state.route` is immutable, because it is derived state from the URL, which is the source of truth**. You should not attempt to trigger navigations by mutating the route object. Instead, just call `$router.push()` or `$router.go()`. Note that you can do `$router.push({ query: {...}})` to update the query string on the current path.

### License

[MIT](http://opensource.org/licenses/MIT)
