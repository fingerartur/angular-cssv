# Proof of concept customized versions of an Angular application, loaded in two steps
The goal is to implement two different versions of one application intended for two different
user groups. After login the user-group-specific part of the application is loaded and integrated to the already running application.

![CSSV](cssv.gif "CSSV")

## Technology
The solution uses *lazy-loaded feature modules* and ```router.resetConfig()```.

## Summary
After a user logs in, routes specific for his user group are loaded and the router is configured. Then these routes are used when when URL changes. Routing (changes to URL) are triggered by JS e.g. when user clicks a button, etc.

## Drawbacks
This solution has the following drawbacks:
  - each custom module is loaded lazily (i.e. more that 2 requests are made)
  - it is fully dependent on routing and feature modules (any custom component must be made into a feature
  module and routed to, for this solution to work).
  - extreme amounts of boiler-plat files and code need to be added to customize a trivial feature (*9 files to add one tiny icon*)
  - it is impossible to share services across lazy-loaded modules in an acceptable way
  - a lot of useless boiler-plate code is needed

### About sharing services among feature modules (bad)
Services in Angular are singletons. When two different lazy-loaded feature modules want to share a service there is a problem.
If the service is registered in each of the modules, then two instances will be created by DI. The only way to [share a service](https://blog.angularindepth.com/avoiding-common-confusions-with-modules-in-angular-ada070e6891f)
is to declare it in a parent module, which works nicely. *However, this kind of a solution is equivalent to writing a class that
depends on global variable. That's very bad. ...Also, the whole point of modules is that they are self-sufficient.*

## Description of the customized versions
There are two users called 1 and 2.

1. changed the CSS of a large component for customer #1 (*make it into a feature module, route to it*)
  - had to add 1 route
  - had to add 4 new files (only one is relevant)
2. changed a 3-levels deep subcomponent for customer #1 (*find suitable parent component, turn it into a feature module, duplicate some code for each parent component and finally include the new subcomponent.*)
  - had to add 1 route
  - had to create 9 new files (only one is relevant)
