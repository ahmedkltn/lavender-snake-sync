import { Badge, Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { PlusCircleIcon } from "@heroicons/react/24/outline";

export const EventCard = ({ eventData, isAdd }) => {
  return (
    <Link>
    <Card className="max-w-sm h-full" href='#'>
     {!isAdd ?
     <>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>Event test</p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>
          Here are the biggest enterprise technology acquisitions of 2021 so far, in
          reverse chronological order.
        </p>
      </p>
      <div className="flex items-center gap-1 justify-between font-semibold text-gray-700 dark:text-gray-300" >
        <p>demouser</p>
        <Badge>Public</Badge>
      </div>
      </>
       :<div className='flex items-center justify-center '><PlusCircleIcon className='h-16 w-16' color='gray' /></div>}
    </Card>
    </Link>
  );
};
