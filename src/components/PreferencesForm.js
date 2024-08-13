import React, { useState } from 'react';

const PreferencesForm = ({ preferences, onChange }) => {
  const [localPreferences, setLocalPreferences] = useState(preferences);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLocalPreferences({
      ...localPreferences,
      [name]: value.split(',').map(item => item.trim())
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onChange(localPreferences);
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="mb-2">
        <label className="block text-gray-700">Preferred Sources (comma-separated):</label>
        <input
          type="text"
          name="sources"
          value={localPreferences.sources.join(', ')}
          onChange={handleInputChange}
          className="mt-1 block w-full border rounded py-2 px-3"
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-700">Preferred Categories (comma-separated):</label>
        <input
          type="text"
          name="categories"
          value={localPreferences.categories.join(', ')}
          onChange={handleInputChange}
          className="mt-1 block w-full border rounded py-2 px-3"
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-700">Preferred Authors (comma-separated):</label>
        <input
          type="text"
          name="authors"
          value={localPreferences.authors.join(', ')}
          onChange={handleInputChange}
          className="mt-1 block w-full border rounded py-2 px-3"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save Preferences</button>
    </form>
  );
};

export default PreferencesForm;