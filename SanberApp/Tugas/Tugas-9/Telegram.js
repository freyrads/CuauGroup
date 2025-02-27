import React, { useEffect } from 'react'
import { View, Text ,Image , StyleSheet, SafeAreaView, FlatList, TouchableOpacity} from 'react-native'
import { Data } from './dummy';

let profiles = [require('./asset/images/profile1.png'), require('./asset/images/profile2.png'), require('./asset/images/profile3.png'), require('./asset/images/profile4.png'), require('./asset/images/profile5.png')];

export default function Telegram() {
    useEffect(() => {
     console.log( Data )
    },[])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.subHeader}>
                    <View style={styles.subContentHeader}>
                        <Image
                            style={styles.avatarDrawwer}
                            source={require('./asset/icons/check.png')}
                            />
                        <Text style={styles.title}>Telegram</Text>
                    </View>
                    <View>
                        <Image
                            style={styles.avatarDrawwer}
                            source={require('./asset/icons/search.png')}/>
                    </View>
                </View>
            </View>
            
            <View style={styles.content}>
                <SafeAreaView>
                    <FlatList
                        data={Data}
                        keyExtractor={(item)=>item.id}
                        renderItem={({item})=>{
                            return(
                                <>
                                <TouchableOpacity style={styles.messageContainer}>
                                    <View style={{flexDirection:'row'}}>
                                        <Image 
                                            style={{height:50, width:50, borderRadius: 25}}
                                                source={profiles[item.image-1]}
                                        />
                                        <View style={styles.nameMessage}>
                                            <Text>{item.name}</Text>
                                            <Text>{item.message}</Text>
                                        </View>
                                    </View>
                                    <View style={{alignItems:'center'}}>
                                        <View style={{flexDirection:'row', alignItems:'center'}}>
                                            <Image source={require('./asset/check.png')}
                                                style={{height:8, width:12,marginRight:5}}
                                            />
                                            <Text>{item.time}</Text>
                                        </View>
                                        <View style={{backgroundColor: 'red', height: 20, width: 20, borderRadius:12, alignItems:'center'}} >
                                            <Text style={{color: 'white'}}> {item.totalMessage} </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={{borderBottomWidth:1, borderBottomColor:'#A8AAAB'}} />
                                </>
                            )
                        }}
                        />
                </SafeAreaView>
                <TouchableOpacity style={{paddingRight:24, marginTop:20}}>
                    <View style={styles.addChat} >
                        <Image 
                            style={styles.avatarPen}
                            source={require('./asset/pencil.png')}
                        />
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    header:{
        height: 50,
        backgroundColor: 'lightblue',
        marginTop: 30,
        justifyContent: 'center',
    },
    subHeader:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 18,
        justifyContent: 'space-between'
    },
    subContentHeader:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center'

    },
    avatarDrawwer:{
        height: 12,
        width: 18
    },
    title:{
        color:'white',
        fontSize: 18,
        paddingLeft: 100,
    },
    messageContainer:{
        backgroundColor:'white',
        flexDirection:'row',
        paddingTop:27,
        paddingHorizontal: 24,
        paddingVertical:24,
        justifyContent:'space-between'
    },
    nameMessage:{
        paddingLeft:15,

    },
    avatarPen:{
        height:18,
        width:18
    },
    addChat:{
        height: 45,
        width:45,
        borderRadius:45,
        backgroundColor:'light green',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'flex-end'

    }
  });
