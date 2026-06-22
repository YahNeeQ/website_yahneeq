# Managing website content

The website reads published projects from Sanity project
`7n2t0tql`, dataset `production`.

## Open the editor

From the website directory, run:

```powershell
bun run studio:dev
```

Open the address shown in the terminal (`http://localhost:3333`) and
sign in with the Sanity account that owns the project.

Use **Projects**, press the **+** button, complete the form, then press
**Publish**. Drafts do not appear on the public website.

Projects support a cover image, rich text, inline images, a gallery, technology
tags, and an optional repository link.

## Host the editor

To publish Sanity Studio at a Sanity-hosted address:

```powershell
bun run studio:deploy
```

The public TanStack website can remain hosted on the Raspberry Pi. The content
and uploaded images are stored by Sanity, so publishing content does not require
rebuilding the website.

When the Raspberry Pi website has its final address, add that full origin under
**sanity.io/manage → API → CORS origins**. For example, a local-only deployment
could use `http://192.168.178.209`. Do not enable credentials for the public
website origin.
