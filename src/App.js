import { ResizablePanes, Pane } from 'resizable-panes-react'

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <div className='h-40 bg-gray-200'>
        <ResizablePanes
          uniqueId="visibility-doc3"
          unit="ratio"
        >
          <Pane className='bg-red-500' id='P2-P0' minSize={1} size={2}></Pane>
          <Pane className='bg-green-500' id='P2-P1' minSize={1} size={4}> </Pane>
        </ResizablePanes>
      </div>

    </div>
  );
}

export default App;
