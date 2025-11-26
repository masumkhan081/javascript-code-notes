// 3. Real-World Examples - React Components

// Inheritance approach (less flexible)
class BaseComponent extends React.Component {
  componentDidMount() {
    console.log('Base mounted');
  }

  render() {
    return <div>Base Component</div>;
  }
}

class UserProfile extends BaseComponent {
  componentDidMount() {
    super.componentDidMount();
    this.loadUserData();
  }

  loadUserData() {
    // User-specific logic
  }

  render() {
    return <div>User Profile</div>;
  }
}

// Composition approach (more flexible)
function withLogging(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log('Component mounted with logging');
      if (this.wrappedRef && this.wrappedRef.componentDidMount) {
        this.wrappedRef.componentDidMount();
      }
    }

    render() {
      return <WrappedComponent ref={ref => this.wrappedRef = ref} {...this.props} />;
    }
  };
}

function withDataLoading(WrappedComponent) {
  return class extends React.Component {
    state = { data: null, loading: true };

    componentDidMount() {
      this.loadData();
    }

    async loadData() {
      // Data loading logic
      this.setState({ data: 'loaded', loading: false });
    }

    render() {
      return <WrappedComponent {...this.props} data={this.state.data} loading={this.state.loading} />;
    }
  };
}

// Compose multiple behaviors
const EnhancedUserProfile = withLogging(withDataLoading(UserProfileComponent));

/*
Edge Cases:
- HOC chaining order matters
- Props drilling vs context
- Performance implications of multiple HOCs

Interview Tip: React moved from inheritance (createClass) to composition (hooks, HOCs)
Real-world: Higher-Order Components, custom hooks, render props patterns
*/
