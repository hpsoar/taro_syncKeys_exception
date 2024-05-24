import withWeapp, { cacheOptions } from '@tarojs/with-weapp'
import { Block, View, Image } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'

cacheOptions.setOptionsToCache({
  properties: {
    url: {
      type: String,
      default: '',
    },
    adId: {
      type: String,
      default: '',
    }
  },
  data: {
    shouldShow: false,
  },
  observers: {
    'url': function (url) {
      if (url) {
        this.setData({
          shouldShow: true,
        })
      }
    },
  },
  methods: {
  },
})

@withWeapp(cacheOptions.getOptionsFromCache())
class _C extends React.Component {
  render() {
    return (
      <View>
        <View>adId: {this.props.adId}</View>
        <View>url: {this.props.url}</View>
      </View>
    )
  }
}
export default _C

