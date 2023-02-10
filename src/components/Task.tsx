import { DeleteIcon } from "@chakra-ui/icons";
import { Box,IconButton,Textarea } from "@chakra-ui/react";
import { TaskModel } from "../utils/models";

type TaskProps ={
    index: number;
    task: TaskModel;
    onUpdate: (id:TaskModel['id'],updateTask: TaskModel)=> void;
    onDelete: (id:TaskModel['id'])=> void;
};

function Task({ 
        index,
        task,
        onUpdate:handleUpdate,
        onDelete:handleDelete,
    }: TaskProps){
        const handleTitleChange = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
            const newTitle = e.target.value;
            handleUpdate(task.id, { ...task, title: newTitle });
        };

        const handleDeleteClick = ()=>{
            handleDelete(task.id);
        };
    
    return (
        <Box
            as='div'
            role='group'
            position='relative'
            rounded='lg'
            w={200} //width
            pl={3} // padding-left
            pr={7} // padding-right
            pt={3} // padding-top
            pb={1} // padding-bottom
            boxShadow='xl'
            cursor='grab'
            bgColor={task.color}
        >
            <IconButton
                position='absolute'
                top={0}
                right={0}
                zIndex={100}
                aria-label='delete-task'
                size='md'
                colorScheme='solid'
                color='gray.700'
                icon={<DeleteIcon/>}
                opacity={0}
                _groupHover={{opacity:1,
                }}
                onClick={handleDeleteClick}
            />
            <Textarea
                value={task.title}
                fontWeight='semibold'
                cursor='inherit'
                border='none'
                p={0}
                resize='none'
                minH={70} // heinght minima
                maxH={200} // heinght maxima
                color='gray.700'
                onChange={handleTitleChange}
            />
        </Box>
    );
}
export default Task;