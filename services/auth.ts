import {
  account,
  appwriteConfig,
  avatar,
  databases,
} from "@/lib/appwrite";
import { CreateUserParams, SignInParams } from "@/types/types";
import { ID, Query } from "react-native-appwrite";

export const createUser = async ({ email, password, name }: CreateUserParams) => {
    try {
        const newAccount = await account.create(ID.unique(), email, password, name)
        if(!newAccount) throw Error;

        await signIn({ email, password });

        const avatarUrl = avatar.getInitialsURL(name);

        return await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.usercollectionId,
            ID.unique(),
            { email, name, accountId: newAccount.$id, avatar: avatarUrl }
        );
    } catch (error:any) {
         throw new Error(error.message);
    }
}

export const signIn = async ({ email, password }: SignInParams) => {
  try {
    return await account.createEmailPasswordSession(email, password);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.usercollectionId,
      [Query.equal("accountId", currentAccount.$id)],
    );

    return currentUser.documents[0];
  } catch (error: any) {
    throw new Error(error.message);
  }
};
