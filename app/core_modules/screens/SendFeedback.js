import { View } from 'react-native'
import React from 'react'
import TextField from '../../user_input_modules/components/TextField';
import CustomButton from '../components/CustomButton';
import i18n from '../data/Translations';

const SendFeedback = () => {
  return (
    <View className="items-center mt-20">
        <TextField
            placeholder={i18n.t('feedback')}
            multiline={true}
            height={180}
        />
        <View className="mt-5">
          <CustomButton
          backgroundColor="transparent"
          borderColor='#0070AD'
          textColor='#0070AD'
          title={i18n.t('send')}
          />
        </View>
      </View>
  )
}

export default SendFeedback