import Subtext from './Subtext';

export default function Feature({ name, children, selected, onClick, icon }) {
  return (
    <div
      className={`md:cursor-pointer col-span-4 md:col-span-2 sm:col-span-1 lg:col-span-1 flex md:hover:bg-gray-100 md:focus:bg-gray-100 p-3 rounded-md transition-colors ${
        selected ? 'md:bg-gray-100' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex">
        <div className="md:hidden rounded-full w-12 h-12 bg-blue-50 flex-shrink-0 flex items-center justify-center text-blue-600 mr-6">
          {icon}
        </div>
        <div>
          <h4 className="font-medium mb-2 text-lg">{name}</h4>
          <Subtext className="text-base">{children}</Subtext>
        </div>
      </div>
    </div>
  );
}
