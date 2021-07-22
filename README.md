# Automated test with Playwright

### Playwright Documentation
https://playwright.dev/


### Setup
- Clone this project
- Install using follow command  ```npm install```


### How to run
| Command | Description |
| ----------- | ------------- |
| `npm run test:jest` |  Run tests using jest |
| `npm run test:jest:coverage` |  Run tests using jest --coverage |
| `npm run test:playwright` |  Run tests using playwright |
| `npm run codegen` | Open playwright code generator |
| `npm run open:chrome` | Open chrome with playwright inspector |
| `npm run open:firefox` | Open firefox with playwright inspector |
| `npm run open:wk` | Open webkit (safari emulator) with playwright inspector |

See more: https://playwright.dev/docs/cli/#emulate-devices

### How to debug
#### VS Code

##### Javascript debug terminal
- Click on menu View > Command Pallet...
- Search by "Debug: JavaScript Debug Terminal"
- Put breakpoint in your code or use the reserved word "debugger"
- Run code

##### Launch config
- Click on "Run and Debug" side menu
- Select `Debug all jest tests via NPM` or `Debug all playwright tests via NPM` option
- Put breakpoint in your code or use the reserved word "debugger"
- Click on play button

See more: 
- https://playwright.dev/docs/debug#visual-studio-code-debugger-nodejs
- https://playwright.dev/docs/debug