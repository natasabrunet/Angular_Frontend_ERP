# ITProject-ERP-Frontend

For this project, whe have a given repo named ITProject-ERP-Frontend,  
with a GitHub remote URL: https://github.com/it-academyproject/ITProject-ERP-Frontend.git

This documentation will guide you through this Angular project installation.

NOTE: in this documentation...

- We will use `<localProjectFolderName>` as a generic alias for the local folder's name
- We will use `<repoURL>` as a generic alias for the remote repo's URL
- We will use `<featureBranchName>` as a generic alias for the branches generated from 'Dev'
- We will use `<yourGitHubName>` and `<yourGitHubEmail>` as alias for your user name and email registered in your GitHub account
- We will use `<ScrumTask_ID>` as alias for your tasks's **id** as stated in your **SCRUM** table.

## REQUIREMENTS

---

Skip this section's steps if you already have **Node.js**, **git** and **Angular CLI** installed your local machine, and a valid **GitHub** account.  
If not, follow next steps:

> 1.  Download and install **git CLI** if you haven't yet: https://git-scm.com/

> 2.  Create a **GitHub** account if you haven't yet: https://github.com/  
>     Then check for its version, to make sure the installation went fine.  
>     To do so, type this in your terminal or console:

    git--version

> 3.  Then, set up your name and email for local **git CLI**.  
>     Type the following commands in your terminal or console:

    git config –-global user.name <yourGitHubName>
    git config –-global user.email <yourGitHubEmail>

> 4.  Name and email must match those you registered in **GitHub** account.  
>     Then, check result. Type in:

    git config –-global user.name
    git config –-global user.email

> 5.  Downlad and install **Node.js** if you haven't yet: https://nodejs.org/es/  
>     Then check for its version, to make sure the installation went fine:

    node -v

> 6.  Downlad and install **Angular CLI** if you haven't yet: https://angular.io/  
>     Install Angular CLI globally in your machine:

    npm install -g @angular/cli

> Then check for its version, to make sure the installation went fine:

    ng v

## INSTALLATION

---

> 1.  Clone the repo from remote to local:

    git clone <repoURL>

> 2.  Access that folder in local. If you're using your terminal or console, type:  
>      `cd <localProjectFolderName>`
>
>         IMPORTANT! Be sure you are inside the <localProjectFolderName> folder

> 3.  Finally, set up the **Angular** project without overriding the existing `git` folder.  
>     Also set up the project in the **same folder** (the root) you're in.
>     To do so, type the following command in your terminal or console:

    ng new <localProjectFolderName> --skip-git --directory=./

> 4.  In the project scafolding:
>
> - select SPA mode: `Routing: yes`
> - select `SASS` as CSS preprocessor

> 5.  Remember to download all `node-modules` **dependecies** as defined in the `package.json` file.  
>     To do so, jut type in the following command in your terminal:

    npm update

>         REMEMBER! Never push node-modules to GitHub, since the folder is too big sized
>
> **node-modules** are already excluded in the `.gitignore` file. Never modify that line!

## WORKING WITH BRANCHES

---

> - This project has 2 branches (`main` and `Dev`), which should NOT be manipulated by any developer.  
>   That role is restricted to project managers, who will accept or reject developer's `pull requests`.

> - Use the following semantics for naming your branches: `<ScrumTask_ID>` or optionally `<ScrumTask_ID-featureBranchName>`.  
>   For example: _F1.4 or F1.4_LoginView_

> - And don't forget to create your `feature` branches from `Dev`.  
>   To do so:
>
> 1.  Pull actual **Dev** branch state:

    git pull origin Dev

> 2.  Create your **feature** branch:

    git checkout -b <featureBranchName>

> 3.  Work on your branch. Do your `add-to-stage` and `commits`

> 4.  Pull **Dev** branch state again:

    git pull origin Dev

> 5.  Push your **branch** to the repo:

    git push origin <featureBranchName>

> 6.  Finally, do a `pull request` in `GitHub`, from your **branch** to **Dev**

## ANGULAR CLI COMMANDS

---

> - Open development server:

    ng serve -o

> - Restart development server:

    ng serve

> - Run Kharma test runner:

    ng test

> - Run test coverage to add the coverage folder to the project.  
>   Then open its **index.html** in browser to see the coverage view

    ng test --no-watch –code-coverage

> - Build for development:

    ng build

> - Build for production:

    ng build --prod
