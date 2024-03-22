import { FirebaseApp } from 'firebase/app'
import {
  CACHE_SIZE_UNLIMITED,
  connectFirestoreEmulator,
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from 'firebase/firestore'


export function getAndConfigFirestore(app: FirebaseApp) {
  // Should we enable things like analytics/remote config which require a browser env
  const browser = typeof window != 'undefined'

  // Setup firestore
  const hasIndexedDb = browser && !!window.indexedDB

  const db = initializeFirestore(app, {
    ...(hasIndexedDb
      ? {
          experimentalForceLongPolling: true,
          localCache: persistentLocalCache({
            tabManager: persistentMultipleTabManager(),
            cacheSizeBytes: CACHE_SIZE_UNLIMITED,
          }),
        }
      : {}),
  })

  return db
}
