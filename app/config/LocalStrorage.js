import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store'

export const getItem = (key)=>{
    return RNSecureKeyStore.get(key)
        .then(store=> JSON.parse(store))
        .catch(error=>console.log(error))
}

export const setItem = (key, value)=>{
    return RNSecureKeyStore.set(key, value, {accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY})
        .then(store=> JSON.parse(store))
        .catch(error=>console.log(error))
}

