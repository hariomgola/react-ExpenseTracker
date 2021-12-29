/**
 
 # Deploying React Application into github
  - firstly install the github dependency 
          |>_ `npm install gh-pages — save-dev`
  - Add the homepage in package.json
          |>_  "homepage":"https://hariomgola.github.io/react-ExpenseTracker" 
  - Add the deployment dependencies under scripts
          |>_ "predeploy": "npm run build"
          |>_ "deploy": "gh-pages -d build"





















 */