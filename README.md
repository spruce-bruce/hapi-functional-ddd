# Proof of Concept - Hapi :: Functional :: DDD

The intent of this repo is to show demonstrate some design and organization principles for a Hapi.js api that makes heavy use of function programming to promote a standard for clean coding and, importantly, loosely coupled system objects.

The end goal is to establish a set of standards and nice default patterns that can be used to build large complex apis that service complex domains.

## Run Stuff
```
$ yarn
$ docker-compose up -d
$ yarn knex migrate:latest
$ yarn test
```

## Domain Driven Design
Domain Driven Design (DDD) is the practice of strictly maintaining a domain model that is implemented literally in code. In order to be able to accomplish this goal the code must be expressable as a model that can be understood by non-programmers, and in a complex domain this necessitates simple expressive system designs that are loosely coupled. And, because simple designs that are loosely coupled are also easiest to maintain the DDD process adds great value to a project.

### Layered Architecture
The system is divided into layers. Lower layers do not know about higher layers.

## Functional Programming
The functional paradigm aggressively promotes pure functions and loose coupling. By using functional patterns and adopting values from this community we can build applications that are easy to maintain.

## Typescript
The value of having types is well discussed and argued in the world of computer science, but the expressiveness of types has an additional benefit in a DDD environment. Being able to declare that a function requires a PurchaseOrder as an argument or a RiskAssessment object has extreme communicative value in a model and in the code that implements that model.