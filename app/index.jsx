import { StatusBar } from 'expo-status-bar';
import { Text, View, Image} from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import {images} from '../constants'
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';




export default function App( ) {
  const navigation = useNavigation();
  return (
   <SafeAreaView className='bg-primary h-full'> 
     <ScrollView contentContainerStyle={{height: '100%'}}>
      <View className="w-full justify-center items-center min-h-[85vh] px-4">
       <Image     
       source={images.amicLogo}
       className="w-[130px] h-[84px]"
      //  className="w-[200px] h-[300px]"
       resizeMode="contain"
       />

       <Image     
       source={images.cards}
       className="w-full max-w-[380px] h-[300px]"
       resizeMode="contain"
       />

       <View className="relative mt-5">
        <Text className="text-3xl text-white font-bold text-center">Discover Endless Possibilies with {' '}
 

          <Text className="text-secondary-200">
             amic
          </Text>
        </Text>

        <Image
        source={images.path}
        className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
        resizeMode='contain'
        />
       </View>
       <Text className='text-sm text-gray-100 mt-7 text-center'>Where creativity meets inivation: embark on a journey of limitless exploration with amic.</Text>


       <CustomButton
      title="Continue With Email"
      handlePress={() => router.push('/sign-in')}
     
      containerStyles="w-full mt-7"
      />
      </View>  
     
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light'/>
   </SafeAreaView>
  );
}

