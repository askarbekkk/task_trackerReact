import React from 'react';
import AddTask from "./AddTask";
import Tasks from "./Tasks";

const HomePage = ({showAddTask, addTask, tasks,deleteTask, toggleReminder}) => {
    return (
        <div>
            <>
                {console.log(tasks)}
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                    <Tasks
                        tasks={tasks}
                        onDelete={deleteTask}
                        onToggle={toggleReminder}
                    />
                ) : (
                    'No Tasks To Show'
                )}
            </>
        </div>
    );
};

export default HomePage;