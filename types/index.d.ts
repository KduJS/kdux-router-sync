import { Store } from 'kdux';
import KduRouter from 'kdu-router';

interface SyncOptions {
  moduleName: string;
}

export declare function sync(
  store: Store<any>,
  router: KduRouter,
  options?: SyncOptions
): Function;
