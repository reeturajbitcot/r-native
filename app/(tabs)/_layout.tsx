import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'

const TabIcon = ({focused, icon, title}: any) => {
    if(focused) {
        return (
              <ImageBackground source={require('../../assets/home.png')} className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden" >
                <Image source={icon} className='size-5' tintColor="#151312"/>
                <Text className="text-secondary text-base font-semibold ml-2">{title}</Text>
            </ImageBackground>
        )
    }else {
        return (
            <View className = "size-full justify-center items-center mt-4 rounded-full">
                <Image source={icon} className='size-5' tintColor="#A8B5DB"/>
            </View>
        )
    }
}

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="index" 
            options={{title: 'Home',headerShown: false, 
            tabBarIcon:({focused}) => <TabIcon 
                focused={focused} 
                icon= {icons.home} 
                title="Home"
                />}} 
        />
        <Tabs.Screen name="search" 
            options={{title: 'Search',headerShown: false, 
            tabBarIcon:({focused}) =><TabIcon 
                focused={focused} 
                icon= {icons.search} 
                title="Search"
                />}} 
        />
        <Tabs.Screen name="saved" 
            options={{title: 'Saved',headerShown: false,
            tabBarIcon:({focused}) =><TabIcon 
                focused={focused} 
                icon= {icons.saved} 
                title="Saved"
                />}} 
        />
        <Tabs.Screen name="profile" 
            options={{title: 'Profile',headerShown: false, 
            tabBarIcon:({focused}) =><TabIcon 
                focused={focused} 
                icon= {icons.profile} 
                title="Profile"
                />}} 
        />   
    </Tabs>
  )
}

export default _layout