/* eslint-disable no-console */

import axios from 'axios'
import localForage from 'localforage'

import assets from 'constants/assetUrls'

const devAssets = assets.map((asset) => { 
  return {
    ...asset, 
    url: `https://cors-anywhere.herokuapp.com/${asset.url}`
  }
})

const assetLoader = (store) => (next) => (action) => {

  if (action.type === 'PRELOAD_ASSETS') {
    devAssets.map((asset) => {

      return axios({
        method: 'get',
        responseType: 'blob',
        url: asset.url
      })

      .then((file) => {
        return localForage.setItem(asset.name, file.data)
      })

      .catch((err) => {
        console.err(err)
      })

    })
  }

}

export default assetLoader

