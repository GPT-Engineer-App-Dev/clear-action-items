import React, { useState } from 'react';
import { ChakraProvider, Box, Heading, Input, Button, VStack, HStack, Text } from '@chakra-ui/react';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <ChakraProvider>
      <Box maxW="md" mx="auto" mt={10} p={5} borderWidth={1} borderRadius="lg">
        <Heading mb={4}>Todo App</Heading>
        <HStack mb={4}>
          <Input 
            placeholder="Enter a task" 
            value={task} 
            onChange={(e) => setTask(e.target.value)} 
          />
          <Button onClick={addTask} colorScheme="teal">Add Task</Button>
        </HStack>
        <VStack spacing={4}>
          {tasks.map((task, index) => (
            <HStack key={index} w="100%" justifyContent="space-between">
              <Text>{task}</Text>
              <Button size="sm" colorScheme="red" onClick={() => deleteTask(index)}>Delete</Button>
            </HStack>
          ))}
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default App;