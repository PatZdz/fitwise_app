'use client'

export default function ActionButtons() {
  const handleClear = () => {
    const form = document.querySelector('form');
    if (form) {
      form.reset();
    }
  };

  return (
    <div className="flex justify-end gap-3 pt-6">
      <button
        type="button"
        onClick={handleClear}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-base font-medium"
      >
        Wyczyść
      </button>
      <button
        type="submit"
        className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-base font-medium"
      >
        Stwórz
      </button>
    </div>
  );
}