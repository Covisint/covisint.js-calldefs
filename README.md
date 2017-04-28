# covisint.js-calldefs
The call definitions for covisint.js.  These definitions get loaded into a covisint.js-based project, and are then used by covisint.js to make API calls.

> P R E - R E L E A S E

## Dependency
+ These call defs are designed to be used inside a [covisint.js](http://covisintjsdocs.run.covisintrnd.com/) project.

## Using
+ Typically, the desired call definitions are manually copied from this repository and assigned to configuration variables in your project.
+ For the latest call definitions, use 'master' branch.
+ For earlier releases, check this project's Releases page.
+ For additional information on how to use call definitions inside covisint.js, read the covisint.js [docs](http://covisintjsdocs.run.covisintrnd.com/createinfo).

1. Once a desired definition file is located, click the 'Raw' button and then copy the entire file contents to the clipboard.
2. Then go to your local project and manually paste the call definition into your project.
3. A typical usage scenario is:
```
 // Assign desired call defs to vars
 var deviceCallDefs = /* paste device call def HERE */ ;
 var routeCallDefs = /* paste route call def HERE */  ;

 // Create the covisint.js object...
 myCovisintJs = covisint.create({
    // ... setting the following properties.
    defs: [
        deviceCallDefs,
        routeCallDefs
    ],
    serviceUrl: 'https://api.us1.covisint.com'
 });
```
