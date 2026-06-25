import { appwriteConfig, databases } from "@/lib/appwrite";
import { GetMenuParams } from "@/types/types";
import { Query } from "react-native-appwrite";

export const getMenu = async ({ category, query }: GetMenuParams) => {
  try {
    const queries: string[] = [];

    if (category) queries.push(Query.equal("categories", category));
    if (query) queries.push(Query.equal("name", query));

    const menus = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.manucollectionId,
      queries,
    );

    return menus.documents;
  } catch (error: any) {
    throw new Error(error);
  }
};


export const getCategories = async () => {
  try {
    const category = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.categoriescollectionId,
    );

    return category;
  } catch (error: any) {
    throw new Error(error);
  }
};
