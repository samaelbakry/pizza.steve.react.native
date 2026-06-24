import { account, appwriteConfig, avatar, databases } from "@/lib/appwrite";
import { CreateUserParams, SignInParams } from "@/types/types";
import { ID } from "react-native-appwrite";

export const createUser = async ({email,name,password,}: CreateUserParams) => {
  try {
    const newAccount = await account.create(ID.unique(), email, password);
    if (!newAccount) {
      throw new Error("Failed to create account");
    }

    await signIn({ email, password });

    const avatarUrl = avatar.getInitialsURL(name);

    return await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usercollectionId,
      ID.unique(),
      { email, name, accountId: newAccount.$id, avatar: avatarUrl },
    );
  } catch (error) {
    throw new Error(error as string);
  }
};

export const signIn = async ({ email, password }: SignInParams) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
  } catch (error) {
    throw new Error(error as string);
  }
};
