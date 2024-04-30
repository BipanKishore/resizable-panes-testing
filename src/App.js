import { ResizablePanes, Pane } from 'resizable-panes-react/lib/cjs/index.cjs'
// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';



function App() {
  return (
    <div className='' >
{/* <div>
<Sidebar>
  <Menu>
    <SubMenu label="Charts">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
    </SubMenu>
    <MenuItem> Documentation </MenuItem>
    <MenuItem> Calendar </MenuItem>
  </Menu>
</Sidebar>
</div> */}

{/* <Testtt /> */}

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
