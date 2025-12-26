# cognitive-signature-protocol
Cognitive Signature Protocol

A protocol for extracting, representing, and visualising how a person thinks from LLM interaction logs.

What this is

The Cognitive Signature Protocol is a lightweight, open framework for turning human–LLM interaction logs into:

a structured cognitive signature (machine-readable)

a visual cognitive map (human-interpretable)

a plain-language summary of thinking style

optional comparative overlays across time or between people

It focuses on process and structure, not personality, psychology, or belief.

This is not profiling.
This is not psychometrics.
This is not personality typing.

It is a way to preserve and reason about how thinking unfolds.

Quick Start

You can use the Cognitive Signature Protocol in three minutes, with or without code.

Option A. Prompt-Only (No Setup)

Use this if you only have an LLM and a conversation log.

Collect a short LLM interaction log

5–20 turns is enough

Raw text is sufficient

Paste the log into your LLM along with this prompt:

You are a cognitive cartographer.

Input: the following human–LLM interaction log.

Task:
1. Infer how the human thinks, not what they believe.
2. Extract stable reasoning patterns, not surface tone.
3. Identify:
   - cognitive compression style
   - conceptual breadth
   - reasoning topology
   - adaptation behavior

Produce two outputs:

Output A. Visualisation Prompt
Describe an abstract cognitive landscape using:
- shape
- density
- motion
- stability anchors
Avoid personality labels. Use topological metaphors.

Output B. Cognitive Summary
Explain in plain language:
- how this person explores
- how they decide
- what remains stable
- where they adapt

Constraints:
- No psychological diagnosis
- No personality typing
- No value judgement
Focus on structure and process only.


You now have:

a visualisation prompt

a cognitive summary

No schema required.

Option B. Structured (JSON-Based)

Use this if you want something machine-readable.

Take the same interaction log

Populate schema/cognitive_signature.schema.json

Save as my_signature.json

You can now:

compare signatures

visualise patterns

version changes over time

Option C. Visualise Locally

Open visualizer/index.html in your browser

Load or paste a Cognitive Signature JSON

View the cognitive map rendered on canvas

No backend. No build step. Client-side only.

Minimal Input Requirements

Plain text interaction logs

No embeddings

No model-specific metadata

The protocol is model-agnostic by design.

Typical First Use Cases

Reflect on how you think while working with AI

Compare early vs later sessions on the same project

Explore how different collaborators approach the same task

Build adaptive interfaces that respond to thinking style

Why this exists

Most systems collapse interaction logs into embeddings and lose structure.

This protocol does the opposite.

It preserves:

reasoning topology

compression patterns

conceptual breadth

stability vs adaptation over time

The result is something you can see, compare, and build on.

Core Concepts
Cognitive Signature

A Cognitive Signature is a stable pattern describing how a person:

explores uncertainty

compresses information

navigates complexity

adapts through feedback

It is structural, not evaluative.

Cognitive Axes (high-level)

Cognitive Compression
How aggressively meaning is condensed.

Conceptual Breadth
How wide the explored idea space is.

Reasoning Topology
Linear, branching, recursive, or hybrid.

Adaptation Style
How feedback changes direction or constraints.

Stability Markers
Patterns that persist across sessions.

Repository Structure
/
├── schema/
│   └── cognitive_signature.schema.json
├── visualizer/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── examples/
│   ├── single_signature.json
│   └── comparative_signature.json
├── prompts/
│   └── prompt_only_protocol.md
├── README.md
└── LICENSE

Outputs

The protocol produces two primary outputs.

1. Visualisation Prompt

A structured prompt that describes a cognitive landscape using:

shape

density

motion

stability anchors

This can be used with:

image generators

diagram tools

custom visual engines

2. Cognitive Summary

A human-readable explanation covering:

how exploration happens

how decisions converge

what remains stable

where adaptation occurs

No labels. No diagnoses. No judgement.

Comparative Mode

The protocol supports comparison:

same person over time

different people on the same task

pre/post learning or constraint changes

Comparisons focus on:

what changed

what stayed stable

what emerged

Not on ranking or “better vs worse”.

What this is not

Not a psychological assessment

Not personality typing

Not predictive or diagnostic

Not a behavioural scoring system

Any use that crosses into surveillance, coercion, or hidden evaluation is explicitly out of scope.

Intended Use

This protocol is suitable for:

research and experimentation

creative collaboration tools

reflective AI interfaces

adaptive explanation systems

personal knowledge work

It is intentionally tool-agnostic and model-agnostic.

License

This project is licensed under the Apache License 2.0.

You may:

use it commercially

modify it

build on it

embed it in products

You must:

include attribution

retain the license notice

Patent rights are explicitly granted.

See the LICENSE file for full terms.

Authorship & Intent

This protocol was created to explore structure in thinking, not to categorise people.

If you build on it:

preserve that intent

avoid reductive interpretations

make structure visible, not invisible

Status

Early-stage, intentionally minimal, and open to evolution.

This is a protocol, not a finished product.

Contributing

Contributions are welcome if they:

improve clarity

preserve structural focus

avoid psychological or evaluative framing

Open an issue or pull request with a clear rationale.
