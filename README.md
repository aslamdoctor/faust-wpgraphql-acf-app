# Faust.js App

Welcome to the experimental Faust getting started example.

## Required Plugins

- [Faust.js](https://wordpress.org/plugins/faustwp/)
- [WPGraphQL](https://wordpress.org/plugins/wp-graphql/)
- [Advanced Custom Fields](https://wordpress.org/plugins/advanced-custom-fields/)
- [WPGraphQL for ACF](https://wordpress.org/plugins/wpgraphql-acf/)

## Steps

1. Setup wordpress project using localwp
2. Install required plugins
3. Install faust framework
```
cd MyFaustApp
npx create-next-app \
    -e https://github.com/wpengine/faustjs/tree/main \
    --example-path examples/next/faustwp-getting-started \
    --use-npm
```
4. copy the `.env.local.sample` to `.env.local` but don't update it's content yet
5. Run the faust app using `npm run dev`, which will start the server at http://localhost:3000
6. Connect the WordPress site with Faust App. For this update the `.env.local` file and update the value of `NEXT_PUBLIC_WORDPRESS_URL` with the wordpress site url.
7. Update the `FAUST_SECRET_KEY` value which will add security to your faust app. You can get the security key from **WordPress Admin > Settings > Faust screen**
8. Also under same Faust settings, update the `Front-end site URL` value with the url of the Faust app.
9. Make sure the permalink settings are not set to 'Plain'.



## ACF Fields & Post Types

All the Post Types and Fields registered using ACF plugin have been placed under `/acf` folder for importing in your WordPress project.

## WordPress Data

All the `Songs` and `Albums` data can be found as WordPress export XML file under `/wp-exports` folder.

## Reference
https://www.youtube.com/watch?v=q71fEdtqoHI&t=244s