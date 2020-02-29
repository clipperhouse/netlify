---
title: "Imagining version control for APIs"
date: 2015-12-21
author: "Matt Sherman"

---

Versioning is, right now, merely a human label. We have helpful conventions like [semver](http://semver.org/), but one still relies on human judgment as to the definition of a “notable” change.

What if the machine could detect, and perhaps describe, API changes in a meaningful way?

What I imagine is this: a program that examines a program’s API for changes, and describes them. Version control, in other words, of the sort we expect from Git.

Instead of a whole program being described as a version, **each callable API** (endpoint, method, etc) gets its _own_ version. We, the consumer, know when Foo() has changed while Bar() has not; API versioning becomes granular.

### Black box

One way me might go about this is black box versioning, by which I mean the versioner can **interact** with an API, but knows nothing of its underlying implementation.

In this case, the versioner would be an extension of the test suite. This versioner could only provide the guarantees that the test suite does.

Most tests are necessarily finite and incomplete; they are as good as the test writer’s imagination. We don’t (can’t) write tests for every possible input, and so the programmers choose representative cases.

Such a system could prove the existence of changes, but could not prove the absence of changes. There is also the meta-issue that the tests themselves would need to be versioned.

Even with such limitations, it would be a substantial improvement over the status quo of human-imagined “versions”.

### White box

This gets interesting. What if the versioner didn’t simply call the API as an outsider, but could inspect the **source code** comprising the API?

In this case, we could bring static analysis to bear and provide more guarantees. Instead of calling the API looking for an exceptional case, we analyze the source code to detect semantic changes.

Is there a form of static analysis that transforms source code into a normalized representation, such that two semantically identical programs with different source can be proved identical?

I don’t know the answer, which is one reason I am writing this post. (Would love your feedback on [HN](https://news.ycombinator.com/item?id=10769073) or [Twitter](https://twitter.com/clipperhouse).)

One representation that comes to mind is [SSA](https://en.wikipedia.org/wiki/Static_single_assignment_form) — could it identify some classes of semantically identical programs? What about the various forms of IR in compiler front ends or back ends (LLVM, etc)?

Such a versioner would likely need to be language specific (though perhaps it could exploit common IR’s like LLVM).

### Conclusion

This really intrigues me and I haven’t come across logical show-stoppers yet. Such a system would only need to be an improvement over the status quo, but not perfect.

That said, I would love to see real, Git-like versioning of API semantics. This would be especially helpful in the world of dependency management — where versioning is a particularly intractable bear.
