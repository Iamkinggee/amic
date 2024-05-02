import { Account, Avatars, Client } from 'react-native-appwrite';
import { ID } from 'react-native-appwrite';


export const Config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: "com.gee.amic",
    projectId: '6633bffa001beef40090',
    databaseId: '6633c375000d905b8197',
    userCollectionId: '6633c3c2003e41cb75a7',
    videoCollectionId: '6633c3fc0027cbbf5a3d',
    StorageId: '6633c6b6001e60cfb6f1'
}



// Init your react-native SDK
const client = new Client();

client
    .setEndpoint(Config.endpoint) // Your Appwrite Endpoint
    .setProject(Config.projectId) // Your project ID
    .setPlatform(Config.platform) // Your application ID or bundle ID.
;




const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client)

export const createUser = async (email, password, username)=>{
try {
    const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        username
    )

   if(!newAccount) throw Error;

  const avatarUrl = avatars.getInitials(username)

  await signIn(email, password);

  const newUser = await databases.createDocument(
    config.databaseId,
    config.userCollectionId,
    ID.unique(),
    {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl
    }
  )

  return newUser;
} catch (error) {
  console.log(error);
  throw new Error(error); 
}

}


export async function signIn(email, password){
    try {
        const session = await account.createEmailSessio(email, password)

        return session;
    } catch (error) {
        throw new Error(error);
    }
}
