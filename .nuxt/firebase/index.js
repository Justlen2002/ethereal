import createApp from './app.js'

import firestoreService from './service.firestore.js'

const appConfig = {"apiKey":"AIzaSyAJ03zcNe4eo4QZT4mytNzZpATryWcfI94","authDomain":"ethereal-project.firebaseapp.com","projectId":"ethereal-project","storageBucket":"ethereal-project.appspot.com","messagingSenderId":"496265636668","appId":"1:496265636668:web:29533f72264ef0df4d8c39","measurementId":"G-PVWHFX07VX"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      firestoreService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      firestoreService(session, firebase, ctx, inject),

    ]
  }

  const [
    firestore
  ] = await Promise.all(servicePromises)

  const fire = {
    firestore: firestore
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}