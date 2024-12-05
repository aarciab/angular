# angular
Angular training

# Installing CLI
- npm install -g @angular/cli   #NPM install command
- ng version    #Check version installed

# Creating shell
- ng new my-first-app    #Create workspace

# Project structure
Reference: https://angular.dev/reference/configs/file-structure

---my-first-app
    |
    - .vscode
    - node_modules
    - public
    - src
        |
        - *
    - .editorconfig         

        # Configuration for code editors (Reference: https://editorconfig.org/)

    - .gitignore
    - angular.json          
        
        # Help to customize various aspects of your project’s (build, development, and deployment) processes (Reference: https://angular.dev/reference/configs/workspace-config/)

    - package-lock.json

        # Provides version information for all packages installed into node_modules by the npm client (Reference: https://docs.npmjs.com/cli/v10/configuring-npm/package-lock-json)

    - package.json

        # Configures npm package dependencies that are available to all projects in the workspace (Reference: https://docs.npmjs.com/cli/v10/configuring-npm/package-json)

    - README.md
    - tsconfig.app.json
    - tsconfig.json
    - tsconfig.spec.json