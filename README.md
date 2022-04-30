# About the Build

It is a music player inspired by Spotify where the user actually uses his spotify account to play his own playlist which is saved in his spotify account.</br>
Website is completely responsive which is achieved with the help of Tailwind CSS.</br>
Spotify API is used so that the user can login through his spotify account and can his own playlists.</br>
Middleware is implemented so that no one could bypass the login page without actually logging in to the account.</br>
JWT Oauth is used to persist the login state of the website.</br>
Tech stack: React.js, Next.js, Tailwind CSS, spotify API.</br>

<!-- <img width="1440" alt="Screenshot 2022-04-30 at 4 14 34 AM" src="https://user-images.githubusercontent.com/80201909/166123235-696abba8-bee4-444c-9926-4e4ff746ba13.png">

<img width="1440" alt="Screenshot 2022-04-30 at 4 14 20 AM" src="https://user-images.githubusercontent.com/80201909/166123244-96292c0b-1905-46e5-aa99-3a17d964b973.png"> -->


## Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## How to use

Clone the repository</br>
Paste the following lines on your local env folder</br>
```bash
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_CLIENT_SECRET=2b0c72bb7a9b454f8a854329077efe41
NEXT_PUBLIC_CLIENT_ID=9a436271921e4f1cb56a0e6ef186d8fb
JWT_SECRET=some_super_secret_value
```
run the following commands:</br>
npm install</br>
npm run dev</br>
