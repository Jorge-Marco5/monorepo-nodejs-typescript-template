import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-md">
      <h1 class="text-3xl font-bold text-blue-600 mb-4">
        Hello!
      </h1>
      <p class="text-gray-700">
        Backend and Frontend are running in a monorepo.
      </p>
    </div>
  </div>
`;
