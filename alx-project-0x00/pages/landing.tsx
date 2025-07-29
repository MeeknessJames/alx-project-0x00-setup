import React from 'react';
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-8 space-y-8"> { }
      <h1 className="text-xl font-extralight mb-8">Landing Page</h1>

      { }
      <Card />
      <Card />
      <Card />

      { }
      <h2 className="text-2xl font-semibold mt-10">Button Examples</h2>
      <div className="flex flex-wrap gap-4 justify-center"> { }
        { }
        <Button title="Small Rounded-sm" className="px-2 py-1 text-sm rounded-sm" />
        <Button title="Small Rounded-md" className="px-2 py-1 text-sm rounded-md" />
        <Button title="Small Rounded-full" className="px-2 py-1 text-sm rounded-full" />

        { }
        <Button title="Medium Rounded-sm" className="rounded-sm" />
        <Button title="Medium Rounded-md" className="rounded-md" />
        <Button title="Medium Rounded-full" className="rounded-full" />

        { }
        <Button title="Large Rounded-sm" className="px-6 py-3 text-lg rounded-sm" />
        <Button title="Large Rounded-md" className="px-6 py-3 text-lg rounded-md" />
        <Button title="Large Rounded-full" className="px-6 py-3 text-lg rounded-full" />
      </div>

    </div>
  );
};

export default Landing;