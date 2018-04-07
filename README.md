# CSSV in Angular #
CSSV is customer-specific software versions. The aim here is to show a proof-of-concept implementation
of CSSV in Angular with additional requirements of DRYness (as little repeated code among different customers
as possible) as isolation (code belonging to one customer is NOT sent to another customer - i.e. it is not enough
to send all code to every customer and just hide unwanted buttons or something like that).

## Summary ##
- changing the CSS of a component (make it into a feature module, route to it)

## TODO ##
- try adding a deep subcomponent
  - take everything else apart into components 
  - change 'settings' text to paint brush icon

- try sth more concrete
- try out sub-routes etc.
- todo what about angular rendering of components lazy
- rule editor has button. one customer has them on the left, another below and has one button more

- wont work because it's fixed to routes. TRUE
- wont be dry (only dry for whole modules). TRUE
- try to use subroutes usefully


## KNOWN ##
- it seems that [lazy loaded modules cannot share services](https://blog.angularindepth.com/avoiding-common-confusions-with-modules-in-angular-ada070e6891f)

### SHARING SERVICES ###
- submodules have access to super-modules services, this is the only way services can be shared, however,
if a module is dependent on supermodule's providers that kind of defeats the whole idea of modules (it's not a module then).
  TODO doean't work either - why?
- defining the same provider in sibling modules results in the creation of two instances of that service (not a singleton anymore).



## WTF = ANGULAR BUGS ##
- if routing module for a lazy loaded feature module is missing, there is no error, no warning in the console - nothing.
And the behaviour is then totally undefined (in my case it loaded the correct module but displayed a completely different
totally unrelated module instead!)
TODO is it even legal (in the official API)?

- template syntax is stupid
- RouterModule.forRoot(allRoutes) MUST be used in app.module.ts (the module that gets bootstrapped) and cannot be used
in a submodule instead. This seems not to be documented.

- compilation error 'cannot read property loadChildren of undefined' - comes and goes randomly... that is definately not good
  (it seems that it can be resolved by going to app/base/main/routes.ts and saving that file *without making any change to it!*)
  *I really don't like non-deterministic bugs.*
- too much documentation, with mistakes and missing stuff
- documentation of Injectable [is misleading](https://stackoverflow.com/questions/41193649/when-do-we-need-to-use-injectable-on-our-services-in-angular2)

## EVALUATION ##
- when making custom version modules, the modules must be redeclared - that is definately not DRY (but maybe not so bad)
- idea: customer modules reuse known components and can add their own
(whenever sth needs to be customized, factor out a module as close to it as possible and make a custom feature module
 for the customer). A medium-sized problem: the feature module has to have it's own routing module, otherwise doesn't work,
 ...even if routing is not needed. (All in all it's a LOT of boiler plate code, which doesn't have to be a big problem,
 but the code is very hard to understand by a non-trained Angular developer)
- angular modules make CSSV very problematic (too complex code)

## DESIGN ##
- routing triggered in code on button clicks

## SOURCES ##
- inspiration by Radek Jupa
  - idea user useValue to supply custom services

## MAKE YOUR LIFE EASIER ##
- copy ```"baseUrl": "./src",``` into tsconfig.json compilerOptions and now you can use absolute path in vscode
(weirdly, vscode needs to be restarted multiple times for the settings to start working)

- single file components are preferrable to [the file hell](https://blog.hackages.io/angular-single-file-component-4a9eed8c80d5)

- with the "template literal editor" vscode plugin put the cursor on the template literal, press ctrl+enter, type html (for HTML literal; or
css for CSS) a new window with syntax support pops up, edit the literal and close the editor window again with ctrl+enter.
(note: the plugin is quite good, but it is interesting that there isn't a more user-friendly one.)
- TODO Angular Component Extension instead (note: the starting quote ` must be on the same line as ```template: ```!)

- always open two terminals in vscode ("split terminal") - one for running the app and another for "ng g"

## CAN"T DO NOUTHING ABOUT ##
- development becomes extremely slow fast
  - either use very long component names with ng g, which is error prone (ng g component app/base/profile-export/profile-export)
  (also sometimes it just doens't work. thank angular-cli)
  - or ctrl+c/ctrl+v and then you must
    - change it's selector
    - change it's class name
    - add it to module declarations
- generated folders on windows [can not be deleted](https://github.com/yeoman/generator-angular/issues/1137) *strangely enough though, after one or two restarts of vscode, I always manage to delete them somehow. I really don't like non-deterministic bugs.*
- if a component extends a class which has injectable dependencies, Angular doesn't inject but throws an unrelated error instead
- vscode of then highlights files as erroneuos when in fact they are not (template files mostly)
