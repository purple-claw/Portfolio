export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Design System Test */}
      <section className="section">
        <div className="container">
          <h1 className="text-accent mb-4">Design System Test</h1>
          <h2 className="mb-4">Section Heading with Accent Line</h2>
          <h3 className="mb-4">Subsection Heading</h3>
          
          <p className="mb-4">
            This is body text demonstrating the Inter font family with proper line height.
            <a href="#" className="ml-2">This is a link with accent color</a>.
          </p>
          
          <p className="text-secondary mb-4">
            This is secondary text using the #8892b0 color for less important information.
          </p>
          
          <div className="bg-secondary p-6 rounded-lg mb-4">
            <h3 className="mb-2">Card Background</h3>
            <p>This demonstrates the secondary background color (#161616) used for cards.</p>
          </div>
          
          <ul className="custom-list mb-6">
            <li>Custom list item with cyan bullet</li>
            <li>Another list item</li>
            <li>Third list item</li>
          </ul>
          
          <div className="mb-6">
            <a href="#" className="btn mr-4">
              Primary Button
            </a>
            <code className="text-mono bg-secondary px-3 py-1 rounded">
              Fira Code monospace font
            </code>
          </div>
          
          <div className="text-small text-secondary">
            Small text for captions and footer content
          </div>
        </div>
      </section>
      
      {/* Color Palette Preview */}
      <section className="section bg-secondary">
        <div className="container">
          <h2 className="mb-6">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="w-full h-20 bg-[#0a0a0a] border border-gray-600 rounded mb-2"></div>
              <span className="text-small">#0a0a0a<br/>Primary BG</span>
            </div>
            <div className="text-center">
              <div className="w-full h-20 bg-[#161616] border border-gray-600 rounded mb-2"></div>
              <span className="text-small">#161616<br/>Secondary BG</span>
            </div>
            <div className="text-center">
              <div className="w-full h-20 bg-[#ededed] rounded mb-2"></div>
              <span className="text-small">#ededed<br/>Primary Text</span>
            </div>
            <div className="text-center">
              <div className="w-full h-20 bg-[#64ffda] rounded mb-2"></div>
              <span className="text-small">#64ffda<br/>Accent Primary</span>
            </div>
            <div className="text-center">
              <div className="w-full h-20 bg-[#8892b0] rounded mb-2"></div>
              <span className="text-small">#8892b0<br/>Accent Secondary</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
