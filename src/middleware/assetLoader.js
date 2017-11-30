/* eslint-disable no-console */

import axios from 'axios'
import localForage from 'localforage'

import assets from 'constants/assetUrls'

let assetUrls = assets;
if (process.env.NODE_ENV !== 'production') {
  assetUrls = assets.map((asset) => { 
    return {
      ...asset, 
      url: `https://cors-anywhere.herokuapp.com/${asset.url}`
    }
  })
}

const assetLoader = (store) => (next) => (action) => {

  if (action.type === 'PRELOAD_ASSETS') {
    assetUrls.map((asset) => {

      return axios({
        method: 'get',
        responseType: 'blob',
        url: asset.url
      })

      .then((file) => {
        return localForage.setItem(asset.name, file.data)
      })

      .catch((err) => {
        console.error(err)
      })

    })
  }

}

export default assetLoader

