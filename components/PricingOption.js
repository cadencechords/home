import Button from './Button';
import CheckIcon from '@heroicons/react/outline/CheckIcon';
import Link from 'next/link';
import Subtext from './Subtext';

export default function PricingOption({ plan, buttonVariant }) {
  return (
    <div className="flex flex-col col-span-2 p-6 transition-colors border-2 border-gray-300 rounded-lg hover:border-blue-600 md:col-span-1">
      <div className="mb-6 text-2xl font-semibold">{plan.name}</div>
      <div className="mb-6">
        <span className="text-4xl font-bold">{plan.price}</span>
        <span className="text-2xl font-semibold">{plan.recurrence}</span>
      </div>
      <Subtext className="mb-6 text-lg">{plan.description}</Subtext>
      <div className="flex-grow mb-6 text-gray-600">
        {plan.features.map(feature => (
          <div className="flex mb-4 font-medium last:mb-0" key={feature}>
            <CheckIcon className="w-6 h-6 mr-2 text-green-500" />
            {feature}
          </div>
        ))}
      </div>
      <Link href={`${process.env.NEXT_PUBLIC_WEBAPP_URL}/signup`}>
        <a className="signup">
          <Button variant={buttonVariant} full>
            Get started
          </Button>
        </a>
      </Link>
    </div>
  );
}
