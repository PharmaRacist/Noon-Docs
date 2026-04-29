# Privacy Policy for Project Noon

**Effective Date:** April 29, 2026

This Privacy Policy describes how **Project Noon** ("the Software") handles information. As a hobbyist-driven, local-first desktop shell suite, your privacy and data sovereignty are fundamental to the project's design.

## 1. Local-First Philosophy
Project Noon is designed to run entirely on your local machine. We do not operate any central servers, and we do not collect, store, or "harvest" your personal information.

## 2. Information Collection and Use
Project Noon facilitates connections to third-party services (such as Google) via OAuth to enable specific shell modules (e.g., media playback, calendar integration).
* **OAuth Tokens:** When you authenticate with a third-party service, the resulting access and refresh tokens are handled directly between your machine and the service provider.
* **Application Data:** Any data fetched from third-party APIs (such as music metadata, system stats, or user profile info) is used solely to populate the UI widgets within your shell.

## 3. Storage and Data Security
**All retrieved data and authentication tokens are stored exclusively on your local machine.**
* **Storage Locations:** Data typically resides in standard Linux directories, such as:
    * `~/.config/noon/` (Configuration and OAuth tokens)
    * `~/.cache/noon/` (Temporary metadata and assets)
* **Transmission:** No data fetched via these services is ever transmitted to the developer or any third-party not explicitly authorized by the service provider's own API.

## 4. Third-Party Services
By using plugins that connect to external APIs, you are subject to the privacy policies of those respective services (e.g., Google’s Privacy Policy). Project Noon acts only as a local client for these services.

## 5. Security Responsibility
Because Project Noon stores data locally, the security of your information depends on your local system configuration. Users are responsible for securing their own home directory and managing permissions for the scripts they execute.

## 6. Changes to This Policy
As Project Noon is a hobby project, this policy may be updated to reflect changes in how modules interact with APIs. Continued use of the Software constitutes acceptance of any updated terms.

## 7. Contact
As this is an open-source hobby project, any questions regarding privacy can be addressed through the project's official repository communication channels.
