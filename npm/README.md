# npm
- https://www.npmjs.com/

# Initialize project
- npm init      # Initialize a npm (package.json) project
- Options:
    + Package Name: <Name of the project>
    + Version: <Version of the project>
    + Description: <Brief description of the project (Optional)>
    + Entry point: <Entry point (Default 'index.js')>
    + Test command: <Command that will be executed on 'npm test' command execution (Optional)>
    + Git repository: <GitHub reference (Optional)>
    + Keywords: <Comma separated keywords used for search engine (Optional)>
    + Author: <Name of author (Optional)>
    + License: <License details (Optional) References: https://docs.npmjs.com/policies/npm-license, https://www.gnu.org/licenses/gpl-3.0.en.html>


# SemVer (Semantic Versioning Speficication)
Reference: https://semver.org/

- Version format: 3.2.1 => (Major).(Minor).(Patch)

Basic rules:
    - Patch: For bugfixes
    - Minor: New features and code is compatible with previews versions
    - Major: New features and code is NOT compatible with previews versions

# Searching npm
Searching for versions:
    - 3.2.1: Exact version
    - >3.2.1: Greater than
    - ^3.2.1: Compatible changes
    - ~3.2.1: Minor-level changes

Pre-Releases:
    - 3.2.1-alpha
    - 3.2.1-alpha.1
    ...
    - 3.2.1-alpha.(X)
    - 3.2.1-beta.1
    ...
    - 3.2.1-beta.(X)
    - 3.2.1-rc.1
    ...
    - 3.2.1-rc.(X)
    ...
    - 3.2.1


# Installing/Uninstalling packages
- Install dependency (Installation of dependencies is transitive):
    + npm install <package_name>
    + npm i <package_name>
    + npm i <package_name>@<version>
    + npm i <package_name>@latest

    + npm uninstall


- Install DEV dependency (Installation of dependencies is NON-transitive):
    + npm i <package_name>  --save-dev
    + npm i <package_name>  -D
    

- Unistall dependency:
    + npm uninstall <package_name>


Example of a lib without dependencies: 
    + npm i semver
    + execute: node src/semver.js


Example of a lib WITH dependencies: 
    + npm uninstall semver
    + npm i browserlist



# Check information about a package
- Check package information:
    + npm view <package_name>

Example: 
    + npm view semver


# Check version information about a package
- Check version package information:
    + npm view <package_name> versions

Example: 
    + npm view babel-cli versions



# package.json VS package-lock.json
- "lock" version is used to maintain a single dependency environment (no changes in dependencies)

Example:
    - npm uninstall browserlist
    - npm i semver@7.0.0
    - Check and Remove "node_modules"
    - Check and Remove "package-lock.json"
    - npm i
    - Check version in "node_modules"
    - Check version in "package-lock.json"
    - npm uninstall semver