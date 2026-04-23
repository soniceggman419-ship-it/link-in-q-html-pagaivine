// Map your "pretty names" to URLs
const linkMap = {
  google: "https://www.google.com",
  openai: "https://www.openai.com",
  youtube: "https://www.youtube.com"
};

function parseAtLinks(paragraphId) {
  const p = document.getElementById(paragraphId);

  p.innerHTML = p.innerHTML.replace(/@(\w+)@/g, (match, key) => {
    const url = linkMap[key.toLowerCase()];

    if (!url) return match; // leave unchanged if not found

    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${key}</a>`;
  });
}

parseAtLinks("text");