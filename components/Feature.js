import CheckIcon from '@heroicons/react/outline/CheckIcon';
import Subtext from './Subtext';

export default function Feature({ name, children }) {
  return (
    <div className="col-span-4 md:col-span-2 lg:col-span-1 flex">
      <div className="mr-3">
        <CheckIcon className="w-6 h-6 text-green-500" />
      </div>
      <div>
        <h4 className="font-semibold mb-2 text-lg">{name}</h4>
        <Subtext>{children}</Subtext>
      </div>
    </div>
  );
}
