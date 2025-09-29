export function renderPage(
    bodyContent: string,
    {
        includeTailwind = false,
        title = "Document",
        encoding = "UTF-8",
        language = "en",
    } = {},
): string {
    return `<!DOCTYPE html>
<html lang="${language}">
<head>
    <meta charset="${encoding}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
      ${
        includeTailwind
            ? `
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
            <style type="text/tailwindcss">
      @theme {
        --color-clifford: #da373d;
      }
        @layer base {
            .google-map * {
                border-style: none;
            }
            a {
                @apply text-blue-600 hover:underline dark:text-blue-800;
            }
            tbody tr {
                @apply hover:bg-black/10
            }
        }
    </style>
        `
            : ""
    }
</head>
<body>
    ${bodyContent}
</body>
</html>`;
}
