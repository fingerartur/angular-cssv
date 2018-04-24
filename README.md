# CSSV in Angular #
CSSV is customer-specific software versions. The aim here is to show a proof-of-concept implementation
of CSSV in Angular with additional requirements of DRYness (as little repeated code among different customers
as possible) and isolation (code belonging to one customer is NOT sent to another customer - *i.e. it is not enough
to send all code to every customer and just hide unwanted buttons or something like that*).

![CSSV](cssv.gif "CSSV")

## Summary ##

- this solution uses lazy-loaded modules and router.resetConfig() to achieve CSSV. After a user logs in,
routes specific to him are loaded and used when each route is accessed (*routes represent/route to feature modules*).
- routing is triggered invisibly on button clicks, etc.

## Evaluation ##

This solution has the following drawbacks:
  - each custom module is loaded lazily (i.e. more that 2 requests are made)
  - it is fully dependent on routing and feature modules (any custom component must be made into a feature
  module and routed to, for this solution to work).
  - extreme amounts of boiler-plat files and code need to be added to customize a trivial feature (*9 files to add one tiny icon*)
  - during development I ran into 2 serious Angular bugs, 3 bad designs and 2 vscode/Angular bugs. **It's VERY uncomfortable work** *(Angular hard enough to use without the bloody bugs)*.

## evaluation 2 ##
- when making custom version modules, the modules must be redeclared - that is definately not DRY (but maybe not so bad)
- idea: customer modules reuse known components and can add their own
(whenever sth needs to be customized, factor out a module as close to it as possible and make a custom feature module
 for the customer). A medium-sized problem: the feature module has to have it's own routing module, otherwise doesn't work,
 ...even if routing is not needed. (All in all it's a LOT of boiler plate code, which doesn't have to be a big problem,
 but the code is very hard to understand by a non-trained Angular developer)
- angular modules make CSSV very problematic (too complex code)

### What was done ###

  1. changed the CSS of a large component for customer #1 (*make it into a feature module, route to it*)
    - had to add 1 route
    - had to add 4 new files (only one is relevant)
  2. changed a 3-levels deep subcomponent for customer #1 (*find suitable parent component, turn it into a feature module, duplicate some code for each parent component and finally include the new subcomponent.*)
    - had to add 1 route
    - had to create 9 new files (only one is relevant)
    
## Conclusion ##

- customization on the level of whole feature modules works quite well (is DRY and isolated). However, there is a problem with
sharing of services (*ugly code must be used*). Another problem is being fully dependent on routing (*anything customized must have a rout to it*).
- customization of deeply nested subcomponents results in **a lot of code duplication**. This could be prevented
to a reasonable degree by using a [feature toggles](https://martinfowler.com/articles/feature-toggles.html) approach
inside feature modules, but that would inevitably mean loosing isolation. This is a tradeoff situation and neither way is optimal.



---------------
## Guidelines ##

  To prevent too much code duplication, try to reuse templates/styles from the original components or turn
  parts of templates into new components)

## Sharing services among feature modules (bad) ##

Services in Angular are singletons. When two different lazy-loaded feature modules want to share a service there is a problem.
If the service is registered in each of the modules, then two instances will be created by DI. The only way to [share a service](https://blog.angularindepth.com/avoiding-common-confusions-with-modules-in-angular-ada070e6891f)
is to declare it in a parent module, which works nicely. *However, this kind of a solution is equivalent to writing a class that
depends on global variable. That's very bad. ...Also, the whole point of modules is that they are self-sufficient.*


## WTF Angular ##

- each feature module (lazily loaded) must have it's own routing module **even if it doesn't use routing 
at all!**
  - What's even better: if routing module for a lazy loaded feature module is missing, there is no error, no warning in the console - nothing.
  And the behaviour is then totally undefined (in my case it loaded the correct module but displayed a completely different
  totally unrelated module instead!)
- development becomes extremely slow fast
  - either use very long component names with ng g, which is error prone
    - *eg. ng g component app/base/profile-export/profile-export*
    - *also, sometimes it just doens't work. thanks angular-cli*
  - or ctrl+c/ctrl+v and then you must
    - change it's selector
    - change it's class name
    - add it to module declarations
- template syntax is stupid
- RouterModule.forRoot(allRoutes) MUST be used in *app.module.ts (the module that gets bootstrapped)* and cannot be used
in a submodule instead. This seems not to be documented.
- compilation error *'cannot read property loadChildren of undefined'* - pops up randomly...
  - that is definately not good
  - it disappears after opening app/base/main/routes.ts, like WTF?
  - *I really don't like non-deterministic bugs.*
- Angular has too much documentation, with mistakes in it and missing stuff
- documentation of Injectable [is misleading](https://stackoverflow.com/questions/41193649/when-do-we-need-to-use-injectable-on-our-services-in-angular2)


## WTF vscode ##

- generated folders on windows [can not be deleted](https://github.com/yeoman/generator-angular/issues/1137) *strangely enough though, after one or two restarts of vscode, I always manage to delete them somehow. I really don't like non-deterministic bugs.*
- if a component extends a class which has injectable dependencies, Angular doesn't inject but throws an unrelated error instead!
- vscode often highlights files red as erroneuos when in fact they are not! (template files mostly)


## SOURCES ##

- inspiration by Radek Jupa
  - idea use *useValue:* to supply custom services

## MAKE YOUR LIFE EASIER ##

- copy ```"baseUrl": "./src",``` into tsconfig.json compilerOptions and now you can use absolute path in vscode
(*weirdly, vscode needs to be restarted multiple times for the settings to start working*)
- single file components are preferrable to [the file hell](https://blog.hackages.io/angular-single-file-component-4a9eed8c80d5)
- with the **template literal editor** vscode plugin put the cursor on the template literal, press ctrl+enter, type html (for HTML literal; or
css for CSS) a new window with syntax support pops up, edit the literal and close the editor window again with ctrl+enter.
(note: the plugin is quite good, but it is interesting that there isn't a more user-friendly one.)
  - TODO Angular Component Extension instead (note: the starting quote ` must be on the same line as ```template: ```!)
- always open two terminals in vscode ("split terminal")
  - one for running the app
  - another one for "ng g"



----------

## TODO ##
- try out sub-routes etc.
- todo what about angular rendering of components lazy

