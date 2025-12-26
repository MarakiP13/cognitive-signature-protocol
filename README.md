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
