const RELOAD_FLAG = 'chunk-reload-at';

// After a new deploy, a page cached from the old one asks for code files that
// no longer exist. Reload once to fetch the current version.
export function reloadForStaleChunk() {
  try {
    const last = Number(sessionStorage.getItem(RELOAD_FLAG) || 0);
    if (Date.now() - last < 10_000) return false; // avoid a reload loop
    sessionStorage.setItem(RELOAD_FLAG, String(Date.now()));
  } catch {
    // storage unavailable: reload anyway, the browser cache was the problem
  }
  window.location.reload();
  return true;
}
