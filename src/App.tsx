import { Box } from '@mui/material';
import LineChart from './components/LineChart';

function App() {
  return (
    <Box width="100vw" height="100vh" bgcolor="#F9FAFB" padding={4}>
      <Box width={500}>
        <LineChart />
      </Box>
    </Box>
  );
}

export default App;
