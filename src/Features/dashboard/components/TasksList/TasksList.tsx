import { FC, JSX } from 'react'
import SingleTask from '../SingleTask/SingleTask'
import { TbMessage2 } from 'react-icons/tb'
import { IoCodeSlash } from 'react-icons/io5'
import { BsPencilFill } from 'react-icons/bs'

const tasksList = [
  {
    img: <TbMessage2 size={45} className='bg-white rounded-2xl p-1' />,
    title: "HCI Discussion",
    date: "23rd Apr 2022, Tuesday",
  },
  {
    img: <IoCodeSlash size={45} className='bg-white rounded-2xl p-1' />,
    title: "Assembly Programming",
    date: "24th Apr 2022, Wednesday",
  },
  {
    img: <BsPencilFill size={45} className='bg-white rounded-2xl p-1' />,
    title: "Automata Theory",
    date: "25th Apr 2022, Thursday",
  },
]

const TasksList: FC = (): JSX.Element => {
  return (
    <>
    <ul>
      {
        tasksList.map((task, i) => (
          <li key={i} className='mx-2'><SingleTask task={task} /></li>
        ))
      }
    </ul>
    </>
  )
}

export default TasksList