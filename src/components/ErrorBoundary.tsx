import { Component, type ReactNode } from 'react';
import { reloadForStaleChunk } from '../utils/staleChunk';

function isChunkError(error: unknown) {
  const message = error instanceof Error ? error.message : String(error);
  return /dynamically imported module|Importing a module script failed|Loading chunk|error loading dynamically/i.test(message);
}

interface State {
  failed: boolean;
}

export default class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    if (isChunkError(error)) reloadForStaleChunk();
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <div className="py-24 text-center px-4">
        <p className="text-slate-600 dark:text-gray-300 mb-4">This part of the page didn't load.</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 rounded-xl bg-slate-900 dark:bg-white/90 text-white dark:text-[#080c12] font-semibold"
        >
          Reload
        </button>
      </div>
    );
  }
}
