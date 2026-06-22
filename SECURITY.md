# Security and deployment rules

## Local development

- Use `bun run dev` only on a trusted development machine.
- Never expose Vite's development port to the internet.
- Keep `.env`, `.env.*`, and `.dev.vars` out of Git.
- Run `bun audit` after dependency updates.

## Production

- Build with `bun install --frozen-lockfile && bun run build`.
- Start the application with `bun run start`.
- The production server deliberately binds to `127.0.0.1:3000`.
- Put Caddy or Nginx in front of the application for HTTPS.
- Add HSTS only after the final HTTPS domain works correctly.
- Run the application as a dedicated, unprivileged Linux user.
- Do not host the local Sanity Studio server publicly; use Sanity-hosted Studio.
- Permit only required firewall ports and use SSH keys instead of passwords.

The application adds production CSP, anti-framing, MIME-sniffing, referrer,
permissions, opener, and resource-policy headers. It accepts only GET and HEAD
requests and rejects unusually long URLs.
