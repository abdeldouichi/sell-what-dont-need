import * as Permissions from 'expo-permissions'

export default async function (){
    const result = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if(!result.granted)
           alert('You need to enable permission to acces to the library');
} 