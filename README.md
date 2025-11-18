<img width="1920" height="893" alt="image" src="https://github.com/user-attachments/assets/be00f192-41b2-4e8f-b688-6de6730dec2d" />
Proposal: Centralized GitLab Repository Space for E&I Labs
1. Introduction

The Experiment & Innovation (E&I) Labs team currently maintains multiple development components locally across individual machines. The screenshot reference from VS Code illustrates a wide range of folders and project experiments, but these are not yet centralized or version‑controlled under a common space. This decentralized approach leads to challenges such as lack of ownership traceability, difficulty in reusing components, and inconsistent naming standards.

To streamline development, improve team collaboration, and ensure better governance of experimental components, this document proposes the creation of a centralized GitLab repository space dedicated to E&I Labs.

2. Problem Statement

Currently, E&I Labs faces the following operational challenges:

Local-Only Storage: Developers store experiments on their machines, making collaboration difficult.

No Common Repository: There is no dedicated GitLab space for lab experiments.

No Standard Naming Conventions: Experiment folders follow different naming styles, making it hard to identify purpose, owner, or related Jira tasks.

Lack of Ownership Tracking: Without version control, it is impossible to identify who changed what and when.

Heavy Code Upload Overhead: Some components exceed 6,000+ lines; uploading entire code each time is inefficient.

Limited Reusability: Components cannot easily be reused for future innovation without a shared repository.

3. Proposed Solution: GitLab Repository for E&I Labs
3.1 Centralized GitLab Repository Space

We propose creating a dedicated GitLab project group for E&I Labs with sub‑repositories for each experiment or component.

This will enable:

Centralized storage of all innovation components

Version control with detailed modification history

Common access and visibility for the entire team

Streamlined collaboration and merging of ideas

Clear demarcation of owners and contributors

3.2 Storing Only Build Text Files Instead of Full Code

Instead of uploading full source code or heavy assets, each experiment can include:

A build text file that describes:

Component functionality

Architecture or workflow

Code snippets or pseudo‑code

Required assets or dependencies

Steps to run or compile locally

This accelerates experimentation while reducing repository size.

4. Naming Conventions for Folder Structure

To maintain clarity and consistency across the GitLab repository, the following naming conventions are proposed.

4.1 Folder Naming Format
<JIRA-Ticket-ID>_<Short-Component-Name>

Examples:

EIL-102_dynamic-cards

EIL-215_filter-sort-enhancement

EIL-330_animation-hero

4.2 Guidelines

Use lowercase letters

Use hyphens to separate words

Prefix with relevant Jira ticket ID to track development context

Keep names short but meaningful

5. Proposed Repository Structure
E&I-Labs-GitLab/
│
├── EIL-102_dynamic-cards/
│   ├── build-info.txt
│   ├── README.md
│   └── assets (optional)
│
├── EIL-215_filter-sort-enhancement/
│   ├── build-info.txt
│   └── README.md
│
├── EIL-330_animation-hero/
│   ├── build-info.txt
│   └── workflow-diagram.png
│
└── templates/
    ├── build-file-template.txt
    └── naming-guidelines.md
6. Benefits of the Proposed GitLab-Based Workflow
6.1 Team-Level Benefits

Sync Across All Developers: Everyone works from the same source.

Transparency: Owners of modifications can be easily identified.

Reusable Components: Future experiments can easily reuse past work.

Improved Documentation: Build text files provide clarity on each component.

6.2 Process-Level Benefits

Better Organization of experimental components

Consistency with naming and folder structure

Reduced Storage Overhead by storing build text instead of large code bases

Faster Onboarding: New developers can browse the GitLab repo to understand ongoing experiments.

7. Reference: Current Local Folder Structure

The screenshot provided from VS Code shows the current structure with folders like:

animation-in-hero

dynamic-cards

immersive-hero

feature-spotlight

apply-foreword

filter&sort

loans-calc

rental-yield-calc

These will be reorganized into the proposed GitLab structure using naming conventions.

8. Conclusion

Setting up a central GitLab repository for E&I Labs is essential for structured collaboration, enhanced transparency, and efficient reuse of experimental components. With clear naming conventions and lightweight build text files, developers will enjoy smoother workflows and greater consistency across all innovation activities.

This proposal outlines the required changes and the resulting improvements, paving the way for a more scalable and organised E&I Labs development environment.
