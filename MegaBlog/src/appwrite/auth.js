// import conf from '../conf/conf.js';
// import { Client, Account, ID } from "appwrite";

// export class AuthService {
//     client = new Client();
//     account;

//     constructor() {   // we are creating this constructor when any new client created then create account otherwise not 
//         this.client
//             .setEndpoint(conf.appwriteUrl)
//             .setProject(conf.appwriteProjectId);
//         this.account = new Account(this.client);

//     }
//     async createAccount({ email, password, name }) {  // we have created this bcz when we will want to shift from appwrite to another like custom backend then we will change the constructor and simply will work for another 
//         try {
//             const userAccount = await this.account.create(ID.unique(), email, password, name);
//             if (userAccount) {
//                 //call another method
//                 return this.login({email,password});

//             }
//             else {
//                 return userAccount;
//             }
//         } catch (error) {
//             throw error;
//         }
//     }

//     async login({ email, password }) {
//         try {
//             await this.account.createEmailPasswordSession(email, password);
//         } catch (error) {
//             throw error;
//         }
//     }


//     async getCurrentUser(){
//         try{
//            return await this.account.get();

//         }catch(error){
//             console.log(error);
//         }
//         return null;
//     }

//     async logout(){
//         try{
//             return await this.account.deleteSessions();

//         }catch(error){
//             console.log(error);
//         }
//     }

// }

// const authService = new AuthService();

// export default authService

// // import { Client, Account, ID } from "appwrite";

// // const client = new Client()
// //     .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
// //     .setProject('<PROJECT_ID>');                 // Your project ID

// // const account = new Account(client);

// // const user = await account.create(
// //     ID.unique(),
// //     'email@example.com',
// //     'password'
// // );


import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService

