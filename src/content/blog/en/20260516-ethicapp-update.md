---
title: "Recent Advances in EthicApp Development"
description: "Over the past month, EthicApp has advanced in its technical modernization, production deployment readiness, security strengthening, teacher experience improvements, and a new architecture for integrating external AI-based services."
pubDate: 2026-05-16 19:00 UTC-4
locale: en
---

# Recent Advances in EthicApp Development
*May 16th, 2026*

Over the past month, the EthicApp development team has completed a significant set of improvements aimed at strengthening the platform, preparing more robust production deployments, and enabling new pedagogical capabilities based on external services and artificial intelligence.

These advances are part of EthicApp’s ongoing modernization process. The platform continues to preserve compatibility with its historical functionality, while incorporating a safer, more modular architecture prepared for new forms of support for ethics education in higher education.

## Preparing EthicApp for production deployment

One of the main priorities during this period has been preparing EthicApp to operate more reliably in production environments. A canonical environment contract was introduced to explicitly document the configuration required by each service, which values are secrets, which variables are resolved at runtime, and how configuration should be projected into environment-specific files.

A workflow for publishing images to GitHub Container Registry was also incorporated, with the goal of distributing versioned images for the different services that compose the platform. This allows a clearer separation between application development and deployment-specific repositories and configurations.

In addition, the public configuration of Vite-based frontends was moved to runtime-generated files. This makes published images more environment-neutral, avoiding the need to rebuild them when changing certain public parameters, such as service URLs or public reCAPTCHA keys.

## Greater infrastructure and session robustness

Session management was migrated from local or in-memory mechanisms to Redis. This enables more reliable handling of both authentication sessions and legacy application sessions, using differentiated cookies and configurable parameters for security, duration, and storage.

Work also progressed on separating Redis roles in production, distinguishing between session storage and cache storage for database-derived data. This separation supports clearer administration of memory policies, expiration rules, and data replacement strategies.

In parallel, relevant adjustments were made to the Nginx configuration so that the platform can operate correctly behind TLS proxies, preserve the original HTTPS scheme, avoid incorrect absolute redirects, and dynamically resolve internal services through Docker DNS. These changes aim to improve resilience after container restarts and reduce common issues related to secure cookies, redirects, and internal routes.

## Modernizing the legacy backend

Another important milestone was the upgrade of the legacy EthicApp backend to Express 5. This required adapting older routes, removing patterns no longer compatible with the new routing system, and reviewing internal integrations, especially those related to the management console and professor impersonation.

The previous file upload mechanism based on `express-busboy` was also replaced by route-specific middleware using `multer`. The new implementation handles PDF and avatar uploads through scoped routes, uses a temporary staging area, validates MIME types for each use case, and cleans temporary files when errors occur. This reduces risk exposure and makes the handling of user-uploaded files more explicit.

At the same time, automated tests were modernized using Node.js’s native test runner. New tests were added for file uploads, management-console impersonation, and legacy session synchronization. Docker builds for critical services now also include test stages, so images cannot be built successfully unless the corresponding automated checks pass.

## Strengthening platform security

During this cycle, CSRF protection was added to the modern authentication and management services, and the legacy logout flow was migrated to a protected `POST` flow. This reduces risks associated with sensitive actions being triggered through links or unauthorized requests.

Obsolete authentication surfaces were also removed from the legacy backend. Old views and controllers for login, registration, password recovery, local authentication, and Google OAuth were removed once they were no longer needed, consolidating these flows in the modern authentication backend. This cleanup reduces duplication, removes outdated dependencies, and helps maintain a more coherent security model.

Additional improvements included corrections to SMTP configuration for production, assuming implicit TLS for secure email delivery, as well as refinements to reCAPTCHA handling in the management console and password recovery flows.

## Improvements to the teacher experience

Several improvements were made to the teacher interface to make the creation, selection, and reuse of materials more fluid. Design selection, teacher catalog refresh behavior, and search fields were improved. Shared designs now also display their authors or creators, together with presentation adjustments that make navigation clearer.

Another important line of work was the relationship between cases and designs. The platform now supports links to associated cases in teacher activities, case cards in teacher views, and the import of shared designs together with their corresponding cases. This makes it easier for teachers to reuse complete materials while preserving the connection between the instructional structure and the ethical dilemmas that support it.

Visual identity refinements were also incorporated, including the Nunito font, favicons, and logos served as shared assets from Nginx. These changes contribute to a more consistent experience across the different modules of the platform.

## Toward an external services architecture

In addition to the changes already integrated into the main branch, work has continued on the `external-services-architecture` branch, aimed at enabling the integration of external services with EthicApp. This development line seeks to allow future capabilities—such as conversational agents, argumentation tutors, or automated feedback services—to connect through explicit contracts and configurations associated with pedagogical designs.

This architecture introduces an external services catalog, a configuration manifest, mock adapters, backend endpoints, and interface components for displaying results to students. It also extends the design schema so that specific phases of an activity can activate selected services.

As an initial proof of concept, simulated adapters were included for AI-based response review and chat agents, along with a Dockerized mock external service. These components make it possible to validate the architecture without depending yet on a specific artificial intelligence provider, maintaining a clear separation between EthicApp and the services that may eventually extend it.

## A step toward a more modular platform

Taken together, these advances strengthen EthicApp’s technical foundation across several dimensions: deployment, security, maintainability, teacher experience, and future integration with intelligent services. The recent work is not limited to visible new features; it also involves a deeper reorganization of the platform to make it more reliable, auditable, and extensible.

This process is especially relevant to the goals of IntelligentEthicApp, which seeks to incorporate generative artificial intelligence in a pedagogically grounded way, while keeping teachers in control of instructional design and educational decisions. The new external services architecture opens the way for experimentation with specialized agents and tutors, without compromising the stability of EthicApp’s core or coupling the platform to a single technology provider.