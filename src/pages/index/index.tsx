import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { useState } from 'react'
import './index.scss'

import ImageMask from './image_mask'


export default function Index() {
  const [count, setCount] = useState(0);

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <button onClick={() => setCount(count + 1)}>Update Value</button>
      <Text>Hello world! value: {count}</Text>
      <ImageMask adId={count + ''} url={undefined}></ImageMask>
    </View>
  )
}
