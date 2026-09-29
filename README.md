# React Blog

A blog app built with React: browse posts, read a post, write new ones and delete old ones. Data is served by a local JSON API.

## Features

- Home page listing all posts.
- Post details page, with a delete button.
- "Create" form to publish a new post.
- Reusable `useFetch` hook for loading data, with loading and error states.
- 404 page for unknown routes.
- Toast notifications and a Bootstrap layout.

## Tech stack

React · React Router · React Bootstrap · Axios · React Toastify · json-server

## Getting started

```bash
git clone https://github.com/charlesakwoyo/Blog.git
cd Blog
npm install

# start the JSON API (in one terminal)
npx json-server --watch data/db.json --port 4000

# start the app (in another terminal)
npm start
```

## Author

**Charles Akwoyo** · [GitHub](https://github.com/charlesakwoyo) · [Portfolio](https://akwoyo.netlify.app)
