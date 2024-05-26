---
title: "Apple as MVNO for LLMs"
date: 2024-05-26
---

It's expected that Apple will be improving Siri in the upcoming iOS 18, exploiting the progress that Large Language Models (LLMs) have made over the past year or so. How might they do it?

I trust and hope that Apple will continue their tradition of starting with the user experience, and working back to the technological ingredients to achive that. So I trust and hope that Siri won't merely be a wrapper for ChatGPT et al.

What if Apple were to see Siri as analogous to an [MVNO](https://en.wikipedia.org/wiki/Mobile_virtual_network_operator) (Mobile Virtual Network Operator) for LLMs?

Instead of committing to a single LLM provider (OpenAI, Google, Anthropic, Meta), Apple could instead treat Siri as a front-end to many such providers.

## Easy wins

Currently, when Siri doesn't have its own good answer for a user query, it punts to web search. So an easy win would be to punt to an LLM in those situations, or perhaps better, RAG. Eminently doable and a likely improvement over the status quo.

Siri might choose to round-robin between LLMs, and track user success by provider. They might give users the option of choosing the provider, as Safari and Chrome offer for web search.

## Epistemic improvements

I suspect Apple does not yet see any one of the LLM providers as mature enough to provide the polished Apple experience. Hallucinations, overconfidence, etc.

This is where the MVNO analogy comes in. For a user query, Apple could query several LLMs at once. Then, compare each response for similarity. (This comparision would also be done by a language model!)

Where these independent responses largely agree, Siri could offer epistemic confidence in its results. Where the responses are too different, Siri could choose to communicate that to the user in the form of "hmm, I am getting different stories here".

Over time, Apple would learn about the performance of each LLM, and choose dynamically. In the MVNO analogy, choose the provider with the most bars.