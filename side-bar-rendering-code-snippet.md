import React, { useState } from 'react';
import './App.css'; // You can create this CSS file for styling

// Import your component files here
import Component1 from './components/Component1';
import Component2 from './components/Component2';
// Import the rest of your components similarly

const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<number | null>(null);

  // Function to handle component selection
  const selectComponent = (componentNumber: number) => {
    setActiveComponent(componentNumber);
  };

  // Render the selected component or a message if none is selected
  const renderSelectedComponent = () => {
    if (activeComponent === null) {
      return <p>Select a component to render.</p>;
    }

    switch (activeComponent) {
      case 1:
        return <Component1 />;
      case 2:
        return <Component2 />;
      // Add similar cases for the other components
      default:
        return <p>Component not found.</p>;
    }
  };

  return (
    <div className="App">
      <h1>Dynamic Component Rendering</h1>

      {/* Render the selected component or a message */}
      {renderSelectedComponent()}

      {/* Render links/cards for selecting components */}
      <div className="component-links">
        <button onClick={() => selectComponent(1)}>Component 1</button>
        <button onClick={() => selectComponent(2)}>Component 2</button>
        {/* Add buttons for the other components */}
      </div>
    </div>
  );
};

export default App;
