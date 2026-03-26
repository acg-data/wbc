import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-cream flex items-center justify-center p-8 text-center">
          <div className="max-w-md">
            <h1 className="font-serif text-3xl font-bold text-indigo mb-4">Something went wrong.</h1>
            <p className="text-ink-500 mb-6">An unexpected error occurred. Please refresh the page or contact us at invest@worldbridgecapital.com.</p>
            <button 
              onClick={() => window.location.reload()}
              className="font-sans text-xs font-bold tracking-widest uppercase text-white bg-teal-dark px-6 py-3 hover:bg-teal-dim transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}