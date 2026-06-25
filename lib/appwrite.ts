import { Account, Avatars, Client, Databases , Storage} from "react-native-appwrite"
export const appwriteConfig = {
    platform:"com.reactnative.pizzasteve",
    projectId:process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    endpoint:process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    databaseId:"6a37f31f00343e8860f6",
    bucketId:"6a3d28e10031c305783f",
    usercollectionId:"user",
    categoriescollectionId:"categories",
    manucollectionId:"menu",
    customizationscollectionId:"customizations",
    menucustomizationscollectionId:"menu_customizations"
}

export const client = new Client()

client.setEndpoint(appwriteConfig.endpoint!)
client.setProject(appwriteConfig.projectId!)
client.setPlatform(appwriteConfig.platform!)

export const account = new Account(client)
export const databases = new Databases(client)
export const avatar = new Avatars(client)
export const storage = new Storage(client)